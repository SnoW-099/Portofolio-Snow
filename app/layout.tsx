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
  title: "Angel | Game Developer",
  description: "Young game developer crafting interactive experiences with Python, LuaU, Godot and Roblox Studio.",
  generator: "Next.js",
  keywords: ["Game Developer", "Roblox", "Godot", "LuaU", "Python", "Portfolio", "Web Development"],
  authors: [{ name: "Angel" }],
  creator: "Angel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portofolio-snow.netlify.app/",
    title: "Angel | Game Developer Portfolio",
    description: "Explore my game development projects, from Roblox systems to Godot roguelikes.",
    siteName: "Angel's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel | Game Developer",
    description: "Check out my game dev portfolio!",
    creator: "@Snow_099",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
