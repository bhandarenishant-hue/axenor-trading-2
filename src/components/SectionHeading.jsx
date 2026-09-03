export default function SectionHeading({ eyebrow, title, description, align = 'left', light = false, className = '' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${light ? 'text-sage-light' : 'text-sage-dark'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-bold leading-tight sm:text-4xl ${light ? 'text-ivory' : 'text-forest'}`}>{title}</h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-ivory/70' : 'text-slate'}`}>{description}</p>
      )}
    </div>
  )
}
