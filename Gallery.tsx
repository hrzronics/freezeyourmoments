import { motion } from 'motion/react';
import { IMAGES } from '../constants';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 px-6 md:px-10 bg-brand-bg overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="font-sans text-brand-secondary uppercase tracking-[0.3em] text-[10px] md:text-sm mb-4 block font-semibold">Selected Works</span>
            <h2 className="font-serif text-4xl md:text-6xl text-brand-ink font-light">The Mood Gallery</h2>
          </div>
          <p className="font-serif text-brand-ink/60 max-w-md mt-6 md:mt-0 leading-relaxed italic text-base md:text-xl font-light">
            A collection of ethereal fragments, captured with the intention of lasting forever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-32 gap-x-8">
          {/* Item 1: The Grand Celebration */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-7 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden group">
              <img 
                src={IMAGES.celebration} 
                alt="The Grand Celebration" 
                className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 to-transparent flex items-end p-8 md:p-12">
                <h3 className="font-serif text-2xl md:text-4xl text-white">The Grand Celebration</h3>
              </div>
            </div>
          </motion.div>

          <div className="col-span-1 md:col-span-4 md:col-start-9 flex flex-col justify-center">
            <p className="font-sans text-brand-ink/70 leading-loose text-sm md:text-base">
              Magnificent scales meet intimate details. We capture the energy of your most significant milestones without missing the quiet sighs in between.
            </p>
          </div>

          {/* Item 2: The Quiet Moments */}
          <div className="col-span-1 md:col-span-4 flex flex-col justify-center">
            <h3 className="font-serif text-2xl md:text-3xl mb-4 md:mb-6">The Quiet Moments</h3>
            <p className="font-sans text-brand-ink/70 leading-loose mb-8 text-sm md:text-base">
              The unspoken glances, the gentle touch of a hand, and the soft focus of a morning light. These are the archives of the soul.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-7 md:col-start-6"
          >
            <div className="relative">
              <div className="relative z-20 rounded-2xl overflow-hidden shadow-2xl -rotate-2">
                <img 
                  src={IMAGES.quietMoments} 
                  alt="Couple moment" 
                  className="w-full h-[350px] md:h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-12 -left-12 z-10 w-48 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-xl rotate-3 hidden lg:block">
                <img 
                  src={IMAGES.henna} 
                  alt="Henna detail" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          {/* Item 3: New Beginnings */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-10 md:col-start-2 bg-brand-surface-low p-8 md:p-24 rounded-3xl flex flex-col md:flex-row items-center gap-12 md:gap-16"
          >
            <div className="w-full md:w-1/2">
              <img 
                src={IMAGES.maternity} 
                alt="Maternity Portrait" 
                className="w-full aspect-[4/5] object-cover rounded-2xl shadow-lg border-4 border-white"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full md:w-1/2">
              <span className="font-sans text-brand-secondary uppercase tracking-[0.3em] mb-4 block text-xs font-medium">New Beginnings</span>
              <h3 className="font-serif text-3xl md:text-5xl mb-6 md:mb-8 leading-tight">The First Breath</h3>
              <p className="font-sans text-brand-ink/70 text-base md:text-lg leading-relaxed mb-8 md:mb-12">
                Honoring the quiet transition into parenthood. Cinematic maternity and newborn archives that feel as weightless as a first breath.
              </p>
              <a 
                href="#" 
                className="font-sans text-brand-ink inline-block border-b border-brand-ink/20 pb-2 text-xs md:text-sm uppercase tracking-widest font-semibold hover:border-brand-ink transition-all"
              >
                Explore the Collection
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
