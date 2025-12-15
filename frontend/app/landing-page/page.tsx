"use client";

import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { WavyBackground } from "@/components/ui/wavy-background";
import { AppleCardsCarouselDemo } from "@/components/landing-page/apple-cards-carousel-section";
import Navbar from "@/components/header/navbar";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

export default function LandingPage() {
    return (
        <div>
            <Navbar />
            <div>
                <WavyBackground className="max-w-4xl mx-auto pb-40">
                    <div>
                        <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
                            <LayoutTextFlip
                                text="Warunk Digital is"
                                words={["AI", "Web", "Data Analyst", "Designer"]}
                            />
                        </motion.div>
                        <p className="mt-4 text-center text-base text-neutral-600 dark:text-neutral-400">
                            We are a digital agency that specializes in AI, Web Development, Data Analyst, and Designer.
                        </p>
                    </div>
                </WavyBackground>
                <AppleCardsCarouselDemo />
            </div>
        </div>
    );
}
