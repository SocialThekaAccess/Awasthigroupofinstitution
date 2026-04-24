import { useState, useEffect } from 'react'
import './HeroSlider.css'

const slides = [
  {
    img: '/Main campus .png',
    label: 'Main Campus',
    heading: 'A Campus Built for Excellence',
    sub: 'Sprawling grounds designed to inspire learning and growth.',
  },
  {
    img: '/Academic infrastructure.png',
    label: 'Infrastructure',
    heading: 'World-Class Academic Infrastructure',
    sub: 'Modern facilities equipped for the demands of tomorrow.',
  },
  {
    img: '/classrooms.png',
    label: 'Classrooms',
    heading: 'Smart Classrooms, Brighter Futures',
    sub: 'Technology-enabled spaces that bring education to life.',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="hs-wrap">
      {slides.map((slide, i) => (
        <div key={i} className={`hs-slide ${i === current ? 'hs-slide--active' : ''}`}>
          <img src={slide.img} alt={slide.label} className="hs-img" />
          <div className="hs-overlay" />
          <div className="hs-content">
            <span className="hs-label">{slide.label}</span>
            <h2 className="hs-heading">{slide.heading}</h2>
            <p className="hs-sub">{slide.sub}</p>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="hs-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hs-dot ${i === current ? 'hs-dot--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
