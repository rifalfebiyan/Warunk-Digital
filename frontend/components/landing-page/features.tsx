"use client";
import React from "react";
import { cn } from "@/lib/utils";
import {
    IconBrain,
    IconBrandTailwind,
    IconRocket,
    IconLock,
    IconDeviceMobile,
    IconHeadset,
} from "@tabler/icons-react";

export const Features = () => {
    const features = [
        {
            title: "Solusi Berbasis AI",
            description:
                "Kami memanfaatkan kecerdasan buatan terbaru untuk mengotomatisasi alur kerja dan memberikan wawasan cerdas.",
            icon: <IconBrain />,
        },
        {
            title: "Teknologi Modern",
            description:
                "Dibangun dengan Next.js, Tailwind CSS, dan teknologi terdepan lainnya untuk performa maksimal.",
            icon: <IconBrandTailwind />,
        },
        {
            title: "Implementasi Cepat",
            description:
                "Dari konsep hingga peluncuran dalam waktu singkat. Proses tangkas kami memastikan Anda masuk pasar lebih cepat.",
            icon: <IconRocket />,
        },
        {
            title: "Keamanan Tingkat Perusahaan",
            description:
                "Keamanan bukan hal sepele. Kami menerapkan praktik terbaik untuk menjaga data Anda tetap aman dan terlindungi.",
            icon: <IconLock />,
        },
        {
            title: "Responsif Seluler",
            description:
                "Situs Anda akan terlihat luar biasa di perangkat apa pun. Kami memprioritaskan prinsip desain mobile-first.",
            icon: <IconDeviceMobile />,
        },
        {
            title: "Dukungan 24/7",
            description:
                "Tim dukungan kami selalu tersedia untuk membantu Anda menyelesaikan masalah apa pun dengan segera.",
            icon: <IconHeadset />,
        },
    ];

    return (
        <section className="py-20 bg-neutral-50 dark:bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                        Mengapa Memilih Warunk Digital?
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
                        Kami menggabungkan kreativitas dengan keunggulan teknis untuk menghadirkan produk yang mendorong pertumbuhan.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({
    title,
    description,
    icon,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
}) => {
    return (
        <div className="flex flex-col p-6 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-transparent to-transparent dark:from-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="h-10 w-10 text-indigo-600 dark:text-indigo-400 mb-4 group-hover:scale-110 group-hover:text-indigo-500 transition-transform duration-200 relative z-10">
                {React.cloneElement(icon as React.ReactElement<any>, { stroke: 1.5, size: 40 })}
            </div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 relative z-10">
                {title}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {description}
            </p>
        </div>
    );
};
