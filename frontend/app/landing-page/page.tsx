"use client";

import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { ServicesCarousel } from "@/components/landing-page/apple-cards-carousel-section";
import Navbar from "@/components/header/navbar";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";
import { HoverBorder } from "@/components/landing-page/hover-border";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandThreads } from "@tabler/icons-react";
// import { WorldMapSection } from "@/components/landing-page/world-map-section";


export default function LandingPage() {
    return (
        <div>
            <Navbar />
            <div>
                <WavyBackground className="max-w-4xl mx-auto pb-16">
                    <div>
                        <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-3 text-center sm:mx-0 sm:mb-0 sm:flex-row">
                            <LayoutTextFlip
                                text="Warunk Digital is"
                                words={["AI", "Web", "Data Analyst", "Designer"]}
                            />
                        </motion.div>
                        {/* <p className="mt-4 text-center text-base text-neutral-600 dark:text-neutral-400"> */}
                        <p className="mt-4 text-center text-base">
                            We are a digital agency that specializes in AI, Web Development, Data Analyst, and Designer.
                        </p>
                        <HoverBorder />
                        <div className="flex flex-row items-center justify-center gap-8 mt-10">
                            {/* Instagram */}
                            <a href="#" className="transform hover:scale-110 transition-all duration-200">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#bc1888] to-[#cc2366] flex items-center justify-center text-white shadow-lg hover:shadow-pink-500/50">
                                    <IconBrandInstagram className="w-7 h-7" stroke={2} />
                                </div>
                            </a>
                            {/* Github */}
                            <a href="#" className="transform hover:scale-110 transition-all duration-200">
                                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white shadow-lg hover:shadow-gray-500/50">
                                    <IconBrandGithub className="w-7 h-7" stroke={2} />
                                </div>
                            </a>
                            {/* LinkedIn */}
                            <a href="#" className="transform hover:scale-110 transition-all duration-200">
                                <div className="w-12 h-12 rounded-full bg-[#0077B5] flex items-center justify-center text-white shadow-lg hover:shadow-blue-500/50">
                                    <IconBrandLinkedin className="w-7 h-7" stroke={2} />
                                </div>
                            </a>
                            {/* Threads */}
                            <a href="#" className="transform hover:scale-110 transition-all duration-200">
                                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white shadow-lg hover:shadow-gray-500/50">
                                    <IconBrandThreads className="w-7 h-7" stroke={2} />
                                </div>
                            </a>
                        </div>
                    </div>
                </WavyBackground>
                <ServicesCarousel />
            </div>
        </div>
    );
}
