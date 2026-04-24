import { useState } from 'react'
import './Contact.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="page contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-bg-grid" aria-hidden="true" />
        <div className="contact-hero-inner">
          <span className="contact-eyebrow">Get In Touch</span>
          <h1 className="contact-title">
            Let's Start Your <span className="gold">Journey</span>
          </h1>
          <p className="contact-subtitle">
            Fill out the form and our admissions team will reach out to you shortly.
          </p>
        </div>
      </section>

      {/* Body Section */}
      <section className="contact-body">
        <div className="contact-container">
          {/* Info Cards */}
          <aside className="contact-info">
            <div className="info-card">
              <div className="info-icon">📞</div>
              <div>
                <p className="info-label">Call Us</p>
                <p className="info-value">+91 88941 20009</p>
                <p className="info-value">01795-221199</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div>
                <p className="info-label">Address</p>
                <p className="info-value">Ward No 9, Nalagarh</p>
                <p className="info-value">Himachal Pradesh 174101</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">✉️</div>
              <div>
                <p className="info-label">Email</p>
                <p className="info-value">info@awasthigroup.co.in</p>
              </div>
            </div>

            <div className="info-divider" />
            <p className="info-tagline">
              "Shaping careers, building futures — one student at a time."
            </p>
          </aside>

          {/* Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="success-box">
                <span className="success-icon">✅</span>
                <h2>Thank You!</h2>
                <p>We've received your message. Our team will contact you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">First Name <span className="req">*</span></label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Your last name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number <span className="req">*</span></label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email <span className="req">*</span></label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group full">
                  <label htmlFor="message">Message <span className="req">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Enter your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Send Message <span className="btn-arrow">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
