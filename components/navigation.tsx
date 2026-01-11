"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-90 bg-[#001A4D]/98 backdrop-blur-lg border-b-3 sm:border-b-4 border-[#0099FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="relative">
              {/* Outer skewed border */}
              <div className="absolute -inset-1 bg-[#FFD700] -skew-x-12" />
              {/* Inner content */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-[#0099FF] flex items-center justify-center -skew-x-12">
                <span className="text-[#FFD700] font-black text-sm sm:text-lg skew-x-12">P3</span>
              </div>
            </div>
            <span className="text-[#FFD700] font-bold tracking-[0.2em] hidden sm:block text-sm sm:text-lg">CODE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-[#87CEEB] hover:text-[#FFD700] transition-all font-bold tracking-widest text-xs group overflow-hidden"
              >
                <span className="block">{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#FFD700] group-hover:w-full transition-all duration-300 -skew-x-6" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#87CEEB] hover:text-[#FFD700] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-3 sm:mt-4 pb-3 sm:pb-4 border-t-2 border-[#0099FF] pt-3 sm:pt-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#87CEEB] hover:text-[#FFD700] hover:bg-[#002D66] px-3 sm:px-4 py-2 sm:py-3 transition-colors font-bold tracking-widest text-xs sm:text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
