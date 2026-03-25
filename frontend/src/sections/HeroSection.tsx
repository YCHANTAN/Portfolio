import Plasma from '../components/Plasma';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-screen z-0 bg-charcoal">
        <Plasma 
          color="#9333EA" /* The Vibrant Amethyst Hex */
          speed={0.5}     
          direction="forward" 
          opacity={0.6} 
          mouseInteractive={true} 
        />
      </div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-charcoal/40 to-charcoal pointer-events-none"></div>
      
      <div className="z-10 text-center px-4 max-w-4xl pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-neutral-high">
          Hi, I'm <span className="text-amethyst">Christian Osorno</span>.
        </h1>
        <p className="text-xl md:text-2xl text-neutral-high/80 mx-auto leading-relaxed">
          Bridging the gap between scalable Software Engineering and complex Environmental Science.
        </p>
        <div className="mt-10 pointer-events-auto">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-amethyst hover:bg-amethyst/80 text-white rounded-full font-semibold transition-all shadow-[0_0_15px_rgba(147,51,234,0.5)]"
          >
            Explore My Work
          </a>
        </div>
      </div>
    </section>
  );
}