import { Shirt, Leaf, Wrench, Wheat, Cookie, Package } from 'lucide-react'

const icons = { Shirt, Leaf, Wrench, Wheat, Cookie }

export default function CategoryIcon({ name, className = 'h-5 w-5', strokeWidth = 1.6 }) {
  const Icon = icons[name] || Package
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden="true" />
}
