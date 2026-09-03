import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import Button from './Button'
import { products, categories } from '../data/products'

const initial = { name: '', company: '', email: '', phone: '', product: '', quantity: '', message: '' }

const fieldClass =
  'w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-forest placeholder:text-slate/60 transition-colors focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/30 aria-[invalid=true]:border-red-500'

function Field({ label, id, error, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-forest">
        {label}
        {required && <span className="ml-0.5 text-sage-dark">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.company.trim()) errors.company = 'Please enter your company name.'
  if (!values.email.trim()) errors.email = 'Please enter your email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email address.'
  if (!values.product) errors.product = 'Please select a product.'
  if (!values.message.trim()) errors.message = 'Please describe your requirement.'
  return errors
}

export default function InquiryForm({ defaultProduct = '' }) {
  const [values, setValues] = useState({ ...initial, product: defaultProduct })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const update = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    setStatus('submitting')
    // Frontend only: replace this block with a POST to your backend / form service.
    // eslint-disable-next-line no-console
    console.info('Inquiry payload', values)
    await new Promise((r) => setTimeout(r, 700))
    setStatus('success')
  }

  if (status === 'success') {
    const product = products.find((p) => p.slug === values.product)
    return (
      <div className="rounded-lg border border-sage/40 bg-white p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-sage-dark" strokeWidth={1.5} />
        <h3 className="mt-4 text-xl font-bold text-forest">Inquiry received</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate">
          Thank you, {values.name.split(' ')[0]}. We have noted your inquiry
          {product ? ` for ${product.name}` : ''} and will get back to you at {values.email}.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setValues({ ...initial })
            setStatus('idle')
          }}
        >
          Send another inquiry
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" id="name" required error={errors.name}>
          <input id="name" name="name" value={values.name} onChange={update} className={fieldClass} placeholder="Your full name" aria-invalid={!!errors.name} autoComplete="name" />
        </Field>
        <Field label="Company" id="company" required error={errors.company}>
          <input id="company" name="company" value={values.company} onChange={update} className={fieldClass} placeholder="Company name" aria-invalid={!!errors.company} autoComplete="organization" />
        </Field>
        <Field label="Email" id="email" required error={errors.email}>
          <input id="email" name="email" type="email" value={values.email} onChange={update} className={fieldClass} placeholder="you@company.com" aria-invalid={!!errors.email} autoComplete="email" />
        </Field>
        <Field label="Phone" id="phone" error={errors.phone}>
          <input id="phone" name="phone" type="tel" value={values.phone} onChange={update} className={fieldClass} placeholder="Include country code" autoComplete="tel" />
        </Field>
        <Field label="Product" id="product" required error={errors.product}>
          <select id="product" name="product" value={values.product} onChange={update} className={fieldClass} aria-invalid={!!errors.product}>
            <option value="">Select a product</option>
            {categories.map((c) => (
              <optgroup key={c.slug} label={c.name}>
                {products
                  .filter((p) => p.category === c.slug)
                  .map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.name}
                    </option>
                  ))}
              </optgroup>
            ))}
            <option value="other">Other / multiple products</option>
          </select>
        </Field>
        <Field label="Quantity" id="quantity" error={errors.quantity}>
          <input id="quantity" name="quantity" value={values.quantity} onChange={update} className={fieldClass} placeholder="e.g. 500 units, 2 containers" />
        </Field>
      </div>
      <Field label="Message" id="message" required error={errors.message}>
        <textarea id="message" name="message" rows={5} value={values.message} onChange={update} className={fieldClass} placeholder="Specifications, destination, packaging, timelines or any other requirements." aria-invalid={!!errors.message} />
      </Field>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate">Fields marked * are required.</p>
        <Button type="submit" variant="primary" size="lg" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send Inquiry'}
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </form>
  )
}
