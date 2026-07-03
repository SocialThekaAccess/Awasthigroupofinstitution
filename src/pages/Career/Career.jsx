import './Career.css'

/* ─── Current Vacancy Data ─────────────────────────────────────────────────── */
const DEPARTMENTS = [
  {
    name: 'Awasthi Ayurvedic Medical College & Hospital',
    roles: [
      { title: 'Assistant Professor (Bal Rog)',                      count: 1 },
      { title: 'Assistant Professor (Stri Rog Evam Prasuti Tantra)', count: 1 },
      { title: 'Associate / Professor (Samhita Siddhant)',           count: 1 },
      { title: 'Associate / Professor (Ras Shastra)',                count: 1 },
      { title: 'Associate / Professor (Bal Rog)',                    count: 1 },
    ],
  },
  {
    name: 'Awasthi Institute of Pharmacy',
    roles: [
      { title: 'Assistant Professor (Pharmacology)',  count: 1 },
      { title: 'Assistant Professor (Pharmacognosy)', count: 1 },
      { title: 'Lab Technician',                      count: 1 },
    ],
  },
  {
    name: 'Awasthi Institute of Law',
    roles: [
      { title: 'Assistant Professor (Law)', count: 2 },
    ],
  },
  {
    name: 'Awasthi Institute of Nursing',
    roles: [
      { title: 'Assistant Professor', count: 2 },
      { title: 'Tutor',               count: 2 },
    ],
  },
  {
    name: 'Management',
    roles: [
      { title: 'PA to Director',                   count: 1 },
      { title: 'Junior Accountant',                count: 2 },
      { title: 'Hardware & Networking Technician', count: 1 },
      { title: 'Management Associate',             count: 2 },
    ],
  },
]

export default function Career() {
  return (
    <div className="page career-page">

      {/* ── HERO ── */}
      <section className="career-hero">
        <div className="career-hero-left">
          <span className="career-eyebrow">Careers</span>
          <h1>Join Our<br /><span>Team</span></h1>
          <p>Be a part of a dynamic and inspiring team dedicated to excellence in education. Grow your career while making a real impact.</p>
          <div className="career-hero-btns">
            <a href="https://aginalagarh.schoolpad.in/employeeEnquiryManager/onlineApplicationForm/" target="_blank" rel="noopener noreferrer" className="c-btn-primary">Apply Now →</a>
            <a href="#openings" className="c-btn-outline">View Openings →</a>
          </div>
          <div className="career-perks">
            <div className="career-perk">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              <span>Career Growth</span>
            </div>
            <div className="career-perk">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              <span>Learning Culture</span>
            </div>
            <div className="career-perk">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>Job Security</span>
            </div>
            <div className="career-perk">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <span>Work-Life Balance</span>
            </div>
          </div>
        </div>
        <div className="career-hero-right">
          <img src="/careerpagez.png" alt="Team at Awasthi Group" className="career-hero-img" />
          <div className="career-quote-badge">
            <span className="quote-mark">"</span>
            <span>Great Careers<br/>Begin Here</span>
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS (original generic cards) ── */}
      <section className="career-openings" id="openings">
        <div className="career-openings-header">
          <p className="section-label">We're Hiring</p>
          <h2>Open Positions</h2>
          <p className="career-openings-sub">Join our growing team and make a difference in education.</p>
        </div>
        <div className="career-jobs-grid">
          {[
            { title: 'Faculty — Nursing',        dept: 'Nursing Department'  },
            { title: 'Faculty — Ayurveda',        dept: 'Ayurveda Department' },
            { title: 'Faculty — Law',             dept: 'Law Department'      },
            { title: 'Faculty — Pharmacy',        dept: 'Pharmacy Department' },
            { title: 'Administrative Officer',    dept: 'Administration'      },
            { title: 'Lab Technician',            dept: 'Research & Labs'     },
          ].map((job, i) => (
            <div key={i} className="career-job-card">
              <div>
                <span className="job-dept">{job.dept}</span>
                <h3>{job.title}</h3>
                <div className="job-pills">
                  <span className="job-type">Full Time</span>
                </div>
              </div>
              <a href="https://aginalagarh.schoolpad.in/employeeEnquiryManager/onlineApplicationForm/" target="_blank" rel="noopener noreferrer" className="job-apply-btn">Apply →</a>
            </div>
          ))}
        </div>
      </section>

      {/* ── CURRENT VACANCIES (detailed board) ── */}
      <section className="career-openings career-openings--vacancies" id="vacancies">
        <div className="career-openings-header">
          <p className="section-label">Vacancy Board</p>
          <h2>Current Vacancies</h2>
          <p className="career-openings-sub">Detailed openings across all institutes — July 2025.</p>
        </div>

        {DEPARTMENTS.map((dept) => (
          <div key={dept.name} className="career-dept-group">
            <h3 className="career-dept-label">{dept.name}</h3>
            <div className="career-jobs-grid">
              {dept.roles.map((role, i) => (
                <div key={i} className="career-job-card">
                  <div>
                    <span className="job-dept">{dept.name}</span>
                    <h3>{role.title}</h3>
                    <div className="job-pills">
                      <span className="job-type">Full Time</span>
                      <span className="job-vacancy-count">{role.count} {role.count === 1 ? 'Vacancy' : 'Vacancies'}</span>
                    </div>
                  </div>
                  <a
                    href="https://aginalagarh.schoolpad.in/employeeEnquiryManager/onlineApplicationForm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="job-apply-btn"
                  >
                    Apply →
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── CTA ── */}
      <section className="career-cta-section">
        <div className="cta-container">
          <p className="section-label">Join Our Team</p>
          <h2>Don't See Your Role?</h2>
          <p>Send us your resume and we'll reach out when the right opportunity comes up.</p>
          <a href="https://aginalagarh.schoolpad.in/employeeEnquiryManager/onlineApplicationForm/" target="_blank" rel="noopener noreferrer" className="c-btn-primary">Get In Touch →</a>
        </div>
      </section>

    </div>
  )
}
