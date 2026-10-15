"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

interface VslVideoPlayerProps {
  videoUrl: string;
  posterUrl?: string;
  /** Se llama UNA vez por visita, solo si la persona vio de verdad casi todo el video. */
  onCompletion?: () => void;
  title?: string;
}

// Cuánto del video tiene que haberse reproducido (no saltado) para contar como "lo vio entero".
const VISTO_MINIMO = 0.9;

export const VslVideoPlayer: React.FC<VslVideoPlayerProps> = ({
  videoUrl,
  posterUrl,
  onCompletion,
  title = "Presentación de PRISMA",
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  // Segundos realmente reproducidos: suma los avances chicos y descarta los saltos.
  const segundosVistosRef = useRef(0);
  const ultimoTiempoRef = useRef(0);
  const completadoRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const ocultarTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Celular/tablet: no hay mouse que entre y salga. Los controles se muestran con un toque y se
  // esconden solos a los 2,5 s mientras corre el video, para no tapar los subtítulos.
  const esTactil = () => typeof window !== "undefined" && !window.matchMedia("(hover: hover)").matches;
  const mostrarControlesUnRato = (reproduciendo = isPlaying) => {
    setShowControls(true);
    if (ocultarTimerRef.current) clearTimeout(ocultarTimerRef.current);
    if (reproduciendo && esTactil()) {
      ocultarTimerRef.current = setTimeout(() => setShowControls(false), 2500);
    }
  };
  useEffect(() => () => {
    if (ocultarTimerRef.current) clearTimeout(ocultarTimerRef.current);
  }, []);

  const intentarCompletar = (alFinal: boolean) => {
    if (completadoRef.current || duration <= 0 || !alFinal) return;
    if (segundosVistosRef.current >= duration * VISTO_MINIMO) {
      completadoRef.current = true;
      onCompletion?.();
    }
  };

  const leerDuracion = () => {
    const d = videoRef.current?.duration;
    if (d && isFinite(d)) setDuration(d);
  };

  // Si el video cargó sus datos antes de que React se enganche, el evento ya pasó: leerlo al montar.
  useEffect(() => {
    leerDuracion();
  }, []);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const delta = current - ultimoTiempoRef.current;
    // Un avance chico (según la velocidad elegida) es reproducción; uno grande, un salto
    if (delta > 0 && delta < 1.5 * (videoRef.current.playbackRate || 1)) segundosVistosRef.current += delta;
    ultimoTiempoRef.current = current;

    // Solo re-renderizar cuando cambia el segundo
    if (Math.floor(current) !== Math.floor(currentTime)) setCurrentTime(current);

    intentarCompletar(duration > 0 && current >= duration - 3.5);
  };

  const irA = (t: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = t;
    ultimoTiempoRef.current = t;
    setCurrentTime(t);
  };

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || duration <= 0) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    irA(pct * duration);
  };

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

  // Pantalla completa (en iPhone solo el <video> puede ir a pantalla completa)
  const toggleFullScreen = () => {
    const target = containerRef.current;
    const video = videoRef.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
      return;
    }
    if (target?.requestFullscreen) {
      target.requestFullscreen().catch(() => {});
    } else if (video?.webkitEnterFullscreen) {
      video.webkitEnterFullscreen();
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds <= 0) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div
        ref={containerRef}
        className="relative group w-full aspect-video rounded-2xl bg-[#020617] border border-[#B87333]/30 shadow-[0_0_50px_rgba(184,115,51,0.15)] overflow-hidden flex items-center justify-center selection:bg-transparent"
        onMouseEnter={() => !esTactil() && setShowControls(true)}
        onMouseLeave={() => isPlaying && !esTactil() && setShowControls(false)}
      >
        <video
          ref={videoRef}
          src={videoUrl}
          poster={posterUrl}
          title={title}
          playsInline
          preload="metadata"
          onLoadedMetadata={leerDuracion}
          onDurationChange={leerDuracion}
          onTimeUpdate={handleTimeUpdate}
          onPlay={() => {
            setIsPlaying(true);
            mostrarControlesUnRato(true);
          }}
          onPause={() => {
            setIsPlaying(false);
            mostrarControlesUnRato(false);
          }}
          onEnded={() => {
            setIsPlaying(false);
            intentarCompletar(true);
          }}
          // En el celular, si los controles están escondidos, el primer toque solo los muestra
          onClick={() => (esTactil() && isPlaying && !showControls ? mostrarControlesUnRato() : togglePlay())}
          className="w-full h-full object-contain cursor-pointer"
        />

        {/* Botón grande de reproducir cuando está en pausa */}
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute z-40 p-4 md:p-8 rounded-full bg-gradient-to-br from-[#B87333] to-[#5C3D2E] text-white shadow-[0_0_40px_rgba(184,115,51,0.5)] hover:scale-105 transition-all duration-300 group-hover:shadow-[0_0_60px_rgba(184,115,51,0.7)]"
            aria-label="Reproducir video"
          >
            <Play className="w-7 h-7 md:w-12 md:h-12 fill-white translate-x-0.5" />
          </button>
        )}

        {/* Controles inferiores: compactos en el celular para no tapar el video */}
        <div
          className={`absolute bottom-0 inset-x-0 z-40 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-transparent px-3 pb-2 pt-6 md:p-6 transition-opacity duration-300 ${
            showControls || !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClickCapture={() => esTactil() && mostrarControlesUnRato()}
        >
          <div
            ref={progressBarRef}
            onClick={handleTimelineClick}
            className="relative w-full h-1.5 md:h-3 mb-2 md:mb-3 rounded-full bg-slate-800/80 overflow-hidden border border-slate-700/50 cursor-pointer"
            title="Hacé clic para ir a cualquier parte"
          >
            <div
              className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#B87333] to-[#D4A574] transition-all duration-150"
              style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
            />
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 md:gap-4">
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pausar" : "Reproducir"}
                className="p-1.5 md:p-2 rounded-lg bg-slate-800/60 hover:bg-[#B87333]/20 text-white hover:text-[#B87333] transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4 md:w-5 md:h-5" /> : <Play className="w-4 h-4 md:w-5 md:h-5 fill-white" />}
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                  className="p-1.5 md:p-2 rounded-lg bg-slate-800/60 hover:bg-[#B87333]/20 text-slate-300 hover:text-white transition-colors"
                >
                  {isMuted || volume === 0 ? <VolumeX className="w-4 h-4 md:w-5 md:h-5" /> : <Volume2 className="w-4 h-4 md:w-5 md:h-5" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  aria-label="Volumen"
                  className="hidden md:block w-24 accent-[#B87333] cursor-pointer"
                />
              </div>

              <span className="text-[11px] md:text-xs font-mono text-slate-300">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <button
              onClick={toggleFullScreen}
              aria-label="Pantalla completa"
              className="p-1.5 md:p-2 rounded-lg bg-slate-800/60 hover:bg-[#B87333]/20 text-slate-300 hover:text-white transition-colors"
            >
              <Maximize className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
