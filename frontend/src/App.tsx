import { useState } from 'react'
import Header from './components/Header' // <-- 1. Import the new Header
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillSection from './sections/SkillSection'
import ContactSection from './sections/ContactSection' 
import Galaxy from './components/Galaxy' 
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="relative text-neutral-high min-h-screen font-sans selection:bg-amethyst selection:text-white">
      
      {/* THE STICKY BACKGROUND */}
      <div className="fixed inset-0 z-[-1] bg-black"> 
        <Galaxy 
          hueShift={280} 
          speed={0.8} 
          starSpeed={0.5}
          density={1.5}
        />
        <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
      </div>

      {/* ALL YOUR SECTIONS FOREGROUND */}
      <div className="relative z-10">
        <Header /> {/* <-- 2. Place the Header here! */}
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillSection />
        <ContactSection />
      </div>
      
    </main>
  );
}

export default App