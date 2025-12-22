"use client";
import React from "react";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

// Reusing InfiniteMovingCards but adapting the data structure or creating a simpler marquee
// Since InfiniteMovingCards expects rigid structure, let's create a simple marquee here
// using framer motion for infinite loop of logos

import { motion } from "motion/react";

const logos = [
    "https://assets.algochurn.com/logo-dark.png",
    "https://assets.algochurn.com/logo-light.png", // Just placeholders, normally use distinct company logos
    // For demo, let's use text or generic SVGs if specific URLs aren't available
];

const companies = [
    "Google", "Microsoft", "Amazon", "Netflix", "Meta", "Tesla", "Adobe", "Stripe"
];

export const TrustedBy = () => {
    return (
        <section className="py-10 bg-white dark:bg-black border-y border-neutral-100 dark:border-white/[0.05] overflow-hidden">
            <p className="text-center text-sm font-medium text-neutral-500 mb-6 uppercase tracking-widest">
                Trusted by industry leaders
            </p>
            <div className="flex overflow-hidden relative w-full">
                <div className="flex whitespace-nowrap animate-scroll-logos hover:[animation-play-state:paused] w-max">
                    {/* Doubling the list for seamless loop */}
                    {[...companies, ...companies].map((company, idx) => (
                        <div key={idx} className="mx-8 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                            <span className="text-2xl font-bold text-neutral-400 dark:text-neutral-600">{company}</span>
                        </div>
                    ))}
                </div>
                <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none"></div>
            </div>
            <style jsx>{`
        @keyframes scroll-logos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-logos {
          animation: scroll-logos 30s linear infinite;
        }
      `}</style>
        </section>
    );
};
