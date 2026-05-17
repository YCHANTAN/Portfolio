import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      
      {/* Container to hold the top half and bottom half */}
      <div className="z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-24">

        {/* ======================================= */}
        {/* TOP ROW: INTRO TEXT & FLOATING CARDS    */}
        {/* ======================================= */}
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
          
          {/* Placeholder Box 1 */}
          <div className="group relative w-full aspect-[4/3] md:aspect-video bg-white/3 border border-white/10 rounded-[2.5rem] overflow-hidden flex items-center justify-center cursor-pointer transition-all hover:border-amethyst">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <p className="relative z-10 text-neutral-high/30 font-bold tracking-[0.2em] text-xs uppercase">Visionary Design</p>
            
            <div className="absolute bottom-6 left-6 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all group-hover:bg-amethyst group-hover:scale-110">
              <ArrowUpRight size={20} />
            </div>
          </div>

          {/* Placeholder Box 2 */}
          <div className="group relative w-full aspect-[4/3] md:aspect-video bg-white/3 border border-white/10 rounded-[2.5rem] overflow-hidden flex items-center justify-center cursor-pointer transition-all hover:border-amethyst">
            <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
             <p className="relative z-10 text-neutral-high/30 font-bold tracking-[0.2em] text-xs uppercase">Scalable Code</p>
            
            <div className="absolute bottom-6 left-6 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all group-hover:bg-amethyst group-hover:scale-110">
              <ArrowUpRight size={20} />
            </div>
          </div>

          {/* Placeholder Box 3 */}
          <div className="group relative w-full aspect-[4/3] md:aspect-video bg-white/3 border border-white/10 rounded-[2.5rem] overflow-hidden flex items-center justify-center cursor-pointer transition-all hover:border-amethyst">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
             <p className="relative z-10 text-neutral-high/30 font-bold tracking-[0.2em] text-xs uppercase">Eco-Innovation</p>
            
            <div className="absolute bottom-6 left-6 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all group-hover:bg-amethyst group-hover:scale-110">
              <ArrowUpRight size={20} />
            </div>
          </div>

          {/* Placeholder Box 4 */}
          <div className="group relative w-full aspect-[4/3] md:aspect-video bg-white/3 border border-white/10 rounded-[2.5rem] overflow-hidden flex items-center justify-center cursor-pointer transition-all hover:border-amethyst">
            <div className="absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
             <p className="relative z-10 text-neutral-high/30 font-bold tracking-[0.2em] text-xs uppercase">User Centricity</p>
            
            <div className="absolute bottom-6 left-6 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all group-hover:bg-amethyst group-hover:scale-110">
              <ArrowUpRight size={20} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
