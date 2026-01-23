'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

export function BookingCalendar() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                styles: { branding: { brandColor: "#B87333" } },
                hideEventTypeDetails: false,
                layout: "month_view"
            });
        })();
    }, []);

    return (
        <div className="w-full h-full min-h-[700px] overflow-hidden rounded-2xl border border-[#B87333]/20 bg-[#0F172A]/50 backdrop-blur-sm shadow-[0_0_50px_rgba(184,115,51,0.1)]">
            <Cal
                namespace="llamada-de-descubrimiento"
                calLink="vakdor/llamada-de-descubrimiento"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: 'month_view' }}
            />
        </div>
    );
}
