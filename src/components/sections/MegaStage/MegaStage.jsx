import MetricCard from '../../ui/MetricCard/MetricCard'
import { sectionMenus } from '../../../data/constants'
import './MegaStage.css'

export default function MegaStage({ activeSection, parallaxStyle }) {
  const current = sectionMenus.find((s) => s.key === activeSection) ?? sectionMenus[0]

  return (
    <section className="mega-stage" id="section-explorer">
      <div className="mega-stage-copy">
        {/* <p className="section-label mega-admission-label">Admissions Open for 2026</p> */}
        <h2>{current.label}</h2>
        {current.summary && current.summary.includes('\n') ? (
          current.summary.split('\n').map((line, i) => <p key={i}>{line}</p>)
        ) : (
          <p>{current.summary}</p>
        )}
      </div>

      <div className="mega-panel">
        {/* ── Info Column ───────────────────────────────────────── */}
        <article className="mega-intro">
          <p className="section-label section-label-light">{current.panelTag}</p>
          <h3>{current.panelTitle}</h3>
          <p>{current.panelText}</p>

          <div className="mega-metrics">
            {current.metrics.map((metric) => (
              <MetricCard key={metric.label} value={metric.value} label={metric.label} />
            ))}
          </div>
        </article>

        {/* ── Visual Column ─────────────────────────────────────── */}
        <article className="mega-visual">
          {current.key === 'programs' ? (
            <video
              src="/Programhighlight.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="mega-visual-img"
              style={{ objectFit: 'cover' }}
            />
          ) : current.visualImg ? (
            <img src={current.visualImg} alt={current.visualTitle} className="mega-visual-img" />
          ) : (
            <div className="mega-visual-parallax" style={parallaxStyle} />
          )}
          <div className="mega-visual-content">
            <strong>{current.visualTitle}</strong>
            <p>{current.visualText}</p>
          </div>
        </article>

        {/* ── Links Column ─────────────────────────────────────── */}
        <article className="mega-links">
          <p className="section-label" style={{ fontSize: '1.1rem', color: '#FFB800' }}>Courses Offered</p>
          <ul>
            {current.links.map((link) => (
<li key={link}>
  {link.split(':').join(' : ')}
</li>        ))}
          </ul>
        </article>
      </div>
    </section>
  )
}