"use client";

import React, { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className={cn("fixed top-10 inset-x-0 w-full z-50", className)}>
            {/* Desktop Menu */}
            <div className="hidden md:flex justify-center max-w-2xl mx-auto relative">
                <Menu setActive={setActive} className="items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={80}
                            height={60}
                        />
                        {/* <span className="font-bold text-lg text-black dark:text-white">Warunk Digital</span> */}
                    </Link>
                    <Link href="/landing-page" className="relative">
                        <span className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white">Home</span>
                    </Link>

                    <MenuItem setActive={setActive} active={active} item="Services">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/web-dev">Web Development</HoveredLink>
                            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                            <HoveredLink href="/branding">Branding</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Products">
                        <div className="text-sm grid grid-cols-2 gap-10 p-4">
                            <ProductItem
                                title="Algochurn"
                                href="https://algochurn.com"
                                src="https://assets.aceternity.com/demos/algochurn.webp"
                                description="Prepare for tech interviews like never before."
                            />
                            <ProductItem
                                title="Tailwind Master Kit"
                                href="https://tailwindmasterkit.com"
                                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                                description="Production ready Tailwind css components for your next project"
                            />
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Pricing">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/hobby">Hobby</HoveredLink>
                            <HoveredLink href="/individual">Individual</HoveredLink>
                            <HoveredLink href="/team">Team</HoveredLink>
                            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                        </div>
                    </MenuItem>
                </Menu>

            </div>
            {/* Desktop Toggle positioned absolute right */}
            <div className="hidden md:block absolute top-4 right-10">
                <ModeToggle />
            </div>

            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between px-6 py-4 bg-white dark:bg-black border border-black/[0.1] dark:border-white/[0.2] mx-4 rounded-full shadow-lg">
                <Link href="/" className="flex items-center gap-2">
                    {/* <span className="font-bold text-lg text-black dark:text-white">Warunk Digital</span> */}
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={80}
                        height={80}
                    />
                </Link>
                <div className="flex items-center gap-4">
                    <ModeToggle />
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-black dark:text-white focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden absolute top-20 inset-x-4 bg-white dark:bg-black border border-black/[0.1] dark:border-white/[0.2] rounded-2xl shadow-xl p-6 overflow-hidden"
                    >
                        <div className="flex flex-col space-y-6 max-h-[80vh] overflow-y-auto">
                            <Link href="/landing-page" className="text-lg font-medium text-black dark:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                                Home
                            </Link>

                            <div className="space-y-3">
                                <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-wider">Services</h4>
                                <div className="flex flex-col space-y-2 pl-2 border-l-2 border-neutral-100 dark:border-neutral-800">
                                    <Link href="/web-dev" className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Web Development</Link>
                                    <Link href="/interface-design" className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Interface Design</Link>
                                    <Link href="/seo" className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>SEO</Link>
                                    <Link href="/branding" className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Branding</Link>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-wider">Products</h4>
                                <div className="flex flex-col space-y-2 pl-2 border-l-2 border-neutral-100 dark:border-neutral-800">
                                    <Link href="https://algochurn.com" className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Algochurn</Link>
                                    <Link href="https://tailwindmasterkit.com" className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Tailwind Master Kit</Link>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-wider">Pricing</h4>
                                <div className="flex flex-col space-y-2 pl-2 border-l-2 border-neutral-100 dark:border-neutral-800">
                                    <Link href="/hobby" className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Hobby</Link>
                                    <Link href="/individual" className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Individual</Link>
                                    <Link href="/team" className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Team</Link>
                                    <Link href="/enterprise" className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Enterprise</Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}