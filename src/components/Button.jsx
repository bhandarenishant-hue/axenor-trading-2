import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-navy text-cream hover:bg-navy-light',
  gold: 'bg-gold text-navy hover:bg-gold-light',
  outline: 'border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-cream',
  ghost: 'text-navy hover:text-gold-dark',
  inverse: 'bg-cream text-navy hover:bg-white',
}

const sizes = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-[15px]',
}

export default function Button({ to, href, variant = 'primary', size = 'md', className = '', children, ...rest }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-tight transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
