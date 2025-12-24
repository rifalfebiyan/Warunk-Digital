"use client";
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
    {
        quote:
            "Warunk Digital mengubah kehadiran online kami. Solusi AI mereka meningkatkan efisiensi kami sebesar 40% pada kuartal pertama.",
        name: "Alex Johnson",
        title: "CTO, TechCorp",
    },
    {
        quote:
            "Tim desainnya luar biasa. Mereka memahami visi merek kami dengan sempurna dan menghadirkan situs web yang benar-benar menonjol.",
        name: "Sarah Williams",
        title: "Direktur Pemasaran, Studio G",
    },
    {
        quote:
            "Profesional, tepat waktu, dan sangat terampil. Sangat merekomendasikan Warunk Digital untuk segala kebutuhan pengembangan web.",
        name: "Michael Chen",
        title: "Pendiri, StartupX",
    },
    {
        quote:
            "Alat analisis data mereka memberi kami wawasan yang tidak kami ketahui bahwa kami butuhkan. Pengubah permainan bagi strategi bisnis kami.",
        name: "Emily Davis",
        title: "CEO, DataFlow",
    },
    {
        quote:
            "Layanan dan dukungan yang luar biasa. Tim di Warunk Digital berusaha keras untuk memastikan kepuasan pelanggan.",
        name: "David Wilson",
        title: "COO, Innovate Inc",
    },
];

export const Testimonials = () => {
    return (
        <section className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="flex flex-col items-center justify-center z-10 p-4 w-full">
                <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
                    Apa kata klien kami
                </h2>
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </section>
    );
};
