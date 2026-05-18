import React, { useState } from 'react';
import { Monitor, Server, Database, Leaf, Target, X } from 'lucide-react';
import { skillTags } from '../types/skills';

interface TagProps {
  icon: React.ReactNode;
  label: string;
}

const Tag: React.FC<TagProps> = ({ icon, label }) => (
  <div className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/10 bg-white/3 backdrop-blur-md text-neutral-high text-sm font-medium tracking-wide shadow-sm transition-all hover:border-amethyst hover:bg-white/10">
    {icon}
    {label}
  </div>
);

export default function SkillSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
      
      {/* === TOP HEADER AREA === */}
      <div className="w-full flex flex-col items-start gap-4 mb-16">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/3 backdrop-blur-md text-neutral-high/90 text-sm font-medium tracking-wide">
          <Target size={14} className="text-amethyst" />
          Technical Arsenal
        </div>
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-high leading-none">
          Software <span className="text-neutral-high/40">Engineering</span>
        </h2>
        <p className="text-lg text-neutral-high/50 max-w-xl leading-relaxed">
          Explore the technologies and methodologies I use to build scalable applications and research models.
        </p>
      </div>

      {/* === MAIN BENTO GRID === */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full mb-16">
        
        {/* --- LEFT COLUMN --- */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          <div className="bg-white/3 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl flex flex-col transition-all hover:border-amethyst hover:-translate-y-2 min-h-[400px]">
            <div className="flex items-center gap-3 mb-4">
              <Monitor size={22} className="text-neutral-high" />
              <h3 className="text-2xl font-bold text-neutral-high">Frontend & UI</h3>
            </div>
            <p className="text-neutral-high/50 text-sm mb-10 max-w-sm">
              Designing breathtaking, user-centric interfaces that boost engagement and perfectly align with modern design principles.
            </p>
            <div className="flex flex-col gap-4 mt-auto">
              <div 
                onClick={() => setSelectedImage('/Visionary-Design.png')}
                className="w-full h-32 bg-black/40 border border-white/10 rounded-2xl overflow-hidden relative cursor-pointer group/img"
              >
                <img src="/Visionary-Design.png" alt="Frontend Preview" className="w-full h-full object-cover object-top opacity-50 group-hover/img:opacity-100 transition-all duration-500 group-hover/img:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                   <p className="text-white text-[10px] font-bold tracking-widest uppercase">View Full Design</p>
                </div>
              </div>
              <div 
                onClick={() => setSelectedImage('/SkillSection-UI.png')}
                className="w-full h-24 bg-black/40 border border-white/10 rounded-2xl overflow-hidden relative cursor-pointer group/img"
              >
                <img src="/SkillSection-UI.png" alt="UI Design" className="w-full h-full object-cover object-top opacity-50 group-hover/img:opacity-100 transition-all duration-500 group-hover/img:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                   <p className="text-white text-[10px] font-bold tracking-widest uppercase">View Details</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/3 backdrop-blur-md border border-white/10 p-6 rounded-3xl flex items-center gap-6 transition-all hover:border-amethyst hover:-translate-y-1">
            <div className="p-4 rounded-xl bg-black/40 border border-white/10">
              <Server size={22} className="text-neutral-high" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-neutral-high">Backend Architecture</h3>
              <p className="text-neutral-high/50 text-sm">Building robust, scalable server-side solutions.</p>
            </div>
          </div>

        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          <div className="bg-white/3 backdrop-blur-md border border-white/10 p-6 rounded-3xl flex items-center gap-6 transition-all hover:border-amethyst hover:-translate-y-1">
            <div className="p-4 rounded-xl bg-black/40 border border-white/10">
              <Database size={22} className="text-neutral-high" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-neutral-high">Database Management</h3>
              <p className="text-neutral-high/50 text-sm">Structuring secure and efficient relational databases.</p>
            </div>
          </div>

          <div className="group bg-white/3 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col transition-all hover:border-amethyst hover:-translate-y-2 min-h-[400px]">
            <div className="flex items-center gap-3 mb-4">
              <Leaf size={22} className="text-neutral-high" />
              <h3 className="text-2xl font-bold text-neutral-high">In Silico & Eco-Modeling</h3>
            </div>
            <p className="text-neutral-high/50 text-sm mb-10 max-w-xl">
              Bridging technology and ecology by bringing research to life with AI-assisted biodegradation modeling and computational biology.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-auto">
              <div 
                onClick={() => setSelectedImage('/Molecule.jpg')}
                className="w-full aspect-[4/3] bg-black/40 border border-white/10 rounded-2xl relative overflow-hidden cursor-pointer group/img"
              >
                <img src="/Molecule.jpg" alt="Molecule Modeling" className="w-full h-full object-cover opacity-50 group-hover/img:opacity-100 transition-all duration-500 group-hover/img:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                   <p className="text-white text-[10px] font-bold tracking-widest uppercase text-center px-2">View Molecule</p>
                </div>
              </div>
              <div 
                onClick={() => setSelectedImage('/Ocean.jpg')}
                className="w-full aspect-[4/3] bg-black/40 border border-white/10 rounded-2xl relative overflow-hidden cursor-pointer group/img"
              >
                <img src="/Ocean.jpg" alt="Eco Modeling" className="w-full h-full object-cover opacity-50 group-hover/img:opacity-100 transition-all duration-500 group-hover/img:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                   <p className="text-white text-[10px] font-bold tracking-widest uppercase text-center px-2">View Research</p>
                </div>
              </div>
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-amethyst transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full view" 
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </section>
  );
}
