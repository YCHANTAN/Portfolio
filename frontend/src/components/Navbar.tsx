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
    <header className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-lg border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        
        {/* === LOGO === */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-amethyst transition-all">
            <Sparkles size={14} className="text-neutral-high/40 group-hover:text-amethyst" />
          </div>
          <span className="text-lg font-medium tracking-tight text-neutral-high/40 transition-colors group-hover:text-neutral-high">
            Christian
          </span>
        </a>

        {/* === DESKTOP NAVIGATION === */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={`text-[13px] font-medium tracking-widest uppercase transition-all hover:text-amethyst ${
                activeSection === link.href.substring(1) 
                  ? 'text-amethyst' 
                  : 'text-neutral-high/30'
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
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/5 bg-white/3 hover:bg-amethyst/10 hover:border-amethyst/30 text-neutral-high/40 hover:text-amethyst transition-all group"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Connect</span>
            <Sparkles size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* === MOBILE MENU TOGGLE === */}
        <button 
          className="md:hidden p-2 rounded-lg text-neutral-high/40 transition-all hover:text-amethyst"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* === MOBILE NAVIGATION MENU === */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur-2xl border-b border-white/5 animate-in fade-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col p-6 gap-5">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl font-bold tracking-tight transition-all ${
                  activeSection === link.href.substring(1) 
                    ? 'text-amethyst' 
                    : 'text-neutral-high/30'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 text-neutral-high/60 rounded-xl font-bold uppercase tracking-widest text-xs"
            >
              Let's Connect
              <Sparkles size={14} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
