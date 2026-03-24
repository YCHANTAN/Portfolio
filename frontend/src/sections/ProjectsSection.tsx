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
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 flex flex-col"
          >
            <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="px-3 py-1 text-xs font-medium bg-slate-800 text-blue-400 rounded-full"
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