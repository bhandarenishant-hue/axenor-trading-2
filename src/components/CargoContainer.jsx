// Stylised shipping container in brand colours with the site logo on its side panel.
export default function CargoContainer({ className = '' }) {
  return (
    <svg viewBox="0 0 340 190" className={className} role="img" aria-label="Axenor Trading cargo container">
      <defs>
        <linearGradient id="cc-side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1B4A78" />
          <stop offset="1" stopColor="#12365A" />
        </linearGradient>
        <linearGradient id="cc-top" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2A6398" />
          <stop offset="1" stopColor="#1F5283" />
        </linearGradient>
        <pattern id="cc-ribs" width="14" height="10" patternUnits="userSpaceOnUse">
          <rect width="14" height="10" fill="transparent" />
          <rect x="0" width="5" height="10" fill="rgba(0,0,0,0.18)" />
          <rect x="5" width="2" height="10" fill="rgba(255,255,255,0.08)" />
        </pattern>
      </defs>

      {/* Top face */}
      <polygon points="24,58 264,58 304,28 64,28" fill="url(#cc-top)" />
      <polygon points="24,58 264,58 304,28 64,28" fill="rgba(255,255,255,0.06)" />

      {/* End face with doors */}
      <polygon points="264,58 304,28 304,142 264,172" fill="#0B1F33" />
      <line x1="277" y1="50" x2="277" y2="162" stroke="#C49A5A" strokeWidth="2.5" />
      <line x1="291" y1="40" x2="291" y2="152" stroke="#C49A5A" strokeWidth="2.5" />
      <rect x="273" y="96" width="8" height="10" fill="#C49A5A" />
      <rect x="287" y="88" width="8" height="10" fill="#C49A5A" />

      {/* Side face */}
      <rect x="24" y="58" width="240" height="114" fill="url(#cc-side)" />
      <rect x="24" y="58" width="240" height="114" fill="url(#cc-ribs)" />
      {/* Smooth plate for the logo */}
      <rect x="62" y="84" width="164" height="62" rx="4" fill="#0B1F33" stroke="#C49A5A" strokeWidth="1.5" />
      <image href="/brand/logo-dark.png" x="72" y="92" width="144" height="46" preserveAspectRatio="xMidYMid meet" />

      {/* Corner castings */}
      <rect x="20" y="54" width="10" height="10" fill="#C49A5A" />
      <rect x="20" y="166" width="10" height="10" fill="#C49A5A" />
      <rect x="258" y="54" width="10" height="10" fill="#C49A5A" />
      <rect x="258" y="166" width="10" height="10" fill="#C49A5A" />
      <rect x="300" y="24" width="8" height="8" fill="#C49A5A" />
      <rect x="300" y="138" width="8" height="8" fill="#C49A5A" />

      {/* Bottom rail */}
      <rect x="24" y="172" width="240" height="6" fill="#071524" />
    </svg>
  )
}
