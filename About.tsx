import { motion } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-ink selection:bg-brand-secondary/20 overflow-x-hidden">
      <Navbar />

      {/* Hero: 14 Years of Frozen Time */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 md:px-10 text-center">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
          <img 
            alt="Cinematic wide shot of a traditional Indian wedding venue" 
            className="w-full h-full object-cover grayscale brightness-50" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAATuyNqIZxIRbFj0T2uvNQ0g-c4fBdNiI9WpmH9XnVUHVZgYB3vUzTqrJ2QsPPMmYMe9sncfxUeJjZU2E6ULxONXzIwB9CwnFM4qf7_g3nL0tKx7rW_56EWQ35kzoHZDu2vBMCUVCafIErHjC7AO0fGWeFfOr_cE65VtvczuMxZ_Xg1SmedzHC1QjqlDyVSxV-bGZIAgak0ol0ueHn-RiTD-mcuzoNnUz4F2z81hWzKLa-zzDLm5TFn8FeliTdcti3yU0auCMpqW4" 
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-5xl">
          <motion.span 
            initial={{ opacity: 0, tracking: '0.1em' }}
            animate={{ opacity: 1, tracking: '0.4em' }}
            className="font-sans text-[10px] md:text-sm tracking-[0.4em] uppercase text-brand-secondary mb-8 block font-bold"
          >
            Legacy Monograph
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-[10vw] font-serif italic tracking-tighter text-brand-ink leading-[0.85] mb-10"
          >
            14 Years of <br /> 
            <span className="opacity-40">Frozen Time.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto font-sans text-lg md:text-xl text-brand-ink/60 leading-relaxed font-light italic"
          >
            A chronicle of Ahmedabad’s heritage through the lens of half a thousand families. We don’t just take photographs; we archive the soul of a lineage.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-brand-secondary/40"
        >
          <span className="font-sans text-[9px] tracking-widest uppercase font-bold">The Story Unfolds</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </section>

      {/* Section: Our Story - Deep Dive */}
      <section className="py-40 px-6 md:px-10 bg-brand-surface-high/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="inline-block px-6 py-2 border border-brand-ink/10 rounded-full font-sans text-[10px] uppercase tracking-widest text-brand-secondary font-bold">
                Founded 2012
              </div>
              <h2 className="text-6xl md:text-8xl font-serif text-brand-ink leading-tight italic font-light tracking-tighter">
                Rooted in the <br /> Sands of Sabarmati.
              </h2>
              <div className="space-y-8 text-brand-ink/70 font-sans text-lg md:text-xl leading-relaxed max-w-xl font-light italic">
                <p>
                  What began in a small studio overlooking the bustling markets of old Ahmedabad has grown into a definitive archive of Gujarat's most intimate celebrations. Since 2012, we have walked alongside families from the narrow pols to the sprawling estates of modern Satellite.
                </p>
                <p>
                  Our evolution was driven by a single question: <i className="text-brand-ink">How do we capture the weight of a moment?</i> Not just the visual, but the vibration of a mother's blessing and the silent weight of a father's gaze. This pursuit led us to pioneer a non-linear cinematic style that feels like memory itself.
                </p>
              </div>
            </div>
            <div className="relative">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10"
              >
                <img 
                  alt="Heritage architecture of Ahmedabad" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaPWkEeX0tIxnW5VgJb2S022XvRr4rGUTebV0XoL6RcG2XTkB-i4OCdAyG-mtbUttuNBmzvJR_OTNkxOI6kprQYRjcssGHJkfZrTqnZmnwOyvQ7LdoSB4Hk4u-3KnEclJvGs0HBFCrihJH9UA6gh92owBHESCWV6XuaUBOeHM27LoC4pGj9Cu_F16kZJT8q0qjfLbviWJ8mc9eWyEPEZv5HEx9lEiqXBhVPUuMijGCR6KE2VElSoE7oiXkUIWXnArklcSrBfc-AneO" 
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="absolute -bottom-16 -left-16 w-80 aspect-square rounded-3xl overflow-hidden border-[16px] border-brand-bg shadow-2xl z-20 hidden md:block"
              >
                <img 
                  alt="Three generations of family" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJDVk1WXW_8Ez3avPLvEW3FNbDgS9TWdxyiFYg5cvV0l4sn152bQ8opmz1467HRi38GRiwvq1-YyWLjXVgBaf4Wa-7n0765kXSN7Qc4Yr6q2arWlqvE-0qex-JqXwJ7PnvMYESJGB6Y4lFqW4d_koYu2tweUtVy8bcyltQCeFBS6lKpGrp-MpqduSbpZO_FcuS2AwQRnQR0Hlo8oBk-h1utE3LxBqEAtuozMIBLKKMCS-Hy8geHgpZyjnuRsbe6jPoPazTGlxm1KzQ" 
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-48 h-48 bg-brand-secondary/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Meet the Curators - Anti-Grid */}
      <section className="py-48 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-40 text-center md:text-left">
            <span className="font-sans text-xs tracking-[0.5em] uppercase text-brand-secondary mb-6 block font-black">The Visionaries</span>
            <h2 className="text-7xl md:text-9xl font-serif italic text-brand-ink font-light tracking-tighter shrink-0">Meet the Curators.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-40 md:gap-x-16 items-start relative z-10">
            {/* Curator 1 */}
            <motion.div 
              whileHover={{ y: -15 }}
              className="space-y-10"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-brand-surface-high">
                <img 
                  alt="Arjun - Founder" 
                  className="w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCXEtFaacAziZ8lDpvaUhJV1RYdZL9-jV7j5979lhxhwdVyeGkPz4G29xmQ0MZc7IpEBRGyC3QaibmlbSPpfOPoxc6AZE3AFDEmMD0VwZroDti3gp27M5HvMUThQ909FepbC8YSF4nM4vPjhu3EPV5_u1hTowjF2SgoM2UpCSTs-7Loc2Ptp_JBVJWt0GYsi_FLnoFS02fI26UdM8kO_cHY9JZ5yULVl-6Mmz5XkdaVa7_JUmKxsD5j57gACcTC_HUraVu_qR2Z7A6" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-5xl font-serif italic text-brand-ink font-light tracking-tight">Arjun</h3>
                <p className="font-sans text-[10px] uppercase tracking-widest text-brand-secondary font-black">Creative Director & Founder</p>
                <p className="font-sans text-brand-ink/60 text-base leading-relaxed font-light italic">
                  A purist of light. Arjun believes that the most beautiful moments happen in the silence between the chaos. 14 years of chasing shadows in Ahmedabad.
                </p>
              </div>
            </motion.div>

            {/* Curator 2 */}
            <motion.div 
              whileHover={{ y: -15 }}
              className="space-y-10 lg:mt-32"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-brand-surface-high">
                <img 
                  alt="Meera - Founder" 
                  className="w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDhDBe3JYFdMlYqZaESwx5jB8hMhPX-K2ab7XKDi7AxTX1-sctK6TyVWmsX3cCQh3yQk6dkMFKigK6q7ZSkrVm5dgH2PflDaiicTZgBdJEpLHf8ntql2-TbcL1D5jX84vlujYibcIy5J1r8lew4dqdOl-TVfKHS89poUKlyRCzYEczi_ITP5bdLmOzXa0TkpoDK6jtWoxphZv3xYa7Oth9KwniWb5hXINwXItNvF_3PaozwZjRFbxyORAoEqvhtXYTt00schUEfVsY" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-5xl font-serif italic text-brand-ink font-light tracking-tight">Meera</h3>
                <p className="font-sans text-[10px] uppercase tracking-widest text-brand-secondary font-black">Principal Storyteller</p>
                <p className="font-sans text-brand-ink/60 text-base leading-relaxed font-light italic">
                  Meera captures the emotional architecture of a family. Her films are love letters to heritage, woven with threads of nostalgia and modern editorial flair.
                </p>
              </div>
            </motion.div>

            {/* Curator 3 */}
            <motion.div 
              whileHover={{ y: -15 }}
              className="space-y-10"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-brand-surface-high">
                <img 
                  alt="Lead Cinematographers" 
                  className="w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQHqCiInaeLT8T-y22x1yVRSI_YefDQlLM7ax2OJCSGgIq9lOpbuPEm3E_5KQF6_tJ-c8TWSTiaR6imlGdd66jGnCcuUFyZqne_QDmcKqCWpxhdASJm6gBHTP4-ApuDoScFETASQpGkKh4kRw6EbWm-Fohd2PRKfEPuqIPqXIm2LkJ8gOGc36F_Mqtn_nY4FDJjBiia-E8Vpd-4LcrFZjvTit8V51X8xgb0P3X7eSJs07QANtwmbrdpfsDSfYlJkMV0iToBPyZnS1O" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-5xl font-serif italic text-brand-ink font-light tracking-tight">The Collective</h3>
                <p className="font-sans text-[10px] uppercase tracking-widest text-brand-secondary font-black">Lead Cinematographers</p>
                <p className="font-sans text-brand-ink/60 text-base leading-relaxed font-light italic">
                  A hand-picked team of visual poets trained in the studio's philosophy of 'Silent Observation.' They don't just film; they witness.
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Background decorative text */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none">
            <span className="text-[30vw] font-serif italic whitespace-nowrap leading-none tracking-tighter">The Heritage Archive</span>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-48 bg-brand-surface-highest/40 flex items-center justify-center px-6 md:px-10">
        <div className="max-w-5xl text-center space-y-16">
          <Sparkles className="w-12 h-12 text-brand-secondary/30 mx-auto" />
          <blockquote className="text-4xl md:text-6xl font-serif italic text-brand-ink leading-tight font-light tracking-tight">
            "Our studio is not just about recording events; it’s about creating a timeless medium where generations can meet, again and again."
          </blockquote>
          <div className="flex flex-col items-center gap-6">
            <cite className="font-sans text-xs tracking-[0.4em] uppercase text-brand-secondary not-italic font-black">— Arjun & Meera</cite>
            <div className="h-20 w-px bg-brand-ink/10" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
