"use client";
import React from "react";
import { motion } from "motion/react";

const stats = [
    { value: 100, label: "Projects Completed", suffix: "+" },
    { value: 50, label: "Happy Clients", suffix: "+" },
    { value: 98, label: "Satisfaction Rate", suffix: "%" },
    { value: 24, label: "Support Hours", suffix: "/7" },
];

export const Stats = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 text-white relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const StatCard = ({
    value,
    label,
    suffix,
    delay,
}: {
    value: number;
    label: string;
    suffix: string;
    delay: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
        >
            <div className="text-4xl md:text-6xl font-bold mb-2 flex items-baseline">
                <Counter from={0} to={value} />
                <span className="text-2xl md:text-3xl text-neutral-400 ml-1">{suffix}</span>
            </div>
            <p className="text-neutral-400 text-sm md:text-base uppercase tracking-wider font-medium">
                {label}
            </p>
        </motion.div>
    );
};

const Counter = ({ from, to }: { from: number; to: number }) => {
    // Simple layout animation placeholder
    // In a real generic component we might use a robust useSpring or similar hook
    // keeping it simple for now with basic motion
    return (
        <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {to}
        </motion.span>
    );
};
