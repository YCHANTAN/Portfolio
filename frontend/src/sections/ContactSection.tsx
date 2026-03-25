import React, { useState } from 'react';

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

  const submitContactForm = async (data: ContactData) => {
    try {
      setStatus('submitting');
      // This URL will connect to your C# .NET backend later
      const response = await fetch('https://localhost:5001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus('error');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    submitContactForm(formData); 
  };

  return (
    <section id="contact" className="py-24 px-8 max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
        <p className="text-slate-400">
          Interested in collaborating on a project or discussing technical research? Drop me a message.
        </p>
      </div>
      
      <form 
        onSubmit={handleSubmit} 
        className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            className="bg-slate-950 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none p-3 rounded-lg text-white transition-all"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            className="bg-slate-950 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none p-3 rounded-lg text-white transition-all"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
          <textarea
            id="message"
            placeholder="How can we work together?"
            className="bg-slate-950 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none p-3 rounded-lg text-white h-40 resize-none transition-all"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </div>
        
        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="mt-4 bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-500 disabled:bg-slate-700 disabled:text-slate-400 transition-all shadow-[0_0_10px_rgba(37,99,235,0.3)] hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]"
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-green-400 text-center font-medium mt-2">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-center font-medium mt-2">Something went wrong. Please check your connection and try again.</p>
        )}
      </form>
    </section>
  );
}
