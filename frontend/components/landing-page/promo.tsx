"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Promo = () => {
    return (
        <section className="py-10 px-4 md:px-0 bg-neutral-50 dark:bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Tingkatkan produktivitas Anda.
                            <br />
                            Mulai gunakan Warunk Digital.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Dapatkan audit komprehensif kehadiran digital Anda secara gratis untuk waktu terbatas.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <Link
                                href="/contact"
                                className="rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white flex items-center gap-2"
                            >
                                Mulai Sekarang <ArrowRight size={16} />
                            </Link>
                            <Link href="/about" className="text-sm font-semibold leading-6 text-white hover:text-gray-100 flex items-center gap-1">
                                Pelajari lebih lanjut <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8">
                        {/* Abstract decorative visuals / Promo Image placeholder */}
                        <div className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" style={{ width: '900px', height: '600px', backdropFilter: 'blur(10px)' }}>
                            {/*  Mock UI or Ad Graphic would go here */}
                            <div className="p-8">
                                <div className="w-full h-8 bg-white/20 rounded-full mb-4"></div>
                                <div className="w-3/4 h-8 bg-white/20 rounded-full mb-4"></div>
                                <div className="w-1/2 h-8 bg-white/20 rounded-full mb-12"></div>

                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-32 bg-white/10 rounded-lg"></div>
                                    <div className="h-32 bg-white/10 rounded-lg"></div>
                                    <div className="h-32 bg-white/10 rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
