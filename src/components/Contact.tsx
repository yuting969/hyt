import { motion } from 'motion/react';
import { MousePointerClick } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="thin-divider w-full mb-32 opacity-50"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-16 max-w-2xl mx-auto"
      >
        <div>
          <h2 className="text-2xl font-thin tracking-[0.4em] uppercase glow-text mb-6">联系我</h2>
          <p className="text-white/30 font-100 tracking-[0.2em] text-[13px] uppercase">
            Let's build something <span className="italic text-white/60 lowercase">amazing</span>.
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          <a href="mailto:t969173501@gmail.com" className="flex items-center justify-center p-6 text-sm font-light tracking-widest text-white/60 hover:text-white glass-card glow-button rounded-2xl transition-all duration-300 cursor-none">
            t969173501@gmail.com
          </a>
          
          <div className="flex items-center justify-center p-6 text-sm font-light tracking-widest text-white/60 glass-card rounded-2xl cursor-default">
            WeChat: 15827302696
          </div>

          <button className="mt-8 flex items-center justify-center gap-3 p-5 text-[11px] uppercase font-mono tracking-[0.3em] text-white/80 bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 rounded-full transition-all duration-300 group cursor-none glow-button w-full">
            在线简历 <MousePointerClick size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
