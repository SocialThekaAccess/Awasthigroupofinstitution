import './SliderDots.css'

/**
 * A row of pill-shaped dot buttons for controlling a slider.
 *
 * @param {object[]} slides      - Array of slide objects (each needs a `key`)
 * @param {number}   activeIndex - Index of the currently active slide
 * @param {function} onSelect    - Callback receives the clicked slide index
 * @param {string}   [label]     - Accessible label for the dots container
 */
export default function SliderDots({ slides, activeIndex, onSelect, label = 'Slider navigation' }) {
  return (
    <div className="slider-dots" aria-label={label}>
      {slides.map((slide, index) => (
        <button
          key={slide.key}
          type="button"
          className={index === activeIndex ? 'slider-dot active' : 'slider-dot'}
          onClick={() => onSelect(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
}
