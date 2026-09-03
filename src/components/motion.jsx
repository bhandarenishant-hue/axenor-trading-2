import { motion, useReducedMotion } from 'motion/react'
import { ease } from '../lib/animation'

// Shared animation primitives. Every helper collapses to a plain render when the
// user has requested reduced motion.

const viewport = { once: true, amount: 0.2 }

export function FadeUp({ as = 'div', delay = 0, y = 24, className = '', children, ...rest }) {
  const reduce = useReducedMotion()
  const Tag = motion[as] || motion.div
  return (
    <Tag
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, ease, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function SlideIn({ from = 'left', delay = 0, distance = 48, className = '', children }) {
  const reduce = useReducedMotion()
  const x = from === 'left' ? -distance : from === 'right' ? distance : 0
  const y = from === 'up' ? distance : from === 'down' ? -distance : 0
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.8, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger: wrap a list of <StaggerItem> so children reveal one after another.
export function Stagger({ as = 'div', gap = 0.09, className = '', children }) {
  const reduce = useReducedMotion()
  const Tag = motion[as] || motion.div
  return (
    <Tag
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={viewport}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
      className={className}
    >
      {children}
    </Tag>
  )
}

export function StaggerItem({ as = 'div', y = 24, className = '', children }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      variants={{ hidden: { opacity: 0, y }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
      className={className}
    >
      {children}
    </Tag>
  )
}
