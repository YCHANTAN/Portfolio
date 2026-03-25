const skillCategories = [
  {
    title: "Frontend",
    skills: ["TypeScript", "React", "Tailwind CSS", "HTML5/CSS3", "UI/UX Design"]
  },
  {
    title: "Backend & Database",
    skills: ["C#", ".NET 8", "Node.js", "PostgreSQL", "SQLite"]
  },
  {
    title: "Tools & Methodologies",
    skills: ["Git / GitHub", "RESTful APIs", "Agile Development", "Data Analysis", "In Silico Modeling"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-8 max-w-4xl mx-auto bg-midnight/50 rounded-3xl my-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-neutral-high text-center">Technical Arsenal</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-amethyst mb-4 border-b border-neutral-low pb-2">
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="text-neutral-high/80 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amethyst rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}