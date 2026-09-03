import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-forest text-ivory hover:bg-forest-light',
  sage: 'bg-sage text-forest hover:bg-sage-light',
  outline: 'border border-forest/25 text-forest hover:border-forest hover:bg-forest hover:text-ivory',
  ghost: 'text-forest hover:text-sage-dark',
  inverse: 'bg-ivory text-forest hover:bg-white',
}

const sizes = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-[15px]',
}

export default function Button({ to, href, variant = 'primary', size = 'md', className = '', children, ...rest }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-tight transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`

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
