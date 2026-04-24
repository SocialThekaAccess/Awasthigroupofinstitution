// import { startTransition, useState } from 'react'
// import SliderDots from '../../ui/SliderDots/SliderDots'
// import { useAutoSlide } from '../../../hooks/useAutoSlide'
// import { showcaseSlides } from '../../../data/constants'
// import './Showcase.css'

// export default function Showcase({ parallaxStyle }) {
//   const [activeSlide, setActiveSlide] = useState(0)

//   useAutoSlide(setActiveSlide, showcaseSlides.length, 6500)

//   const goToSlide = (index) => startTransition(() => setActiveSlide(index))

//   return (
//     <section className="showcase-section">
//       <div className="showcase-header">
//        <div>
//   <p className="section-label" style={{ fontSize: '1.2rem', color: '#FFB800', fontWeight: '800' }}>Admissions Open for 2026</p>
//   <h2>Ayurveda | Law | Nursing | Pharmancy</h2>
// </div>

//         <div className="showcase-controls">
//           {showcaseSlides.map((slide, index) => (
//             <button
//               key={slide.key}
//               type="button"
//               className={index === activeSlide ? 'showcase-pill active' : 'showcase-pill'}
//               onClick={() => goToSlide(index)}
//             >
//               {slide.title}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="showcase-frame">
//         <div
//           className="showcase-track"
//           style={{ transform: `translateX(-${activeSlide * 100}%)` }}
//         >
//           {showcaseSlides.map((slide) => (
//             <article key={slide.key} className="showcase-slide">
//               <div className="showcase-media">
//                 {slide.img && (
//                   <img
//   src={slide.img}
//   alt={slide.tag}
//   className="showcase-media-img"
// />
//                 )}
//                 <div className="showcase-media-parallax" />
//                 <div className="showcase-media-copy">
//                   <span>{slide.tag}</span>
//                   <strong>{slide.title}</strong>
//                 </div>
//               </div>

//               <div className="showcase-content">
//                 <h3>{slide.title}</h3>
//                 <p>{slide.text}</p>
//                 <ul>
//                   {slide.bullets.map((bullet) => (
//                     <li key={bullet}>{bullet}</li>
//                   ))}
//                 </ul>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// new code

import { startTransition, useState } from 'react'
import { useAutoSlide } from '../../../hooks/useAutoSlide'
import { showcaseSlides } from '../../../data/constants'
import './Showcase.css'

export default function Showcase() {
  const [activeSlide, setActiveSlide] = useState(0)

  useAutoSlide(setActiveSlide, showcaseSlides.length, 6500)

  const goToSlide = (index) => startTransition(() => setActiveSlide(index))

  return (
    <section className="showcase-section">
      <div className="showcase-header">
        <div className="showcase-header-left">
          <div className="admission-badge">
            <span className="badge-dot" />
            Admissions Open for 2026
          </div>
          <h2 className="showcase-heading">Ayurveda | Law | Nursing | Pharmacy</h2>
        </div>

        <div className="showcase-controls">
          {showcaseSlides.map((slide, index) => (
            <button
              key={slide.key}
              type="button"
              className={index === activeSlide ? 'showcase-pill active' : 'showcase-pill'}
              onClick={() => goToSlide(index)}
            >
              {slide.title}
            </button>
          ))}
        </div>
      </div>

      <div className="showcase-frame">
        <div
          className="showcase-track"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {showcaseSlides.map((slide) => (
            <article key={slide.key} className="showcase-slide">
              <div className="showcase-media">
                {slide.img && (
                  <img
                    src={slide.img}
                    alt={slide.tag}
                    className="showcase-media-img"
                  />
                )}
                <div className="showcase-media-parallax" />
                <div className="showcase-media-copy">
                  <span>{slide.tag}</span>
                  <strong>{slide.title}</strong>
                </div>
              </div>

              <div className="showcase-content">
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
                <ul>
                  {slide.bullets.map((bullet) => (
                    <li key={bullet}>
                      <span className="bullet-dot" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}