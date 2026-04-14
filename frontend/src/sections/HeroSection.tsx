import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      
      {/* Container to hold the top half and bottom half */}
      <div className="z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-24">

        {/* ======================================= */}
        {/* TOP ROW: INTRO TEXT & FLOATING CARDS    */}
        {/* ======================================= */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">
          
          {/* Left Side: Text Content */}
          <div className="flex flex-col items-start text-left space-y-6 lg:max-w-[50%]">
            
            {/* Pill Badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-neutral-high/80 text-xs font-medium tracking-wide">
              <Sparkles size={14} className="text-white" />
              SOFTWARE ENGINEER & ENVIRONMENTAL SCIENCE
            </div>
            
            {/* Giant Name with contrast styling */}
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight flex items-center gap-4 flex-wrap leading-none">
              <span className="text-white">Christian</span>
              <span className="text-neutral-high/40">Osorno</span>
              {/* Arrow Circle next to name */}
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hidden md:flex transition-transform hover:scale-110">
                <ArrowUpRight size={24} className="text-neutral-high/60" />
              </div>
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-lg text-neutral-high/60 leading-relaxed max-w-lg">
              Bridging the gap between scalable Software Engineering and complex Environmental Science. I help transform ideas into robust, functioning digital solutions. Let's build something great!
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all"
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
            <div className="absolute top-4 left-0 md:left-10 w-64 bg-[#111111]/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl -rotate-6 transform hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer z-10">
              <p className="text-white text-sm font-medium leading-relaxed">
                "Working with him was a game changer!"
              </p>
              <p className="text-neutral-high/50 text-xs text-right mt-4">- pranaavnb</p>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-4 right-0 md:right-4 w-64 bg-[#111111]/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl rotate-3 transform hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer z-0">
              <p className="text-white text-sm font-medium leading-relaxed">
                "We increased our conversions by 200%"
              </p>
              <p className="text-neutral-high/50 text-xs text-right mt-4">- vijaynb</p>
            </div>
          </div>
        </div>

        {/* ======================================= */}
        {/* BOTTOM ROW: BENTO GRID OF IMAGES        */}
        {/* ======================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full pb-12">
          
          {/* Placeholder Box 1 */}
          <div className="group relative w-full aspect-[4/3] md:aspect-video bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-[2rem] overflow-hidden flex items-center justify-center cursor-pointer">
            <p className="text-neutral-high/30 font-medium tracking-widest text-sm uppercase">Image Placeholder 1</p>
            
            <div className="absolute bottom-6 left-6 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-colors group-hover:bg-white group-hover:text-black">
              <ArrowUpRight size={20} />
            </div>
          </div>

          {/* Placeholder Box 2 */}
          <div className="group relative w-full aspect-[4/3] md:aspect-video bg-gradient-to-bl from-white/10 to-transparent border border-white/10 rounded-[2rem] overflow-hidden flex items-center justify-center cursor-pointer">
             <p className="text-neutral-high/30 font-medium tracking-widest text-sm uppercase">Image Placeholder 2</p>
            
            <div className="absolute bottom-6 left-6 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-colors group-hover:bg-white group-hover:text-black">
              <ArrowUpRight size={20} />
            </div>
          </div>

          {/* Placeholder Box 3 */}
          <div className="group relative w-full aspect-[4/3] md:aspect-video bg-gradient-to-tr from-white/10 to-transparent border border-white/10 rounded-[2rem] overflow-hidden flex items-center justify-center cursor-pointer">
             <p className="text-neutral-high/30 font-medium tracking-widest text-sm uppercase">Image Placeholder 3</p>
            
            <div className="absolute bottom-6 left-6 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-colors group-hover:bg-white group-hover:text-black">
              <ArrowUpRight size={20} />
            </div>
          </div>

          {/* Placeholder Box 4 */}
          <div className="group relative w-full aspect-[4/3] md:aspect-video bg-gradient-to-tl from-white/10 to-transparent border border-white/10 rounded-[2rem] overflow-hidden flex items-center justify-center cursor-pointer">
             <p className="text-neutral-high/30 font-medium tracking-widest text-sm uppercase">Image Placeholder 4</p>
            
            <div className="absolute bottom-6 left-6 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-colors group-hover:bg-white group-hover:text-black">
              <ArrowUpRight size={20} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}