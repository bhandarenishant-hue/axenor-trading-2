import Container from '../components/Container'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <section className="py-28">
      <Container className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">404</p>
        <h1 className="mt-3 text-4xl font-extrabold text-navy">Page not found</h1>
        <p className="mt-3 text-slate">The page you are looking for does not exist or has moved.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button to="/" variant="primary">Go home</Button>
          <Button to="/products" variant="outline">Browse products</Button>
        </div>
      </Container>
    </section>
  )
}
