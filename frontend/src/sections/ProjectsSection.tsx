import React, { useRef, useState } from 'react';
import { 
  Target, TerminalSquare, Leaf, Dna, Handshake, ShoppingCart, 
  Github, ExternalLink, X, ArrowRight, Info
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string;
  icon: React.ReactNode;
  github: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sofia's Bubble's Laundry App",
    description: "A specialized laundry management system for local business efficiency.",
    longDescription: "Sofia's Bubble's Laundry App is a streamlined management tool designed to handle order tracking, customer notifications, and internal inventory for a boutique laundry service. It focuses on minimalist UI and rapid data entry.",
    tech: "React & TypeScript",
    icon: <ShoppingCart size={24} className="text-neutral-high" />,
    github: "https://github.com/YCHANTAN",
    image: "https://images.unsplash.com/photo-1545173168-9f1947e8015e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Student Registration App",
    description: "Full-stack registration system with a responsive frontend and secure database.",
    longDescription: "A comprehensive solution for educational institutions to manage student enrollments, course assignments, and academic records. Built with robust validation and an intuitive dashboard.",
    tech: "React & Node.js",
    icon: <TerminalSquare size={24} className="text-neutral-high" />,
    github: "https://github.com/YCHANTAN",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Marine Biodegradation",
    description: "AI-assisted research on synthetic polymer biodegradation in marine environments.",
    longDescription: "This research project utilizes machine learning models to simulate the degradation pathways of various plastics in oceanic conditions, providing insights into environmental impact and sustainability.",
    tech: "Data Analysis",
    icon: <Leaf size={24} className="text-neutral-high" />,
    github: "https://github.com/YCHANTAN",
    image: "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Antifungal Molecule Design",
    description: "In silico modeling of novel antifungal molecules against Candida auris.",
    longDescription: "Computational biology research leveraging molecular docking and QSAR modeling to design potential therapeutic agents. The project aims to accelerate drug discovery for drug-resistant pathogens.",
    tech: "Bioinformatics",
    icon: <Dna size={24} className="text-neutral-high" />,
    github: "https://github.com/YCHANTAN",
    image: "https://images.unsplash.com/photo-1532187875605-1ef6c237a145?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "EducAIte App",
    description: "AI-powered educational platform streamlining academic workflows.",
    longDescription: "EducAIte integrates large language models to provide students with personalized tutoring, automated note summarization, and interactive study planners, revolutionizing the modern learning experience.",
    tech: "React & AI",
    icon: <TerminalSquare size={24} className="text-neutral-high" />,
    github: "https://github.com/YCHANTAN",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Pasabuy",
    description: "Community-driven delivery platform with optimized user flow.",
    longDescription: "Pasabuy is a social delivery app that connects neighbors for shared errands. My work focused on the UX architecture, ensuring a friction-less experience from order placement to final delivery.",
    tech: "UI/UX & Figma",
    icon: <ShoppingCart size={24} className="text-neutral-high" />,
    github: "https://github.com/YCHANTAN",
    image: "https://images.unsplash.com/photo-1526367790999-0150786486a9?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDown.current = true;
    scrollRef.current.classList.add('active');
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section id="projects" className="py-24 flex flex-col items-center overflow-hidden">
      
      {/* === HEADER AREA === */}
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/3 backdrop-blur-md text-neutral-high/90 text-sm font-medium tracking-wide mb-6">
        <Target size={14} className="text-amethyst" />
        Featured Work
      </div>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-high leading-none text-center mb-4">
        Recent <span className="text-neutral-high/40">Projects</span>
      </h2>

      <p className="text-lg text-neutral-high/50 max-w-xl text-center mb-16 px-6">
        A selection of my recent academic research and development work.
      </p>

      {/* === FULL-WIDTH CAROUSEL AREA === */}
      <div className="w-full relative mb-16">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 pt-2 px-6 md:px-[10vw] scroll-smooth cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onWheel={(e) => {
            if (scrollRef.current && e.deltaY !== 0) {
              scrollRef.current.scrollLeft += e.deltaY;
            }
          }}
        >
          {projects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className="w-[85vw] sm:w-[360px] min-h-[400px] shrink-0 snap-center bg-white/3 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 flex flex-col transition-all hover:border-amethyst hover:-translate-y-2 select-none cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="p-4 rounded-2xl bg-black/40 text-amethyst border border-white/5">
                  {project.icon}
                </div>
                <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-sm font-bold text-neutral-high border border-white/5">
                  {project.id}
                </div>
              </div>

              <div className="flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-neutral-high mb-4 tracking-tight group-hover:text-amethyst transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-high/50 text-base leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              <div className="pt-8 border-t border-white/5 mt-auto flex justify-between items-center">
                <span className="inline-block px-5 py-2 rounded-full border border-white/5 bg-black/40 text-neutral-high/70 text-xs font-semibold tracking-widest uppercase">
                  {project.tech}
                </span>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-high/30 group-hover:bg-amethyst group-hover:text-white transition-all">
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === PROJECT MODAL === */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-charcoal border border-white/10 rounded-[3rem] overflow-hidden flex flex-col shadow-2xl animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 p-3 rounded-full bg-black/40 text-white hover:bg-amethyst transition-all border border-white/10"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col lg:grid lg:grid-cols-2 h-full overflow-y-auto">
              {/* Left: Image */}
              <div className="h-64 lg:h-full bg-black relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
              </div>

              {/* Right: Content */}
              <div className="p-8 md:p-12 flex flex-col gap-8">
                <div>
                  <div className="flex items-center gap-3 text-amethyst mb-4">
                    <Info size={18} />
                    <span className="text-xs font-bold tracking-[0.2em] uppercase">Project Overview</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-extrabold text-neutral-high tracking-tight leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.split('&').map((t, i) => (
                    <span key={i} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-neutral-high/70">
                      {t.trim()}
                    </span>
                  ))}
                </div>

                <p className="text-lg text-neutral-high/60 leading-relaxed italic">
                  "{selectedProject.description}"
                </p>

                <p className="text-neutral-high/80 text-base leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                <div className="mt-auto flex flex-col sm:flex-row gap-4 pt-10">
                  <a 
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-4 bg-white text-black rounded-2xl font-bold hover:bg-amethyst hover:text-white transition-all shadow-xl group"
                  >
                    <Github size={20} />
                    View Repository
                    <ExternalLink size={16} className="opacity-50 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <a 
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 flex items-center justify-center gap-2 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all"
                  >
                    Inquire Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* === BOTTOM BAR === */}
      <div className="max-w-7xl w-full px-6 md:px-12">
        <div className="w-full bg-white/3 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-3xl bg-black/40 flex items-center justify-center border border-white/5 shadow-inner">
              <Handshake size={32} className="text-amethyst" />
            </div>
            <div>
              <h4 className="text-neutral-high font-bold text-2xl tracking-tight">Open to collaboration</h4>
              <p className="text-neutral-high/50 text-base mt-1">Currently seeking 240-hour internship opportunities.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 w-full md:w-auto">
            <a 
              href="https://github.com/YCHANTAN" 
              target="_blank"
              rel="noreferrer"
              className="flex-1 md:flex-none px-10 py-4 bg-black/40 hover:bg-black/60 border border-white/5 text-neutral-high rounded-2xl font-bold transition-all text-sm text-center"
            >
              See Github
            </a>
            <a 
              href="#contact" 
              className="flex-1 md:flex-none px-10 py-4 bg-neutral-high text-charcoal hover:bg-white rounded-2xl font-bold transition-all text-sm text-center shadow-2xl"
            >
              Contact Now
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
