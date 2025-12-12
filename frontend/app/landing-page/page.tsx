import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { WavyBackground } from "@/components/ui/wavy-background";
import { AppleCardsCarouselDemo } from "@/components/landing-page/apple-cards-carousel-section";
import Navbar from "@/components/header/navbar";

export default function LandingPage() {
    return (
        <div>
            <Navbar />
            <div>
                <WavyBackground className="max-w-4xl mx-auto pb-40">
                    <p className="text-2xl md:text-4xl lg:text-7xl text-neutral-800 dark:text-white font-bold inter-var text-center">
                        Digital Solution
                    </p>
                    <p className="text-base md:text-lg mt-4 text-neutral-800 dark:text-white font-normal inter-var text-center">
                        Leverage the power of canvas to create a beautiful hero section
                    </p>
                </WavyBackground>
                <AppleCardsCarouselDemo />
            </div>
        </div>
    );
}
