import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import WhyChooseUs from './components/WhyChooseUs'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <ThemeToggle />
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <CaseStudies />
        <Projects />
        <Testimonials />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
