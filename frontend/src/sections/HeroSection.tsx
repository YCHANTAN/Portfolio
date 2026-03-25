export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* REACTBITS INTEGRATION POINT:
        Drop your imported background component here (e.g., <AuroraBackground /> or <Particles />)
        Make sure it has absolute positioning so the text floats above it!
      */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 to-black opacity-80"></div>
      
      <div className="z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Hi, I'm <span className="text-blue-500">Christian A. Osorno</span>.
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mx-auto leading-relaxed">
          Bridging the gap between scalable Software Engineering and complex Environmental Science.
        </p>
        <div className="mt-10">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)]"
          >
            Explore My Work
          </a>
        </div>
      </div>
    </section>
  );
}