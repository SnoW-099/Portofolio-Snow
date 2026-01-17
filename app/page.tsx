"use client"

import { useState, useEffect, useRef } from "react"
import {
  Github,
  MessageCircle,
  Code2,
  Gamepad2,
  Brain,
  X,
  Copy,
  Check,
  ExternalLink,
  Terminal,
  Cpu,
  Palette,
  Music,
  Bot,
  Zap,
  ArrowRight,
  Sparkles,
  Moon,
  Sun,
  Eye,
  FileCode,
  Mail,
} from "lucide-react"
import { robloxScript } from "@/components/roblox-script"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const [copied, setCopied] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [isDark, setIsDark] = useState(false)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    setIsLoaded(true)
    // Default to dark mode if no preference or if preference is dark
    const savedTheme = localStorage.getItem("theme")
    if (!savedTheme || savedTheme === "dark") {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [visibleCards])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  const copyDiscord = () => {
    navigator.clipboard.writeText(".snow_xd")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const languages = [
    { name: "Python", level: 85 },
    { name: "LuaU", level: 90 },
    { name: "JavaScript", level: 75 },
    { name: "HTML / CSS", level: 80 },
    { name: "GDScript", level: 70 },
  ]

  const aiTools = [
    { name: "ChatGPT", desc: "Code & Logic", icon: Bot },
    { name: "Claude", desc: "Analysis", icon: Brain },
    { name: "Copilot", desc: "Autocomplete", icon: Zap },
    { name: "DALL-E", desc: "Visuals", icon: Palette },
    { name: "Suno", desc: "Music", icon: Music },
    { name: "v0", desc: "UI/UX", icon: Sparkles },
  ]

  const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "tools", label: "Tools" },
    { id: "ai", label: "AI" },
    { id: "contact", label: "Contact" },
  ]

  const getCardStyle = (index: number) => ({
    opacity: visibleCards.includes(index) ? 1 : 0,
    transform: visibleCards.includes(index) ? "translateY(0)" : "translateY(40px)",
    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
  })

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-500 relative selection:bg-foreground selection:text-background">
      {/* Ambient Background & Noise */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-noise opacity-[0.4] bg-repeat z-10"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px] animate-blob delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-indigo-500/20 blur-[120px] animate-blob delay-4000"></div>
      </div>

      <div className="relative z-10">

        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrollY > 50 ? "bg-background/70 backdrop-blur-2xl border-b border-border shadow-sm" : ""
            }`}
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(-20px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}
        >
          <div className="max-w-[980px] mx-auto px-4 sm:px-6 h-11 sm:h-12 flex items-center justify-between">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-[11px] sm:text-[12px] font-normal text-muted-foreground hover:text-foreground transition-all duration-300 hover:tracking-wider"
            >
              Menu
            </button>
            <span className="text-[11px] sm:text-[12px] font-medium text-foreground">Angel</span>
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={toggleDarkMode}
                className="text-muted-foreground hover:text-foreground transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              </button>
              <a
                href="https://github.com/SnoW-099"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] sm:text-[12px] font-normal text-muted-foreground hover:text-foreground transition-all duration-300 hover:tracking-wider"
              >
                GitHub
              </a>
            </div>
          </div>
        </nav>

        <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-16 sm:pt-12 pb-12 sm:pb-0 relative overflow-hidden">
          <div className="text-center max-w-[980px] mx-auto relative z-10">
            <p
              className="text-muted-foreground text-[15px] sm:text-[17px] font-normal mb-3 sm:mb-4"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
              }}
            >
              Game Developer
            </p>

            <h1
              className="text-[56px] sm:text-[72px] md:text-[88px] lg:text-[104px] font-semibold tracking-[-0.015em] leading-[1.05] text-foreground mb-4 sm:mb-6 px-2"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0) scale(1)" : "translateY(50px) scale(0.95)",
                transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
                fontWeight: 600,
              }}
            >
              Hi, I'm Angel.
            </h1>

            <h2
              className="text-[22px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold tracking-[-0.015em] leading-[1.15] sm:leading-[1.1] text-muted-foreground mb-6 sm:mb-8 max-w-[700px] mx-auto px-4"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(40px)",
                filter: isLoaded ? "blur(0px)" : "blur(10px)",
                transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.7s",
              }}
            >
              I create games that make people feel something.
            </h2>

            <div
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 1s",
              }}
            >
              <button
                onClick={() => {
                  const element = document.getElementById("selected-works")
                  element?.scrollIntoView({ behavior: "smooth" })
                }}
                className="inline-flex items-center gap-2 text-[16px] sm:text-[18px] text-white font-medium transition-all duration-500 group relative overflow-hidden px-8 py-3 rounded-full bg-[#0066cc] hover:bg-[#0077ed] hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(0,102,204,0.5)]"
              >
                <span className="relative z-10">See my work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
              </button>

              <button
                onClick={() => setActiveSection("contact")}
                className="inline-flex items-center gap-2 text-[16px] sm:text-[18px] text-foreground font-medium transition-all duration-500 px-8 py-3 rounded-full border border-foreground/10 hover:bg-foreground/5 hover:border-foreground/20"
              >
                Contact Me
              </button>
            </div>

            <div
              className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2"
              style={{
                opacity: isLoaded ? 1 : 0,
                transition: "opacity 1s ease 1.5s",
              }}
            >
              <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-border flex justify-center p-2">
                <div className="w-1 h-2 bg-muted-foreground rounded-full animate-scroll-bounce" />
              </div>
            </div>
          </div>
        </section>

        {/* Selected Works Section */}
        <section id="selected-works" className="px-4 sm:px-6 py-12 sm:py-24 max-w-[980px] mx-auto">
          <h2
            className="text-[32px] sm:text-[40px] font-semibold tracking-[-0.015em] mb-8 sm:mb-12 text-foreground"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s",
            }}
          >
            Selected Works.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Project 1: Neon Survivors */}
            <div
              className="group relative overflow-hidden rounded-[24px] bg-card border border-white/5 p-6 hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] flex flex-col"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(40px)",
                transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 1s",
              }}
            >
              {/* Thumbnail */}
              <div className="h-48 w-full bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-xl mb-6 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 border border-white/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Gamepad2 className="w-12 h-12 text-orange-500/40" />
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-orange-400 text-[11px] font-medium uppercase tracking-wider">
                  In Development
                </div>
              </div>

              <h3 className="text-[24px] font-semibold mb-2 text-foreground">Neon Survivors</h3>
              <p className="text-[15px] sm:text-[16px] text-muted-foreground leading-relaxed mb-6">
                A fast-paced top-down roguelite. Think <em>Binding of Isaac</em> meets <em>Brotato</em>.
                Survive endless waves, stack crazy synergies, and break the game.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-[12px] font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">Godot 4</span>
                <span className="text-[12px] font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">GDScript</span>
              </div>
            </div>

            {/* Project 2: Roblox Systems */}
            <div
              className="group relative overflow-hidden rounded-[24px] bg-card border border-white/5 p-6 hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] flex flex-col"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(40px)",
                transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 1.1s",
              }}
            >
              {/* Thumbnail */}
              <div className="h-48 w-full bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-xl mb-6 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 border border-white/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code2 className="w-12 h-12 text-blue-500/40" />
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-blue-400 text-[11px] font-medium uppercase tracking-wider">
                  Showcase
                </div>
              </div>

              <h3 className="text-[24px] font-semibold mb-2 text-foreground">Roblox Systems</h3>
              <p className="text-[15px] sm:text-[16px] text-muted-foreground leading-relaxed mb-6">
                Complex mechanics including <strong>Combat Systems</strong>, <strong>Dash/Movement</strong> controllers, and <strong>Simulator</strong> loops.
                Focus on modularity and performance.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-auto">
                <span className="text-[12px] font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">LuaU</span>
                <span className="text-[12px] font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">Roblox API</span>

                <Dialog>
                  <DialogTrigger asChild>
                    <button className="flex items-center gap-1.5 ml-auto text-[12px] font-medium px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors cursor-pointer border border-blue-500/20">
                      <FileCode className="w-3.5 h-3.5" />
                      View Code
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[80vh] flex flex-col p-0 gap-0 overflow-hidden bg-[#0d1117] border-white/10">
                    <DialogHeader className="p-4 border-b border-white/10 bg-[#161b22]">
                      <DialogTitle className="flex items-center gap-2 text-white font-mono text-sm">
                        <Code2 className="w-4 h-4 text-blue-400" />
                        RunAndSlide_System.lua
                      </DialogTitle>
                    </DialogHeader>
                    <div className="flex-1 overflow-auto p-4 custom-scrollbar">
                      <pre className="font-mono text-sm leading-relaxed text-[#c9d1d9]">
                        <code>{robloxScript}</code>
                      </pre>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Project 3: Web & Scripts */}
            <div
              className="md:col-span-2 group relative overflow-hidden rounded-[24px] bg-card border border-white/5 p-6 hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] flex flex-col md:flex-row gap-6 md:items-center"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(40px)",
                transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 1.2s",
              }}
            >
              {/* Thumbnail */}
              <div className="h-48 md:w-64 md:h-48 flex-shrink-0 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 border border-white/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Terminal className="w-12 h-12 text-green-500/40" />
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-green-400 text-[11px] font-medium uppercase tracking-wider">
                  Experiments
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <h3 className="text-[24px] font-semibold mb-2 text-foreground">Web & Scripts</h3>
                <p className="text-[15px] sm:text-[16px] text-muted-foreground leading-relaxed mb-6">
                  I also build small websites and useful automation scripts. From simple HTML/CSS pages to Python utilities for data processing.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-[12px] font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">Python</span>
                  <span className="text-[12px] font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">HTML/CSS</span>
                  <span className="text-[12px] font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">Automation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-[980px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
            <div
              ref={(el) => {
                cardsRef.current[0] = el
              }}
              style={getCardStyle(0)}
              className="bg-card rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] p-8 sm:p-10 lg:p-12 min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] flex flex-col group hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.05)] transition-all duration-700"
            >
              <p className="text-muted-foreground text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider mb-2 sm:mb-3">
                Skills
              </p>
              <h3 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-[-0.015em] leading-[1.1] text-foreground mb-6 sm:mb-8">
                4 languages.
                <br />
                <span className="text-muted-foreground">Endless possibilities.</span>
              </h3>
              <div className="mt-auto space-y-4 sm:space-y-5">
                {languages.map((lang, i) => (
                  <div key={lang.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-[14px] sm:text-[15px] font-medium text-foreground">{lang.name}</span>
                      <span className="text-[14px] sm:text-[15px] text-muted-foreground">{lang.level}%</span>
                    </div>
                    <div className="h-[5px] sm:h-[6px] bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-foreground rounded-full"
                        style={{
                          width: visibleCards.includes(0) ? `${lang.level}%` : "0%",
                          transition: `width 1.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + i * 0.15}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              ref={(el) => {
                cardsRef.current[1] = el
              }}
              style={getCardStyle(1)}
              className="bg-foreground rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] p-8 sm:p-10 lg:p-12 min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] flex flex-col text-background group hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.1)] transition-all duration-700"
            >
              <p className="text-background/60 dark:text-background/60 text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider mb-2 sm:mb-3">
                Tools
              </p>
              <h3 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-[-0.015em] leading-[1.1] mb-6 sm:mb-8">
                The right tools.
                <br />
                <span className="opacity-60">For the right job.</span>
              </h3>
              <div className="mt-auto grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { name: "Godot", icon: Gamepad2 },
                  { name: "Roblox Studio", icon: Code2 },
                  { name: "VS Code", icon: Terminal },
                  { name: "Git", icon: Github },
                  { name: "Blender", icon: Cpu },
                  { name: "Figma", icon: Palette },
                ].map((tool, i) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-background/5 hover:bg-background/10 transition-all duration-500 cursor-default group/tool"
                    style={{
                      opacity: visibleCards.includes(1) ? 1 : 0,
                      transform: visibleCards.includes(1) ? "translateX(0)" : "translateX(-20px)",
                      transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + i * 0.08}s`,
                    }}
                  >
                    <div className="group-hover/tool:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-300">
                      <tool.icon className="w-4 h-4 sm:w-5 sm:h-5 opacity-60" />
                    </div>
                    <span className="text-[13px] sm:text-[15px] font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              ref={(el) => {
                cardsRef.current[2] = el
              }}
              style={getCardStyle(2)}
              className="md:col-span-2 bg-gradient-to-b from-background to-card rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] p-8 sm:p-10 lg:p-12 border border-border group hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.05)] transition-all duration-700"
            >
              <div className="max-w-[600px] mb-8 sm:mb-10">
                <p className="text-muted-foreground text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider mb-2 sm:mb-3">
                  AI Tools
                </p>
                <h3 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-[-0.015em] leading-[1.1] text-foreground mb-3 sm:mb-4">
                  AI-enhanced.
                  <br />
                  <span className="text-muted-foreground">Human-driven.</span>
                </h3>
                <p className="text-[15px] sm:text-[17px] text-muted-foreground leading-relaxed">
                  I leverage AI to accelerate creativity, not replace it. The vision is always mine.
                </p>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
                {aiTools.map((tool, i) => (
                  <div
                    key={tool.name}
                    className="text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-card/80 transition-all duration-500 cursor-default group/ai"
                    style={{
                      opacity: visibleCards.includes(2) ? 1 : 0,
                      transform: visibleCards.includes(2) ? "translateY(0) scale(1)" : "translateY(30px) scale(0.9)",
                      transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + i * 0.1}s`,
                    }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-foreground rounded-xl sm:rounded-2xl flex items-center justify-center group-hover/ai:shadow-[0_8px_16px_rgba(0,0,0,0.1)] group-hover/ai:-translate-y-1 dark:group-hover/ai:shadow-[0_8px_16px_rgba(255,255,255,0.1)] transition-all duration-500">
                      <tool.icon className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
                    </div>
                    <p className="text-[13px] sm:text-[15px] font-medium text-foreground">{tool.name}</p>
                    <p className="text-[11px] sm:text-[12px] text-muted-foreground">{tool.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <button
              ref={(el) => {
                cardsRef.current[3] = el
              }}
              style={getCardStyle(3)}
              onClick={copyDiscord}
              className="bg-[#5865F2] rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] p-8 sm:p-10 lg:p-12 text-white text-left hover:shadow-[0_20px_50px_-10px_rgba(88,101,242,0.4)] transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#5865F2] via-[#7289da] to-[#5865F2] opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[length:200%_100%] animate-gradient-shift" />
              <div className="relative z-10">
                <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 mb-4 sm:mb-6 opacity-80 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] transition-all duration-500" />
                <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider opacity-60 mb-2">
                  Discord
                </p>
                <p className="text-[22px] sm:text-[24px] lg:text-[28px] font-semibold tracking-tight flex items-center gap-2 sm:gap-3">
                  .snow_xd
                  {copied ? (
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
                  ) : (
                    <Copy className="w-5 h-5 sm:w-6 sm:h-6 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </p>
                {copied && (
                  <p className="text-[13px] sm:text-[15px] mt-2 opacity-80 animate-fade-in">Copied to clipboard</p>
                )}
              </div>
            </button>

            <a
              ref={(el) => {
                cardsRef.current[4] = el
              }}
              style={getCardStyle(4)}
              href="https://github.com/SnoW-099"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] p-8 sm:p-10 lg:p-12 text-background hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_20px_50px_-10px_rgba(255,255,255,0.2)] transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="relative z-10">
                <Github className="w-8 h-8 sm:w-10 sm:h-10 mb-4 sm:mb-6 opacity-80 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] dark:group-hover:drop-shadow-[0_0_12px_rgba(0,0,0,0.3)] transition-all duration-500" />
                <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider opacity-60 mb-2">
                  GitHub
                </p>
                <p className="text-[22px] sm:text-[24px] lg:text-[28px] font-semibold tracking-tight flex items-center gap-2 sm:gap-3">
                  SnoW-099
                  <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </p>
              </div>
            </a>
          </div>
        </section>

        <footer className="border-t border-border bg-card transition-colors duration-500">
          <div className="max-w-[980px] mx-auto px-4 sm:px-6 py-4 sm:py-5">
            <p className="text-[11px] sm:text-[12px] text-muted-foreground">Made with care using v0</p>
          </div>
        </footer>

        {isMenuOpen && (
          <div className="fixed inset-0 z-[100]">
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-md animate-fade-in"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="absolute inset-3 sm:inset-4 md:inset-x-8 md:top-8 md:bottom-8 lg:inset-x-auto lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-[800px] bg-background rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_70px_rgba(0,0,0,0.6)] animate-modal-spring-smooth border border-border/50">
              <div className="flex items-center justify-between px-5 sm:px-8 h-14 sm:h-16 border-b border-border/50 backdrop-blur-xl bg-card/50">
                <span className="text-[13px] sm:text-[15px] font-medium tracking-tight text-foreground">
                  Angel Portfolio
                </span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-secondary/80 hover:bg-border hover:rotate-90 flex items-center justify-center transition-all duration-500 group"
                >
                  <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row h-[calc(100%-56px)] sm:h-[calc(100%-64px)]">
                <div className="sm:w-48 lg:w-56 p-4 sm:p-6 sm:border-r border-border/50 flex sm:flex-col gap-2 overflow-x-auto sm:overflow-x-visible bg-card/30">
                  {sections.map((section, i) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-[13px] sm:text-[15px] font-medium transition-all duration-300 whitespace-nowrap ${activeSection === section.id
                        ? "bg-foreground text-background shadow-[0_2px_8px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.1)]"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        }`}
                      style={{
                        animation: `slideInLeft 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.05}s both`,
                      }}
                    >
                      {section.label}
                    </button>
                  ))}
                </div>

                <div className="flex-1 p-6 sm:p-8 lg:p-10 overflow-y-auto">
                  {activeSection === "about" && (
                    <div className="animate-content-fade-smooth space-y-8">
                      <div>
                        <h3 className="text-[36px] font-semibold tracking-[-0.015em] text-foreground mb-3">About Me</h3>
                        <p className="text-[17px] text-muted-foreground leading-relaxed mb-4">
                          I'm a young and passionate game developer who loves turning creative ideas into interactive
                          experiences. My journey started with curiosity and has evolved into a deep commitment to
                          crafting games that make people feel something special.
                        </p>
                        <p className="text-[17px] text-muted-foreground leading-relaxed">
                          I believe in continuous learning, embracing new technologies, and pushing the boundaries of
                          what's possible.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                          { label: "Years", value: "3+" },
                          { label: "Projects", value: "10+" },
                          { label: "Languages", value: "4" },
                          { label: "AI Tools", value: "6" },
                        ].map((stat, i) => (
                          <div
                            key={stat.label}
                            className="bg-secondary/50 rounded-2xl p-5 hover:bg-secondary transition-all duration-300 hover:scale-[1.02]"
                            style={{
                              animation: `popIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + i * 0.1}s both`,
                            }}
                          >
                            <p className="text-[32px] font-semibold text-foreground leading-none mb-1">{stat.value}</p>
                            <p className="text-[13px] text-muted-foreground">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeSection === "skills" && (
                    <div className="animate-content-fade-smooth space-y-8">
                      <h3 className="text-[36px] font-semibold tracking-[-0.015em] text-foreground mb-2">Languages</h3>
                      <div className="space-y-6">
                        {languages.map((lang, i) => (
                          <div
                            key={lang.name}
                            style={{
                              animation: `slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s both`,
                            }}
                          >
                            <div className="flex justify-between mb-3">
                              <span className="text-[17px] font-medium text-foreground">{lang.name}</span>
                              <span className="text-[17px] font-medium text-muted-foreground">{lang.level}%</span>
                            </div>
                            <div className="h-[6px] bg-secondary rounded-full overflow-hidden">
                              <div
                                className="h-full bg-foreground rounded-full transition-all duration-1000"
                                style={{ width: `${lang.level}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeSection === "tools" && (
                    <div className="animate-content-fade-smooth space-y-8">
                      <h3 className="text-[36px] font-semibold tracking-[-0.015em] text-foreground mb-2">
                        Development Tools
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { name: "Godot Engine", icon: Gamepad2 },
                          { name: "Roblox Studio", icon: Code2 },
                          { name: "VS Code", icon: Terminal },
                          { name: "Git", icon: Github },
                          { name: "Blender", icon: Cpu },
                          { name: "Figma", icon: Palette },
                        ].map((tool, i) => (
                          <div
                            key={tool.name}
                            className="flex items-center gap-3 p-4 rounded-2xl bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-[1.02] group"
                            style={{
                              animation: `popIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s both`,
                            }}
                          >
                            <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors duration-300">
                              <tool.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                            </div>
                            <span className="text-[15px] font-medium text-foreground">{tool.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeSection === "ai" && (
                    <div className="animate-content-fade-smooth space-y-8">
                      <div>
                        <h3 className="text-[36px] font-semibold tracking-[-0.015em] text-foreground mb-3">AI Tools</h3>
                        <p className="text-[17px] text-muted-foreground leading-relaxed">
                          I use AI to enhance my workflow and creativity, while maintaining full creative control.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {aiTools.map((tool, i) => (
                          <div
                            key={tool.name}
                            className="p-5 rounded-2xl bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-[1.02] group text-center"
                            style={{
                              animation: `popIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s both`,
                            }}
                          >
                            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors duration-300">
                              <tool.icon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                            </div>
                            <p className="text-[15px] font-medium text-foreground mb-1">{tool.name}</p>
                            <p className="text-[13px] text-muted-foreground">{tool.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeSection === "contact" && (
                    <div className="animate-content-fade-smooth space-y-8">
                      <div>
                        <h3 className="text-[36px] font-semibold tracking-[-0.015em] text-foreground mb-3">
                          Get in Touch
                        </h3>
                        <p className="text-[17px] text-muted-foreground leading-relaxed">
                          Feel free to reach out on Discord or check out my projects on GitHub.
                        </p>
                      </div>
                      <div className="space-y-3">
                        <a
                          href="mailto:contact@angel.dev"
                          className="w-full flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_12px_rgba(249,115,22,0.3)] hover:shadow-[0_6px_16px_rgba(249,115,22,0.4)] group"
                          style={{
                            animation: "popIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0s both",
                          }}
                        >
                          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                            <Mail className="w-6 h-6" />
                          </div>
                          <div className="flex-1 text-left">
                            <p className="text-[15px] font-semibold">Email Me</p>
                            <p className="text-[14px] opacity-80">contact@angel.dev</p>
                          </div>
                          <ExternalLink className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </a>

                        <button
                          onClick={copyDiscord}
                          className="w-full flex items-center gap-4 p-5 rounded-2xl bg-[#5865F2] hover:bg-[#4752c4] text-white transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_12px_rgba(88,101,242,0.3)] hover:shadow-[0_6px_16px_rgba(88,101,242,0.4)] group"
                          style={{
                            animation: "popIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both",
                          }}
                        >
                          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                            <MessageCircle className="w-6 h-6" />
                          </div>
                          <div className="flex-1 text-left">
                            <p className="text-[15px] font-semibold">Discord</p>
                            <p className="text-[14px] opacity-80">.snow_xd</p>
                          </div>
                          {copied ? (
                            <Check className="w-5 h-5 animate-bounce" />
                          ) : (
                            <Copy className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                          )}
                        </button>
                        <a
                          href="https://github.com/SnoW-099"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center gap-4 p-5 rounded-2xl bg-foreground hover:bg-foreground/90 text-background transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_12px_rgba(255,255,255,0.1)] dark:hover:shadow-[0_6px_16px_rgba(255,255,255,0.15)] group"
                          style={{
                            animation: "popIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both",
                          }}
                        >
                          <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors">
                            <Github className="w-6 h-6" />
                          </div>
                          <div className="flex-1 text-left">
                            <p className="text-[15px] font-semibold">GitHub</p>
                            <p className="text-[14px] opacity-80">SnoW-099</p>
                          </div>
                          <ExternalLink className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
