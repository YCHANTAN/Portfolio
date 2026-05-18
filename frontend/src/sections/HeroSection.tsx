import { ArrowUpRight, Sparkles, X } from 'lucide-react';
import { useState } from 'react';

export default function HeroSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      
      {/* Container to hold the top half and bottom half */}
      <div className="z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-24">
        {/* ... (rest of content) */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">
          
          {/* Left Side: Text Content */}
          <div className="flex flex-col items-start text-left space-y-6 lg:max-w-[50%]">
            
            {/* Pill Badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/3 backdrop-blur-md text-neutral-high/80 text-xs font-medium tracking-wide">
              <Sparkles size={14} className="text-white" />
              SOFTWARE ENGINEER & UI / UX DESIGNER
            </div>
            
            {/* Giant Name with contrast styling */}
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight flex items-center gap-4 flex-wrap leading-none text-white">
              Christian
              <span className="text-neutral-high/40">Osorno</span>
              {/* Arrow Circle next to name */}
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/3 hidden md:flex transition-transform hover:scale-110">
                <ArrowUpRight size={24} className="text-neutral-high/60" />
              </div>
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-lg text-neutral-high/60 leading-relaxed max-w-lg">
              Bridging the gap between scalable Software Engineering and complex UI / UX Design. I help transform ideas into robust, functioning digital solutions. Let's build something great!
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-white/3 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all"
              >
                Explore Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-neutral-high text-charcoal hover:bg-white rounded-full font-medium transition-all"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Side: Floating Testimonial Cards */}
          <div className="relative w-full lg:w-[40%] h-[250px] md:h-[300px] flex items-center justify-center pointer-events-auto hidden md:flex">
            
            {/* Floating Card 1 */}
            <div className="absolute top-4 left-0 md:left-10 w-64 bg-white/3 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl -rotate-6 transform hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer z-10">
              <p className="text-white text-sm font-medium leading-relaxed">
                "Working with him was a game changer!"
              </p>
              <div className="w-full flex justify-end mt-4">
                <span className="px-3 py-1 rounded-full bg-black/40 text-neutral-high/50 text-[10px] uppercase font-bold tracking-widest border border-white/5">- jorge</span>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-4 right-0 md:right-4 w-64 bg-white/3 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl rotate-3 transform hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer z-0">
              <p className="text-white text-sm font-medium leading-relaxed">
                "We increased our conversions by 200%"
              </p>
              <div className="w-full flex justify-end mt-4">
                <span className="px-3 py-1 rounded-full bg-black/40 text-neutral-high/50 text-[10px] uppercase font-bold tracking-widest border border-white/5">- james</span>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================= */} 
        {/* BOTTOM ROW: BENTO GRID OF IMAGES        */}
        {/* ======================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full pb-12">
          
          {/* Visionary Design */}
          <div 
            onClick={() => setSelectedImage('/Visionary-Design.png')}
            className="group relative w-full aspect-[4/3] md:aspect-video bg-white/3 border border-white/10 rounded-[2.5rem] overflow-hidden cursor-pointer transition-all hover:border-amethyst"
          >
            <img 
              src="/Visionary-Design.png" 
              alt="Visionary Design" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal/40 to-transparent"></div>
            <p className="absolute top-8 left-8 z-10 text-neutral-high font-bold tracking-[0.2em] text-xs uppercase">Visionary Design</p>
            
            <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all group-hover:bg-amethyst group-hover:scale-110">
              <ArrowUpRight size={20} />
            </div>
          </div>

          {/* Scalable Code */}
          <div 
            onClick={() => setSelectedImage('/Scalable-Code.png')}
            className="group relative w-full aspect-[4/3] md:aspect-video bg-white/3 border border-white/10 rounded-[2.5rem] overflow-hidden cursor-pointer transition-all hover:border-amethyst"
          >
            <img 
              src="/Scalable-Code.png" 
              alt="Scalable Code" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-charcoal/40 to-transparent"></div>
             <p className="absolute top-8 left-8 z-10 text-neutral-high font-bold tracking-[0.2em] text-xs uppercase">Scalable Code</p>
            
            <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all group-hover:bg-amethyst group-hover:scale-110">
              <ArrowUpRight size={20} />
            </div>
          </div>

          {/* Eco-Innovation */}
          <div 
            onClick={() => setSelectedImage('/Molecule.jpg')}
            className="group relative w-full aspect-[4/3] md:aspect-video bg-white/3 border border-white/10 rounded-[2.5rem] overflow-hidden cursor-pointer transition-all hover:border-amethyst"
          >
            <img 
              src="/Molecule.jpg" 
              alt="Eco-Innovation" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-amethyst/20 to-transparent"></div>
             <p className="absolute top-8 left-8 z-10 text-neutral-high font-bold tracking-[0.2em] text-xs uppercase">Eco-Innovation</p>
            
            <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all group-hover:bg-amethyst group-hover:scale-110">
              <ArrowUpRight size={20} />
            </div>
          </div>

          {/* User Centricity */}
          <div 
            onClick={() => setSelectedImage('/User-Centricity.jpg')}
            className="group relative w-full aspect-[4/3] md:aspect-video bg-white/3 border border-white/10 rounded-[2.5rem] overflow-hidden cursor-pointer transition-all hover:border-amethyst"
          >
            <img 
              src="/User-Centricity.jpg" 
              alt="User Centricity" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-charcoal/40 to-transparent"></div>
             <p className="absolute top-8 left-8 z-10 text-neutral-high font-bold tracking-[0.2em] text-xs uppercase">User Centricity</p>
            
            <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all group-hover:bg-amethyst group-hover:scale-110">
              <ArrowUpRight size={20} />
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-amethyst transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full view" 
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

