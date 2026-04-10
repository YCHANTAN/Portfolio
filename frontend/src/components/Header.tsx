import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* === LEFT SIDE: LOGO === */}
        <a href="#" className="group flex items-center gap-1">
          <span className="text-2xl font-extrabold tracking-tighter text-neutral-high transition-colors group-hover:text-white">
            Christian
          </span>
          <span className="w-2 h-2 rounded-full bg-amethyst mt-1 animate-pulse"></span>
        </a>

        {/* === RIGHT SIDE: NAVIGATION === */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Changed href from #achievements to #projects */}
          <a 
            href="#projects" 
            className="text-sm font-medium text-neutral-high/70 hover:text-amethyst transition-colors"
          >
            Achievements
          </a>
          <a 
            href="#skills" 
            className="text-sm font-medium text-neutral-high/70 hover:text-amethyst transition-colors"
          >
            Skills
          </a>
          <a 
            href="#contact" 
            className="text-sm font-semibold text-amethyst hover:text-white transition-colors border border-amethyst/30 hover:border-amethyst px-4 py-2 rounded-full bg-amethyst/10"
          >
            Contact Me
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-neutral-high/70 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

      </div>
    </header>
  );
}