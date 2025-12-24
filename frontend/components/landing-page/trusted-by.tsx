"use client";
import React from "react";
import Image from "next/image";
// Reusing InfiniteMovingCards but adapting the data structure or creating a simpler marquee
// Since InfiniteMovingCards expects rigid structure, let's create a simple marquee here
// using framer motion for infinite loop of logos

const companies = [
    { name: "Pustaka Pranala", logo: "/logo-pustaka-pranala.png" },
    { name: "TK Ngabean", logo: "/logo-ais.webp" },
    { name: "Binco Nusantara", logo: "/logo-binco.webp" },
];

export const TrustedBy = () => {
    return (
        <section className="py-20 bg-white dark:bg-black border-y border-neutral-100 dark:border-white/[0.05] overflow-hidden">
            <h2 className="text-center text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-12">
                Klien Kami
            </h2>
            <div className="flex overflow-hidden relative w-full">
                <div className="flex whitespace-nowrap animate-scroll-logos hover:[animation-play-state:paused] w-max items-center">
                    {/* Doubling the list for seamless loop */}
                    {[...companies, ...companies, ...companies, ...companies].map((company, idx) => (
                        <div key={idx} className="mx-16 flex items-center justify-center cursor-pointer relative w-40 h-24 transition-transform hover:scale-110 duration-300">
                            <Image
                                src={company.logo}
                                alt={company.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>

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
