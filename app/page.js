import AnimatedBackground from '../components/AnimatedBackground'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import Navbar from '../components/Navbar'
import CreativeSkillsSection from '@/components/CreativeSkillsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <AnimatedBackground />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <CreativeSkillsSection />
        <ProjectsSection />
        <ContactSection/>
        <Footer/>
      </main>
    </>
  )
}
