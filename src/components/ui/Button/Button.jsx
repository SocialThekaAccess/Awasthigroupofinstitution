import { Link } from 'react-router-dom'
import './Button.css'

/**
 * Universal button/link component.
 *
 * @param {string}  href      - If provided, renders as <a> (external) or Link (internal)
 * @param {string}  variant   - 'primary' | 'secondary'
 * @param {node}    children
 */
export default function Button({ href, variant = 'primary', children, ...props }) {
  const className = `btn btn--${variant}`

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')
    if (isExternal) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      )
    }
    return (
      <Link to={href} className={className} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={className} {...props}>
      {children}
    </button>
  )
}
