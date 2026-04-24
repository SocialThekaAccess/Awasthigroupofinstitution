import { startTransition, useEffect, useState } from 'react'

/**
 * Returns a scroll-Y value, throttled via requestAnimationFrame,
 * and exposed as a React transition so it never blocks renders.
 *
 * @returns {number} Current window.scrollY value
 */
export function useScrollY() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let frameId = 0

    const onScroll = () => {
      if (frameId) return

      frameId = window.requestAnimationFrame(() => {
        startTransition(() => {
          setScrollY(window.scrollY || 0)
        })
        frameId = 0
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [])

  return scrollY
}
