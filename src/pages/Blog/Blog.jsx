import { useState } from 'react'
import './Blog.css'

const blogPosts = [
  {
    id: 1,
    category: 'Education',
    tag: 'Higher Studies',
    title: 'Top Reasons to Choose Colleges in Nalagarh, Himachal Pradesh',
    excerpt:
      'Discover why students prefer colleges in Nalagarh for higher studies — quality education, peaceful environment, professional courses, and real career opportunities.',
    date: 'April 28, 2026',
    readTime: '5 min read',
    img: '/AcademicPrograms.png',
    sections: [
      {
        heading: null,
        body: `Choosing the right college is one of the most important decisions for every student. Today, students and parents are not only looking for good education but also a peaceful environment, affordable fees, professional courses, practical learning, and better career opportunities. This is why many students are now choosing colleges in Nalagarh, Himachal Pradesh for higher studies.

Nalagarh has rapidly become an educational hub in Himachal Pradesh. With quality institutions, modern campuses, and industry-oriented courses, the region is attracting students from different parts of India. Institutions like Awasthi Group of Institutions are playing a major role in providing professional education in fields like Ayurveda, Nursing, Law, and other career-focused programs.`,
      },
      {
        heading: 'Peaceful and Student-Friendly Environment',
        body: `One of the biggest advantages of studying in Nalagarh is its calm and peaceful atmosphere. Unlike crowded metro cities, Nalagarh offers a stress-free environment that helps students focus better on studies.

The natural beauty of Himachal Pradesh, fresh air, and greenery create a healthy lifestyle for students. Parents also feel comfortable sending their children to colleges located in safer and less polluted areas.

A peaceful academic environment improves concentration, mental well-being, and overall student performance.`,
      },
      {
        heading: 'Availability of Professional Courses',
        body: `Students today prefer career-oriented education instead of traditional degrees alone. Colleges in Nalagarh provide a wide range of professional courses that prepare students for real-world careers.

At institutions like Awasthi Group of Institutions, students can pursue programs such as:`,
        list: [
          'BAMS (Bachelor of Ayurvedic Medicine and Surgery)',
          'B.Sc Nursing',
          'GNM Nursing',
          'BA LLB',
          'LLB',
          'Veterinary courses',
        ],
        listNote: 'These courses help students build strong career opportunities in healthcare, legal services, and professional sectors.',
      },
      {
        heading: 'Quality Education with Experienced Faculty',
        body: `Another important reason students choose colleges in Nalagarh Himachal Pradesh is the availability of experienced faculty members and practical learning methods.

Modern educational institutions focus on smart classrooms, practical labs, clinical training, workshops and seminars, internship opportunities, and industry exposure. Experienced teachers not only provide theoretical knowledge but also guide students in personality development, communication skills, and career planning.`,
      },
      {
        heading: 'Affordable Education Compared to Metro Cities',
        body: `Education in major cities often comes with very high expenses, including tuition fees, accommodation, transportation, and daily living costs.

Nalagarh offers quality education at comparatively affordable costs. Students can get professional education without putting excessive financial burden on their families. Affordable hostel facilities, local transportation, and reasonable living expenses make Nalagarh a preferred destination for higher studies.`,
      },
      {
        heading: 'Better Focus on Practical Learning',
        body: `Today's employers look for skilled professionals rather than students with only theoretical knowledge. Colleges in Nalagarh are focusing more on practical exposure and skill-based education.

Healthcare students get clinical exposure, law students gain legal practice knowledge, and nursing students receive hospital training. This practical approach helps students become job-ready.`,
      },
      {
        heading: 'Growing Career Opportunities',
        body: `Professional education opens doors to better career opportunities. Students graduating from reputed colleges in Nalagarh can pursue careers in:`,
        list: [
          'Hospitals and healthcare organizations',
          'Ayurvedic clinics',
          'Law firms and corporate legal departments',
          'Government sectors',
          'Research fields',
        ],
        listNote: 'The demand for healthcare professionals, Ayurvedic doctors, nurses, and legal experts is continuously increasing across India.',
      },
      {
        heading: 'Safe Hostel and Campus Facilities',
        body: `Colleges in Nalagarh provide:`,
        list: [
          'Secure hostel facilities',
          'Library access',
          'Sports activities',
          'Cafeterias',
          'Wi-Fi campuses',
          'Transportation support',
        ],
        listNote: 'A safe campus environment helps students focus on academics and personal growth.',
      },
      {
        heading: 'Excellent Connectivity and Location',
        body: `Nalagarh is well-connected to major cities like Chandigarh, Baddi, and Solan. This makes travel convenient for students and parents. The region also has growing industrial development, which creates additional internship and career opportunities.`,
      },
      {
        heading: 'Holistic Student Development',
        body: `Modern colleges focus on the overall growth of students through cultural activities, sports events, personality development sessions, leadership programs, and career counseling. This helps students become confident professionals ready for future challenges.`,
      },
      {
        heading: 'Why Choose Awasthi Group of Institutions?',
        body: `Awasthi Group of Institutions has become a trusted name for professional education in Nalagarh, Himachal Pradesh. The institution offers multiple professional programs in Ayurveda, Nursing, and Law with a focus on quality education and student growth.`,
        list: [
          'Professional courses',
          'Experienced faculty',
          'Practical learning',
          'Modern infrastructure',
          'Career-oriented education',
          'Peaceful learning environment',
        ],
      },
      {
        heading: 'Conclusion',
        body: `Choosing the right college can shape a student's future. Colleges in Nalagarh Himachal Pradesh are becoming a preferred choice because of their quality education, peaceful environment, affordable fees, and professional courses.

Whether students want to pursue Ayurveda, Nursing, Law, or other professional careers, Nalagarh offers excellent opportunities for higher education and career growth. Institutions like Awasthi Group of Institutions continue to support students with industry-focused education and practical learning that helps them build successful futures.`,
      },
    ],
  },
  {
    id: 2,
    category: 'Ayurveda',
    tag: 'Healthcare',
    title: 'Best Ayurvedic College in Himachal Pradesh for BAMS',
    excerpt:
      'Looking for the best Ayurvedic college in Himachal Pradesh? Explore BAMS courses, career scope, benefits of Ayurveda education, and professional opportunities.',
    date: 'April 15, 2026',
    readTime: '6 min read',
    img: '/Awasthiayurveda.png',
    sections: [
      {
        heading: null,
        body: `Ayurveda is one of the oldest healthcare systems in the world. Today, it is gaining global recognition because people are moving toward natural healing and holistic healthcare solutions. As the demand for Ayurvedic professionals increases, many students are searching for the best Ayurvedic college in Himachal Pradesh to build a successful medical career.

Himachal Pradesh has become a preferred destination for Ayurvedic education because of its peaceful environment, natural surroundings, and quality educational institutions. Among the recognized institutions, Awasthi Ayurvedic Medical College & Hospital is emerging as a strong choice for students interested in Ayurvedic medical studies.`,
      },
      {
        heading: 'Why Ayurveda is Becoming Popular',
        body: `Modern lifestyles, stress, unhealthy eating habits, and increasing side effects of chemical-based medicines are encouraging people to adopt natural healthcare systems.

Ayurveda focuses on natural healing, root cause treatment, holistic wellness, prevention of diseases, and balanced lifestyle. Because of these benefits, Ayurveda is now widely accepted not only in India but also internationally.

This growing demand has created excellent career opportunities for students pursuing Ayurvedic education.`,
      },
      {
        heading: 'Why Choose Himachal Pradesh for Ayurvedic Studies?',
        body: `Himachal Pradesh offers an ideal atmosphere for medical education, especially Ayurveda. The peaceful climate and natural surroundings support Ayurvedic learning and practical understanding of herbal medicine.

Students prefer Ayurvedic colleges in Himachal because of calm learning environment, affordable education, better focus on practical training, modern campus facilities, and professional healthcare exposure.`,
      },
      {
        heading: 'About Awasthi Ayurvedic Medical College & Hospital',
        body: `Awasthi Ayurvedic Medical College & Hospital in Nalagarh, Himachal Pradesh is known for offering quality Ayurvedic education and practical learning opportunities for students.

The institution focuses on professional Ayurvedic education, practical clinical exposure, experienced faculty, modern infrastructure, and holistic healthcare learning. The college aims to prepare skilled Ayurvedic professionals who can contribute to the healthcare industry.`,
      },
      {
        heading: 'BAMS Course Details',
        body: `The most popular Ayurvedic course in India is BAMS (Bachelor of Ayurvedic Medicine and Surgery). The course generally includes 4.5 years of academic study followed by a 1-year internship. Students need 10+2 with Physics, Chemistry, and Biology and qualification in NEET examination.

The BAMS course covers subjects such as:`,
        list: [
          'Anatomy & Physiology',
          'Ayurvedic Pharmacology',
          'Panchakarma',
          'Surgery',
          'Herbal Medicine',
          'Pathology',
          'Yoga and Wellness',
        ],
      },
      {
        heading: 'Benefits of Studying Ayurveda',
        body: `The Ayurvedic healthcare industry is growing rapidly in India and abroad. Ayurveda is now recognized in many countries, and Ayurvedic doctors and wellness experts are getting opportunities internationally.

Ayurveda focuses on treating the root cause instead of temporary symptom relief, making Ayurvedic professionals highly valuable in wellness industries.`,
      },
      {
        heading: 'Career Scope After BAMS',
        body: `Students completing BAMS have various career opportunities available today:`,
        list: [
          'Ayurvedic Doctor — open own clinic or work in hospitals',
          'Panchakarma Specialist — highly demanded in wellness and spa industries',
          'Research & Development — Ayurvedic medicine research and product development',
          'Higher Education — MD Ayurveda, specialized healthcare courses',
          'Wellness Industry — health resorts, wellness centers, natural therapy clinics',
        ],
      },
      {
        heading: 'Practical Training and Clinical Exposure',
        body: `Practical learning is very important in medical education. Ayurvedic colleges provide clinical training, herbal medicine studies, patient interaction, hospital internships, and practical diagnosis techniques.

Institutions like Awasthi Ayurvedic Medical College & Hospital focus on practical education and skill development to prepare students for professional healthcare careers.`,
      },
      {
        heading: 'Importance of Choosing the Right Ayurvedic College',
        body: `Choosing the right college is important for quality education and career growth. Students should look for experienced faculty, practical hospital training, modern infrastructure, clinical exposure, student support, and a professional learning environment.`,
      },
      {
        heading: 'Conclusion',
        body: `Ayurveda is becoming one of the fastest-growing healthcare fields in India and globally. Students interested in natural medicine and holistic healthcare can build rewarding careers through professional Ayurvedic education.

Choosing the best Ayurvedic college in Himachal Pradesh helps students gain quality education, practical skills, and strong career opportunities. Institutions like Awasthi Ayurvedic Medical College & Hospital and Awasthi Group of Institutions are helping students build successful futures in Ayurvedic medicine and healthcare.`,
      },
    ],
  },
]

