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
        const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000);

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

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const particles = particlesRef.current;
        const mouse = mouseRef.current;
        const connectionDistance = 120;
        const mouseInfluenceDistance = 150;

        particles.forEach((particle, i) => {
            const dx = mouse.x - particle.x;
            const dy = mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouseInfluenceDistance) {
                const force = (mouseInfluenceDistance - distance) / mouseInfluenceDistance;
                particle.x = particle.baseX - (dx * force * 0.02);
                particle.y = particle.baseY - (dy * force * 0.02);
            } else {
                particle.x += (particle.baseX - particle.x) * 0.05;
                particle.y += (particle.baseY - particle.y) * 0.05;
            }

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(184, 115, 51, ${particle.opacity})`;
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const other = particles[j];
                const connDx = particle.x - other.x;
                const connDy = particle.y - other.y;
                const connDistance = Math.sqrt(connDx * connDx + connDy * connDy);

                if (connDistance < connectionDistance) {
                    const opacity = (1 - connDistance / connectionDistance) * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(other.x, other.y);
                    ctx.strokeStyle = `rgba(184, 115, 51, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        });

        animationRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles(canvas);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        resizeCanvas();
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
