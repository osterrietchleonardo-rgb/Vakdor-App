'use client';

import { motion } from 'framer-motion';

export function BackgroundLogo() {
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
                className="relative w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] max-w-[800px] max-h-[800px]"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#B87333] to-[#5C3D2E] opacity-10 blur-[100px] rounded-full mix-blend-screen" />
                <img
                    src="/logo.svg"
                    alt="Vakdor Background"
                    className="w-full h-full object-contain opacity-5 drop-shadow-[0_0_50px_rgba(184,115,51,0.1)] grayscale brightness-150 contrast-125"
                />
            </motion.div>
        </div>
    );
}