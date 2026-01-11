import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
    const LeetCodeIcon = ({ className, size }: { className?: string, size?: number }) => (
  <div className={className} style={{ width: size, height: size }}>
    <Image 
      src="/leetcode.svg" 
      alt="LeetCode" 
      width={size} 
      height={size} 
      // This filter makes the black SVG match your #87CEEB color 
      // and allows it to transition with the group hover
      className="group-hover:brightness-100 group-hover:invert-0 group-hover:sepia-0 group-hover:hue-rotate-0 group-hover:saturate-100 transition-all"
    />
  </div>
);
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center relative">
          {/* Left content with diagonal background */}
          <div className="relative space-y-6 sm:space-y-8 z-10">
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-[#001A4D]/95 via-[#001A4D]/90 to-[#001A4D]/85 -skew-y-2 -z-10" />
            <div className="absolute -inset-12 bg-[#0099FF]/5 -skew-y-6 -skew-x-12 -z-20" />

            {/* Role tag with line */}
            <div className="flex items-center gap-3">
              <div className="w-16 sm:w-20 h-1 bg-[#FFD700] -skew-x-6" />
              <span className="text-[#FFD700] font-bold text-xs sm:text-sm tracking-widest">FULLSTACK DEVELOPER</span>
              <div className="w-1 sm:w-1 md:w-1 h-6 bg-[#FFD700]" />
              <span className="text-[#FFD700] font-bold text-xs sm:text-sm tracking-widest">FRONTEND DEVELOPER</span>
              <div className="w-16 sm:w-20 h-1 bg-[#FFD700] -skew-x-6" />
            </div>

            {/* Name with split colors */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-none mb-2">
                <span className="text-[#FFD700] block -skew-x-3 inline-block">RAM</span>
                <span className="text-white block">SIVA</span>
                <span className="text-white block">SUNDARA</span>
                <span className="text-white block">KARTHYKEYAN</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-[#87CEEB] text-base sm:text-lg leading-relaxed max-w-2xl relative z-10">
             <span className="text-[#FFD700] font-bold">Fullstack Developer</span> specializing in 
                crafting seamless <span className="text-[#FFD700] font-bold">Frontend</span> experiences. 
                From robust server-side logic to pixel-perfect interfaces, I leverage{" "}
                <span className="text-[#FFD700] font-bold">Next.js</span>,{" "}
                <span className="text-[#FFD700] font-bold">React</span>, and{" "}
                <span className="text-[#FFD700] font-bold">TypeScript</span> to build scalable, 
                production-ready solutions.
            </p>

            {/* Stats with extreme skew */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-[#0099FF] -skew-x-12 -skew-y-3" />
                <div className="relative bg-[#001A4D] px-4 sm:px-6 py-3 sm:py-4 border-2 border-[#FFD700]">
                  <div className="text-3xl sm:text-4xl font-black text-[#FFD700]">3+</div>
                  <div className="text-xs text-[#FFD700] tracking-widest font-bold">YEARS</div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-2 bg-[#87CEEB] -skew-x-12 skew-y-3" />
                <div className="relative bg-[#001A4D] px-4 sm:px-6 py-3 sm:py-4 border-2 border-[#FFD700]">
                  <div className="text-3xl sm:text-4xl font-black text-[#FFD700]">5+</div>
                  <div className="text-xs text-[#FFD700] tracking-widest font-bold">PROJECTS</div>
                </div>
              </div>
            </div>

            {/* Social buttons */}
            <div className="flex gap-3 sm:gap-4 pt-3 sm:pt-4">
              {[
                { icon: Github, label: "GitHub", url: "https://github.com/RamSivaSundaraKarthykeyan" },
                { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/ram-siva-sundara-karthykeyan/" },
                { icon: LeetCodeIcon, label: "LeetCode", url: "https://leetcode.com/u/RamSivaSundaraKarthykeyanS/" },
                { icon: Mail, label: "Email", url: "mailto:srssk2005@gmail.com" },
              ].map(({ icon: Icon, label, url }) => (
                <Link key={label} href={url} target="_blank" className="group relative" title={label}>
                  <div className="absolute -inset-1 bg-[#0099FF] -skew-x-6 group-hover:bg-[#FFD700] transition-colors" />
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-[#001A4D] flex items-center justify-center border-2 border-[#FFD700] hover:border-[#87CEEB] transition-colors">
                    <Icon
                      size={18}
                      className="sm:w-5 sm:h-5 text-[#87CEEB] group-hover:text-[#FFD700] transition-colors"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right portrait with extreme angular frame */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-64 h-80 sm:w-80 sm:h-96">
              {/* Outer geometric frame layers */}
              <div className="absolute -inset-6 sm:-inset-8 bg-[#0099FF] -skew-x-12 skew-y-6" />
              <div className="absolute -inset-4 sm:-inset-6 bg-[#FFD700] -skew-y-6 -skew-x-6" />
              <div className="absolute -inset-2 sm:-inset-4 border-4 border-[#87CEEB] -skew-x-6" />

              {/* Accent bars */}
              <div className="absolute -left-6 sm:-left-12 top-0 w-2 sm:w-3 h-40 sm:h-48 bg-[#FFD700] -skew-x-12" />
              <div className="absolute -right-6 sm:-right-12 bottom-0 w-2 sm:w-3 h-40 sm:h-48 bg-[#0099FF] -skew-y-12" />

              {/* Image container */}
              <div className="relative w-full h-full bg-[#002D66] overflow-hidden border-4 border-[#FFD700]">
                <Image
                  src="/portrait6.png"
                  alt="Portrait"
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001A4D]/80 via-transparent to-transparent" />

                {/* Corner brackets */}
                <div className="absolute top-2 left-2 w-4 sm:w-6 h-4 sm:h-6 border-t-3 border-l-3 border-[#FFD700]" />
                <div className="absolute bottom-2 right-2 w-4 sm:w-6 h-4 sm:h-6 border-b-3 border-r-3 border-[#87CEEB]" />
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2">
                <div className="relative">
                  <div className="absolute -inset-1 bg-[#0099FF] -skew-x-12" />
                  <div className="relative bg-[#FFD700] px-4 sm:px-6 py-1 sm:py-2 text-[#001A4D] font-black text-xs tracking-widest">
                    AVAILABLE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3 z-80">
        <span className="text-[#FFD700] text-xs tracking-widest font-bold">↓ SCROLL ↓</span>
        <div className="w-1 h-10 sm:h-12 bg-gradient-to-b from-[#FFD700] via-[#0099FF] to-transparent" />
      </div>
    </section>
  )
}
