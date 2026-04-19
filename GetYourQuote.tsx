import { motion, AnimatePresence } from 'motion/react';
import { useState, useMemo, FormEvent } from 'react';
import { Plus, X, Calendar as CalendarIcon, CheckCircle2, ArrowRight, User, Mail, Calculator } from 'lucide-react';

interface ServiceOption {
  id: string;
  name: string;
  price: number;
}

const SERVICES: ServiceOption[] = [
  { id: 'trad-photo', name: 'Traditional Photography', price: 10000 },
  { id: 'trad-video', name: 'Traditional Videography', price: 10000 },
  { id: 'candid-photo', name: 'Candid Photography', price: 18000 },
  { id: 'cinematography', name: 'Cinematography', price: 20000 },
  { id: 'aerial', name: 'Aerial Photography', price: 10000 },
];

interface DaySelection {
  id: string;
  date: string;
  type: string;
  services: Record<string, number>; // serviceId -> quantity
}

export default function GetYourQuote() {
  const [days, setDays] = useState<DaySelection[]>([
    { id: crypto.randomUUID(), date: '', type: '', services: {} }
  ]);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', email: '' });
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const addDay = () => {
    setDays([...days, { id: crypto.randomUUID(), date: '', type: '', services: {} }]);
  };

  const removeDay = (id: string) => {
    if (days.length > 1) {
      setDays(days.filter(d => d.id !== id));
    }
  };

  const updateDayDate = (id: string, date: string) => {
    setDays(days.map(d => d.id === id ? { ...d, date } : d));
  };

  const updateDayType = (id: string, type: string) => {
    setDays(days.map(d => d.id === id ? { ...d, type } : d));
  };

  const updateServiceQuantity = (dayId: string, serviceId: string, quantity: number) => {
    setDays(days.map(d => {
      if (d.id === dayId) {
        const newServices = { ...d.services };
        if (quantity <= 0) {
          delete newServices[serviceId];
        } else {
          newServices[serviceId] = Math.min(20, quantity);
        }
        return { ...d, services: newServices };
      }
      return d;
    }));
  };

  const totalQuote = useMemo(() => {
    return days.reduce((total, day) => {
      const dayTotal = Object.entries(day.services).reduce((dSum, [sId, qty]) => {
        const service = SERVICES.find(s => s.id === sId);
        const price = service?.price || 0;
        const quantity = Number(qty);
        return dSum + (price * quantity);
      }, 0);
      return total + dayTotal;
    }, 0);
  }, [days]);

  const handleLeadSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitState('submitting');

    const leadPayload = {
      ...leadData,
      type: 'Quote Lead',
      quoteDetails: {
        total: totalQuote,
        days: days.map((d, i) => ({
          date: d.date,
          celebrationType: d.type || `Day ${i + 1}`,
          services: Object.entries(d.services).map(([sId, qty]) => {
            const service = SERVICES.find(s => s.id === sId);
            return { name: service?.name, quantity: qty, pricePerDay: service?.price };
          })
        }))
      }
    };

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadPayload),
      });

      if (response.ok) {
        setSubmitState('success');
      } else {
        setSubmitState('error');
      }
    } catch (err) {
      setSubmitState('error');
    }
  };

  return (
    <section id="quote" className="py-24 md:py-32 bg-brand-surface-highest/50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Heading & Summary */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="font-sans text-brand-secondary uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block font-semibold italic">INVESTMENT CALCULATOR</span>
            <h2 className="font-serif text-4xl md:text-6xl mb-8 text-brand-ink font-light leading-tight">Get Your <span className="italic">Quote</span></h2>
            <p className="font-sans text-brand-ink/60 text-sm md:text-base leading-relaxed mb-10 font-light">
              Craft your bespoke archive by selecting the services and scale required for each celebration day. Our pricing is transparent, artisanal, and tailored to your legacy.
            </p>

            <div className="p-8 bg-brand-ink rounded-3xl text-brand-bg shadow-2xl relative overflow-hidden">
               <div className="relative z-10">
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-bg/40 mb-2">Estimated Investment</p>
                  <p className="font-serif text-4xl md:text-5xl">₹{totalQuote.toLocaleString()}</p>
                  <div className="h-px bg-brand-bg/10 my-6" />
                  <p className="font-sans text-[10px] text-brand-bg/30 uppercase tracking-widest leading-relaxed mb-8">
                    *Exclusive of travel & taxes. Final quote varies by destination.
                  </p>
                  
                  <button 
                    onClick={() => setShowLeadForm(true)}
                    disabled={totalQuote === 0}
                    className="w-full bg-brand-secondary text-brand-bg py-4 rounded-full font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold flex items-center justify-center gap-2 group transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Email Yourself Quote
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
               </div>
               <Calculator className="absolute -bottom-4 -right-4 w-32 h-32 text-brand-bg/5 rotate-12" />
            </div>
          </div>

          {/* Right Column: Configuration */}
          <div className="lg:col-span-8 space-y-12">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-serif text-2xl text-brand-ink font-light">Celebration Schedule</h3>
              <button 
                onClick={addDay}
                className="flex items-center gap-2 text-brand-secondary font-sans text-[10px] uppercase tracking-widest font-semibold hover:text-brand-ink transition-colors px-4 py-2 bg-white rounded-full border border-brand-ink/5 shadow-sm"
              >
                <Plus className="w-4 h-4" /> Add Celebration Day
              </button>
            </div>

            <div className="space-y-8">
              <AnimatePresence initial={false}>
                {days.map((day, idx) => (
                  <motion.div 
                    key={day.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white p-6 md:p-10 rounded-3xl border border-brand-ink/5 shadow-sm relative group"
                  >
                    {days.length > 1 && (
                      <button 
                        onClick={() => removeDay(day.id)}
                        className="absolute top-6 right-6 text-brand-ink/20 hover:text-red-400 transition-colors p-2"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                      <div>
                        <label className="block font-sans text-[10px] uppercase tracking-widest text-brand-ink/40 mb-3 ml-1">Celebration Date</label>
                        <div className="relative">
                          <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-secondary" />
                          <input 
                            type="date"
                            value={day.date}
                            onChange={(e) => updateDayDate(day.id, e.target.value)}
                            className="w-full bg-brand-surface-high/30 border border-brand-ink/5 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-brand-secondary transition-colors font-sans text-sm text-brand-ink appearance-none cursor-pointer"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block font-sans text-[10px] uppercase tracking-widest text-brand-ink/40 mb-3 ml-1">Event Type (e.g. Haldi, Mehndi)</label>
                        <div className="relative">
                          <input 
                            type="text"
                            placeholder={`Day ${idx + 1}`}
                            value={day.type}
                            onChange={(e) => updateDayType(day.id, e.target.value)}
                            className="w-full bg-brand-surface-high/30 border border-brand-ink/5 rounded-xl py-4 px-6 focus:outline-none focus:border-brand-secondary transition-colors font-sans text-sm text-brand-ink placeholder:text-brand-ink/20"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                      {SERVICES.map((service) => (
                        <div key={service.id} className="flex flex-col">
                          <div className="flex justify-between items-end mb-4">
                            <div>
                              <h4 className="font-serif text-lg text-brand-ink">{service.name}</h4>
                              <p className="font-sans text-[10px] text-brand-ink/40 uppercase tracking-widest">₹{service.price.toLocaleString()} per unit</p>
                            </div>
                            <div className="flex items-center gap-4 bg-brand-surface-high/50 rounded-full px-4 py-2 border border-brand-ink/5">
                              <button 
                                onClick={() => updateServiceQuantity(day.id, service.id, (day.services[service.id] || 0) - 1)}
                                className="text-brand-ink/40 hover:text-brand-ink transition-colors font-bold text-lg px-1"
                              >-</button>
                              <span className="font-mono text-sm w-4 text-center font-medium">
                                {day.services[service.id] || 0}
                              </span>
                              <button 
                                onClick={() => updateServiceQuantity(day.id, service.id, (day.services[service.id] || 0) + 1)}
                                className="text-brand-ink/40 hover:text-brand-ink transition-colors font-bold text-lg px-1"
                              >+</button>
                            </div>
                          </div>
                          <div className="h-0.5 bg-brand-surface-high/50" />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Form Modal */}
      <AnimatePresence>
        {showLeadForm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLeadForm(false)}
              className="absolute inset-0 bg-brand-ink/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-brand-bg rounded-[40px] p-10 md:p-16 shadow-2xl overflow-hidden"
            >
              {submitState === 'success' ? (
                <div className="text-center py-8">
                  <div className="flex justify-center mb-8">
                    <CheckCircle2 className="w-20 h-20 text-brand-secondary" />
                  </div>
                  <h3 className="font-serif text-3xl text-brand-ink mb-4 italic">Quote Dispatched</h3>
                  <p className="font-sans text-brand-ink/60 mb-10 leading-relaxed">
                    The details of your bespoke investment have been sent to <span className="text-brand-ink font-medium">{leadData.email}</span>. One of our curators will reach out shortly.
                  </p>
                  <button 
                    onClick={() => { setShowLeadForm(false); setSubmitState('idle'); }}
                    className="bg-brand-ink text-brand-bg px-10 py-4 rounded-full font-sans text-[10px] uppercase tracking-widest font-bold"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <button 
                    onClick={() => setShowLeadForm(false)}
                    className="absolute top-8 right-8 text-brand-ink/20 hover:text-brand-ink transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <div className="mb-10 text-center">
                    <h3 className="font-serif text-4xl text-brand-ink mb-2">Secure Your <span className="italic">Quote</span></h3>
                    <p className="font-sans text-[10px] text-brand-secondary uppercase tracking-[0.2em] font-semibold">Total Estimate: ₹{totalQuote.toLocaleString()}</p>
                  </div>
                  <form onSubmit={handleLeadSubmit} className="space-y-8">
                    <div className="relative">
                      <User className="absolute left-0 top-4 w-4 h-4 text-brand-ink/20" />
                      <input 
                        required
                        type="text" 
                        placeholder="Your Name"
                        value={leadData.name}
                        onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-brand-ink/10 py-4 pl-8 focus:outline-none focus:border-brand-ink transition-colors font-sans text-sm md:text-base placeholder:text-brand-ink/20"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-0 top-4 w-4 h-4 text-brand-ink/20" />
                      <input 
                        required
                        type="email" 
                        placeholder="Email Address"
                        value={leadData.email}
                        onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-brand-ink/10 py-4 pl-8 focus:outline-none focus:border-brand-ink transition-colors font-sans text-sm md:text-base placeholder:text-brand-ink/20"
                      />
                    </div>
                    <button 
                      type="submit"
                      disabled={submitState === 'submitting'}
                      className="w-full bg-brand-ink text-brand-bg py-5 rounded-full font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold flex items-center justify-center gap-3 mt-4 disabled:opacity-50"
                    >
                      {submitState === 'submitting' ? 'DISPATCHING...' : 'EMAIL QUOTE TO ME'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    {submitState === 'error' && (
                      <p className="text-red-500 font-sans text-[10px] text-center uppercase tracking-widest mt-4">Failed to send. Please try again.</p>
                    )}
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
