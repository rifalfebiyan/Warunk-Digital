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
            title: "AI-First Solutions",
            description:
                "We leverage the latest in Artificial Intelligence to automate workflows and provide smart insights.",
            icon: <IconBrain />,
        },
        {
            title: "Modern Tech Stack",
            description:
                "Built with Next.js, Tailwind CSS, and other industry-leading technologies for maximum performance.",
            icon: <IconBrandTailwind />,
        },
        {
            title: "Rapid Deployment",
            description:
                "From concept to launch in record time. Our agile process ensures you get to market faster.",
            icon: <IconRocket />,
        },
        {
            title: "Enterprise Security",
            description:
                "Security is not an afterthought. We implement best practices to keep your data safe and secure.",
            icon: <IconLock />,
        },
        {
            title: "Mobile Responsive",
            description:
                "Your site will look amazing on any device. We prioritize mobile-first design principles.",
            icon: <IconDeviceMobile />,
        },
        {
            title: "24/7 Support",
            description:
                "Our dedicated support team is always available to help you resolve any issues promptly.",
            icon: <IconHeadset />,
        },
    ];

    return (
        <section className="py-20 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                        Why Choose Warunk Digital?
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
                        We combine creativity with technical excellence to deliver products that drive growth.
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
