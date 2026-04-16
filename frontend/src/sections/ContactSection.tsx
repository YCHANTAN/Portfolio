import React, { useState } from 'react';
import { Target, ArrowUpRight, Handshake, Mail, Phone, Linkedin, Github, Facebook, Instagram } from 'lucide-react';

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

  // === NEW INTEGRATED SUBMIT FUNCTION ===
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setStatus('submitting');
    
    try {
      // Sending data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY, 
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Portfolio Contact Form Submission",
          from_name: "Christian's Portfolio"
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
        
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("Submission failed:", result);
        setStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('error');
    }
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
              <p className="text-jade text-center font-medium mt-2">Message sent successfully! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-crimson text-center font-medium mt-2">Something went wrong. Please check your connection and try again.</p>
            )}
          </form>
        </div>

        {/* --- RIGHT COLUMN: SOCIAL LINKS & INFO --- */}
        <div className="bg-[#080808]/60 backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-3xl transition-all hover:border-white/15 flex flex-col h-full">
          
          <div className="w-full flex-grow grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Email */}
            <a href="mailto:christianosorno20@gmail.com" className="group p-5 rounded-2xl bg-[#111] border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all flex flex-col justify-between">
              <Mail size={22} className="text-neutral-high/50 group-hover:text-white transition-colors mb-4" />
              <div>
                <h4 className="text-white font-medium text-sm">Email</h4>
                <p className="text-neutral-high/50 text-xs mt-1 truncate">christianosorno20@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:+639271410824" className="group p-5 rounded-2xl bg-[#111] border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all flex flex-col justify-between">
              <Phone size={22} className="text-neutral-high/50 group-hover:text-white transition-colors mb-4" />
              <div>
                <h4 className="text-white font-medium text-sm">Contact Number</h4>
                <p className="text-neutral-high/50 text-xs mt-1 truncate">+63 927 141 0824</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/christian-osorno-2742a4379/" target="_blank" rel="noreferrer" className="group p-5 rounded-2xl bg-[#111] border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all flex flex-col justify-between">
              <Linkedin size={22} className="text-neutral-high/50 group-hover:text-white transition-colors mb-4" />
              <div>
                <h4 className="text-white font-medium text-sm">LinkedIn</h4>
                <p className="text-neutral-high/50 text-xs mt-1 truncate">in/christian-osorno</p>
              </div>
            </a>

            {/* GitHub */}
            <a href="https://github.com/YCHANTAN" target="_blank" rel="noreferrer" className="group p-5 rounded-2xl bg-[#111] border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all flex flex-col justify-between">
              <Github size={22} className="text-neutral-high/50 group-hover:text-white transition-colors mb-4" />
              <div>
                <h4 className="text-white font-medium text-sm">GitHub</h4>
                <p className="text-neutral-high/50 text-xs mt-1 truncate">github.com/YCHANTAN</p>
              </div>
            </a>

            {/* Facebook */}
            <a href="https://facebook.com/christian.osorno.12" target="_blank" rel="noreferrer" className="group p-5 rounded-2xl bg-[#111] border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all flex flex-col justify-between">
              <Facebook size={22} className="text-neutral-high/50 group-hover:text-white transition-colors mb-4" />
              <div>
                <h4 className="text-white font-medium text-sm">Facebook</h4>
                <p className="text-neutral-high/50 text-xs mt-1 truncate">Christian Osorno</p>
              </div>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com/betlowg_" target="_blank" rel="noreferrer" className="group p-5 rounded-2xl bg-[#111] border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all flex flex-col justify-between">
              <Instagram size={22} className="text-neutral-high/50 group-hover:text-white transition-colors mb-4" />
              <div>
                <h4 className="text-white font-medium text-sm">Instagram</h4>
                <p className="text-neutral-high/50 text-xs mt-1 truncate">@betlowg_</p>
              </div>
            </a>
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