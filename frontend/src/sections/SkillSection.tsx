import React from 'react';
import { Monitor, Server, Database, Leaf, Target } from 'lucide-react';

// Using a mix of stable icon packs to prevent import errors
import { 
  SiTypescript, 
  SiReact, 
  SiPostgresql, 
  SiTailwindcss, 
  SiSqlite, 
  SiDotnet
} from 'react-icons/si';
import { FaNodeJs, FaGithub } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';

interface TagProps {
  icon: React.ReactNode;
  label: string;
}

const Tag: React.FC<TagProps> = ({ icon, label }) => (
  <div className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/5 bg-[#0a0a0a] text-white text-sm font-medium tracking-wide shadow-sm transition-all hover:border-white/20 hover:bg-[#111]">
    {icon}
    {label}
  </div>
);

// Updated with the new, error-free icons
const skillTags = [
  { icon: <SiReact size={18} color="#61DAFB" />, label: 'React' },
  { icon: <SiTypescript size={18} color="#3178C6" />, label: 'TypeScript' },
  { icon: <FaNodeJs size={18} color="#339933" />, label: 'Node.js' },
  { icon: <TbBrandCSharp size={18} color="#239120" />, label: 'C#' },
  { icon: <SiDotnet size={18} color="#512BD4" />, label: '.NET 8' },
  { icon: <SiPostgresql size={18} color="#4169E1" />, label: 'PostgreSQL' },
  { icon: <SiSqlite size={18} color="#003B57" />, label: 'SQLite' },
  { icon: <SiTailwindcss size={18} color="#06B6D4" />, label: 'Tailwind CSS' },
  { icon: <FaGithub size={18} color="#FFFFFF" />, label: 'Git / GitHub' },
];

export default function SkillSection() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
      
      {/* === TOP HEADER AREA === */}
      <div className="w-full flex flex-col sm:flex-row justify-between sm:items-start gap-6 mb-16">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-[#0a0a0a] text-neutral-high/90 text-sm font-medium tracking-wide">
            <Target size={14} className="text-neutral-high/70" />
            Technical Arsenal
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
            Software <span className="text-neutral-high/40">Engineering</span>
          </h2>
          <p className="text-lg text-neutral-high/50 max-w-xl leading-relaxed">
            Explore the technologies and methodologies I use to build scalable applications and research models.
          </p>
        </div>
        
        <a 
          href="#contact" 
          className="px-8 py-3.5 bg-white text-black hover:bg-neutral-200 rounded-full font-semibold transition-all shadow-xl"
        >
          Contact Now
        </a>
      </div>

      {/* === MAIN BENTO GRID === */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full mb-16">
        
        {/* --- LEFT COLUMN --- */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          <div className="bg-[#080808] border border-white/5 p-8 rounded-3xl shadow-2xl flex flex-col transition-all hover:border-white/15 hover:bg-[#0c0c0c] min-h-[400px]">
            <div className="flex items-center gap-3 mb-4">
              <Monitor size={22} className="text-neutral-high" />
              <h3 className="text-2xl font-bold text-white">Frontend & UI</h3>
            </div>
            <p className="text-neutral-high/50 text-sm mb-10 max-w-sm">
              Designing breathtaking, user-centric interfaces that boost engagement and perfectly align with modern design principles.
            </p>
            <div className="flex flex-col gap-4 mt-auto">
              <div className="w-full h-32 bg-[#111] border border-white/5 rounded-2xl"></div>
              <div className="w-full h-24 bg-[#111] border border-white/5 rounded-2xl"></div>
            </div>
          </div>

          <div className="bg-[#080808] border border-white/5 p-6 rounded-3xl flex items-center gap-6 transition-all hover:border-white/15 hover:bg-[#0c0c0c]">
            <div className="p-4 rounded-xl bg-black border border-white/5">
              <Server size={22} className="text-neutral-high" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-white">Backend Architecture</h3>
              <p className="text-neutral-high/50 text-sm">Building robust, scalable server-side solutions.</p>
            </div>
          </div>

        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          <div className="bg-[#080808] border border-white/5 p-6 rounded-3xl flex items-center gap-6 transition-all hover:border-white/15 hover:bg-[#0c0c0c]">
            <div className="p-4 rounded-xl bg-black border border-white/5">
              <Database size={22} className="text-neutral-high" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-white">Database Management</h3>
              <p className="text-neutral-high/50 text-sm">Structuring secure and efficient relational databases.</p>
            </div>
          </div>

          <div className="bg-[#080808] border border-white/5 p-8 rounded-3xl flex flex-col transition-all hover:border-white/15 hover:bg-[#0c0c0c] min-h-[400px]">
            <div className="flex items-center gap-3 mb-4">
              <Leaf size={22} className="text-neutral-high" />
              <h3 className="text-2xl font-bold text-white">In Silico & Eco-Modeling</h3>
            </div>
            <p className="text-neutral-high/50 text-sm mb-10 max-w-xl">
              Bridging technology and ecology by bringing research to life with AI-assisted biodegradation modeling and computational biology.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-auto">
              <div className="w-full aspect-[4/3] bg-[#111] border border-white/5 rounded-2xl"></div>
              <div className="w-full aspect-[4/3] bg-[#111] border border-white/5 rounded-2xl"></div>
            </div>
          </div>

        </div>

      </div>

      {/* === BOTTOM TECH TAGS === */}
      <div className="w-full flex flex-wrap justify-center gap-3">
        {skillTags.map((tag, index) => (
          <Tag key={index} icon={tag.icon} label={tag.label} />
        ))}
      </div>

    </section>
  );
}