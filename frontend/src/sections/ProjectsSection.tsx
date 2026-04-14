import React, { useRef } from 'react';
import { Target, TerminalSquare, Leaf, Dna, Handshake, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Student Registration App",
    description: "A comprehensive full-stack registration system featuring a responsive frontend and a secure relational database backend for seamless student record management.",
    tech: "React & Node.js",
    icon: <TerminalSquare size={24} className="text-neutral-high" />
  },
  {
    id: 2,
    title: "Marine Biodegradation",
    description: "Research initiative focusing on the AI-assisted biodegradation of synthetic polymers in marine environments, modeling complex ecological interactions.",
    tech: "Data Analysis",
    icon: <Leaf size={24} className="text-neutral-high" />
  },
  {
    id: 3,
    title: "Antifungal Molecule Design",
    description: "Computational biology research designing novel antifungal molecules against Candida auris using advanced in silico modeling techniques.",
    tech: "Bioinformatics",
    icon: <Dna size={24} className="text-neutral-high" />
  },
  {
    id: 4,
    title: "Future Environmental Tech",
    description: "Exploring the intersection of geographic information systems (GIS) and real-time climate monitoring for local ecosystem preservation.",
    tech: "In Silico Modeling",
    icon: <Target size={24} className="text-neutral-high" />
  }
];

export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // Adjusted scroll amount to match the new card width
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center overflow-hidden">
      
      {/* === HEADER AREA === */}
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-[#0a0a0a] text-neutral-high/90 text-sm font-medium tracking-wide mb-6">
        <Target size={14} className="text-neutral-high/70" />
        Featured Work
      </div>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-none text-center mb-4">
        Recent <span className="text-neutral-high/40">Projects</span>
      </h2>

      <p className="text-lg text-neutral-high/50 max-w-xl text-center mb-10">
        A selection of my recent academic research and full-stack development work.
      </p>

      {/* === CAROUSEL AREA === */}
      <div className="w-full relative mb-12">
        
        {/* Navigation Buttons */}
        <div className="flex justify-end gap-3 mb-6 pr-2">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-white/10 bg-[#0a0a0a] hover:bg-white/10 flex items-center justify-center text-white transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-white/10 bg-[#0a0a0a] hover:bg-white/10 flex items-center justify-center text-white transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Carousel Track */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-2 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {projects.map((project) => (
            <div 
              key={project.id} 
              // Enforcing square-like dimensions: w-[320px] and min-h-[360px]
              className="w-[85vw] sm:w-[320px] min-h-[360px] shrink-0 snap-start bg-[#080808] border border-white/5 rounded-3xl p-8 flex flex-col transition-all hover:border-white/15 hover:bg-[#0c0c0c]"
            >
              {/* Top row: Icon (left) and Number (right) */}
              <div className="flex justify-between items-start mb-8">
                {project.icon}
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-xs font-bold text-white border border-white/10">
                  {project.id}
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-neutral-high/50 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Bottom Section: Divider line and Pill (Matching the image exactly) */}
              <div className="pt-6 border-t border-white/5 mt-auto">
                <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-neutral-high/70 text-xs font-medium tracking-wide">
                  {project.tech}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* === BOTTOM HORIZONTAL BAR === */}
      <div className="w-full bg-[#080808] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side: Icon and Text */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
            <Handshake size={22} className="text-neutral-high" />
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg">Open to collaboration</h4>
            <p className="text-neutral-high/50 text-sm mt-1">Currently seeking 240-hour internship opportunities.</p>
          </div>
        </div>

        {/* Right Side: Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-[#111] hover:bg-[#222] border border-white/10 text-white rounded-full font-medium transition-all text-sm"
          >
            See Github
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 bg-white text-black hover:bg-neutral-200 rounded-full font-medium transition-all text-sm"
          >
            Contact Now
          </a>
        </div>

      </div>

    </section>
  );
}