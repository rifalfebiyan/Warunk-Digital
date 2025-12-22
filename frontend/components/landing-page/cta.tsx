"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
    return (
        <section className="py-20 bg-white dark:bg-black">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-neutral-900 dark:bg-white rounded-3xl p-8 md:p-12 text-center md:text-left relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-black mb-4">
                                Ready to elevate your digital presence?
                            </h2>
                            <p className="text-neutral-300 dark:text-neutral-600 text-lg">
                                Join hundreds of satisfied clients who have transformed their business with Warunk Digital. Let's build something amazing together.
                            </p>
                        </div>
                        <div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black dark:text-white bg-white dark:bg-black rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors gap-2"
                            >
                                Get Started Now <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-neutral-800 dark:bg-neutral-200 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-neutral-800 dark:bg-neutral-200 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
};
