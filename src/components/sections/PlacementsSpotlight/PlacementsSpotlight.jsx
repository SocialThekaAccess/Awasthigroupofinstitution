import Button from '../../ui/Button/Button'
import { placementHighlights, placementStats } from '../../../data/constants'
import './PlacementsSpotlight.css'

export default function PlacementsSpotlight() {
  return (
    <section className="placements-spotlight">
      {/* ── Story Cards ───────────────────────────────────────────── */}
      <div className="placements-media-grid">
        {placementHighlights.map((item) => (
          <article key={item.key} className="placement-story-card">
            <div
              className="placement-story-parallax"
              style={{
                ...(item.img && { backgroundImage: `url(${item.img})` }),
              }}
            />
            <div className="placement-story-overlay" />
            <div className="placement-story-content">
              <span>{item.tag}</span>
              <p className="placement-story-company">{item.company}</p>
              <strong style={{ whiteSpace: 'pre-line' }}>{item.name}</strong>
              {item.detail.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <div className="placement-story-stat">
                <small>{item.packageLabel}</small>
                <b>{item.packageValue}</b>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ── Copy + Stats ──────────────────────────────────────────── */}
      <div className="placements-copy">
        <p className="section-label">Placements Overview</p>
       <h2 style={{ fontSize: '1.4rem' }}>
  The leading companies and institutions value career-ready talent.
</h2>
        <p>
          This section is inspired by stronger placement storytelling used on leading
          university sites — with clear image spaces, strong CTAs, and metrics that can
          be refined using Awasthi's real placement data.
        </p>

        <div className="placements-actions">
          <Button href="https://aginalagarh.schoolpad.in/enquiryManager/onlineOpenAdmissionForm/9" target="_blank" rel="noopener noreferrer" variant="primary">Apply Now</Button>
          <Button href="/placement" variant="secondary">View Placements</Button>
        </div>

        <div className="placements-stats-grid">
          {placementStats.map((stat) => (
            <article key={stat.label} className="placements-stat-card">
              <strong style={{ color: stat.color }}>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}