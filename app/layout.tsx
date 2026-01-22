import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Angel | Code Developer",
  description: "Young game developer crafting interactive experiences with Python, LuaU, Godot and Roblox Studio.",
  generator: "Next.js",
  keywords: ["Game Developer", "Roblox", "Godot", "LuaU", "Python", "Portfolio", "Web Development"],
  authors: [{ name: "Angel" }],
  creator: "Angel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portofolio-snow.netlify.app/",
    title: "Angel | Code Developer Portfolio",
    description: "Explore my game development projects, from Roblox systems to Godot roguelikes.",
    siteName: "Angel's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel | Code Developer",
    description: "Check out my game dev portfolio!",
    creator: "@Snow_099",
  },
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
