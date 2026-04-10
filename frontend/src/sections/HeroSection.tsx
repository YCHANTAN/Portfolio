import { Github, Linkedin, Mail } from 'lucide-react';
import TiltedCard from '../components/TiltedCard';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      
      {/* Tightened the gap between the columns from gap-12 to gap-8 */}
      <div className="z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pointer-events-none">
        
        {/* === LEFT COLUMN: TEXT CONTENT === */}
        <div className="flex flex-col items-start text-left space-y-5">
          <p className="text-amethyst tracking-widest uppercase font-semibold text-xs lg:text-sm">
            Hello, I Am
          </p>
          
          {/* Scaled down text from 7xl to 5xl/6xl */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-high leading-[1.1]">
            Christian Osorno
          </h1>
          
          {/* Scaled down subheading */}
          <h2 className="text-xl md:text-2xl text-neutral-high/90 font-semibold border-b-2 border-amethyst/30 pb-2 inline-block">
            Software Engineer & <br className="hidden lg:block"/> Environmental Science
          </h2>

          <div className="flex gap-4 pointer-events-auto pt-1">
            <a href="#" className="text-neutral-high/60 hover:text-amethyst transition-colors">
              <Github size={22} />
            </a>
            <a href="#" className="text-neutral-high/60 hover:text-amethyst transition-colors">
              <Linkedin size={22} />
            </a>
            <a href="#contact" className="text-neutral-high/60 hover:text-amethyst transition-colors">
              <Mail size={22} />
            </a>
          </div>

          {/* Scaled down paragraph text slightly */}
          <p className="text-base text-neutral-high/70 max-w-md leading-relaxed">
            Bridging the gap between scalable Software Engineering and complex Environmental Science. I help transform ideas into robust, functioning digital solutions.
          </p>

          <div className="flex flex-wrap gap-4 pt-3 pointer-events-auto">
            <a 
              href="#projects" 
              className="px-6 py-2.5 bg-amethyst hover:bg-amethyst/80 text-white rounded-full font-medium transition-all shadow-[0_0_15px_rgba(147,51,234,0.3)] text-sm"
            >
              Explore Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-transparent border border-neutral-low hover:border-amethyst text-neutral-high rounded-full font-medium transition-all text-sm"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* === RIGHT COLUMN: TILTED IMAGE CARD === */}
        <div className="flex justify-center lg:justify-end pointer-events-auto w-full">
          {/* Reduced max-width from 500px to 380px */}
          <div className="w-full max-w-[380px]">
            <TiltedCard
              imageSrc="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1000&auto=format&fit=crop"
              altText="Christian Osorno Portrait"
              captionText="Christian Osorno"
              // Reduced height from 600px to 450px
              containerHeight="450px"
              containerWidth="100%"
              imageHeight="450px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.03}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              }
            />
          </div>
        </div>

      </div>
    </section>
  );
}