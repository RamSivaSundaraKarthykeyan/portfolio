"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce with real-time inventory, payment processing, and admin dashboard.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: "/modern-ecommerce-dashboard-dark-blue-theme.jpg",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team features.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "/task-management-app-dark-interface.jpg",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "AI-powered content creation tool using OpenAI APIs with custom fine-tuning.",
    tags: ["Python", "FastAPI", "OpenAI", "React"],
    image: "/ai-content-generation-interface-dark-mode.jpg",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 4,
    title: "Real-time Analytics",
    description: "Dashboard for visualizing real-time data streams with custom chart components.",
    tags: ["Vue.js", "D3.js", "WebSockets", "Redis"],
    image: "/analytics-dashboard-dark-blue-charts.jpg",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
]

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-16 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20 relative">
        {/* Background accent */}
        <div className="absolute -left-10 sm:-left-20 -top-10 sm:-top-20 w-64 sm:w-96 h-64 sm:h-96 bg-[#001A4D]/60 -skew-x-12 -z-10" />
        <div className="absolute -left-20 sm:-left-20 -top-20 sm:-top-20 w-96 h-96 bg-[#0099FF]/5 -skew-x-12 -z-20" />

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 sm:w-24 h-1 sm:h-2 bg-[#FFD700] -skew-x-6" />
          <span className="text-[#FFD700] font-bold text-xs sm:text-sm tracking-widest">SELECTED WORK</span>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-balance mb-4">
          <span className="text-white">MY</span>
          <br />
          <span className="text-[#FFD700] -skew-x-3 inline-block">PROJECTS</span>
        </h2>
      </div>

      {/* Projects grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Background accent layer */}
              <div
                className={`absolute -inset-4 sm:-inset-6 -skew-x-12 ${index % 2 === 0 ? "skew-y-6" : "-skew-y-6"} opacity-0 group-hover:opacity-100 transition-opacity ${index % 2 === 0 ? "bg-[#0099FF]/10" : "bg-[#87CEEB]/10"} -z-10`}
              />

              {/* Card container with border */}
              <div className="relative bg-[#002D66] border-3 sm:border-4 border-[#0099FF] overflow-hidden transition-all duration-300 group-hover:border-[#FFD700] group-hover:-skew-x-1">
                {/* Project number - large background */}
                <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 z-0">
                  <span className="text-6xl sm:text-9xl font-black text-[#FFD700]/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-[#0099FF] -skew-x-6" />
                      <div className="relative bg-[#FFD700] px-2 sm:px-3 py-1 text-[#001A4D] text-xs font-black tracking-widest">
                        FEATURED
                      </div>
                    </div>
                  </div>
                )}

                {/* Image container */}
                <div className="relative h-48 sm:h-64 overflow-hidden bg-[#001A4D]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001A4D]/20 to-[#001A4D]/80" />

                  {/* Hover overlay */}
                  <div
                    className={`absolute inset-0 bg-[#0099FF] flex items-center justify-center gap-4 sm:gap-6 transition-opacity duration-300 ${
                      hoveredProject === project.id ? "opacity-90" : "opacity-0"
                    }`}
                  >
                    <Link href={project.github} target="_blank" className="relative group/link">
                      <div className="absolute -inset-2 bg-[#FFD700] -skew-x-6" />
                      <div className="relative w-12 sm:w-14 h-12 sm:h-14 bg-[#001A4D] flex items-center justify-center border-2 border-[#FFD700]">
                        <Github size={20} className="sm:w-6 sm:h-6 text-[#FFD700]" />
                      </div>
                    </Link>
                    <Link href={project.live} target="_blank" className="relative group/link">
                      <div className="absolute -inset-2 bg-[#FFD700] -skew-x-6" />
                      <div className="relative w-12 sm:w-14 h-12 sm:h-14 bg-[#001A4D] flex items-center justify-center border-2 border-[#FFD700]">
                        <ExternalLink size={20} className="sm:w-6 sm:h-6 text-[#FFD700]" />
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-4 sm:p-6 z-10">
                  <h3 className="text-lg sm:text-2xl font-black text-white mb-2 sm:mb-3 group-hover:text-[#FFD700] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#87CEEB] text-sm leading-relaxed mb-4 sm:mb-6">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 sm:px-3 py-1 bg-[#0099FF]/30 text-[#FFD700] text-xs font-bold border border-[#0099FF] -skew-x-3"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[40px] sm:border-b-[60px] border-b-[#FFD700]/20 border-r-[40px] sm:border-r-[60px] border-r-transparent group-hover:border-b-[#FFD700]/40 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
