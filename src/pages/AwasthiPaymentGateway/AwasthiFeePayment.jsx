import { useEffect } from "react";
import "./AwasthiFeePayment.css";

export default function AwasthiFeePayment() {
  const sections = [
    {
      num: 1,
      title: "General Information",
      content: (
        <p>
          These Terms and Conditions govern all online payments made to{" "}
          <span className="highlight">Awasthi Educational Society</span> through
          our official website. By using our online payment system, you agree to
          abide by these terms.
        </p>
      ),
    },
    {
      num: 2,
      title: "Accepted Payment Methods",
      content: (
        <>
          <p>We accept online payments through:</p>
          <div className="payment-chips">
            {[
              "💳 Credit Cards / Debit Cards (Visa, MasterCard, etc.)",
              "🏦 Net Banking",
              "📲 UPI",
              "👜 Digital Wallets (where available)",
            ].map((c) => (
              <span className="chip" key={c}>{c}</span>
            ))}
          </div>
          <p className="note" style={{ marginTop: 10 }}>
            **Please note payments via RuPay credit cards are not accepted.
          </p>
        </>
      ),
    },
    {
      num: 3,
      title: "Fee Structure",
      content: (
        <ul className="section-list">
          <li>
            Online payments can be made for tuition fees, admission fees,
            examination fees, hostel fees, and other charges as applicable.
          </li>
          <li>
            All fee amounts are determined by{" "}
            <span className="highlight">Awasthi Educational Society,</span> and
            its subsidiaries{" "}
            <span className="highlight">
              Awasthi Ayurvedic Medical College | Awasthi Institute of Nursing |
              Awasthi College of Law | The Gurukul International School
            </span>{" "}
            and are subject to change as per institutional policies.
          </li>
        </ul>
      ),
    },
    {
      num: 4,
      title: "Transaction Charges",
      content: (
        <ul className="section-list">
          <li>
            Transaction or service charges (if any) are applicable as per your
            selected payment method and are non-refundable.
          </li>
          <li>
            All the transactional charges are borne by the payer unless stated
            otherwise.
          </li>
        </ul>
      ),
    },
    {
      num: 5,
      title: "Payment Confirmation",
      content: (
        <ul className="section-list">
          <li>
            Upon successful transaction, a confirmation message and receipt will
            be displayed and sent via email/SMS (if contact details are correctly
            provided).
          </li>
          <li>
            It is your responsibility to ensure the payment was successful and to
            retain a copy of the payment confirmation for future reference.
          </li>
        </ul>
      ),
    },
    {
      num: 6,
      title: "Refund and Cancellation Policy",
      content: (
        <ul className="section-list">
          <li>
            <span className="highlight">Fees once paid are non-refundable</span>{" "}
            under normal circumstances.
          </li>
          <li>
            Refunds may be considered only in the following exceptional cases:
            <ul className="sub-list">
              <li>Duplicate or excess payment</li>
              <li>
                Failed transaction where the amount was debited but not credited
                to the society's account
              </li>
            </ul>
          </li>
          <li>
            In such cases, the refund will be processed within{" "}
            <span className="highlight">7 to 10 working days</span>, depending
            on the bank/payment gateway processing time.
          </li>
        </ul>
      ),
    },
    {
      num: 7,
      title: "Privacy and Data Protection",
      content: (
        <ul className="section-list">
          <li>
            Awasthi Educational Society is committed to protecting your privacy.
          </li>
          <li>
            Personal data and payment information collected during the
            transaction are securely stored and used only for academic and
            administrative purposes.
          </li>
          <li>
            We use secure encryption and follow industry-standard best practices
            to protect all user data.
          </li>
        </ul>
      ),
    },
    {
      num: 8,
      title: "Limitation of Liability",
      content: (
        <>
          <p>Awasthi Educational Society shall not be responsible for any:</p>
          <ul className="section-list" style={{ marginTop: 6 }}>
            <li>Technical failures on the user's device or internet service</li>
            <li>Mistakes in payment details entered by the user</li>
            <li>
              Unauthorized transactions due to negligence on part of the user
            </li>
          </ul>
        </>
      ),
    },
    {
      num: 9,
      title: "Dispute Resolution",
      content: (
        <ul className="section-list">
          <li>
            For any payment-related queries or concerns, please contact the
            Accounts Department at:
            <div className="contact-inline">
              <span className="contact-link">📞 +91-7876904925</span>
              <span className="contact-link">✉️ accounts@awasthigroup.co.in</span>
            </div>
          </li>
          <li>
            Disputes will be resolved in accordance with institutional policies
            and applicable law.
          </li>
        </ul>
      ),
    },
    {
      num: 10,
      title: "Updates to Terms",
      content: (
        <ul className="section-list">
          <li>
            Awasthi Educational Society reserves the right to revise or update
            these Terms and Conditions at any time.
          </li>
          <li>
            Continued use of the online payment facility implies acceptance of
            the most recent version of the terms.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="fee-page">
      {/* TOP BAR */}
      <div className="topbar">
        🎓 Admissions Open 2026{" "}
        <span className="topbar-sep">|</span>{" "}
        Among the Top Institutions in Himachal Pradesh
      </div>

      {/* NAVBAR */}
      <div className="navbar">
        <div className="logo">
          <div className="logo-icon">AG</div>
          <div>
            <div className="logo-main">AWASTHI GROUP</div>
            <div className="logo-sub">OF INSTITUTIONS</div>
          </div>
        </div>
        <div className="nav-pill">Fee Payment Portal</div>
      </div>

      {/* HERO */}
      <div className="hero">
        <div className="hero-circle-1" />
        <div className="hero-circle-2" />
        <div className="hero-inner">
          <div className="hero-badge">📋 &nbsp;Online Fee Payment</div>
          <p className="hero-tagline">
            Awasthi Group of Institutions (Trade Name) is operated under the
            aegis of
          </p>
          <h1 className="hero-name">Awasthi Educational Society (Reg.)</h1>
        </div>
      </div>

      <div className="container">
        {/* T&C CARD */}
        <div className="tnc-card">
          <div className="tnc-header">
            <div className="tnc-header-icon">📄</div>
            <h2>Terms &amp; Conditions — Online Fee Payment</h2>
          </div>
          <div className="tnc-body">
            {sections.map((sec, idx) => (
              <div key={sec.num}>
                <div className="section">
                  <div className="section-title">
                    <span className="section-title-bar" />
                    {sec.num}. {sec.title}
                  </div>
                  {sec.content}
                </div>
                {idx < sections.length - 1 && <div className="divider" />}
              </div>
            ))}
          </div>
        </div>

        {/* STEPS CARD */}
        <div className="steps-card">
          <div className="steps-title">
            ⚡ Steps to Make Payment{" "}
            <span className="steps-badge">ICICI Easy Pay</span>
          </div>
          <ul className="steps-list">
            {[
              <>Search <strong>ICICI Easy Pay</strong> →</>,
              <>Under Institution's Name → Select → <strong>Awasthi Educational Society</strong></>,
              <>Enter your <strong>details and amount</strong> →</>,
              <><strong>Complete the payment.</strong></>,
            ].map((text, i) => (
              <li className="step-item" key={i}>
                <div className="step-num">{i + 1}</div>
                <div className="step-text">{text}</div>
              </li>
            ))}
          </ul>
          <p className="steps-note">
            This pay now link will take you directly to google search of ICICI
            Bank Easy Pay.
          </p>
        </div>

        {/* CONSENT */}
        <div className="consent-bar">
          <span style={{ fontSize: 18, flexShrink: 0 }}>🔒</span>
          <p>
            "By clicking <strong>'Pay Now'</strong>, you expressly acknowledge
            and agree to the above stated Terms and Conditions."
          </p>
        </div>

        {/* PAY BUTTON */}
        <div className="pay-btn-wrap">
          <a
            href="https://eazypay.icicibank.com/"
            target="_blank"
            rel="noreferrer"
            className="pay-btn"
          >
            <div className="btn-arrow">→</div>
            Pay Now — ICICI Easy Pay
          </a>
        </div>

        {/* CONTACT */}
        <div className="contact-strip">
          <div className="contact-pill">📞 +91-7876904925</div>
          <div className="contact-pill">✉️ accounts@awasthigroup.co.in</div>
        </div>

        {/* SECURITY */}
        <div className="security-row">
          <span className="sec-badge">🔐 256-bit SSL Encrypted</span>
          <span className="sec-badge">·</span>
          <span className="sec-badge">🏦 ICICI Bank Powered</span>
          <span className="sec-badge">·</span>
          <span className="sec-badge">✅ PCI-DSS Compliant</span>
        </div>
      </div>
    </div>
  );
}