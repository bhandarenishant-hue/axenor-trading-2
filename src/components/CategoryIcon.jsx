import { Cpu, FlaskConical, Lamp, Layers, Lightbulb, Package, Shirt, ShoppingBasket } from 'lucide-react'

const icons = { Layers, Shirt, ShoppingBasket, Lamp, Cpu, FlaskConical, Lightbulb }

export default function CategoryIcon({ name, className = 'h-5 w-5', strokeWidth = 1.6 }) {
  const Icon = icons[name] || Package
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden="true" />
}
