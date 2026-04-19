import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Portfolios() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-ink selection:bg-brand-secondary/20">
      <Navbar />

      {/* Hero Header */}
      <header className="px-6 md:px-10 max-w-[1920px] mx-auto pt-32 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.span 
              initial={{ opacity: 0, tracking: '0.1em' }}
              animate={{ opacity: 1, tracking: '0.4em' }}
              className="font-sans text-[10px] md:text-xs uppercase text-brand-secondary mb-6 block font-bold"
            >
              Visual Anthology
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-7xl md:text-[11vw] font-serif italic tracking-tighter leading-[0.82] text-brand-ink"
            >
              Portfolios <br /> 
              <span className="ml-16 md:ml-48 opacity-40">by Mood</span>
            </motion.h1>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-4 pb-4"
          >
            <p className="font-sans text-base md:text-lg text-brand-ink/50 leading-relaxed max-w-sm font-light italic">
              A curated journey through celebration, silence, and new beginnings. Every frame is a preserved memory, every mood a legacy.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Section 1: The Grand Celebration */}
      <section className="relative mb-64 px-6 md:px-10">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-brand-ink/5 pb-8">
            <h2 className="text-6xl md:text-9xl font-serif font-light leading-tight tracking-tighter">The Grand Celebration</h2>
            <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] text-brand-secondary font-bold">Vibrant • High-Impact • Luxury</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="col-span-12 md:col-span-7">
              <motion.div 
                whileHover={{ y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-[2rem] shadow-2xl group group"
              >
                <img 
                  className="w-full h-[600px] md:h-[900px] object-cover transition-transform duration-1000 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7iVm4Z50UoRL2k4eMGe17sCRDGYICEdUBM4I4nYAsBp0hbNU9Yd2RiKJfdbvitbtqPsl3yazfZdZS7xuEvIZ83UuOzNfHFq46yR35XrYLZl4At8qQUEPuTzd-jyWS8vEOirBt_fTIixot8JWAQv8Ro56nGx4Y9qPCeMeT9cBLNdu5MWCvcFiwLncreKDXONXCc9Jf46WeMbIUSgupzcdgXtIUM4Fh5DHEtQ9lSuPZbxAHQGCTA_xJOew7YLh74GMjX6Y8aBQL9QWM" 
                  alt="Grand Palace Wedding"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </div>
            
            <div className="col-span-12 md:col-span-4 md:col-start-9 lg:mt-64">
              <motion.div 
                whileHover={{ y: -20, rotate: 2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-3xl shadow-xl mb-12"
              >
                <img 
                  className="w-full h-[400px] md:h-[600px] object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDJGkO3xpoCshOhmDYCJZQ_hMXzQeNh0jkb1-syAKmisjtfRV0OgjUM4VEPEI7EDfD_iv64vyPimBcZQpYQSNukkbhXOMpzk5f-14xc_zFZ0SeDadgTChVm-kigBhp9EhfrHeEuzh5yDYCH0o1ymJ3LCFn7CVfhzxgsIEpmvs5cnGFqLxsgL-llo_KivghdzrTUgWV6tJD73t2SbIartCENnGQloFkf4hHZ9a72WKzLeau-Jfmf4QomkKGve3oOh9TzTgD9qEOr0gN" 
                  alt="Wedding Details"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="pl-8 border-l-2 border-brand-secondary/40 py-4">
                <p className="font-serif italic text-2xl md:text-4xl mb-6 text-brand-ink/90 leading-tight">"The energy of a thousand smiles captured in a single frame."</p>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-secondary font-black">— Udaipur, 2023</span>
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 md:-mt-48 z-10">
              <motion.div 
                whileHover={{ y: -20, rotate: -1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-3xl shadow-2xl"
              >
                <img 
                  className="w-full h-[400px] md:h-[600px] object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcmXv6TBvZ4ZTiNY-m7EZm_HCr7T32auBgVlYLZ_YcGlhAKbRirlaR9VNhLZ5ODnLiLkFl7CFBKoBficSzmFkvcMdf6qWDlIyhwxymuq7QM-18OLjXGqNnW7EFbIdrKsSAdzJHiXuzhs_R8IPDDexVbOvXqis6SWWDV6S0590UzLD6suu23-dw-BQhrozIs33R7cX9pK2szc4GkJAf7Rxm1EZF4xj1yitssuMPV6hTlsdZGo7osog-tCRytqPrgT_MAzbzIOfkwWQT" 
                  alt="Reception Dance"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Quiet Moments */}
      <section className="mb-64 bg-brand-surface-highest/40 py-48 overflow-hidden">
        <div className="max-w-[1920px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row-reverse justify-between items-baseline mb-32 text-right border-b border-brand-ink/5 pb-8">
            <h2 className="text-6xl md:text-9xl font-serif font-light italic leading-tight tracking-tighter">The Quiet Moments</h2>
            <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] text-brand-secondary pt-4 md:pt-0 font-bold">Documentary • Noir • Intimate</p>
          </div>

          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 md:col-span-4 mb-20 md:mb-0">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.7 }}
                className="relative overflow-hidden rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
              >
                <img 
                  className="w-full h-[600px] md:h-[850px] object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5xfzTTy8MwmeeWvAy5Zs94CKsHCo4OTWwiIF7Iy9UuDB2NRCDAkwFROVsOnNxjYHVyiWQoW9VXllNFljoV31jUzqrDaedkho4432N45YSCGVc9NVPXMPvZN_UZaBHKoJA30FD1AyjsGM_UF1-bhCn1D9OfVNJp3tzhikkVL4PSXPpy47GkKegUp9v23dx3ReHKGQ6GSkH5JsX51W0Dv-kiaDnZVcDZtEMtqVoDJ5hrI6Lz8jrG8Q8HdypEeof3iC6XkiFk5fNYpFg" 
                  alt="Portrait Noir"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            <div className="col-span-12 md:col-span-8 flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 md:mt-64">
                <motion.div 
                  whileHover={{ y: -20 }}
                  className="relative overflow-hidden rounded-3xl shadow-xl grayscale"
                >
                  <img 
                    className="w-full h-[400px] md:h-[600px] object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpFdEHx4JIXcvVgKP_ewq3JVoqlc_k48_igpXTe1we11LFZ4pbUXyQP1BHXQZn_i_8aYRNWaELxw7USVDpqs4PpsWNtT2CEVZWV8nGyzEqd2VEiZWFtvPHiF4Btle7qf6AqW2ZQCNetVTm6gMS5QuFH5Ju_hyJt6Q9n08JR2jJETpmtqpnlnI1GM40DViie3OrAYilHd2If-yGa0__NF85coFHfccphFIgArsUwmx0wG41xEMPQUfPaKnIyYgQB2pVzmPmynTkqUKq" 
                    alt="Hands Closeup"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div className="mt-12 text-brand-ink/60 max-w-xs ml-auto text-right">
                  <p className="font-serif italic text-lg md:text-xl mb-8 leading-relaxed italic">Between the loud cheers lie the whispers. We look for the gaze that lingers and the touch that reassures.</p>
                  <a href="/#quote" className="inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.2em] border-b border-brand-ink/20 pb-1 hover:border-brand-ink transition-colors font-black group">
                    View Series <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <motion.div 
                  whileHover={{ rotate: 3, scale: 1.02 }}
                  transition={{ duration: 0.6 }}
                  className="relative overflow-hidden rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.18)] translate-y-12"
                >
                  <img 
                    className="w-full h-[700px] md:h-[1000px] object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYuPAtHECLCQkSu51UbfE9e9O-vptqnODMq1WfxE_ypl-9JSs1Dim3TrvJglYr9odGYBZHMHqGyBDAf8u2pW6_fJG52Zabs7QsIj4ZpVTZw7-OJgpMfmIFFpRKO5pDnVKZA0HxPAgORPRjjY5IVsAV9KCUAkVuggxcXyXaB2Bfboaeu-NgLywhxsqRCizgBS4RTKELijZi5HN8WGkM3T9xskdd1WLP1y8Kc0h75FvSrObE3jzEsr5uq5gJG3FFvfBJUvvale1bKptY" 
                    alt="Bride Cinematic"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The First Breath */}
      <section className="mb-64 relative bg-white md:bg-transparent overflow-hidden">
        <div className="absolute right-0 top-0 w-full md:w-2/3 h-full bg-brand-secondary/5 rounded-l-[10rem] md:rounded-l-[20rem] -z-10" />
        <div className="max-w-[1920px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-32 border-b border-brand-ink/5 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-6xl md:text-9xl font-serif font-light leading-tight tracking-tighter">The First Breath</h2>
              <p className="font-serif text-2xl md:text-4xl text-brand-secondary mt-8 italic leading-tight">A celebration of new life, captured in ethereal light and velvet textures.</p>
            </div>
            <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] text-brand-secondary font-black pt-8 md:pt-0">Maternity • Newborn • Ethereal</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32 items-center">
            <div className="relative z-20 transform md:-translate-y-24">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="rounded-full overflow-hidden aspect-[3/4] border-[15px] md:border-[30px] border-white shadow-2xl"
              >
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGzdyk9sIMRNS8OOJx_BQU8Xei33y5Z6--sgVOLM883u7d7KNLsOpp3ZqimhFnng96-JNaF7xyPtGH8xGD-u2vZSqVH6YNF52XAxM_cZsCmBOF4bu5pHBNOdIx3c-8ne72JrWpd6Djcdhsmdf2dCbolAvlyiebCUeNF2peVhT3alSIMoZsm1uRz1GRU2n-_Uyl_bqznl6U9r6mZ3-Sv5PvyBAWyc4QTq8btLcQk_9ePFFP4Dqt8f4O_I9sBIoR8_EbtSHqHDjFSSao" 
                  alt="Maternity Portrait"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-brand-ink/5 max-w-[220px] md:max-w-[300px]">
                <span className="font-sans text-[9px] uppercase tracking-widest text-brand-secondary block mb-3 font-black">Portfolio Entry 082</span>
                <p className="text-base md:text-lg font-serif italic text-brand-ink/80 leading-relaxed">Muted tones and soft morning glow.</p>
              </div>
            </div>

            <div className="relative z-10 transform md:scale-125">
              <motion.div 
                whileHover={{ y: -20 }}
                className="rounded-3xl overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.15)]"
              >
                <img 
                  className="w-full h-[450px] md:h-[600px] object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMZ_xCsqX9v_VgsoQapLtIr3oIEHrxgQlwKF_qentxrWnxvciO42WlvUYLBvFi74ZUGFd3xfL1wndrHkzxa_01KfcxAVY2fCzDg1_xB600UkF1bvWQqFzXovVWc7AQpJ3Uh5h8VF_pKdB-6ZIaG2wV_JCfvOxBYspMGfsBHlf-xXqXp9mOHNFIAXf9poSx_qFVkWNd9XvEH6_ccTtkKYbbTvxKPskMiZgCHrXuHn7uMhsOziT5mHENKyeJWPxrpGLhKRFAkfZGT7IF" 
                  alt="Newborn Hand"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            <div className="relative z-0 transform md:translate-y-32 md:-translate-x-16">
              <motion.div 
                whileHover={{ rotate: -5, scale: 1.05 }}
                className="rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl"
              >
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVKbubYJEFbD1G9ygCOtDm-3F7LW-W21LUrnrFQspvs4Q2Iov0z-c5w_C8uUrm-wOsS0cvUN_2o-d_BxCkDMrttxYqZivnHNCKJDh-0XGfsbMtO9z9rnBAdbVTj7HHkYAohMgQkTh5keSRZYoDj05kY84jefpLO_aYXo-UJU6jaq28m9fg1FuLAUHtjWqudp3TAS43-fxWTHwTvbpcY9G76cJmWwyUMNe_WTIxRYRvYWaIWoPutVTxxdBQdOHWliV9M4YVTepocy_u" 
                  alt="Maternity Silhouette"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mb-64 text-center mt-32">
        <motion.div 
          whileHover={{ scale: 1.005 }}
          className="bg-brand-ink text-brand-surface-low p-16 md:p-40 rounded-[4rem] relative overflow-hidden shadow-2xl shadow-brand-ink/20"
        >
          <div className="absolute inset-0 bg-white/5 opacity-40 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-5xl md:text-[8vw] font-serif italic mb-12 leading-[0.9] font-light text-brand-surface-low tracking-tighter">Ready to archive <br /> your legacy?</h3>
            <p className="font-sans text-brand-surface-low/50 text-base md:text-2xl mb-16 max-w-3xl mx-auto font-light leading-relaxed">Whether it's the roar of the crowd or the softest breath, we are here to freeze it forever.</p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <motion.a 
                href="/#quote"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-secondary text-brand-surface-low px-16 py-6 rounded-full font-sans text-xs md:text-sm tracking-[0.3em] uppercase font-black transition-all shadow-2xl hover:shadow-brand-secondary/30"
              >
                Start Your Journey
              </motion.a>
              <button className="text-brand-surface-low font-sans text-[11px] md:text-xs tracking-[0.4em] uppercase border-b border-white/20 pb-2 hover:border-white transition-all font-black opacity-40 hover:opacity-100 italic">
                Download Portfolio PDF
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
