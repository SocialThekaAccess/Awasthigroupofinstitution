import { useState } from 'react'
import Button from '../../components/ui/Button/Button'
import './Placement.css'

export default function Placement() {
  const [videoOpen, setVideoOpen] = useState(false)

  const recruiters = [
    'Max Super Speciality Hospital Saket',
    'Nims Hospital Jaipur',
    'Asian Institute of Medical Science Faridabad, Haryana',
    'Dept. NICU',
    'Fortis'
  ]

  return (
    <div className="page placement-page">

      {/* ── HERO ── */}
      <section className="pl-hero">
        <div className="pl-hero-left">
          <span className="pl-eyebrow">Placement & Career Support</span>
          <h1>Pave Your Path<br />to <span>Success</span></h1>
          <p>Bridging the gap between academia and industry. Discover how our robust placement network and comprehensive career support services prepare you for the professional world.</p>
          <div className="pl-hero-btns">
            <a href="https://aginalagarh.schoolpad.in/enquiryManager/onlineOpenAdmissionForm/9" target="_blank" rel="noopener noreferrer" className="pl-btn-primary">Apply Now ↗</a>
            <button className="pl-btn-video" onClick={() => setVideoOpen(true)}>
              <span className="pl-play-icon">▶</span>
              Watch Video
            </button>
          </div>
        </div>
        <div className="pl-hero-right">
          <div className="pl-hero-blob"></div>
          <img src="/Placement.png" alt="Placement students" className="pl-hero-img" />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="pl-stats">
        <div className="pl-stat">
          <svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <strong style={{ color: '#1d4ed8' }}>500+</strong>
          <span>Recruiters Network</span>
        </div>
        <div className="pl-stat">
          <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          <strong style={{ color: '#16a34a' }}>98%</strong>
          <span>Placement Assistance</span>
        </div>
        <div className="pl-stat">
          <svg viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          <strong style={{ color: '#7c3aed' }}>25 LPA</strong>
          <span>Highest Package</span>
        </div>
        <div className="pl-stat">
          <svg viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          <strong style={{ color: '#ea580c' }}>100+</strong>
          <span>Placement Drives</span>
        </div>
        <div className="pl-stat">
          <svg viewBox="0 0 24 24" fill="none" stroke="#db2777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          <strong style={{ color: '#db2777' }}>Career<br/>Support</strong>
          <span>Resume, Mock, Interview & More</span>
        </div>
      </div>

      {/* ── TIMELINE ── */}
      <section className="career-journey" id="journey">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p className="section-label">The Process</p>
          <h2>Your Journey to Placement</h2>
          <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '1rem auto' }}>
            We follow a structured roadmap to transform students into highly sought-after professionals.
          </p>
        </div>
        <div className="timeline">
          {[
            { title: '1. Skill Assessment & Profiling', text: 'We analyze every student\'s core strengths, technical abilities, and communication skills.' },
            { title: '2. Industry Readiness Training', text: 'Rigorous modules covering aptitude, logical reasoning, soft skills, and mock interviews.' },
            { title: '3. Internships & Live Projects', text: 'Students engage with real-world problems through mandatory internships.' },
            { title: '4. Campus Recruitment Drives', text: 'Top-tier corporations visit our campus to absorb our ready talent into high-growth roles.' },
          ].map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PLACED STUDENTS ── */}
      <section className="success-stories">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p className="section-label">Wall of Fame</p>
          <h2>Our Placed Stars</h2>
        </div>
        <div className="student-grid">
          {[
            { name: 'Amanpreet Kaur', hospital: 'Fortis Mohali', dept: 'ICU', img: '/AmanpreetKaur.png' },
            { name: 'Kumari Deepa', hospital: 'NIMS HOSPITAL JAIPUR', dept: 'Nephrology ICU', img: '/KumariDeepa.png' },
            { name: 'Shagun Mishra', hospital: 'NIMS Hospital Jaipur', dept: 'ICU / General', img: '/ShagunMishra.png' },
            { name: 'Shivani', hospital: 'Asian Institute of Medical Science', dept: 'NICU / General', img: '/Shivani.png' },
            { name: 'Neha', hospital: 'Asian Institute of Medical Science', dept: 'NICU / General', img: '/Neha.png' },
          ].map((s, i) => (
            <div key={i} className="student-card">
              <div className="student-image-placeholder">
                <img src={s.img} alt={s.name} className="student-photo" />
              </div>
              <div className="student-info">
                <h3>{s.name}</h3>
                <p className="hospital-name">{s.hospital}</p>
                <p className="dept-name">{s.dept}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="recruiters-marquee">
        <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 3 }}>
          <p className="section-label section-label-light">Our Associations</p>
          <h2 style={{ color: '#fff' }}>Top Recruiters</h2>
        </div>
        <div className="marquee-track">
          {[...recruiters, ...recruiters].map((name, i) => (
            <span key={i} className="recruiter-pill">{name}</span>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="career-cta-section">
        <div className="cta-container">
          <p className="section-label">Join Our Community</p>
          <h2>Ready to Launch Your Professional Journey?</h2>
          <p>Whether you are a student seeking placement support or a recruiter looking for top talent, we are here to help.</p>
          <Button href="https://aginalagarh.schoolpad.in/enquiryManager/onlineOpenAdmissionForm/9" target="_blank" rel="noopener noreferrer" variant="primary">Apply Now ↗</Button>
        </div>
      </section>

      {/* ── VIDEO MODAL ── */}
      {videoOpen && (
        <div className="pl-video-modal" onClick={() => setVideoOpen(false)}>
          <div className="pl-video-wrap" onClick={e => e.stopPropagation()}>
            <button className="pl-video-close" onClick={() => setVideoOpen(false)}>✕</button>
            <video
              src="/Agvideo.mp4"
              autoPlay
              controls
              className="pl-video-player"
            />
          </div>
        </div>
      )}

    </div>
  )
}
