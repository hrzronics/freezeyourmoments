import { motion } from 'motion/react';
import { REEL_ITEMS } from '../constants';
import { Play } from 'lucide-react';

export default function Reel() {
  return (
    <section id="reels" className="py-24 md:py-32 bg-brand-surface-high/30">
      <div className="px-6 md:px-10 max-w-[1920px] mx-auto text-center mb-16 md:mb-20">
        <h2 className="font-serif text-3xl md:text-5xl mb-4 text-brand-ink font-light">Cinematic Motion</h2>
        <p className="font-sans text-brand-secondary tracking-[0.3em] uppercase text-[10px] md:text-xs font-semibold">Vertical Narratives for the Modern Archive</p>
      </div>

      <div className="flex overflow-x-auto gap-6 md:gap-8 px-6 md:px-10 pb-12 no-scrollbar snap-x snap-mandatory scroll-smooth">
        {REEL_ITEMS.map((item) => (
          <motion.div 
            key={item.id}
            whileHover={{ y: -10 }}
            className="flex-none w-[280px] md:w-[350px] aspect-[9/16] bg-brand-ink rounded-2xl overflow-hidden relative group cursor-pointer snap-center shadow-xl"
          >
            <img 
              src={item.imageUrl} 
              alt={item.imageAlt} 
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 transform scale-75 group-hover:scale-100 transition-transform">
                <Play className="text-white fill-white w-8 h-8 md:w-10 md:h-10" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
               <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="h-full bg-white"
                  />
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
