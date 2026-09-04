import { Cpu, Lamp, Layers, Package, Shirt, ShoppingBasket } from 'lucide-react'

const icons = { Layers, Shirt, ShoppingBasket, Lamp, Cpu }

export default function CategoryIcon({ name, className = 'h-5 w-5', strokeWidth = 1.6 }) {
  const Icon = icons[name] || Package
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden="true" />
}
