'use client';

import React, { useEffect, useRef, useCallback } from 'react';

interface Particle {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    size: number;
    opacity: number;
}

export function ParticleField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const animationRef = useRef<number | null>(null);

    const initParticles = useCallback((canvas: HTMLCanvasElement) => {
        const particles: Particle[] = [];
        // Reduced density: changed from 15000 to 25000 divisor (less particles = better performance)
        const numberOfParticles = Math.floor((canvas.width * canvas.height) / 25000);

        for (let i = 0; i < numberOfParticles; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            particles.push({
                x,
                y,
                baseX: x,
                baseY: y,
                size: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.3 + 0.1,
            });
        }
        particlesRef.current = particles;
    }, []);

    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Alpha: true is crucial for transparent canvas performance optimization in some browsers
        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const particles = particlesRef.current;
        const mouse = mouseRef.current;
        const connectionDistance = 120;
        const mouseInfluenceDistance = 150;
        const particleCount = particles.length;

        // 1. Update and Draw Particles
        ctx.fillStyle = '#B87333';
        
        for (let i = 0; i < particleCount; i++) {
            const particle = particles[i];
            
            // Mouse influence
            const dx = mouse.x - particle.x;
            const dy = mouse.y - particle.y;
            const distanceSq = dx * dx + dy * dy;
            const mouseDist = Math.sqrt(distanceSq);

            if (mouseDist < mouseInfluenceDistance) {
                const force = (mouseInfluenceDistance - mouseDist) / mouseInfluenceDistance;
                particle.x = particle.baseX - (dx * force * 0.02);
                particle.y = particle.baseY - (dy * force * 0.02);
            } else {
                particle.x += (particle.baseX - particle.x) * 0.05;
                particle.y += (particle.baseY - particle.y) * 0.05;
            }

            // Draw individual particle
            ctx.globalAlpha = particle.opacity;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
        }

        // 2. Draw Connections
        // Optimizing connection drawing by checking squared distance first
        ctx.lineWidth = 0.5;

        for (let i = 0; i < particleCount; i++) {
            const p1 = particles[i]; 
            
            for (let j = i + 1; j < particleCount; j++) {
                const p2 = particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distSq = dx * dx + dy * dy;
                
                // Compare squared distance to avoid expensive sqrt
                if (distSq < connectionDistance * connectionDistance) {
                    const dist = Math.sqrt(distSq);
                    const opacity = (1 - dist / connectionDistance) * 0.15;
                    
                    if (opacity > 0.01) {
                        ctx.strokeStyle = `rgba(184, 115, 51, ${opacity})`;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
        }

        animationRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        let resizeTimeout: NodeJS.Timeout;

        const resizeCanvas = () => {
             // Debounce resize
             clearTimeout(resizeTimeout);
             resizeTimeout = setTimeout(() => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                initParticles(canvas);
             }, 100);
        };

        const handleMouseMove = (e: MouseEvent) => {
            // Update ref directly, no state change
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        // Initial setup
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles(canvas);

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            clearTimeout(resizeTimeout);
        };
    }, [initParticles, animate]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ background: 'transparent' }} 
        />
    );
}
