import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Container from './Container'
import Button from './Button'
import Logo from './Logo'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `relative py-1 text-sm font-medium tracking-tight transition-colors ${
      isActive ? 'text-navy' : 'text-slate hover:text-navy'
    } after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300 ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'border-line bg-cream/90 backdrop-blur-md' : 'border-transparent bg-cream'
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <Logo height="h-10 sm:h-11" />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/contact" variant="primary">
            Send Inquiry
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-line bg-cream transition-[max-height] duration-300 md:hidden ${
          open ? 'max-h-96' : 'max-h-0 border-t-0'
        }`}
      >
        <Container className="flex flex-col gap-1 py-4">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={close}
              className={({ isActive }) =>
                `rounded-md px-3 py-2.5 text-base font-medium ${isActive ? 'bg-cream-dark text-navy' : 'text-slate'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Button to="/contact" variant="primary" className="mt-3" onClick={close}>
            Send Inquiry
          </Button>
        </Container>
      </div>
    </header>
  )
}
