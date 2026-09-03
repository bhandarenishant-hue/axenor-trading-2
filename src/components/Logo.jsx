import { Link } from 'react-router-dom'
import { company } from '../data/company'

// Brand logo cropped from the client's identity board, so it keeps the original
// navy and gold brand colours. `light` picks the white-on-navy variant for dark surfaces.
export default function Logo({ light = false, className = '', height = 'h-11' }) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`} aria-label={`${company.name} home`}>
      <img
        src={light ? '/brand/logo-dark.png' : '/brand/logo-light.png'}
        alt={company.name}
        className={`${height} w-auto`}
        width="700"
        height="177"
        decoding="async"
      />
    </Link>
  )
}
