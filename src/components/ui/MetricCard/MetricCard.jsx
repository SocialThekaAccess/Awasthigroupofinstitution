import './MetricCard.css'

/**
 * A small card displaying a bold value and a descriptive label.
 *
 * @param {string} value - The headline figure or keyword
 * @param {string} label - The supporting descriptor
 * @param {string} [variant] - Optional visual variant: 'dark' | 'default'
 */
export default function MetricCard({ value, label, variant = 'default' }) {
  return (
    <div className={`metric-card metric-card--${variant}`}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  )
}
