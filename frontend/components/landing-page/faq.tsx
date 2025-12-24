"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Layanan apa yang ditawarkan Warunk Digital?",
        answer:
            "Kami menawarkan berbagai layanan digital yang komprehensif termasuk Pengembangan Web, Desain UI/UX, Branding, Optimasi SEO, dan solusi AI kustom yang disesuaikan dengan kebutuhan bisnis Anda.",
    },
    {
        question: "Apakah Anda bekerja dengan startup?",
        answer:
            "Tentu saja! Kami senang bekerja dengan startup. Kami memiliki paket khusus yang dirancang untuk membantu bisnis baru membangun kehadiran digital yang kuat dengan cepat dan terjangkau.",
    },
    {
        question: "Berapa lama proyek biasa berlangsung?",
        answer:
            "Waktu pengerjaan proyek bervariasi tergantung pada cakupan dan kompleksitas. Website standar biasanya memakan waktu 4-6 minggu, sementara aplikasi yang lebih kompleks bisa memakan waktu 3-6 bulan. Kami memberikan jadwal rinci selama konsultasi awal.",
    },
    {
        question: "Apakah Anda menawarkan dukungan pasca-peluncuran?",
        answer:
            "Ya, kami menawarkan berbagai paket pemeliharaan dan dukungan untuk memastikan produk digital Anda tetap aman, mutakhir, dan berkinerja optimal setelah peluncuran.",
    },
];

export const FAQ = () => {
    return (
        <section className="py-24 bg-neutral-50 dark:bg-[#0a0a0a]">
            {/* Increased container width to max-w-5xl */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
                        Pertanyaan yang Sering Diajukan
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 text-xl max-w-2xl mx-auto">
                        Punya pertanyaan? Kami di sini untuk membantu.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} faq={faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQItem = ({ faq }: { faq: { question: string; answer: string } }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={cn(
            "border rounded-2xl overflow-hidden transition-all duration-200",
            isOpen
                ? "bg-white dark:bg-neutral-900 border-indigo-500 dark:border-indigo-500 shadow-xl shadow-indigo-500/10"
                : "bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
        )}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
            >
                <span className={cn(
                    "font-bold text-xl md:text-2xl transition-colors duration-200",
                    isOpen ? "text-indigo-600 dark:text-indigo-400" : "text-neutral-900 dark:text-white"
                )}>
                    {faq.question}
                </span>
                <span className={cn(
                    "ml-6 flex-shrink-0 text-neutral-500 transition-transform duration-200",
                    isOpen && "rotate-180 text-indigo-500"
                )}>
                    <ChevronDown size={24} />
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="p-8 pt-0 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-transparent">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
