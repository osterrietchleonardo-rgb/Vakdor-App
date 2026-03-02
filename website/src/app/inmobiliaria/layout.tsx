import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Partner Tecnológico para Inmobiliarias",
    description: "Captación automática de propiedades, recuperación de leads perdidos, tracking de equipo y tutor IA para nuevos asesores. El partner tecnológico que tu inmobiliaria necesita.",
    alternates: { canonical: '/inmobiliaria' },
};

export default function InmobiliariaLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
