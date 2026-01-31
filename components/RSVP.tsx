import React, { useState } from 'react';
import Section from './Section';

const RSVP: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  if (formStatus === 'success') {
    return (
      <Section id="rsvp" title="RSVP" subtitle="See you there" altBg>
        <div className="max-w-lg mx-auto text-center py-12">
          <div className="w-16 h-16 bg-sage-100 text-sage-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h3 className="font-serif text-2xl mb-4 text-stone-800">Thank You!</h3>
          <p className="text-stone-600">Your RSVP has been received. We can't wait to celebrate with you!</p>
        </div>
      </Section>
    );
  }

  return (
    <Section id="rsvp" title="RSVP" subtitle="Kindly reply by August 1st" altBg>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 md:p-12 shadow-lg rounded-sm">
        <div className="space-y-6">
          
          <div>
            <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Full Name(s)</label>
            <input 
              required
              type="text" 
              className="w-full bg-stone-50 border-b-2 border-stone-200 p-3 focus:outline-none focus:border-sage-500 transition-colors"
              placeholder="Guest Names"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Email Address</label>
            <input 
              required
              type="email" 
              className="w-full bg-stone-50 border-b-2 border-stone-200 p-3 focus:outline-none focus:border-sage-500 transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Will you be attending?</label>
            <div className="flex gap-6 mt-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="attendance" className="accent-sage-600 w-4 h-4" defaultChecked />
                <span className="text-stone-700">Joyfully Accepts</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="attendance" className="accent-sage-600 w-4 h-4" />
                <span className="text-stone-700">Regretfully Declines</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Dietary Restrictions</label>
            <textarea 
              rows={3}
              className="w-full bg-stone-50 border-b-2 border-stone-200 p-3 focus:outline-none focus:border-sage-500 transition-colors resize-none"
              placeholder="Any allergies or requirements?"
            />
          </div>

          <button 
            type="submit"
            disabled={formStatus === 'submitting'}
            className="w-full bg-stone-800 text-white py-4 mt-4 uppercase tracking-[0.2em] text-xs hover:bg-sage-600 transition-colors duration-300 disabled:opacity-50"
          >
            {formStatus === 'submitting' ? 'Sending...' : 'Send RSVP'}
          </button>
        </div>
      </form>
    </Section>
  );
};

export default RSVP;