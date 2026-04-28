import React from "react";
import "./AboutPage.css";

const chairmanImg = "/Chairman.png";
const directorImg = "/Director.png";
const futureLeadersImg = "/Futureleaders.png";
const innovativeImg = "/Innovations.png";
const achievement1 = "/Achievementone.png";
const achievement2 = "/Achievementtwo.png";
const achievement3 = "/Achievementthree.png";

const About = () => {
  return (
    <div className="page about-page">

      {/* ── HERO SECTION ── */}
      <section className="about-hero">
        <div className="about-hero__content">
          <h1 className="about-hero__title">
            Empowering Future <br /> Generations Together
          </h1>
          <p className="about-hero__desc">
            Awasthi Group has been dedicated to shaping a brighter future
            through education since 2005, nurturing the leaders of tomorrow
            with passion and commitment.
          </p>
          <a href="https://aginalagarh.schoolpad.in/enquiryManager/onlineOpenAdmissionForm/9" target="_blank" rel="noopener noreferrer" className="about-hero__btn">Join Us</a>
        </div>
        <div className="about-hero__image-wrap">
          <img src="/Awasthimootcourt.png" alt="Students" className="about-hero__img" />
          <div className="about-hero__badge">
            <span className="about-hero__badge-number">12000+</span>
            <span className="about-hero__badge-label">Students Graduated Since 2005</span>
          </div>
        </div>
      </section>

      {/* ── CHAIRMAN'S DESK ── */}
<section className="about-message about-message--dark">
  <div className="about-message__text">
    <span className="about-message__from">From the Desk of</span>
    <div className="about-message__accent"></div>
    <h2 className="about-message__title">Chairman</h2>
    <p className="about-message__body">
      Welcome to our family. It is my honor to lead an organization dedicated
      to fostering knowledge and empowering students to achieve their fullest
      potential. We believe that education is the cornerstone of a prosperous
      future, and we are committed to providing consistent and supportive
      learning environments. Thank you for being a part of our mission to
      shape a brighter tomorrow.
    </p>
    <p className="about-message__sign">— Chander Shekhar Awasthi</p>
  </div>
  <div className="about-message__img-wrap">
    <img src={chairmanImg} alt="Chairman" className="about-message__img" />
  </div>
</section>

{/* ── DIRECTOR'S MESSAGE ── */}
<section className="about-message about-message--light">
  <div className="about-message__img-wrap">
    <img src={directorImg} alt="Director" className="about-message__img" />
  </div>
  <div className="about-message__text">
    <span className="about-message__from">From the Desk of</span>
    <div className="about-message__accent"></div>
    <h2 className="about-message__title">Director</h2>
    <p className="about-message__body">
      It is my proud privilege to warmly welcome you into the portals of our
      learning community. We are dedicated to developing skilled and
      outstanding students who can pursue their careers and strength to
      achieve at their ability so that our most best students emerge into
      society. We believe in a global community where every individual is
      encouraged to participate whole-heartedly.
    </p>
    <p className="about-message__sign">— Rishav Awasthi</p>
  </div>
</section>

{/* ── VISION & WHY AWASTHI ── */}
<section className="about-vision">
  <div className="about-vision__left">
    <span className="about-vision__badge">Our Vision</span>
    <h2 className="about-vision__title">Leading Excellence in Education</h2>
    <p className="about-vision__text">
      To be a leading center of excellence in healthcare and legal education,
      empowering students through quality education in Ayurveda, Nursing,
      Pharmacy and Law by blending traditional wisdom with modern knowledge,
      and nurturing competent, ethical, and socially responsible professionals
      for the service of society.
    </p>
    <img
      src="/vision.png"
      alt="Career at Awasthi"
      className="about-vision__img"
    />
  </div>

  <div className="about-vision__right">
    <span className="about-vision__badge">Why Awasthi Group Stands Apart</span>
    <h2 className="about-vision__title">What Makes Us Different</h2>
    <ul className="about-vision__list">
      <li className="about-vision__item">
        <div className="about-vision__icon-circle" />
        <div>
          <strong>Seasoned Academic Mentors</strong>
          <p>Experienced faculty dedicated to student success</p>
        </div>
      </li>
      <li className="about-vision__item">
        <div className="about-vision__icon-circle" />
        <div>
          <strong>Innovative Campus Facilities</strong>
          <p>Modern infrastructure built for learning</p>
        </div>
      </li>
      <li className="about-vision__item">
        <div className="about-vision__icon-circle" />
        <div>
          <strong>Hands-on Learning Excellence</strong>
          <p>Practical exposure through labs and real projects</p>
        </div>
      </li>
      <li className="about-vision__item">
        <div className="about-vision__icon-circle" />
        <div>
          <strong>Professional Placement Services</strong>
          <p>Strong industry connections for career growth</p>
        </div>
      </li>
      <li className="about-vision__item">
        <div className="about-vision__icon-circle" />
        <div>
          <strong>Integrated Learning Approach</strong>
          <p>Blending traditional wisdom with modern education</p>
        </div>
      </li>
    </ul>
  </div>
</section>

      {/* ── EDUCATIONAL PROJECTS ── */}
      <section className="about-projects">
        <div className="about-projects__header">
          <h2 className="about-projects__title">Our Initiatives </h2>
          <p className="about-projects__subtitle">
            We focus on nurturing future leaders through innovative educational
            institutions.
          </p>
        </div>

        <div className="about-projects__grid">
          <div className="about-projects__card">
            <img src={futureLeadersImg} alt="Future Leaders" className="about-projects__img" />
            <div className="about-projects__card-text">
              <h3>Future Leaders</h3>
              <p>
                Our projects aim to empower students with skills for a brighter
                tomorrow, fostering critical thinking and creativity to build a
                better future for our nation.
              </p>
            </div>
          </div>

          <div className="about-projects__card">
            <img src={innovativeImg} alt="Innovative Programs" className="about-projects__img" />
            <div className="about-projects__card-text">
              <h3>Innovative Programs</h3>
              <p>
                We implement programs that enhance learning experiences, ensuring
                students are well-prepared to face the challenges of tomorrow and
                contribute positively to society through initiatives like Free
                Legal Aid Camps, Social Cause Drives and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECENT ACHIEVEMENTS ── */}
      <section className="about-achievements">
        <h2 className="about-achievements__title"> ACHIEVEMENTS</h2>
        <p className="about-achievements__subtitle">
          Dedicated to Helping, Committed to Excellence
        </p>
        <div className="about-achievements__grid">
          <img src={achievement1} alt="Achievement 1" className="about-achievements__img" />
          <img src={achievement2} alt="Achievement 2" className="about-achievements__img" />
          <img src={achievement3} alt="Achievement 3" className="about-achievements__img" />
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="about-testimonials">
        <div className="about-testimonials__grid">
          <div className="about-testimonials__card">
            <div className="about-testimonials__stars">★★★★★</div>
            <p className="about-testimonials__text">
              "Awasthi Group is shaping the future by empowering the next
              generation through quality education and values."
            </p>
            <span className="about-testimonials__author">— Ravi Kumar</span>
          </div>
          <div className="about-testimonials__card">
            <div className="about-testimonials__stars">★★★★★</div>
            <p className="about-testimonials__text">
              "The commitment of Awasthi Group to educational excellence is
              evident in every aspect of their institutions."
            </p>
            <span className="about-testimonials__author">— Anita Singh</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;