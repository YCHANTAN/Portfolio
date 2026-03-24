export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-8 max-w-4xl mx-auto">
      <div className="border-l-4 border-blue-500 pl-6 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
      </div>
      
      <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
        <p>
          I am a 3rd-year Environmental Science student based in Tacloban City, specializing in the intersection of technology and ecological research. I build robust, full-stack applications using React, TypeScript, and C# .NET to solve real-world problems.
        </p>
        <p>
          Whether I am architecting relational databases, designing intuitive user interfaces, or utilizing in silico models for biochemical research, I bring an analytical and highly systematic approach to every project I touch. 
        </p>
      </div>
    </section>
  );
}