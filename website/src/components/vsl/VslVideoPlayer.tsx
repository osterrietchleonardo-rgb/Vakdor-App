"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Lock, CheckCircle2 } from "lucide-react";

interface VslVideoPlayerProps {
  videoUrl: string;
  onCompletion?: () => void;
  title?: string;
}

const STORAGE_KEY = "vakdor_vsl_progress_v1";

export const VslVideoPlayer: React.FC<VslVideoPlayerProps> = ({
  videoUrl,
  onCompletion,
  title = "Demostración Ejecutiva PRISMA",
}) => {  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [maxTimeWatched, setMaxTimeWatched] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [isSeekingWarning, setIsSeekingWarning] = useState(false);

  // Cargar progreso previo de localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.maxTimeWatched) setMaxTimeWatched(parsed.maxTimeWatched);
        if (parsed.isCompleted) {
          setIsCompleted(true);
          onCompletion?.();
        }
      }
    } catch (e) {
      console.error("Error al cargar progreso VSL:", e);
    }
  }, [onCompletion]);

  // Actualizar metadatos del video
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  // Prevenir adelantado no visto (anti-forward seek si es 1ª vez), permitiendo libre seek si ya completó el 100%
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    
    // Solo actualizar el estado de tiempo en React cuando cambia el segundo (evita 60 FPS de re-renders inútiles en el DOM)
    if (Math.floor(current) !== Math.floor(currentTime)) {
      setCurrentTime(current);
    }

    // Si NO ha completado el 100% y pretende adelantar más allá de lo ya visto (+ 2.5 seg de margen por buffering)
    if (!isCompleted && current > maxTimeWatched + 2.5) {
      videoRef.current.currentTime = maxTimeWatched;
      setCurrentTime(maxTimeWatched);
      setIsSeekingWarning(true);
      setTimeout(() => setIsSeekingWarning(false), 2500);
      return;
    }

    // Actualizar el máximo tiempo alcanzado
    if (current > maxTimeWatched) {
      setMaxTimeWatched(current);
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ maxTimeWatched: current, isCompleted })
        );
      } catch (e) {}
    }

    // Detectar 100% de reproducción (o a 3.5 seg del final)
    if (duration > 0 && current >= duration - 3.5 && !isCompleted) {
      setIsCompleted(true);
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ maxTimeWatched: duration, isCompleted: true })
        );
      } catch (e) {}
      onCompletion?.();
    }
  };

  // Handler para hacer clic en la línea de tiempo (Seek manual)
  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !videoRef.current || duration <= 0) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const targetTime = percentage * duration;

    // Si ya completó el 100%, puede saltar a cualquier parte del video libremente
    if (isCompleted) {
      videoRef.current.currentTime = targetTime;
      setCurrentTime(targetTime);
      return;
    }

    // Si es la primera vez, puede retroceder a cualquier punto ya visto o adelantar hasta el máximo visto
    if (targetTime <= maxTimeWatched + 2.5) {
      videoRef.current.currentTime = targetTime;
      setCurrentTime(targetTime);
    } else {
      // Intento de adelantar a zona no vista por primera vez
      videoRef.current.currentTime = maxTimeWatched;
      setCurrentTime(maxTimeWatched);
      setIsSeekingWarning(true);
      setTimeout(() => setIsSeekingWarning(false), 2500);
    }
  };

  // Controles de reproducción
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuted = !isMuted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  // Pantalla Completa Fluida con Aceleración GPU
  const toggleFullScreen = () => {
    const target = containerRef.current || videoRef.current;
    if (!target) return;
    
    if (!document.fullscreenElement) {
      if (target.requestFullscreen) {
        target.requestFullscreen().catch(() => {});
      } else if ((target as any).webkitRequestFullscreen) {
        (target as any).webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  // Formatear segundos a MM:SS
  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds <= 0) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const watchPercentage = duration > 0 ? Math.min(100, Math.round((maxTimeWatched / duration) * 100)) : 0;

  return (
    <div className="w-full max-w-5xl mx-auto space-y-4">
      {/* Contenedor del Reproductor con Sovereign Styling */}
      <div
        ref={containerRef}
        className="relative group w-full aspect-video rounded-2xl bg-[#020617] border border-[#B87333]/30 shadow-[0_0_50px_rgba(184,115,51,0.15)] overflow-hidden flex items-center justify-center selection:bg-transparent"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => isPlaying && setShowControls(false)}
      >
        <video
          ref={videoRef}
          src={videoUrl}
          playsInline
          preload="metadata"
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => {
            setIsPlaying(false);
            setIsCompleted(true);
            onCompletion?.();
          }}
          onClick={togglePlay}
          className="w-full h-full object-cover cursor-pointer"
        />

        {/* Overlay de advertencia si intenta adelantar en 1ª vez */}
        {isSeekingWarning && (
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-slate-950/90 border border-[#B87333]/60 text-[#B87333] text-xs md:text-sm font-semibold flex items-center gap-2 backdrop-blur-md shadow-2xl animate-fade-in">
            <Lock className="w-4 h-4 text-[#B87333] animate-bounce" />
            <span>Podés retroceder o ver partes ya vistas. El adelantado a partes no vistas se habilita tras completarlo 100%.</span>
          </div>
        )}

        {/* Play Button Overlay cuando está pausado */}
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute z-40 p-6 md:p-8 rounded-full bg-gradient-to-br from-[#B87333] to-[#5C3D2E] text-white shadow-[0_0_40px_rgba(184,115,51,0.5)] hover:scale-105 transition-all duration-300 group-hover:shadow-[0_0_60px_rgba(184,115,51,0.7)]"
            aria-label="Reproducir Video"
          >
            <Play className="w-8 h-8 md:w-12 md:h-12 fill-white translate-x-0.5" />
          </button>
        )}

        {/* Controles Inferiores */}
        <div
          className={`absolute bottom-0 inset-x-0 z-40 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent p-4 md:p-6 transition-opacity duration-300 ${
            showControls || !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Barra de Progreso Interactivamente Cliqueable (Anti-Seek 1ª vez / Libre al 100%) */}
          <div className="space-y-2 mb-3">
            <div
              ref={progressBarRef}
              onClick={handleTimelineClick}
              className="relative w-full h-3 rounded-full bg-slate-800/80 overflow-hidden border border-slate-700/50 cursor-pointer group/bar"
              title={isCompleted ? "Hacé clic para saltar a cualquier parte" : "Hacé clic para retroceder o ir a lo visto"}
            >
              {/* Barra de lo máximo visto (Cobrizo) */}
              <div
                className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#B87333] to-[#D4A574] transition-all duration-200"
                style={{ width: `${isCompleted ? 100 : watchPercentage}%` }}
              />
              {/* Indicador de tiempo actual */}
              <div
                className="absolute top-0 bottom-0 left-0 bg-white opacity-90 transition-all duration-150"
                style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
              />
            </div>

            <div className="flex justify-between items-center text-xs font-mono text-slate-400">
              <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
              <span className="flex items-center gap-1.5 text-[#B87333] font-semibold">
                {isCompleted ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Completado 100% · Navegación Libre</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-3 h-3" />
                    <span>Progreso visto: {watchPercentage}%</span>
                  </>
                )}
              </span>
            </div>
          </div>

          {/* Botones de Control */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="p-2 rounded-lg bg-slate-800/60 hover:bg-[#B87333]/20 text-white hover:text-[#B87333] transition-colors"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
              </button>

              <div className="flex items-center gap-2 group/vol">
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-lg bg-slate-800/60 hover:bg-[#B87333]/20 text-slate-300 hover:text-white transition-colors"
                >
                  {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-16 md:w-24 accent-[#B87333] cursor-pointer"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleFullScreen}
                className="p-2 rounded-lg bg-slate-800/60 hover:bg-[#B87333]/20 text-slate-300 hover:text-white transition-colors"
              >
                <Maximize className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pie Informativo del Reproductor */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 bg-slate-900/60 border border-slate-800 rounded-xl p-3 px-4 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          {isCompleted ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-300 font-medium">¡Demostración completada al 100%! Podés adelantar o revisar cualquier parte del video libremente.</span>
            </>
          ) : (
            <>
              <Lock className="w-4 h-4 text-[#B87333]" />
              <span>Podés retroceder para repasar lo visto. El adelantado libre se activa al completar la demostración.</span>
            </>
          )}
        </div>
        <div className="text-slate-500 font-mono">
          HD 1080p · Audio Broadcast -14 LUFS
        </div>
      </div>
    </div>
  );
};
