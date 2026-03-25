import { useState } from 'react'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillSection from './sections/SkillSection'
import ContactSection from './sections/ContactSection'  
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    // Replaced standard slate colors with your new Charcoal and High Neutral text
    <main className="bg-charcoal text-neutral-high min-h-screen font-sans selection:bg-amethyst selection:text-white">
      
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillSection />
      <ContactSection />
      
    </main>
  );
}

export default App