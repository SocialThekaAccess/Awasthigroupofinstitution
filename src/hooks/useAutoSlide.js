import { startTransition, useEffect } from 'react'

/**
 * Auto-advances a slide index on a fixed interval.
 *
 * @param {function} setter - State setter returned by useState
 * @param {number}   total  - Total number of slides
 * @param {number}   delay  - Interval in milliseconds
 */
export function useAutoSlide(setter, total, delay) {
  useEffect(() => {
    const id = window.setInterval(() => {
      startTransition(() => {
        setter((current) => (current + 1) % total)
      })
    }, delay)

    return () => window.clearInterval(id)
  }, [setter, total, delay])
}
