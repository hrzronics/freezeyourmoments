import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonial() {
  return (
    <section id="testimonials" className="py-32 md:py-48 bg-brand-surface-highest">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.5 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="flex justify-center mb-8"
        >
          <Quote className="text-brand-secondary w-10 h-10 md:w-16 md:h-16 opacity-30 fill-brand-secondary" />
        </motion.div>
        
        <motion.blockquote 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-2xl md:text-4xl lg:text-5xl text-brand-ink leading-tight mb-12 font-light italic"
        >
          "They didn't just take photos; they curated our family's history. These images have become a multi-generational legacy that we will pass down as heirlooms."
        </motion.blockquote>
        
        <motion.cite 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-sans text-brand-secondary tracking-[0.3em] uppercase text-xs md:text-sm not-italic font-semibold"
        >
          — The Kapoor Family, Mumbai
        </motion.cite>
      </div>
    </section>
  );
}
