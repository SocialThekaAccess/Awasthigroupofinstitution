import { overviewCards } from '../../../data/constants'
import './OverviewGrid.css'

export default function OverviewGrid() {
  return (
    <section className="overview-grid">
      {overviewCards.map((card) => (
        <article key={card.title} className="overview-card">
          <h2 className="section-label">{card.title}</h2>
          <p>{card.text}</p>
        </article>
      ))}
    </section>
  )
}