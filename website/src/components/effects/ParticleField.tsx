'use client';
import React, { useEffect, useRef, useState } from 'react';

export function ParticleField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const rafId = useRef<number | null>(null);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const { width, height } = containerRef.current.getBoundingClientRect();
                setDimensions({ width, height });
                if (canvasRef.current) {
                    canvasRef.current.width = width;
                    canvasRef.current.height = height;
                }
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Neural Network Nodes
        const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
        const nodeCount = Math.floor((dimensions.width * dimensions.height) / 15000); // Density control

        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
                vx: (Math.random() - 0.5) * 0.2, // Slow movement
                vy: (Math.random() - 0.5) * 0.2,
                radius: Math.random() * 1.5 + 0.5,
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, dimensions.width, dimensions.height);

            // Update & Draw Nodes
            nodes.forEach((node, i) => {
                // Movement
                node.x += node.vx;
                node.y += node.vy;

                // Mouse interaction (Inverse Parallax)
                const dx = mouseRef.current.x - node.x;
                const dy = mouseRef.current.y - node.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 200) {
                    const force = (200 - distance) / 200;
                    node.x -= (dx / distance) * force * 0.5; // Repel
                    node.y -= (dy / distance) * force * 0.5;
                }

                // Bounce off edges
                if (node.x < 0 || node.x > dimensions.width) node.vx *= -1;
                if (node.y < 0 || node.y > dimensions.height) node.vy *= -1;

                // Draw Node
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(184, 115, 51, ${0.1 + (Math.random() * 0.2)})`; // Copper weak
                ctx.fill();

                // Connections
                for (let j = i + 1; j < nodes.length; j++) {
                    const nodeB = nodes[j];
                    const dx = node.x - nodeB.x;
                    const dy = node.y - nodeB.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(nodeB.x, nodeB.y);
                        ctx.strokeStyle = `rgba(184, 115, 51, ${1 - dist / 100})`; // Copper connection
                        ctx.lineWidth = 0.2;
                        ctx.stroke();
                    }
                }
            });

            rafId.current = requestAnimationFrame(animate);
        };

        animate();

        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                mouseRef.current = {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                };
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [dimensions]);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/0 via-[#020617]/50 to-[#020617] h-full w-full" />
        </div>
    );
}

