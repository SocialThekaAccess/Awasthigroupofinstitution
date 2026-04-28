import React from "react";
import "./Admissions.css";

const Admissions = () => {
  return (
    <div className="page">
      {/* ================= ADMISSIONS SECTION ================= */}
      <section className="admissions-section">
        <div className="admissions-wrapper">

          {/* LEFT */}
          <div className="admissions-content">

            <div className="admissions-badge">
              <span className="dot"></span>
              Awasthi Group of Institutions
            </div>

            <h2>
              Interested to <span>Join Us?</span>
            </h2>

            <p className="admissions-desc">
              We are here to assist you with any questions or information
              regarding our various programs. Reach out to us today!
            </p>

            <a href="https://aginalagarh.schoolpad.in/enquiryManager/onlineOpenAdmissionForm/9" target="_blank" rel="noopener noreferrer" className="btn-apply">
              <span>Apply Now</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>

            <div className="admissions-contact">
              <h4>Connect</h4>
              <a href="tel:+917876904920">+91-7876904920</a>
              <a href="tel:+918894120009">+91-8894120009</a>
            </div>

            <div className="admissions-support">
              <h4>Support</h4>
              <a href="info@awasthigroup.co.in">
                info@awasthigroup.co.in
              </a>
            </div>

          </div>

          {/* RIGHT */}
          <div className="admissions-right">

            <div className="admissions-image">
              <video
                src="/Agvideo.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            <div className="admissions-qr-card">
              <img
                src="/AwasthiQr.png"
                alt="QR"
              />
              <div className="qr-text">
                <h5>Awasthi Group Of Institutions</h5>
                <p>Scan to connect on WhatsApp Business</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= VISIT US SECTION ================= */}
      <section className="visitus-section">
        <div className="visitus-wrapper">

          <div className="visitus-badge">
            <span className="badge-dot"></span>
            Get In Touch
          </div>

          <div className="visitus-layout">
            
            {/* LEFT — Location & Hours Cards */}
            <div className="visitus-info">
              <h2>Visit Our <span>Campus</span></h2>
              <p className="visitus-subtitle">
                We are dedicated to shaping the future through education. Visit our
                campus to learn more about our institutions and initiatives.
              </p>

              <div className="visitus-card">
                <div className="visitus-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>Ward No.9, Nalagarh,<br/>District Solan, Himachal Pradesh<br/>174101, India</p>
                </div>
              </div>

              <div className="visitus-card">
                <div className="visitus-icon">🕐</div>
                <div>
                  <h4>Hours</h4>
                  <p>Mon – Sat: 9:00 AM – 4:00 PM<br/>
                  <span style={{ color: "#8899aa", fontSize: "12px" }}>(Except Second Saturdays)</span></p>
                </div>
              </div>

              <div className="visitus-actions">
                <a href="https://www.google.com/maps/dir/?api=1&destination=Ward+No.9+Nalagarh+District+Solan+Himachal+Pradesh+174101" target="_blank" rel="noopener noreferrer" className="btn-directions">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                  Get Directions
                </a>
              </div>
            </div>

            {/* RIGHT — Map */}
            <div className="visitus-map">
              <iframe
                title="Location"
                src="https://maps.google.com/maps?q=31.0400089,76.7275253&t=&z=17&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              />
            </div>

          </div>

          {/* STATS BAR */}
          <div className="visitus-stats">
            <div className="visitus-stat">
              <svg viewBox="0 0 24 24" fill="none" stroke="#e8a020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <strong>10+</strong>
              <span>Years of Excellence</span>
            </div>
            <div className="visitus-stat">
              <svg viewBox="0 0 24 24" fill="none" stroke="#e8a020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              <strong>50+</strong>
              <span>Programs Offered</span>
            </div>
            <div className="visitus-stat">
              <svg viewBox="0 0 24 24" fill="none" stroke="#e8a020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <strong>5000+</strong>
              <span>Happy Students</span>
            </div>
            <div className="visitus-stat">
              <svg viewBox="0 0 24 24" fill="none" stroke="#e8a020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              <strong>1000+</strong>
              <span>Top Recruiters</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Admissions;