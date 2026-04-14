import React from 'react';
import { Sparkles, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#080808]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* === LOGO (Left) === */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all">
            <Sparkles size={16} className="text-white" />
          </div>
          <span className="text-xl font-semibold tracking-wide text-white">
            Christian
          </span>
        </a>

        {/* === MAIN NAVIGATION (Center) === */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-neutral-high/70 hover:text-white transition-colors">
            About
          </a>
          <a href="#projects" className="text-sm font-medium text-neutral-high/70 hover:text-white transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-sm font-medium text-neutral-high/70 hover:text-white transition-colors">
            Skills
          </a>
          <a href="#contact" className="text-sm font-medium text-neutral-high/70 hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        {/* === ACTION BUTTON (Right) === */}
        <div className="hidden md:flex items-center">
          <a 
            href="#contact" 
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-[#111] hover:bg-[#222] hover:border-white/20 text-white transition-all group shadow-sm"
          >
            <Sparkles size={16} className="text-neutral-high/70 group-hover:text-white transition-colors" />
            <span className="text-sm font-medium">Let's Connect</span>
          </a>
        </div>

        {/* === MOBILE MENU ICON === */}
        <button className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors">
          <Menu size={24} />
        </button>

      </div>
    </header>
  );
}