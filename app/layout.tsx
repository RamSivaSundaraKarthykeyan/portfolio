import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Space_Mono } from "next/font/google"

// Initialize fonts
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Portfolio | Fullstack Developer",
  description: "Personal portfolio showcasing fullstack and frontend development projects",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={spaceMono.className}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
