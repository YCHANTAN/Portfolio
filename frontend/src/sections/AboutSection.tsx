import { Github, Linkedin, Mail, Twitter, Instagram, Dribbble, Target } from 'lucide-react';

// Data for the tags and experience list (can be moved to a separate file or data folder)
const skillsTags = [
  "React", "TypeScript", "C# .NET", "UI/UX Design", "PostgreSQL", "Tailwind CSS", "RESTful APIs", "Agile", "In Silico Modeling"
];

const experienceList = [
  { title: "Computer Science Student", company: "University of Cebu", year: "2021 - Present" },
  { title: "Freelance Developer", company: "Christian.dev", year: "2022 - Present" },
  { title: "Environmental Science Project", company: "Coral Triangle Center", year: "2023 - 2024" },
  { title: "UI/UX Design Intern", company: "PixelCraft Studios", year: "2024" },
];

export default function AboutSection() {
  return (
    // Updated container: matching the top heading structure of the image
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
      
      {/* === TOP HEADER AREA === */}
      {/* 1. Pill Tag "Developer & Eco-Scientist" with icon */}
      <div className="flex items-center gap-2 px-4 py-1 rounded-full border border-neutral-low bg-midnight/30 text-neutral-high/90 text-sm font-medium tracking-wide mb-6 shadow-sm">
        <Target size={14} className="text-amethyst" />
        DEVELOPER & ECO-SCIENTIST
      </div>

      {/* 2. Main Large Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-high leading-none text-center mb-5">
        Christian Osorno, <span className="text-neutral-high/40">Your Developer</span>
      </h2>

      {/* 3. Muted Subtitle */}
      <p className="text-lg text-neutral-high/60 max-w-xl leading-relaxed text-center mb-20">
        Bridging the gap between scalable Software Engineering and complex Environmental Science. My journey and expertise.
      </p>

      {/* === MAIN CONTENT (TWO COLUMNS) === */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full items-start">
        
        {/* --- LEFT COLUMN: PROFILE CARD --- */}
        <div className="bg-midnight/80 backdrop-blur-md border border-neutral-low p-8 rounded-3xl shadow-2xl flex flex-col transition-all hover:border-amethyst hover:-translate-y-2">
          
          {/* Profile Image - Placeholder using grayscale portait from image */}
          <div className="w-full h-80 bg-black/50 border border-neutral-low rounded-2xl overflow-hidden mb-6 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1531123897727-8f129e16fd8c?q=80&w=600&auto=format&fit=crop" 
              alt="Grayscale portrait" 
              className="w-full h-full object-cover opacity-80" 
            />
          </div>
          
          {/* Muted Status: Available for Work */}
          <div className="flex items-center gap-2 text-neutral-high/50 text-sm mb-4">
            <span className="w-2 h-2 bg-jade rounded-full animate-pulse shadow-[0_0_8px_rgba(22,101,52,0.8)]"></span>
            <span>Available for new opportunities</span>
          </div>
          
          {/* Bold Name/Intro Heading */}
          <h3 className="text-3xl font-bold text-neutral-high mb-3">
            Hello, I'm Christian Osorno
          </h3>
          
          {/* Specific Title/Bio */}
          <p className="text-neutral-high/70 text-lg mb-8 max-w-md">
            I am a 3rd-year Computer Science student in University of Cebu, specializing in the intersection of technology and ecological research.
          </p>
          
          {/* Social Icons - Customized with relevant links for Christian */}
          <div className="flex gap-4 pt-1 mb-10">
            <a href="#" className="text-neutral-high/60 hover:text-amethyst transition-colors">
              <Github size={22} />
            </a>
            <a href="#" className="text-neutral-high/60 hover:text-amethyst transition-colors">
              <Linkedin size={22} />
            </a>
            <a href="#" className="text-neutral-high/60 hover:text-amethyst transition-colors">
              <Mail size={22} />
            </a>
            <a href="#" className="text-neutral-high/60 hover:text-amethyst transition-colors">
              <Twitter size={22} />
            </a>
            <a href="#" className="text-neutral-high/60 hover:text-amethyst transition-colors">
              <Instagram size={22} />
            </a>
            <a href="#" className="text-neutral-high/60 hover:text-amethyst transition-colors">
              <Dribbble size={22} />
            </a>
          </div>
          
          {/* Main "Connect With Me" button */}
          <a 
            href="#contact" 
            className="w-full text-center px-8 py-3 bg-neutral-high text-charcoal hover:bg-white rounded-xl font-semibold transition-all shadow-xl hover:-translate-y-1"
          >
            Connect with me
          </a>
        </div>

        {/* --- RIGHT COLUMN: DETAILS CONTAINER --- */}
        <div className="flex flex-col gap-10">
          
          {/* Introductory Paragraph and Skills Tag Row */}
          <div className="bg-midnight/30 backdrop-blur-sm border border-neutral-low p-8 rounded-3xl flex flex-col gap-8 transition-all hover:border-amethyst hover:-translate-y-2">
            
            {/* Introductory text block - tailored description from your original about section */}
            <p className="text-lg text-neutral-high/80 leading-relaxed max-w-xl">
              I am a dedicated Web Designer & Developer based in the vibrant city of Berlin, Germany. I specialize in creative design with seamless technical execution to craft exceptional digital experiences. I bring an analytical and systematic approach to every project I touch.
            </p>
            
            {/* Flow of skill tags - matching the pill shape/grays from the image */}
            <div className="flex flex-wrap gap-3">
              {skillsTags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-charcoal border border-neutral-low text-neutral-high text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Experience List - matching the clean list style with separating borders */}
          <div className="bg-midnight/30 backdrop-blur-sm border border-neutral-low p-8 rounded-3xl flex flex-col gap-6 transition-all hover:border-amethyst hover:-translate-y-2">
            {experienceList.map((entry, index) => (
              <div key={index} className={`pb-6 border-b border-neutral-low ${index === experienceList.length - 1 ? 'border-b-0 pb-0' : ''}`}>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                  <div className="flex flex-col">
                    <h4 className="text-xl font-bold text-neutral-high">{entry.title}</h4>
                    <p className="text-neutral-high/60 text-base">{entry.company}</p>
                  </div>
                  <span className="text-lg font-semibold text-amethyst sm:text-neutral-high sm:font-medium sm:text-right">{entry.year}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}