/* ── Article Page ── */
function ArticleView({ post, onBack }) {
  return (
    <div className="page blog-page">
      <div className="blog-art-wrap">

        <button className="blog-back-btn" onClick={onBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="15" height="15"><polyline points="15 18 9 12 15 6" /></svg>
          Back to Blog
        </button>

        <div className="blog-art-layout">
          {/* Main content */}
          <article className="blog-art-main">
            <div className="blog-art-top">
              <span className="blog-art-cat">{post.category}</span>
              <h1>{post.title}</h1>
              <div className="blog-art-meta">
                <span>{post.date}</span>
                <span className="blog-art-sep">·</span>
                <span>{post.readTime}</span>
                <span className="blog-art-sep">·</span>
                <span>Awasthi Group of Institutions</span>
              </div>
            </div>

            <div className="blog-art-img-wrap">
              <img src={post.img} alt={post.title} className="blog-art-img" />
            </div>

            <div className="blog-art-body">
              {post.sections.map((sec, i) => (
                <div key={i} className="blog-art-section">
                  {sec.heading && <h2>{sec.heading}</h2>}
                  {sec.body.split('\n\n').map((para, j) =>
                    para.trim() ? <p key={j}>{para.trim()}</p> : null
                  )}
                  {sec.list && (
                    <ul>
                      {sec.list.map((item, k) => <li key={k}>{item}</li>)}
                    </ul>
                  )}
                  {sec.listNote && <p className="blog-art-note">{sec.listNote}</p>}
                </div>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="blog-art-sidebar">
            <div className="blog-sb-card">
              <h4>About Awasthi Group</h4>
              <p>A trusted name for professional education in Nalagarh, Himachal Pradesh since 2004.</p>
              <a href="/about" className="blog-sb-link">Learn More →</a>
            </div>
            <div className="blog-sb-card">
              <h4>Our Programs</h4>
              <ul className="blog-sb-list">
                <li>BAMS — Ayurveda</li>
                <li>B.Sc Nursing</li>
                <li>GNM Nursing</li>
                <li>BA LLB / LLB</li>
                <li>B.Pharmacy</li>
              </ul>
              <a href="/programs" className="blog-sb-link">View All →</a>
            </div>
            <div className="blog-sb-card blog-sb-cta">
              <h4>Admissions Open 2026</h4>
              <p>Start your journey with Awasthi Group of Institutions today.</p>
              <a href="/admissions" className="blog-sb-btn">Apply Now →</a>
            </div>
          </aside>
        </div>

      </div>
    </div>
  )
}

/* ── Blog Listing ── */
export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null)

  if (selectedPost) {
    return <ArticleView post={selectedPost} onBack={() => setSelectedPost(null)} />
  }

  return (
    <div className="page blog-page">

      {/* ── HERO ── */}
      <section className="blog-hero">
        <div className="blog-hero-text">
          <p className="blog-hero-label">Blog</p>
          <h1>Helpful articles for education,<br />career &amp; professional growth</h1>
          <p className="blog-hero-sub">
            Insights and guidance from Awasthi Group of Institutions — helping students make informed decisions about higher education, Ayurveda, Nursing, Law, and more.
          </p>
        </div>
        <div className="blog-hero-img-wrap">
          <img src="/Studentss.png" alt="Students at Awasthi Group of Institutions" className="blog-hero-img" />
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="blog-section-label">
        <span>Awasthi Insights</span>
        <div className="blog-section-line" />
      </div>

      {/* ── CARDS GRID ── */}
      <section className="blog-grid">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="blog-card"
            onClick={() => setSelectedPost(post)}
          >
            <div className="blog-card-img-wrap">
              <img src={post.img} alt={post.title} className="blog-card-img" />
            </div>
            <div className="blog-card-body">
              <span className="blog-card-cat">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-card-footer">
                <span className="blog-card-meta">{post.date} · {post.readTime}</span>
                <span className="blog-card-read">Read More →</span>
              </div>
            </div>
          </article>
        ))}
      </section>

    </div>
  )
}
