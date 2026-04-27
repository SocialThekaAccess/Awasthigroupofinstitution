import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import About from './pages/About/About'
import Footer from './components/Footer'
import Programs from './pages/Programs/Programs'
import Admissions from './pages/Admissions/Admissions'

import ResearchInnovation from './pages/ResearchInnovation/ResearchInnovation'
import CampusOverview from './pages/CampusOverview/CampusOverview'
import Library from './pages/Library/Library'
import StudentServices from './pages/StudentServices/StudentServices'
import Career from './pages/Career/Career'
import Placement from './pages/Placement/Placement'
import ContactPage from './pages/ContactPage/Contact'
import AwasthiFeePayment from './pages/AwasthiPaymentGateway/AwasthiFeePayment'
import ScrollToTop from './components/ui/ScrollToTop/ScrollToTop'
import WhatsAppButton from './components/ui/WhatsAppButton/WhatsAppButton'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Standalone page — has its own navbar/footer */}
        <Route path="/pay-now" element={<AwasthiFeePayment />} />

        {/* All other pages with site Header + Footer */}
        <Route path="/*" element={
          <>
            <Header />
            <main id="top">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/research" element={<ResearchInnovation />} />
                <Route path="/campus-overview" element={<CampusOverview />} />
                <Route path="/library" element={<Library />} />
                <Route path="/student-services" element={<StudentServices />} />
                <Route path="/placement" element={<Placement />} />
                <Route path="/career" element={<Career />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
            <Footer />
            <ScrollToTop />
            <WhatsAppButton />
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
