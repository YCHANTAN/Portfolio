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
    // 2. The main wrapper with global dark mode styling
    <main className="bg-slate-950 text-slate-50 min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      
      {/* 3. Render each section in the order you want them to appear */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillSection />
      <ContactSection />
      
    </main>
  );
}

export default App
