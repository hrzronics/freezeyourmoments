import { MapPin, Mail, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'The Grand Celebration (Wedding)',
    otherType: '',
    date: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Process "Other" type if selected
    const finalType = formData.type === 'Other' ? formData.otherType : formData.type;
    const submissionData = {
      ...formData,
      type: finalType,
    };
    
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setFormState('success');
        setFormData({ 
          name: '', 
          email: '', 
          type: 'The Grand Celebration (Wedding)', 
          otherType: '',
          date: '',
          message: '' 
        });
      } else {
        setFormState('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFormState('error');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10 bg-brand-bg">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div>
          <h2 className="font-serif text-4xl md:text-6xl mb-8 text-brand-ink font-light">Begin Your Story</h2>
          <p className="font-sans text-brand-ink/70 text-base md:text-lg leading-relaxed mb-12 font-light">
            Our bookings are limited to ensure every family receives the artisanal attention their legacy deserves. Tell us about your moment.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-brand-surface-high flex items-center justify-center">
                <MapPin className="text-brand-secondary w-5 h-5" />
              </div>
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-ink/40 mb-1">Location</p>
                <p className="font-sans text-brand-ink text-sm md:text-base font-medium">Based in Ahmedabad | Available Worldwide</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-brand-surface-high flex items-center justify-center">
                <Phone className="text-brand-secondary w-5 h-5" />
              </div>
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-ink/40 mb-1">Phone</p>
                <p className="font-sans text-brand-ink text-sm md:text-base font-medium">+91-9099859858</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-brand-surface-high flex items-center justify-center">
                <Mail className="text-brand-secondary w-5 h-5" />
              </div>
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-ink/40 mb-1">Email</p>
                <p className="font-sans text-brand-ink text-sm md:text-base font-medium">info@freezeyourmoments.com</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-brand-surface-low p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {formState === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-12"
              >
                <div className="flex justify-center mb-6">
                  <CheckCircle2 className="w-16 h-16 text-brand-secondary" />
                </div>
                <h3 className="font-serif text-3xl text-brand-ink mb-4">Inquiry Received</h3>
                <p className="font-sans text-brand-ink/60 mb-8 max-w-xs mx-auto">
                  Thank you for sharing your story. An email notification has been dispatched to info@freezeyourmoments.com.
                </p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="font-sans text-sm text-brand-ink border-b border-brand-ink pb-1 font-medium"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8" 
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input 
                      type="text" 
                      placeholder="Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-brand-ink/10 py-4 focus:outline-none focus:border-brand-ink transition-colors font-sans text-sm md:text-base placeholder:text-brand-ink/30"
                    />
                  </div>
                  <div className="relative group">
                    <input 
                      type="email" 
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-brand-ink/10 py-4 focus:outline-none focus:border-brand-ink transition-colors font-sans text-sm md:text-base placeholder:text-brand-ink/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-brand-ink/40 mb-1">Celebration Type</label>
                    <select 
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full bg-transparent border-b border-brand-ink/10 py-4 focus:outline-none focus:border-brand-ink transition-colors font-sans text-sm md:text-base text-brand-ink appearance-none cursor-pointer"
                    >
                      <option>The Grand Celebration (Wedding)</option>
                      <option>The Quiet Moments (Portraiture)</option>
                      <option>The First Breath (Maternity)</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="relative group">
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-brand-ink/40 mb-1">Date of Celebration</label>
                    <input 
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-transparent border-b border-brand-ink/10 py-4 focus:outline-none focus:border-brand-ink transition-colors font-sans text-sm md:text-base text-brand-ink"
                    />
                  </div>
                </div>

                <AnimatePresence>
                  {formData.type === 'Other' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="relative group overflow-hidden"
                    >
                      <input 
                        type="text" 
                        placeholder="Please specify your celebration type"
                        required
                        value={formData.otherType}
                        onChange={(e) => setFormData({ ...formData, otherType: e.target.value })}
                        className="w-full bg-transparent border-b border-brand-ink/10 py-4 focus:outline-none focus:border-brand-ink transition-colors font-sans text-sm md:text-base placeholder:text-brand-ink/30"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="relative group">
                  <textarea 
                    placeholder="Message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-brand-ink/10 py-4 focus:outline-none focus:border-brand-ink transition-colors font-sans text-sm md:text-base placeholder:text-brand-ink/30 resize-none"
                  />
                </div>
                
                <motion.button 
                  whileHover={{ x: 5 }}
                  disabled={formState === 'submitting'}
                  className="w-full bg-brand-ink text-brand-bg py-5 rounded-full font-sans text-xs md:text-sm tracking-widest uppercase font-semibold flex items-center justify-center gap-2 group transition-all disabled:opacity-50"
                >
                  {formState === 'submitting' ? 'Dispatching...' : 'Send Inquiry'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                {formState === 'error' && (
                  <p className="text-red-500 text-xs text-center">There was an error sending your inquiry. Please try again.</p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
