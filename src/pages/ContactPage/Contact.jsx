import './Contact.css'

export default function ContactPage() {
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
            Reach out to us through any of the channels below. Our admissions team is ready to help.
          </p>
        </div>
      </section>

      {/* Connect Section */}
      <section className="contact-body">
        <div className="contact-connect-grid">

          {/* WhatsApp */}
          <a href="https://wa.me/917876904920" target="_blank" rel="noopener noreferrer" className="connect-card connect-card--whatsapp">
            <div className="connect-card-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div className="connect-card-body">
              <h3>WhatsApp Us</h3>
              <p>Chat with our admissions team instantly</p>
              <span className="connect-card-value">+91 78769 04920</span>
            </div>
            <div className="connect-card-arrow">→</div>
          </a>

          {/* Call */}
          <a href="tel:+917876904920" className="connect-card connect-card--call">
            <div className="connect-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.44 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.35a16 16 0 0 0 5.72 5.72l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className="connect-card-body">
              <h3>Call Us</h3>
              <p>Speak directly with our admissions team</p>
              <span className="connect-card-value">+91 78769 04920</span>
              <span className="connect-card-value">01795-221199</span>
            </div>
            <div className="connect-card-arrow">→</div>
          </a>

          {/* Email */}
          <a href="https://mail.google.com/mail/?view=cm&to=info@awasthigroup.co.in" target="_blank" rel="noopener noreferrer" className="connect-card connect-card--email">
            <div className="connect-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="connect-card-body">
              <h3>Email Us</h3>
              <p>Send us your queries anytime</p>
              <span className="connect-card-value">info@awasthigroup.co.in</span>
            </div>
            <div className="connect-card-arrow">→</div>
          </a>

          {/* Visit */}
          <a href="https://www.google.com/maps/dir/?api=1&destination=Ward+No.9+Nalagarh+District+Solan+Himachal+Pradesh+174101" target="_blank" rel="noopener noreferrer" className="connect-card connect-card--visit">
            <div className="connect-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="connect-card-body">
              <h3>Visit Us</h3>
              <p>Ward No. 9, Nalagarh, District Solan</p>
              <span className="connect-card-value">Himachal Pradesh – 174101</span>
            </div>
            <div className="connect-card-arrow">→</div>
          </a>

        </div>

        {/* Hours + Map */}
        <div className="contact-bottom-row">
          <div className="contact-hours-card">
            <h3>🕐 Office Hours</h3>
            <p>Monday – Saturday</p>
            <strong>9:00 AM – 4:00 PM</strong>
            <p className="hours-note">(Except Second Saturdays & Public Holidays)</p>
            <div className="contact-tagline">
              "Shaping careers, building futures — one student at a time."
            </div>
          </div>
          <div className="contact-map-card">
            <iframe
              title="Awasthi Group Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.123456789!2d76.7!3d31.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDA2JzAwLjAiTiA3NsKwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </section>
    </main>
  )
}
