'use client';

// Enlace a /call con el paso 4 del embudo (click_agendar_cta) ya cableado.
// Existe para poder trackear CTAs que viven dentro de componentes de servidor.

import React from 'react';
import { trackClickAgendarCTA } from '@/lib/analytics';

export function CtaAgendarLink({
    source,
    href = 'https://www.vakdor.com/call',
    className,
    children,
}: {
    source: string;
    href?: string;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <a href={href} className={className} onClick={() => trackClickAgendarCTA(source)}>
            {children}
        </a>
    );
}
