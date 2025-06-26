import AnimatedBackground from '../components/AnimatedBackground'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import Navbar from '../components/Navbar'
import CreativeSkillsSection from '@/components/CreativeSkillsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import HobbiesSection from '@/components/HobbiesSection'

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
        <HobbiesSection/>
        <ContactSection/>
        <Footer/>
      </main>
    </>
  )
}
