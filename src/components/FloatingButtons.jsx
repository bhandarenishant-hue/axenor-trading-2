import { useEffect, useState } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { company } from '../data/company'

export default function FloatingButtons() {
  const [show, setShow] = useState(false)
  const whatsapp = company.contact.whatsapp

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {whatsapp && (
        <a
          href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      )}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 bg-navy text-gold shadow-lg transition-all duration-300 hover:bg-gold hover:text-navy ${
          show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  )
}
