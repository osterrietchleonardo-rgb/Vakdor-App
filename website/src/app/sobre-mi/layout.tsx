import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre Vakdor - La Historia detrás de PRISMA",
    description: "Leonardo Osterrietch, Founder & CEO de Vakdor y creador de PRISMA IA, cuenta por qué construyó el Sistema Operativo que le da trazabilidad matemática y control integral a las inmobiliarias.",
    alternates: { canonical: '/sobre-mi' },
};

export default function SobreMiLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
