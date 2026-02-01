'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function BackgroundLogo() {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Simplified static version for mobile to reduce TBT
    if (isMobile) {
        return (
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
                <div className="relative w-[80vw] h-[80vw] max-w-[400px] max-h-[400px] opacity-[0.03]">
                    <Image
                        src="/logo.png"
                        alt=""
                        fill
                        sizes="80vw"
                        className="object-contain grayscale brightness-150"
                        loading="lazy"
                        quality={50}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: [0.02, 0.04, 0.02],
                    scale: [0.95, 1.05, 0.95],
                    rotate: [-2, 2, -2]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="relative w-[60vw] h-[60vw] max-w-[800px] max-h-[800px]"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#B87333] to-[#5C3D2E] opacity-10 blur-[100px] rounded-full mix-blend-screen" />
                <Image
                    src="/logo.png"
                    alt=""
                    fill
                    sizes="60vw"
                    className="object-contain opacity-5 drop-shadow-[0_0_50px_rgba(184,115,51,0.1)] grayscale brightness-150 contrast-125"
                    loading="lazy"
                    quality={60}
                />
            </motion.div>
        </div>
    );
}
