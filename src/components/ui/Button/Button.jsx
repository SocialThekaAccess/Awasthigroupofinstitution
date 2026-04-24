import './Button.css'

/**
 * Universal button/link component.
 *
 * @param {string}  href      - If provided, renders as <a>, otherwise <button>
 * @param {string}  variant   - 'primary' | 'secondary'
 * @param {node}    children
 */
export default function Button({ href, variant = 'primary', children, ...props }) {
  const className = `btn btn--${variant}`

  if (href) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={className} {...props}>
      {children}
    </button>
  )
}
