import MegaStage from '../../components/sections/MegaStage/MegaStage'
import OverviewGrid from '../../components/sections/OverviewGrid/OverviewGrid'
import { useScrollY } from '../../hooks/useScrollY'
import './Programs.css'

export default function Programs() {
  const scrollY = useScrollY()

  const showcaseParallaxStyle = {
    transform: `translate3d(0, ${Math.max(-54, scrollY * -0.05)}px, 0) scale(1.05)`,
  }

  return (
    <div className="page programs-page">

      {/* ── HERO ── */}
      <header className="programs-header">
        <div className="programs-hero-left">
          <span className="programs-tag">Section Explorer</span>
          <h1>Academic<br /><span>Programs</span></h1>
          <p>Professional programs built around real-world outcomes. Discover streams and schools that support your technical, professional, and career-oriented higher education.</p>

          <div className="programs-icons">
            <div className="programs-icon-item">
              <div className="programs-icon-box" style={{ background: '#eff6ff' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              </div>
              <span>Diverse Programs</span>
            </div>
            <div className="programs-icon-item">
              <div className="programs-icon-box" style={{ background: '#f0fdf4' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <span>Industry Relevant</span>
            </div>
            <div className="programs-icon-item">
              <div className="programs-icon-box" style={{ background: '#faf5ff' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <span>Expert Faculty</span>
            </div>
            <div className="programs-icon-item">
              <div className="programs-icon-box" style={{ background: '#fff7ed' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <span>Modern Infrastructure</span>
            </div>
          </div>

          <div className="buttons">
            {/* <button className="primary-btn">Explore Programs →</button> */}
            {/* <a href="/brochure" className="secondary-btn">Download Brochure ↓</a> */}
          </div>
        </div>

        <div className="programs-hero-right">
          <div className="programs-blob"></div>
          <img src="/AcademicPrograms.png" alt="Academic Programs" className="programs-hero-img" />
        </div>
      </header>

      {/* ── MegaStage ── */}
      <MegaStage activeSection="programs" parallaxStyle={showcaseParallaxStyle} />

      {/* ── Core Portfolio ── */}
      <section className="programs-list">
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <p className="section-label">Areas of Study</p>
          <h2>Explore Our Core Portfolio</h2>
        </div>
        <div className="programs-grid">
          <article className="program-card">
            <div className="program-card-image"><img src="/Awasthiayurveda.png" alt="Ayurveda" /></div>
            <div className="program-card-content">
              <h3>Ayurveda Department</h3>
              <p>Traditional medical sciences integrating ancient holistic health practices with modern scientific methodologies.</p>
            </div>
          </article>
          <article className="program-card">
            <div className="program-card-image"><img src="/Awasthilaw.png" alt="Law" /></div>
            <div className="program-card-content">
              <h3>Law Department</h3>
              <p>Comprehensive legal education focusing on constitutional, corporate, and criminal law.</p>
            </div>
          </article>
          <article className="program-card">
            <div className="program-card-image"><img src="/Awasthinursing.png" alt="Nursing" /></div>
            <div className="program-card-content">
              <h3>Nursing Department</h3>
              <p>Advanced healthcare programs dedicated to clinical excellence and modern nursing practices.</p>
            </div>
          </article>
          <article className="program-card">
            <div className="program-card-image"><img src="/AwasthiPharmacy.png" alt="Pharmacy" /></div>
            <div className="program-card-content">
              <h3>Pharmacy Department</h3>
              <p>Specialized pharmacological studies focused on medicine development and research.</p>
            </div>
          </article>
        </div>
      </section>

      <OverviewGrid />
    </div>
  )
}
