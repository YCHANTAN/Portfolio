import React, { useState } from 'react';
import { Target, ArrowUpRight, Handshake } from 'lucide-react';

interface ContactData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactData>({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    setStatus('submitting');
    
    // Simulating a network request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); 
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
      
      {/* === TOP HEADER AREA === */}
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-[#0a0a0a] text-neutral-high/90 text-sm font-medium tracking-wide mb-6">
        <Target size={14} className="text-neutral-high/70" />
        Let's Connect
      </div>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-none text-center mb-5">
        Let's <span className="text-neutral-high/40">Grow Together</span>
      </h2>

      <p className="text-lg text-neutral-high/50 max-w-xl leading-relaxed text-center mb-16">
        Interested in collaborating on a project or discussing technical research? Drop me a message.
      </p>

      {/* === MAIN CONTENT === */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-stretch">
        
        {/* --- LEFT COLUMN: GLASS CONTACT FORM --- */}
        {/* Updated container to use the sleek dark frosted glass look from the projects section */}
        <div className="bg-[#080808]/60 backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col transition-all hover:border-white/15">
          
          <p className="text-base text-neutral-high/60 leading-relaxed mb-10 max-w-md">
            I simplify complex systems to craft exceptional digital experiences and robust, functioning technical solutions. Tell me your vision, and let's bring it to life.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-neutral-high/70 ml-1">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Christian Osorno"
                // Transparent, blurry inputs
                className="w-full bg-white/5 backdrop-blur-md border border-white/10 focus:border-white/30 focus:bg-white/10 outline-none p-4 rounded-2xl text-white placeholder:text-neutral-high/20 transition-all"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-neutral-high/70 ml-1">Email</label>
              <input
                id="email"
                type="email"
                placeholder="christian@eco-dev.com"
                className="w-full bg-white/5 backdrop-blur-md border border-white/10 focus:border-white/30 focus:bg-white/10 outline-none p-4 rounded-2xl text-white placeholder:text-neutral-high/20 transition-all"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-neutral-high/70 ml-1">Message</label>
              <textarea
                id="message"
                placeholder="How can we work together?"
                className="w-full bg-white/5 backdrop-blur-md border border-white/10 focus:border-white/30 focus:bg-white/10 outline-none p-4 rounded-2xl text-white placeholder:text-neutral-high/20 h-36 resize-none transition-all"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full mt-4 text-center px-8 py-4 bg-white text-black hover:bg-neutral-200 rounded-2xl font-semibold transition-all disabled:bg-white/20 disabled:text-white/50"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-jade text-center font-medium mt-2">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-crimson text-center font-medium mt-2">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>

        {/* --- RIGHT COLUMN: MOCK-UP BLANK TEMPLATE PANEL --- */}
        <div className="bg-[#080808]/60 backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-3xl transition-all hover:border-white/15 flex flex-col h-full">
          
          <div className="w-full flex-grow min-h-[250px] bg-[#111] border border-white/5 rounded-2xl overflow-hidden relative flex items-center justify-center group cursor-pointer">
            {/* Blank Placeholder Image */}
            <img 
              src="https://images.unsplash.com/photo-1598520106830-8c45c2f35d1f?q=80&w=600&auto=format&fit=crop&grayscale=true" 
              alt="Grayscale portrait placeholder" 
              className="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay transition-all duration-700 group-hover:scale-105 group-hover:opacity-50" 
            />
            
            <div className="absolute bottom-6 left-6 flex gap-3 pointer-events-auto">
              <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all hover:bg-white hover:text-black">
                <ArrowUpRight size={20} />
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
                <span className="w-2 h-2 bg-jade rounded-full animate-pulse shadow-[0_0_8px_rgba(22,101,52,0.8)]"></span>
                <span className="text-white text-sm font-medium">Available for work</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5">
            <div className="p-4 rounded-xl bg-[#111] border border-white/5">
              <Handshake size={22} className="text-neutral-high" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-white tracking-tight">Open to collaboration</h3>
              <p className="text-neutral-high/50 text-sm">Currently seeking 240-hour internship opportunities.</p>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}