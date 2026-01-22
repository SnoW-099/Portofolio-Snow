"use client"

import { useState, useEffect } from "react"
import {
    Gamepad2,
    Code2,
    Terminal,
    ArrowLeft,
    LayoutTemplate,
    Construction,
} from "lucide-react"
import { BentoGrid } from "@/components/BentoGrid"
import { BentoCard } from "@/components/BentoCard"
import { SnippetCarousel } from "@/components/SnippetCarousel"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function ProjectsPage() {
    // Shared background logic for consistency
    useEffect(() => {
        document.documentElement.classList.add("dark")
    }, [])

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-500 relative selection:bg-foreground selection:text-background pb-20">
            {/* 
                --------------------------------------------------
                PRESERVED BACKGROUND BLOBS & NOISE (Copied from Home)
                --------------------------------------------------
            */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-noise opacity-[0.4] bg-repeat z-10"></div>
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-[120px] animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px] animate-blob delay-2000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-indigo-500/20 blur-[120px] animate-blob delay-4000"></div>
            </div>

            <div className="relative z-10 px-4 pt-12 md:pt-20">
                <header className="max-w-7xl mx-auto mb-12 flex items-center gap-4">
                    <a href="/" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <ArrowLeft className="w-5 h-5 text-muted-foreground" />
                    </a>
                    <h1 className="text-3xl font-bold tracking-tight">All Projects</h1>
                </header>

                <BentoGrid className="animate-fade-in">



                    {/* EXISTING PROJECT 2: Roblox Systems */}
                    <BentoCard colSpan={6} className="min-h-[350px] p-8 group/card">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="mb-auto">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-4 text-blue-400">
                                    <Code2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Roblox Systems</h3>
                                <p className="text-muted-foreground">High-performance combat and movement systems.</p>
                            </div>

                            <div className="mt-8 flex items-center justify-between">
                                <span className="text-xs font-mono bg-white/5 px-2 py-1 rounded text-blue-300 border border-blue-500/20">LuaU</span>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 transition-colors">
                                            <Terminal className="w-3.5 h-3.5" />
                                            View Snippet
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-2xl bg-transparent border-none shadow-none p-0 overflow-hidden">
                                        <SnippetCarousel />
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                    </BentoCard>

                    {/* TEMPLATE 1 */}
                    <BentoCard colSpan={6} className="min-h-[350px] p-8 group/card border-dashed">
                        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center opacity-50 group-hover/card:opacity-100 transition-opacity">
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                <LayoutTemplate className="w-8 h-8 text-muted-foreground" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Project Template A</h3>
                            <p className="text-xs text-muted-foreground">Reserved for future game prototype.</p>
                        </div>
                    </BentoCard>

                    {/* TEMPLATE 2 */}
                    <BentoCard colSpan={6} className="min-h-[250px] p-8 group/card border-dashed">
                        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center opacity-50 group-hover/card:opacity-100 transition-opacity">
                            <Construction className="w-8 h-8 text-muted-foreground mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Project Template B</h3>
                            <p className="text-xs text-muted-foreground">Reserved for tool or utility.</p>
                        </div>
                    </BentoCard>

                    {/* TEMPLATE 3 */}
                    <BentoCard colSpan={6} className="min-h-[250px] p-8 group/card border-dashed">
                        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center opacity-50 group-hover/card:opacity-100 transition-opacity">
                            <Construction className="w-8 h-8 text-muted-foreground mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Project Template C</h3>
                            <p className="text-xs text-muted-foreground">Reserved for web experiment.</p>
                        </div>
                    </BentoCard>

                </BentoGrid>
            </div>
        </div>
    )
}
