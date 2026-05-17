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
    const sections = ['home', 'about', 'projects', 'skills', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Trigger when section is roughly in the middle
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Helper to handle smooth click and immediate state update
  const handleNavLinkClick = (href: string) => {
    setActiveSection(href.substring(1));
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#080808]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* === LOGO (Left) === */}
        <a 
          href="#home" 
          onClick={() => handleNavLinkClick('#home')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all">
            <Sparkles size={16} className={activeSection === 'home' ? 'text-amethyst' : 'text-white'} />
          </div>
          <span className={`text-xl font-semibold tracking-wide transition-colors ${activeSection === 'home' ? 'text-amethyst' : 'text-white'}`}>
            Christian
          </span>
        </a>

        {/* === MAIN NAVIGATION (Center) === */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={() => handleNavLinkClick(link.href)}
              className={`text-sm font-medium transition-all duration-300 hover:text-white ${
                activeSection === link.href.substring(1) 
                  ? 'text-amethyst scale-110' 
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
            onClick={() => handleNavLinkClick('#contact')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all group shadow-sm ${
              activeSection === 'contact'
                ? 'border-amethyst bg-amethyst/10 text-amethyst'
                : 'border-white/10 bg-[#111] hover:bg-[#222] hover:border-white/20 text-white'
            }`}
          >
            <Sparkles size={16} className={activeSection === 'contact' ? 'text-amethyst' : 'text-neutral-high/70 group-hover:text-white'} />
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
                onClick={() => handleNavLinkClick(link.href)}
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
              onClick={() => handleNavLinkClick('#contact')}
              className={`mt-4 flex items-center justify-center gap-2 py-4 border rounded-2xl font-bold uppercase tracking-widest text-xs transition-all ${
                activeSection === 'contact'
                  ? 'bg-amethyst border-amethyst text-white'
                  : 'bg-[#111] border-white/10 text-white'
              }`}
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
