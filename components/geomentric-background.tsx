export function GeometricBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated diagonal lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diagonal" width="50" height="50" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="50" stroke="#FFD700" strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal)" />
      </svg>

      {/* Large angular background shapes */}
      <div className="absolute -top-40 -right-40 w-96 h-96 border-4 border-bright-blue/20 -skew-x-12 rotate-45" />
      <div className="absolute top-1/3 -left-48 w-80 h-80 border-2 border-light-blue/15 skew-y-12" />
      <div className="absolute bottom-1/4 right-20 w-96 h-96 border-4 border-bright-yellow/10 -rotate-12 -skew-y-6" />

      {/* Corner accent triangles */}
      <div className="absolute top-0 left-0 w-0 h-0 border-l-[200px] border-l-bright-blue/10 border-b-[200px] border-b-transparent" />
      <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[250px] border-r-bright-yellow/5 border-t-[250px] border-t-transparent" />

      {/* Center circular grid effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
        <svg className="w-full h-full opacity-5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="none" stroke="#0099FF" strokeWidth="1" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#0099FF" strokeWidth="1" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="#0099FF" strokeWidth="1" />
          </svg>
      </div>
    </div>
  )
}
