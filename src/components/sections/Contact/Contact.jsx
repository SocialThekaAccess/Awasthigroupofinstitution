import { contactInfo } from '../../../data/constants'
import './Contact.css'

/**
 * Dark contact section with info cards for email, phone, and location.
 */
export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy">
        <p className="section-label section-label-light">Contact</p>
        <h2>Connect with Awasthi admissions and support</h2>
        <p>
          The website keeps inquiry and direct interaction important for students and
          families. This section brings those contact details forward in a cleaner format.
        </p>
      </div>

      <div className="contact-grid">
        {contactInfo.map((item) => (
          <article key={item.label} className="contact-card">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </div>
    </section>
  )
}
