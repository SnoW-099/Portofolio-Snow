"use client"

import { useState, useEffect } from "react"
import {
  Github,
  MessageCircle,
  Code2,
  Gamepad2,
  Brain,
  Terminal,
  Cpu,
  Palette,
  Music,
  Bot,
  Zap,
  ArrowRight,
  Mail,
  ExternalLink,
  Database,
  Cloud,
} from "lucide-react"
import { BentoGrid } from "@/components/BentoGrid"
import { BentoCard } from "@/components/BentoCard"
import { robloxScript } from "@/components/roblox-script"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    // Enforce dark mode for this premium look
    document.documentElement.classList.add("dark")
  }, [])

  const languages = [
    { name: "Python", level: 80 },
    { name: "LuaU", level: 75 },
    { name: "HTML / CSS", level: 30 },
    { name: "GDScript", level: 15 },
    { name: "JavaScript", level: 10 },
  ]

  const stack = [
    { name: "Git", desc: "Version Control", icon: Github },
    { name: "VS Code", desc: "Editor", icon: Terminal },
    { name: "Vercel", desc: "Deployment", icon: Zap },
    { name: "Netlify", desc: "Deployment", icon: Cloud },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 relative selection:bg-foreground selection:text-background pb-20">
      {/* 
        --------------------------------------------------
        PRESERVED BACKGROUND BLOBS & NOISE
        --------------------------------------------------
      */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-noise opacity-[0.4] bg-repeat z-10"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px] animate-blob delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-indigo-500/20 blur-[120px] animate-blob delay-4000"></div>
      </div>

      <div className="relative z-10 px-4 pt-12 md:pt-20">
        <header className="max-w-7xl mx-auto mb-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden">
              <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-medium text-lg tracking-tight">Angel</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="https://github.com/SnoW-099" target="_blank" className="hover:text-foreground transition-colors">GitHub</a>
            <span className="w-px h-4 bg-white/20"></span>
            <span className="text-foreground">Code Developer</span>
          </nav>
        </header>

        <BentoGrid className="animate-fade-in">

          {/* HERO CARD - Col Span 8 */}
          <BentoCard colSpan={9} className="p-8 md:p-12 min-h-[400px] justify-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-300 mb-6 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for work
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
                Crafting worlds effectively.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Hi, I’m Angel, a person eager to learn new things. I have knowledge in video games, programming, UI, web design, and more.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="/projects" className="px-6 py-2.5 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity">
                  View Projects
                </a>
                <a href="mailto:contact@angel.dev" className="px-6 py-2.5 rounded-lg bg-white/5 border border-white/10 font-medium hover:bg-white/10 transition-colors">
                  Contact Me
                </a>
              </div>
            </div>
          </BentoCard>

          {/* SOCIAL / STATS - Col Span 4 */}
          <BentoCard colSpan={3} className="p-6 relative">
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1">Connect</h3>
                <p className="text-sm text-muted-foreground">Find me on these platforms.</p>
              </div>

              <div className="space-y-3 mt-6">
                <a href="https://github.com/SnoW-099" target="_blank" className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all group">
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                  <span className="text-sm font-medium">GitHub</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                </a>
                <button onClick={() => navigator.clipboard.writeText(".snow_xd")} className="w-full flex items-center gap-3 p-3 rounded-lg bg-[#5865F2]/10 hover:bg-[#5865F2]/20 border border-[#5865F2]/20 transition-all group text-left">
                  <MessageCircle className="w-5 h-5 text-[#5865F2]" />
                  <span className="text-sm font-medium">Discord</span>
                  <span className="text-xs ml-auto opacity-50 bg-[#5865F2]/20 px-2 py-0.5 rounded">.snow_xd</span>
                </button>
                <a href="mailto:contact@angel.dev" className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all group">
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                  <span className="text-sm font-medium">Email</span>
                </a>
              </div>
            </div>
          </BentoCard>



          {/* SKILLS - Col Span 8 */}
          <BentoCard colSpan={8} className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-muted-foreground" />
                  Languages
                </h3>
                <div className="space-y-5">
                  {languages.map((lang, i) => (
                    <div key={lang.name} className="group">
                      <div className="flex justify-between items-center mb-2 text-sm">
                        <span className="text-black font-bold">{lang.name}</span>
                        <span className="text-muted-foreground text-xs">{lang.level}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <div className="h-full bg-white transition-all duration-1000 ease-out group-hover:bg-blue-400" style={{ width: `${lang.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-muted-foreground" />
                    Tools & Platforms
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {stack.map(tool => (
                      <div key={tool.name} className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 transition-all flex items-start gap-3">
                        <tool.icon className="w-5 h-5 mt-0.5 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-medium">{tool.name}</div>
                          <div className="text-xs text-muted-foreground">{tool.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-muted-foreground" />
                    Currently Focused On
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      Improving Python skills
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                      Learning backend concepts
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* WEB & OTHER - Col Span 4 */}
          <BentoCard colSpan={4} className="p-8 flex flex-col justify-center text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-green-500/10 flex items-center justify-center mb-6">
              <Terminal className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Web & Automation</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Beyond games, I build utilities and websites (like this one) using modern web tech and Python.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-xs border border-white/10 px-2 py-1 rounded-md bg-white/5">Next.js 15</span>
              <span className="text-xs border border-white/10 px-2 py-1 rounded-md bg-white/5">Python</span>
              <span className="text-xs border border-white/10 px-2 py-1 rounded-md bg-white/5">Tailwind</span>
            </div>
          </BentoCard>



        </BentoGrid>

        <footer className="mt-20 py-8 border-t border-white/5 text-center text-sm text-muted-foreground">
          <p>© 2024 Angel. Designed with <span className="text-white">Bento</span> aesthetic.</p>
        </footer>
      </div>
    </div >
  )
}
