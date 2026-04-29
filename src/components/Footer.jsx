import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrap">

      {/* Main Footer Grid */}
      <div className="footer-main">

        {/* Brand Column */}
        <div className="footer-brand">
          <div className="logo-box">
            <img src="/logo.png" alt="Awasthi Group logo" className="footer-logo-img" />
            <div>
              <div className="logo-text-main"></div>
              <div className="logo-text-sub"></div>
            </div>
          </div>
          <p>
            Building a brighter future for generations ahead. Professional
            education for future-ready learners.
          </p>
          <div className="accred-row">
            <span className="badge">Approved by BCI, INC, PCI, NCISM</span>
            <span className="badge">UGC Recognized</span>
            <span className="badge">Affiliated to government university, UGC recognized</span>
          </div>
          <div className="social-row">
            <a href="https://www.facebook.com/agihimachal" target="_blank" rel="noopener noreferrer" className="social-btn social-btn--facebook" aria-label="Facebook">
              <svg viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/agihimachal?igsh=ZmZvZHd0Z3gzdGg4" target="_blank" rel="noopener noreferrer" className="social-btn social-btn--instagram" aria-label="Instagram">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="white" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@agihimachal" target="_blank" rel="noopener noreferrer" className="social-btn social-btn--youtube" aria-label="YouTube">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" fill="#FF0000"/>
                <polygon points="9.545 15.568 15.818 12 9.545 8.432 9.545 15.568" fill="#ffffff"/>
              </svg>
            </a>
            <a href="https://share.google/q1MfIfvXyWGW4t2Xa" target="_blank" rel="noopener noreferrer" className="social-btn social-btn--google" aria-label="Google">
              <svg viewBox="0 0 24 24">
                <path d="M21.35 11.1H12v2.8h5.35C16.8 16.2 14.6 17.6 12 17.6c-3.09 0-5.6-2.51-5.6-5.6s2.51-5.6 5.6-5.6c1.4 0 2.68.52 3.65 1.37l2.1-2.1A9.36 9.36 0 0 0 12 3a9 9 0 1 0 9 9c0-.61-.06-1.2-.17-1.77-.04-.04-.48-.13-.48-.13z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/" onClick={() => window.scrollTo(0,0)}>Home</Link></li>
            <li><Link to="/about" onClick={() => window.scrollTo(0,0)}>About</Link></li>
            <li><Link to="/programs" onClick={() => window.scrollTo(0,0)}>Programs</Link></li>
            <li><Link to="/admissions" onClick={() => window.scrollTo(0,0)}>Admission</Link></li>
            <li><Link to="/placement" onClick={() => window.scrollTo(0,0)}>Placement</Link></li>
            <li><Link to="/career" onClick={() => window.scrollTo(0,0)}>Career</Link></li>
            {/* <li><Link to="/contact" onClick={() => window.scrollTo(0,0)}>Contact</Link></li> */}
          </ul>
        </div>

        {/* Programs Column */}
        <div className="footer-col">
          <h4>Our Programs</h4>

          <div className="prog-item">
            <div className="prog-icon prog-icon--emoji">🌿</div>
            <div className="prog-name">Ayurveda</div>
          </div>

          <div className="prog-item">
            <div className="prog-icon prog-icon--emoji">⚖️</div>
            <div className="prog-name">Law</div>
          </div>

          <div className="prog-item">
            <div className="prog-icon prog-icon--emoji">🩺</div>
            <div className="prog-name">Nursing</div>
          </div>

          <div className="prog-item">
            <div className="prog-icon prog-icon--emoji">💊</div>
            <div className="prog-name">Pharmacy</div>
          </div>
        </div>

        {/* Contact Column */}
        <div className="footer-col">
          <h4>Contact Us</h4>

          <a className="contact-item" href="https://maps.google.com/?q=Ward+No+9,+Nalagarh,+District+Solan,+Himachal+Pradesh" target="_blank" rel="noopener noreferrer">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" fill="#0d1b2e" />
              </svg>
            </div>
            <div className="contact-text">
              <strong>Address</strong>
              Ward No.9, Nalagarh, District Solan, Himachal Pradesh
            </div>
          </a>

          <a className="contact-item" href="tel:+918894120009">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.44 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.35a16 16 0 0 0 5.72 5.72l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="contact-text">
              <strong>Helpline</strong>
              +91-8894120009 / 01795-221199
            </div>
          </a>

          <a className="contact-item" href="mailto:info@awasthigroup.co.in">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" fill="none" stroke="#e8a020" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="contact-text">
              <strong>Email</strong>
              info@awasthigroup.co.in
            </div>
          </a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 Awasthi Group of Institutions. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy-policy" onClick={() => window.scrollTo(0,0)}>Privacy Policy</Link>
          <Link to="/terms-and-conditions" onClick={() => window.scrollTo(0,0)}>Terms &amp; Conditions</Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;