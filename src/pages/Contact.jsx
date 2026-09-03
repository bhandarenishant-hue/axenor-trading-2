import { useSearchParams } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import Container from '../components/Container'
import InquiryForm from '../components/InquiryForm'
import Reveal from '../components/Reveal'
import { company } from '../data/company'
import { getProduct } from '../data/products'

export default function Contact() {
  const [params] = useSearchParams()
  const productSlug = params.get('product') || ''
  const product = getProduct(productSlug)
  const { contact, social } = company
  const hasContact = contact.address || contact.phone || contact.email || contact.registeredAddress

  return (
    <>
      <section className="border-b border-line bg-white">
        <Container className="py-14 lg:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">Contact</p>
          <h1 className="text-4xl font-extrabold leading-tight text-forest sm:text-5xl">Send an inquiry</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate">
            {product
              ? `Tell us your requirement for ${product.name}. Include quantity, destination and any specifications.`
              : 'Share the product, quantity, destination and specifications. We will respond with sourcing options and a quotation.'}
          </p>
        </Container>
      </section>

      <section className="py-14 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="rounded-lg border border-line bg-white p-6 sm:p-8">
              {/* key remounts the form when the preselected product changes */}
              <InquiryForm key={productSlug} defaultProduct={product ? product.slug : ''} />
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-5">
            <div className="rounded-lg bg-forest p-8 text-ivory">
              <h2 className="text-xl font-bold">What to include</h2>
              <ul className="mt-5 space-y-3 text-sm text-ivory/75">
                <li className="flex gap-3"><span className="text-sage">01</span>Product name and the category it falls under.</li>
                <li className="flex gap-3"><span className="text-sage">02</span>Required quantity and target order frequency.</li>
                <li className="flex gap-3"><span className="text-sage">03</span>Destination country or port.</li>
                <li className="flex gap-3"><span className="text-sage">04</span>Specifications, packaging or labelling requirements.</li>
                <li className="flex gap-3"><span className="text-sage">05</span>Timelines, if any.</li>
              </ul>
            </div>

            {hasContact && (
              <div className="mt-6 rounded-lg border border-line bg-white p-8">
                <h2 className="text-xl font-bold text-forest">Reach us directly</h2>
                <ul className="mt-5 space-y-4 text-sm text-forest">
                  {contact.address && (
                    <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage-dark" /><span>{contact.address}</span></li>
                  )}
                  {!contact.address && contact.registeredAddress && (
                    <li className="flex gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage-dark" />
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-sage-dark">
                          Registered office
                        </span>
                        {contact.registeredAddress.map((line) => (
                          <span key={line} className="block">{line}</span>
                        ))}
                      </span>
                    </li>
                  )}
                  {contact.phone && (
                    <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-sage-dark" /><a href={`tel:${contact.phone}`} className="hover:text-sage-dark">{contact.phone}</a></li>
                  )}
                  {contact.email && (
                    <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-sage-dark" /><a href={`mailto:${contact.email}`} className="hover:text-sage-dark">{contact.email}</a></li>
                  )}
                </ul>
                {social.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-4 border-t border-line pt-5">
                    {social.map((s) => (
                      <li key={s.href}>
                        <a href={s.href} target="_blank" rel="noreferrer" className="text-sm font-medium text-forest hover:text-sage-dark">{s.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </Reveal>
        </Container>
      </section>
    </>
  )
}
