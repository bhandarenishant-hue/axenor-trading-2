import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import Container from './Container'
import Logo from './Logo'
import { company } from '../data/company'
import { categories } from '../data/products'

export default function Footer() {
  const { contact, social } = company
  const hasContact = contact.address || contact.phone || contact.email
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest text-ivory">
      <Container className="grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo light height="h-12" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/65">{company.about}</p>
          <p className="mt-4 font-heading text-sm font-semibold text-sage-light">{company.tagline}</p>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-light">Products</h4>
          <ul className="mt-5 space-y-3">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to={`/products?category=${c.slug}`} className="text-sm text-ivory/75 transition-colors hover:text-ivory">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-light">Company</h4>
          <ul className="mt-5 space-y-3">
            <li><Link to="/about" className="text-sm text-ivory/75 transition-colors hover:text-ivory">About</Link></li>
            <li><Link to="/products" className="text-sm text-ivory/75 transition-colors hover:text-ivory">Catalog</Link></li>
            <li><Link to="/contact" className="text-sm text-ivory/75 transition-colors hover:text-ivory">Send Inquiry</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-light">Contact</h4>
          {hasContact ? (
            <ul className="mt-5 space-y-3 text-sm text-ivory/75">
              {contact.address && (
                <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage" /><span>{contact.address}</span></li>
              )}
              {contact.phone && (
                <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-sage" /><a href={`tel:${contact.phone}`} className="hover:text-ivory">{contact.phone}</a></li>
              )}
              {contact.email && (
                <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-sage" /><a href={`mailto:${contact.email}`} className="hover:text-ivory">{contact.email}</a></li>
              )}
            </ul>
          ) : (
            <p className="mt-5 text-sm leading-relaxed text-ivory/65">
              Use the inquiry form to reach our team with product requirements.
            </p>
          )}
          {social.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-4">
              {social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="text-sm text-ivory/75 hover:text-ivory">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>

      <div className="border-t border-ivory/10">
        <Container className="flex flex-col items-start justify-between gap-2 py-6 text-xs text-ivory/50 sm:flex-row sm:items-center">
          <p>© {year} {company.name}. All rights reserved.</p>
          <p>Export-oriented B2B trading from {company.origin}.</p>
        </Container>
      </div>
    </footer>
  )
}
