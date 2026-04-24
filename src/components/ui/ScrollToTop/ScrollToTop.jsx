import { useScrollY } from '../../../hooks/useScrollY'
import './ScrollToTop.css'

export default function ScrollToTop() {
  const scrollY = useScrollY()

  if (scrollY < 300) return null

  return (
    <button
      className="scroll-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}
