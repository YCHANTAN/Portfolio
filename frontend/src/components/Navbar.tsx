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
    <header className="fixed top-0 left-0 w-full z-50 bg-[#080808]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* === LOGO (Left) === */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all">
            <Sparkles size={16} className="text-white" />
          </div>
          <span className="text-xl font-semibold tracking-wide text-white">
            Christian
          </span>
        </a>

        {/* === MAIN NAVIGATION (Center) === */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={`text-sm font-medium transition-colors hover:text-white ${
                activeSection === link.href.substring(1) 
                  ? 'text-amethyst' 
                  : 'text-neutral-high/70'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* === ACTION BUTTON (Right) === */}
        <div className="hidden md:flex items-center">
          <a 
            href="#contact" 
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-[#111] hover:bg-[#222] hover:border-white/20 text-white transition-all group shadow-sm"
          >
            <Sparkles size={16} className={`transition-colors ${activeSection === 'contact' ? 'text-amethyst' : 'text-neutral-high/70 group-hover:text-white'}`} />
            <span className="text-sm font-medium">Let's Connect</span>
          </a>
        </div>

        {/* === MOBILE MENU ICON === */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* === MOBILE NAVIGATION MENU === */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#080808]/95 backdrop-blur-2xl border-b border-white/5 animate-in fade-in slide-in-from-top-2 duration-300">
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
              className="mt-4 flex items-center justify-center gap-2 py-4 bg-[#111] border border-white/10 text-white rounded-2xl font-bold uppercase tracking-widest text-xs"
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
