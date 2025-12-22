"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function ServicesCarousel() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} layout={true} />
    ));

    return (
        <div className="w-full h-full py-20">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Layanan Unggulan Kami
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const ServiceContent = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    {title}
                </span>{" "}
                {description}
            </p>
        </div>
    );
};

const data = [
    {
        category: "Artificial Intelligence",
        title: "Solusi AI Cerdas.",
        src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=3432&auto=format&fit=crop",
        content: <ServiceContent title="Artificial Intelligence" description="Kami membantu mengintegrasikan kecerdasan buatan ke dalam bisnis Anda untuk otomatisasi dan efisiensi yang lebih baik." />,
    },
    {
        category: "Web Development",
        title: "Website Modern & Cepat.",
        src: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=3328&auto=format&fit=crop",
        content: <ServiceContent title="Web Development" description="Bangun identitas digital Anda dengan website yang responsif, cepat, dan menggunakan teknologi terbaru." />,
    },
    {
        category: "Data Analyst",
        title: "Wawasan Data Mendalam.",
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3540&auto=format&fit=crop",
        content: <ServiceContent title="Data Analyst" description="Ubah data mentah menjadi wawasan yang dapat ditindaklanjuti untuk mengembangkan strategi bisnis Anda." />,
    },
    {
        category: "UI/UX Design",
        title: "Desain Intuitif.",
        src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=3328&auto=format&fit=crop",
        content: <ServiceContent title="UI/UX Design" description="Menciptakan pengalaman pengguna yang menarik dan antarmuka yang memukau secara visual." />,
    },
];

export default ServicesCarousel;