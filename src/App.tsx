import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { VelocityScroll } from './components/ui/velocity-text'
import { AboutAgency } from './components/AboutAgency'
import { About } from './components/About'
import { Services } from './components/Services'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useEffect } from 'react'
import { SiteHeader } from './components/SiteHeader'

function ScrollToHash() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  return null
}

function HomePage() {
  return (
    <main className="relative" role="main" style={{ overflow: 'visible' }}>
      <Helmet>
        <title>WTF Studios | AI-Powered Creative & Media Agency</title>
        <meta name="description" content="WTF Studios is an AI-powered creative agency reimagining ads for Gen Z. We don't run ads; we launch internet-breaking moments." />
        <link rel="canonical" href="https://thewtfstudio.com/" />
      </Helmet>
      <section id="hero" aria-label="Hero section">
        <Hero />
      </section>
      <VelocityScroll />
      <section id="portfolio" aria-label="Portfolio section">
        <Portfolio />
      </section>
      <section id="about" aria-label="About section">
        <About />
      </section>
      <section id="services" aria-label="Services section">
        <Services />
      </section>
      <section id="why-choose-us" aria-label="Why Choose Us section">
        <WhyChooseUs />
      </section>
      <section id="contact" aria-label="Contact section">
        <Contact />
      </section>
      <section id="about-agency" aria-label="About Agency section">
        <AboutAgency />
      </section>
      <section id="testimonials" aria-label="Testimonials section">
        <Testimonials />
      </section>
    </main>
  )
}

function AboutPage() {
  return (
    <main className="relative" role="main">
      <Helmet>
        <title>About WTF Studios | AI Creative & Media Agency</title>
        <meta name="description" content="Learn about WTF Studios, the AI-powered creative agency founded by Vishal Yadav. We blend AI speed with human intuition to create viral moments." />
        <link rel="canonical" href="https://thewtfstudio.com/about" />
      </Helmet>
      <SiteHeader />
      <div className="pt-0">
        <AboutAgency isPage={true} />
      </div>
    </main>
  )
}

function ContactPage() {
  return (
    <main className="relative" role="main">
      <Helmet>
        <title>Contact WTF Studios | Work With Us</title>
        <meta name="description" content="Ready to launch an internet-breaking moment? Book a discovery call with WTF Studios, the AI-powered creative agency." />
        <link rel="canonical" href="https://thewtfstudio.com/contact" />
      </Helmet>
      <SiteHeader />
      <div className="pt-0">
        <Contact isPage={true} />
      </div>
    </main>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToHash />
        <div className="min-h-screen bg-background text-foreground" style={{ overflow: 'visible' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}