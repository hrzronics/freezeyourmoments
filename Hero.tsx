import { motion } from 'motion/react';
import { IMAGES } from '../constants';
import Counter from './Counter';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-ink/30 z-10" />
        <img 
          src={IMAGES.hero} 
          alt="Cinematic wedding ceremony" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-5xl flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-sans text-white uppercase tracking-[0.4em] mb-4 md:mb-8 block text-[10px] md:text-sm"
        >
          The Art of the Pause
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8 md:mb-12 font-light"
        >
          Because some moments are too beautiful to be left to memory alone.
        </motion.h1>

        <motion.a 
          href="#gallery"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ backgroundColor: 'white', color: '#1a1a1a', scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-30 border border-white/30 bg-white/10 backdrop-blur-md text-white px-8 md:px-12 py-3.5 md:py-5 rounded-full font-sans text-[10px] md:text-xs tracking-widest uppercase transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] inline-block"
        >
          View Portfolio
        </motion.a>
      </div>

      {/* Legacy Counter Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-6 md:gap-16 bg-white/5 backdrop-blur-xl px-6 md:px-12 py-3 md:py-5 rounded-full border border-white/10 whitespace-nowrap scale-[0.8] md:scale-100"
      >
        <div className="text-center">
          <p className="font-serif text-sm md:text-xl text-white font-light">
            <Counter value={14} suffix=" Years" />
          </p>
          <p className="font-sans text-[8px] md:text-[9px] uppercase tracking-widest text-white/50 font-medium">Experience</p>
        </div>
        <div className="text-center">
          <p className="font-serif text-sm md:text-xl text-white font-light">
            <Counter value={500} suffix="+ Families" />
          </p>
          <p className="font-sans text-[8px] md:text-[9px] uppercase tracking-widest text-white/50 font-medium">Stories Told</p>
        </div>
        <div className="text-center">
          <p className="font-serif text-sm md:text-xl text-white font-light">
            <Counter value={6} suffix=" Cities" />
          </p>
          <p className="font-sans text-[8px] md:text-[9px] uppercase tracking-widest text-white/50 font-medium">Our Roots</p>
        </div>
      </motion.div>
    </section>
  );
}
