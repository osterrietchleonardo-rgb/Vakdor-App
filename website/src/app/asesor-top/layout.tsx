import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AureFlow - Asistente IA para Asesores Inmobiliarios",
    description: "Tu asistente de IA que responde consultas, califica leads y agenda visitas por WhatsApp 24/7. Cerrá más ventas sin vivir pegado al celular.",
    alternates: { canonical: '/asesor-top' },
};

export default function AsesorTopLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
