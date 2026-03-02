import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre Vakdor - La Historia",
    description: "Conocé la historia detrás de Vakdor y por qué construimos la solución para el sector inmobiliario. Transparencia radical, resultados garantizados.",
    alternates: { canonical: '/sobre-mi' },
};

export default function SobreMiLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
