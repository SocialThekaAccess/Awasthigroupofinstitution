import { startTransition, useState } from 'react'
import { Link } from 'react-router-dom'
import SliderDots from '../../ui/SliderDots/SliderDots'
import Button from '../../ui/Button/Button'
import { useAutoSlide } from '../../../hooks/useAutoSlide'
import { heroStats, heroSlides } from '../../../data/constants'
import './Hero.css'

/**
 * Full-width hero section — bold red/navy design with cinematic slider.
 *
 * @param {object} parallaxStyle - CSS transform applied to each slide's parallax layer
 */
export default function Hero({ parallaxStyle }) {
  const [activeSlide, setActiveSlide] = useState(0)

  useAutoSlide(setActiveSlide, heroSlides.length, 5000)

  const goToSlide = (index) => startTransition(() => setActiveSlide(index))

  return (
    <section className="hero">
      {/* ── Red accent bar — inside hero with bottom curves ── */}
      <div className="hero-accent-bar">
        <span>🎓 Admissions Open 2026</span>
        <span className="hero-accent-divider">|</span>
        <span>Among the Top Institutions in Himachal Pradesh</span>
      </div>

      {/* ── Main hero body ───────────────────────────────────────── */}
      <div className="hero-body">
        {/* ── Left copy column ───────────────────────────────────── */}
        <div className="hero-copy">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Awasthi Group of Institutions
          </div>

          <h1 className="hero-heading">
            Shape Your <span className="hero-heading-accent">Future</span>
          </h1>
          <p className="hero-subheading">Join Awasthi Group of Institutions</p>

          <p className="hero-description">
            Bringing together technical, professional, and values-driven education
            in one world-class academic ecosystem.
          </p>

          <div className="hero-actions">
            <Button href="https://aginalagarh.schoolpad.in/enquiryManager/onlineOpenAdmissionForm/9" target="_blank" rel="noopener noreferrer" variant="primary">
              Apply Now ↗
            </Button>
            <Link to="/contact" className="btn btn--secondary">
              Contact Admissions
            </Link>
          </div>
        </div>

        {/* ── Right slider column ──────────────────────────────────── */}
        <div className="hero-media">
          <div className="hero-slider-shell">
            <div
              className="hero-slider-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {heroSlides.map((slide) => (
                <article key={slide.key} className="hero-slide">
                  {slide.img && (
                    <img src={slide.img} alt={slide.tag} className="hero-slide-img" />
                  )}
                  {/* Left-fade gradient overlay — blends into left navy column */}
                  <div className="hero-slide-left-fade" />
                  <div
                    className="hero-slide-parallax"
                    style={{
                      background: slide.img
                        ? 'linear-gradient(180deg, rgba(7,20,38,0.05), rgba(7,20,38,0.88))'
                        : undefined,
                    }}
                  />
                  <div className="hero-slide-content">
                    <span className="hero-slide-tag">{slide.tag}</span>
                    <strong>{slide.title}</strong>
                    <p>{slide.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <SliderDots
              slides={heroSlides}
              activeIndex={activeSlide}
              onSelect={goToSlide}
              label="Hero slider navigation"
            />
          </div>
        </div>
      </div>

      {/* ── Stats bar ────────────────────────────────────────────── */}
      <div className="hero-stats-bar">
        {heroStats.map((item, i) => (
          <article key={item.label} className="hero-stat-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            {i < heroStats.length - 1 && <div className="hero-stat-divider" />}
          </article>
        ))}
      </div>
    </section>
  )
}