import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import profileImage from '../assets/profile-new.jpg';
import ImageViewer from './ImageViewer';

export default function Hero() {
  const [viewerOpen, setViewerOpen] = useState(false);
  
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center pt-28 pb-20 px-6 md:px-12 gap-12 md:gap-20 max-w-[1440px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="flex-[3] max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-mono text-white/50 mb-8 tracking-[0.2em] relative group cursor-none">
          <Sparkles size={12} className="text-white/40 group-hover:text-white/80 transition-colors" />
          <span className="group-hover:text-white/90 transition-colors">AI 产品经理 & AIGC 创作者</span>
        </div>
        <p className="text-[10px] text-white/30 uppercase tracking-[0.55em] mb-5">Independent product thinker · visual storyteller</p>
        <h1 className="text-4xl md:text-6xl font-thin tracking-[0.2em] mb-7 text-white/85 leading-tight">
          H<span className="tracking-[0.5em]">ihi</span>，我是<span className="font-extralight glow-text text-white">雨婷</span>
        </h1>
        <p className="text-sm md:text-base text-white/45 max-w-xl font-thin mb-9 tracking-[0.22em] uppercase">
          23岁<span className="mx-4 font-light opacity-50">|</span>中传MJC在读<span className="mx-4 font-light opacity-50">|</span>2027年毕业
        </p>
        <div className="flex items-center gap-5 mb-12">
           <div className="w-16 h-[0.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
           <p className="text-sm md:text-base text-white/45 font-[100] tracking-[0.25em] italic">
             "讲有趣的故事，做有温度的产品。"
           </p>
        </div>
        
        <div className="flex gap-4">
          <a href="#portfolio" className="glass-card glow-button outline-button px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 text-xs uppercase tracking-[0.3em] font-extralight text-white/70 hover:text-white cursor-none">
            探索作品集 <ArrowRight size={14} className="opacity-50" />
          </a>
          <a href="https://www.image2url.com/r2/default/documents/1786535693382-fc55c883-8605-4902-8f2e-ba1deb847546.pdf" target="_blank" rel="noopener noreferrer" className="glass-card outline-button px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 text-xs uppercase tracking-[0.3em] font-extralight text-white/70 hover:text-white cursor-none">
            在线简历
          </a>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        className="flex-1 w-full md:max-w-[430px] flex justify-center md:justify-end items-center"
      >
        <div className="relative w-full max-w-[390px]">
          <div className="absolute -inset-4 rounded-[32px] border border-white/10 rotate-3 pointer-events-none"></div>
          <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden glass-card p-2 cursor-none shadow-2xl shadow-black">
            <img 
              src={profileImage} 
              alt="雨婷" 
              className="w-full h-full object-cover rounded-[22px] saturate-[0.9] contrast-[1.02]"
              style={{ objectPosition: '34% center' }}
              onClick={() => setViewerOpen(true)}
            />
            <div className="absolute inset-x-7 bottom-7 flex items-end justify-between text-[9px] uppercase tracking-[0.28em] text-white/65">
              <span>雨婷 / 2026</span>
              <span className="text-right">Create<br />with warmth</span>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400/20 to-blue-500/10 blur-3xl"></div>
          <div className="absolute -top-8 -left-10 w-28 h-28 rounded-full bg-gradient-to-br from-amber-300/15 to-purple-500/10 blur-3xl"></div>
        </div>
      </motion.div>
      
      <ImageViewer 
        isOpen={viewerOpen} 
        onClose={() => setViewerOpen(false)} 
        imageSrc={profileImage}
      />
    </section>
  );
}
