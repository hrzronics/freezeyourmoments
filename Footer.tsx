import { Link } from 'react-router-dom';
import { Camera, Film, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-ink py-24 px-6 md:px-10 text-brand-surface-low">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 items-start pb-20 border-b border-white/5">
          <div className="space-y-8">
            <Link to="/" className="font-serif italic text-3xl text-brand-surface-low font-light hover:opacity-70 transition-opacity block">
              Freeze Your Moments
            </Link>
            <p className="text-brand-surface-low/40 font-sans text-sm max-w-xs leading-relaxed font-light italic">
              Crafting cinematic legacies in Ahmedabad and beyond. Modern editorials for timeless stories.
            </p>
            <div className="flex gap-8 pt-4">
              <Camera className="w-5 h-5 text-brand-surface-low/30 hover:text-brand-surface-low cursor-pointer transition-colors" />
              <Film className="w-5 h-5 text-brand-surface-low/30 hover:text-brand-surface-low cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-brand-surface-low/30 hover:text-brand-surface-low cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="space-y-10">
            <h5 className="text-brand-surface-low font-sans tracking-[0.4em] text-[10px] uppercase font-bold">Curations</h5>
            <ul className="space-y-6">
              <li><Link to="/portfolios" className="text-brand-surface-low/40 hover:text-brand-surface-low transition-all duration-300 font-sans text-[11px] uppercase tracking-[0.2em] font-medium">The Wedding Collection</Link></li>
              <li><Link to="/portfolios" className="text-brand-surface-low/40 hover:text-brand-surface-low transition-all duration-300 font-sans text-[11px] uppercase tracking-[0.2em] font-medium">Cinematic Editorials</Link></li>
              <li><Link to="/portfolios" className="text-brand-surface-low/40 hover:text-brand-surface-low transition-all duration-300 font-sans text-[11px] uppercase tracking-[0.2em] font-medium">Legacy Films</Link></li>
            </ul>
          </div>

          <div className="space-y-10">
            <h5 className="text-brand-surface-low font-sans tracking-[0.4em] text-[10px] uppercase font-bold">Studio</h5>
            <ul className="space-y-6">
              <li><a href="/#about" className="text-brand-surface-low/40 hover:text-brand-surface-low transition-all duration-300 font-sans text-[11px] uppercase tracking-[0.2em] font-medium">Ahmedabad HQ</a></li>
              <li><a href="/#quote" className="text-brand-surface-low/40 hover:text-brand-surface-low transition-all duration-300 font-sans text-[11px] uppercase tracking-[0.2em] font-medium">Investment</a></li>
              <li><a href="/#contact" className="text-brand-surface-low/40 hover:text-brand-surface-low transition-all duration-300 font-sans text-[11px] uppercase tracking-[0.2em] font-medium">Sustainability</a></li>
            </ul>
            <div className="pt-12 border-t border-white/5">
              <p className="text-brand-surface-low/20 text-[9px] uppercase tracking-widest font-bold leading-relaxed">
                © 2026 Freeze Your Moments. <br /> Handcrafted in Ahmedabad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
