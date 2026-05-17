import React from 'react';
import { 
  Github, Linkedin, Mail, Twitter, Instagram, Dribbble, Target
} from 'lucide-react';
import { skillTags } from '../types/skills';

const experienceList = [
  { title: "Computer Science Student", company: "University of Cebu", year: "2021 - Present" },
  { title: "Freelance Designer", company: "Christian.dev", year: "2022 - Present" },
  { title: "Environmental Science Project", company: "Coral Triangle Center", year: "2023 - 2024" },
  { title: "UI/UX Design Intern", company: "PixelCraft Studios", year: "2024" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
      
      {/* === TOP HEADER AREA === */}
      <div className="flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/3 backdrop-blur-md text-neutral-high/90 text-sm font-medium tracking-wide mb-6 shadow-sm">
        <Target size={14} className="text-amethyst" />
        DEVELOPER & DESIGNER
      </div>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-high leading-none text-center mb-5">
        Christian Osorno, <span className="text-neutral-high/40">Your Developer</span>
      </h2>

      <p className="text-lg text-neutral-high/60 max-w-xl leading-relaxed text-center mb-20">
        Bridging the gap between scalable Software Engineering and complex UI / UX Design. My journey and expertise.
      </p>

      {/* === MAIN CONTENT (TWO COLUMNS) === */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full items-start">
        
        {/* --- LEFT COLUMN: PROFILE CARD --- */}
        <div className="bg-white/3 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl flex flex-col transition-all hover:border-amethyst hover:-translate-y-2 group">
          
          {/* Profile Image - Showing full picture without cropping */}
          <div className="w-full h-[500px] bg-black/40 border border-white/10 rounded-2xl overflow-hidden mb-6 flex items-center justify-center">
            <img 
              src="/Formal_Picture.png" 
              alt="Christian Osorno" 
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
          
          <div className="flex items-center gap-2 text-neutral-high/50 text-sm mb-4">
            <span className="w-2 h-2 bg-jade rounded-full animate-pulse shadow-[0_0_8px_rgba(22,101,52,0.8)]"></span>
            <span>Available for new opportunities</span>
          </div>
          
          <h3 className="text-3xl font-bold text-neutral-high mb-3">
            Hello, I'm Christian Osorno
          </h3>
          
          <p className="text-neutral-high/70 text-lg mb-8 max-w-md">
            I am a 3rd-year Computer Science student in University of Cebu, specializing in the intersection of technology and designing.
          </p>
          
          <div className="flex gap-4 pt-1 mb-2">
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
        </div>

        {/* --- RIGHT COLUMN: DETAILS CONTAINER --- */}
        <div className="flex flex-col gap-10">
          
          {/* Introductory Paragraph and Skills Tag Row */}
          <div className="bg-white/3 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col gap-8 transition-all hover:border-amethyst hover:-translate-y-2">
            
            <p className="text-lg text-neutral-high/80 leading-relaxed max-w-xl">
              I am a dedicated Web Designer & Developer based in the vibrant city of Cebu, Philippines. I specialize in creative design with seamless technical execution to craft exceptional digital experiences. I bring an analytical and systematic approach to every project I touch.
            </p>
            
            {/* Unified skill tags synchronized with SkillSection */}
            <div className="flex flex-wrap gap-2.5">
              {skillTags.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 px-3.5 py-2 bg-black/40 border border-white/5 text-neutral-high/90 text-sm font-medium rounded-xl hover:border-amethyst hover:bg-black/60 transition-all cursor-default group"
                >
                  <span className="group-hover:scale-110 transition-transform" style={{ color: skill.icon.props.color }}>
                    {skill.icon}
                  </span>
                  {skill.label}
                </div>
              ))}
            </div>
          </div>

          {/* Experience List */}
          <div className="bg-white/3 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col gap-6 transition-all hover:border-amethyst hover:-translate-y-2">
            {experienceList.map((entry, index) => (
              <div key={index} className={`pb-6 border-b border-white/5 ${index === experienceList.length - 1 ? 'border-b-0 pb-0' : ''}`}>
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
