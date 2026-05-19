import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Philosophy() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="glass-card p-16 md:p-24 rounded-[3rem] text-center relative overflow-hidden flex flex-col items-center"
      >
        <Quote className="text-white/10 mb-10" size={48} strokeWidth={0.5} />
        
        <div className="space-y-12 relative z-10 w-full">
          <h2 className="text-2xl md:text-3xl font-thin text-white/60 tracking-[0.15em] leading-[1.6]">
            我确信想要做这样的事：<br className="hidden md:block"/>
            <span className="text-white/90 glow-text font-light mt-4 inline-block">
              创造有价值的、有用的东西。
            </span>
          </h2>
          
          <div className="thin-divider w-24 mx-auto"></div>
          
          <p className="text-lg text-white/40 max-w-2xl mx-auto font-100 leading-[2] tracking-wide">
            AI 把创造东西的门槛变低了。<br/>
            不论是小工具还是传媒作品，<br className="md:hidden" />
            快速用 AI 把想法实现。<br/>
            <span className="text-white/60 italic mt-6 inline-block tracking-[0.2em] text-sm">
              "用 AI 为自己、为别人做点什么。"
            </span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
