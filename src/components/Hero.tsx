import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import profileImage from '../assets/profile.png';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-end items-center pt-32 pb-20 px-6 gap-8 md:gap-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="flex-1 max-w-xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-mono text-white/50 mb-10 tracking-[0.2em] relative group cursor-none">
          <Sparkles size={12} className="text-white/40 group-hover:text-white/80 transition-colors" />
          <span className="group-hover:text-white/90 transition-colors">AI 产品经理 & AIGC 创作者</span>
        </div>
        <h1 className="text-5xl md:text-[5rem] font-thin tracking-[0.25em] mb-8 text-white/80 leading-tight">
          H<span className="tracking-[0.5em]">ihi</span>，我是<span className="font-extralight glow-text text-white">雨婷</span>
        </h1>
        <p className="text-lg md:text-xl text-white/40 max-w-lg font-thin mb-10 tracking-[0.25em] uppercase">
          23岁<span className="mx-4 font-light opacity-50">|</span>中传MJC在读<span className="mx-4 font-light opacity-50">|</span>2027年毕业
        </p>
        <div className="flex items-center gap-8 mb-14">
           <div className="w-24 h-[0.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
           <p className="text-base md:text-lg text-white/20 font-[100] tracking-[0.3em] italic">
             "讲有意义的故事，做有温度的产品。"
           </p>
        </div>
        
        <div className="flex gap-4">
          <a href="#portfolio" className="glass-card glow-button outline-button px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 text-xs uppercase tracking-[0.3em] font-extralight text-white/70 hover:text-white cursor-none">
            探索作品集 <ArrowRight size={14} className="opacity-50" />
          </a>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        className="flex-1 flex justify-end items-end"
        style={{ transform: 'translate(8%, 5%)' }}
      >
        <div className="relative">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden glass-card p-1.5">
            <img 
              src={profileImage} 
              alt="雨婷" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/15 to-blue-500/15 blur-xl"></div>
          <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/15 to-purple-500/15 blur-lg"></div>
        </div>
      </motion.div>
    </section>
  );
}
