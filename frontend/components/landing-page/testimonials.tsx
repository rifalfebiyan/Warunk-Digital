"use client";
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
    {
        quote:
            "Warunk Digital transformed our online presence. Their AI solutions increased our efficiency by 40% in the first quarter.",
        name: "Alex Johnson",
        title: "CTO, TechCorp",
    },
    {
        quote:
            "The design team is incredible. They understood our brand vision perfectly and delivered a website that truly stands out.",
        name: "Sarah Williams",
        title: "Marketing Director, Studio G",
    },
    {
        quote:
            "Professional, timely, and exceedingly skilled. Highly recommend Warunk Digital for any web development needs.",
        name: "Michael Chen",
        title: "Founder, StartupX",
    },
    {
        quote:
            "Their data analysis tools gave us insights we didn't know we needed. A game changer for our business strategy.",
        name: "Emily Davis",
        title: "CEO, DataFlow",
    },
    {
        quote:
            "Exceptional service and support. The team at Warunk Digital goes above and beyond to ensure customer satisfaction.",
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
                    What our clients say
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
