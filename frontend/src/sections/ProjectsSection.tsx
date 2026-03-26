const projects = [
  {
    title: "Full-Stack Student Registration App",
    description: "A comprehensive registration system featuring a responsive frontend and a secure relational database backend for seamless student record management.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "SQLite"],
  },
  {
    title: "AI-Assisted Marine Biodegradation",
    description: "Research initiative focusing on the AI-assisted biodegradation of synthetic polymers in marine environments, modeling complex ecological interactions.",
    tech: ["Data Analysis", "Environmental Science", "Algorithmic Modeling"],
  },
  {
    title: "In Silico Antifungal Molecule Design",
    description: "Computational biology research designing novel antifungal molecules against Candida auris using advanced in silico modeling techniques.",
    tech: ["Bioinformatics", "Computational Modeling", "Research"],
  },
  {
    title: "EducAIte: AI-Powered Learning Platform",
    description: "An innovative learning platform that leverages AI to provide personalized educational experiences and adaptive learning paths.",
    tech: ["AI/ML", "React", "TypeScript", "Node.js", "C# .NET", "Tailwind CSS"],
  },

  {
    title: "Maharlika Banking System",
    description: "A modern banking system designed to provide seamless financial services with a focus on security and user experience.",
    tech: ["Python", "SQL Server", "React", "TypeScript", "Tailwind CSS"],
  },

  {
    title: "POS System for Small Businesses",
    description: "A streamlined point-of-sale system tailored for small businesses, offering intuitive management and real-time inventory tracking.",
    tech: ["C# .NET", "SQL Server", "React", "TypeScript", "Vanilla CSS"],
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-neutral-high text-center">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-midnight border border-neutral-low rounded-xl p-6 hover:border-amethyst hover:-translate-y-2 transition-all duration-300 flex flex-col"
          >
            <h3 className="text-xl font-bold text-neutral-high mb-3">{project.title}</h3>
            <p className="text-neutral-high/70 mb-6 flex-grow">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="px-3 py-1 text-xs font-medium bg-charcoal text-amethyst border border-neutral-low rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}