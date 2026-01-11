import { Mail, MapPin, Send } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-16 sm:py-32 border-t border-[#0099FF] overflow-hidden">
      <div className="absolute inset-0 bg-[#001A4D]/40 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 sm:w-16 h-0.5 bg-[#FFD700]" />
          <span className="text-[#FFD700] font-bold text-xs sm:text-sm tracking-widest">GET IN TOUCH</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-12 sm:mb-16 text-balance">
          <span className="text-white">LET&apos;S</span> <span className="text-[#FFD700]">CONNECT</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16">
          {/* Contact info */}
          <div className="space-y-6 sm:space-y-8">
            <p className="text-[#87CEEB] text-base sm:text-lg leading-relaxed max-w-md">
              I&apos;m always interested in hearing about new projects, creative ideas, or opportunities to be part of
              your vision.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#0099FF] flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="sm:w-5 sm:h-5 text-[#FFD700]" />
                </div>
                <div>
                  <div className="text-xs text-[#FFD700] tracking-wider mb-1 font-bold">EMAIL</div>
                  <Link
                    href="mailto:srssk2005@gmail.com"
                    className="text-white hover:text-[#FFD700] transition-colors text-sm sm:text-base"
                  >
                    srssk2005@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#0099FF] flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="sm:w-5 sm:h-5 text-[#FFD700]" />
                </div>
                <div>
                  <div className="text-xs text-[#FFD700] tracking-wider mb-1 font-bold">LOCATION</div>
                  <span className="text-white text-sm sm:text-base">Chennai, TamilNadu, India</span>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="relative w-full h-16 sm:h-24 mt-8 sm:mt-12">
              <div className="absolute left-0 top-0 w-20 sm:w-32 h-0.5 bg-[#FFD700]" />
              <div className="absolute left-0 top-0 w-0.5 h-12 sm:h-16 bg-[#FFD700]" />
              <div className="absolute left-3 sm:left-4 top-3 sm:top-4 text-4xl sm:text-6xl font-black text-[#FFD700]/10">
                03
              </div>
            </div>
          </div>

          <div className="relative h-full">
            {/* Geometric Background for the cards */}
            <div className="absolute -inset-4 border border-[#0099FF]/40 -skew-x-2 bg-[#001A4D]/60" />
            
            <div className="pl-2 pr-2 relative space-y-6">
                {/* GitHub Streak Module */}
                <div className="bg-[#002D66] border-2 border-[#0099FF] p-4 group hover:border-[#FFD700] transition-colors">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-[#FFD700] font-black italic tracking-tighter">GITHUB ACTIVITY</h3>
                    <div className="text-[10px] text-[#87CEEB] animate-pulse">SYNCHRONIZING...</div>
                </div>
                <img 
                    src="https://github-readme-streak-stats.herokuapp.com/?user=RamSivaSundaraKarthykeyan&theme=tokyonight&background=001A4D&stroke=0099FF&ring=FFD700&fire=FFD700&currStreakNum=87CEEB" 
                    alt="GitHub Streak" 
                    className="w-full h-auto"
                />
                </div>

                {/* LeetCode Stats Module */}
                <div className="bg-[#002D66] border-2 border-[#0099FF] p-4 group hover:border-[#FFD700] transition-colors">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-[#FFD700] font-black italic tracking-tighter">LEETCODE STATS</h3>
                    <div className="text-[10px] text-[#87CEEB]">RANK: BEGINNER</div>
                </div>
                <img 
                    src="https://leetcard.jacoblin.cool/RamSivaSundaraKarthykeyanS?theme=dark&font=Space%20Mono&ext=activity" 
                    alt="LeetCode Stats" 
                    className="w-full h-auto brightness-90 contrast-110" 
                />
                </div>

                {/* Quick Action Button */}
                <Link
                href="https://github.com/RamSivaSundaraKarthykeyan"
                target="_blank"
                className="block w-full py-3 bg-[#FFD700] text-[#001A4D] font-black text-center tracking-widest hover:bg-white transition-all transform hover:-translate-y-1"
                >
                VIEW FULL INTEL (GITHUB)
                </Link>
                <Link
                href="https://leetcode.com/u/RamSivaSundaraKarthykeyanS/"
                target="_blank"
                className="block w-full py-3 bg-[#FFD700] text-[#001A4D] font-black text-center tracking-widest hover:bg-white transition-all transform hover:-translate-y-1"
                >
                VIEW FULL INTEL (LEETCODE)
                </Link>
            </div>
            </div>
        </div>

        {/* Footer */}
        <div className="mt-16 sm:mt-32 pt-6 sm:pt-8 border-t border-[#0099FF] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <span className="text-[#87CEEB]">Built with</span>
            <span className="text-[#FFD700] font-bold">Next.js</span>
            <span className="text-[#87CEEB]">&</span>
            <span className="text-[#FFD700] font-bold">Tailwind</span>
          </div>
        </div>
      </div>
    </section>
  )
}
