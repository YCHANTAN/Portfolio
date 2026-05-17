import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* === LOGO === */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-amethyst transition-all shadow-inner">
            <Sparkles size={18} className="text-amethyst" />
          </div>
          <span className={`text-xl font-bold tracking-tight transition-colors ${activeSection === 'home' ? 'text-amethyst' : 'text-white'} group-hover:text-amethyst`}>
            Christian
          </span>
        </a>

        {/* === DESKTOP NAVIGATION === */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={`text-sm font-semibold tracking-wide transition-all hover:text-amethyst ${
                activeSection === link.href.substring(1) 
                  ? 'text-amethyst' 
                  : 'text-neutral-high/60'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* === ACTION BUTTON === */}
        <div className="hidden md:flex items-center">
          <a 
            href="#contact" 
            className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-amethyst hover:text-white text-neutral-high transition-all group"
          >
            <span className="text-sm font-bold uppercase tracking-widest">Connect</span>
            <Sparkles size={14} className="text-amethyst group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* === MOBILE MENU TOGGLE === */}
        <button 
          className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white transition-all hover:border-amethyst"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* === MOBILE NAVIGATION MENU === */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-8 gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-bold tracking-tight transition-all ${
                  activeSection === link.href.substring(1) 
                    ? 'text-amethyst' 
                    : 'text-neutral-high/60'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 py-4 bg-amethyst text-white rounded-2xl font-bold uppercase tracking-[0.2em] shadow-lg shadow-amethyst/20"
            >
              Let's Connect
              <Sparkles size={18} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
