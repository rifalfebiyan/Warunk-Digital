"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Facebook } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-neutral-100 dark:bg-black border-t border-neutral-200 dark:border-white/[0.1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={60}
                                height={60}
                                className="rounded-lg"
                            />
                            <span className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                                Warunk Digital
                            </span>
                        </Link>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xs">
                            Empowering businesses with cutting-edge digital solutions. From web
                            development to branding, we handle it all with precision and style.
                        </p>
                        <div className="flex space-x-4">
                            <SocialLink href="#" icon={<Twitter size={20} />} />
                            <SocialLink href="#" icon={<Github size={20} />} />
                            <SocialLink href="#" icon={<Linkedin size={20} />} />
                            <SocialLink href="#" icon={<Facebook size={20} />} />
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">
                            Services
                        </h3>
                        <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                            <li>
                                <Link href="/web-dev" className="hover:text-black dark:hover:text-white transition-colors">
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/interface-design" className="hover:text-black dark:hover:text-white transition-colors">
                                    Interface Design
                                </Link>
                            </li>
                            <li>
                                <Link href="/seo" className="hover:text-black dark:hover:text-white transition-colors">
                                    SEO Optimization
                                </Link>
                            </li>
                            <li>
                                <Link href="/branding" className="hover:text-black dark:hover:text-white transition-colors">
                                    Branding
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">
                            Products
                        </h3>
                        <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                            <li>
                                <Link href="https://algochurn.com" className="hover:text-black dark:hover:text-white transition-colors">
                                    Algochurn
                                </Link>
                            </li>
                            <li>
                                <Link href="https://tailwindmasterkit.com" className="hover:text-black dark:hover:text-white transition-colors">
                                    Tailwind Master Kit
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">
                                    Templates
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">
                            Company
                        </h3>
                        <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                            <li>
                                <Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="hover:text-black dark:hover:text-white transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-black dark:hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-black dark:hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-white/[0.1] text-center text-sm text-neutral-500 dark:text-neutral-500">
                    <p>&copy; {new Date().getFullYear()} Warunk Digital. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
    return (
        <Link
            href={href}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
            {icon}
        </Link>
    );
};
