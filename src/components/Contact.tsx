import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MousePointerClick, Copy, Check } from 'lucide-react';

function Toast({ message, show }: { message: string; show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full text-sm font-light tracking-wider text-white/80 z-50 pointer-events-none"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.1), 0 0 40px rgba(255, 255, 255, 0.05)'
          }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Contact() {
  const [toastVisible, setToastVisible] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [wechatCopied, setWechatCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('969173501@qq.com');
      setEmailCopied(true);
      setToastVisible(true);
      
      setTimeout(() => {
        setEmailCopied(false);
      }, 2000);

      setTimeout(() => {
        setToastVisible(false);
      }, 2500);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  const copyWechat = async () => {
    try {
      await navigator.clipboard.writeText('15827302696');
      setWechatCopied(true);
      setToastVisible(true);
      
      setTimeout(() => {
        setWechatCopied(false);
      }, 2000);

      setTimeout(() => {
        setToastVisible(false);
      }, 2500);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  return (
    <>
      <Toast message="已复制到剪贴板" show={toastVisible} />
      
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
            <a 
              href="mailto:969173501@qq.com" 
              className="flex items-center justify-center gap-3 p-6 text-sm font-light tracking-widest text-white/60 hover:text-white glass-card glow-button rounded-2xl transition-all duration-300 cursor-none group"
            >
              969173501@qq.com
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  copyEmail();
                }}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-all duration-200 cursor-none"
                title="复制邮箱"
              >
                {emailCopied ? (
                  <Check size={14} className="text-white/80 opacity-100 transition-opacity" />
                ) : (
                  <Copy size={14} className="text-white/40 group-hover:text-white/80 opacity-50 group-hover:opacity-100 transition-all" />
                )}
              </button>
            </a>
            
            <div className="flex items-center justify-center gap-3 p-6 text-sm font-light tracking-widest text-white/60 glass-card rounded-2xl cursor-none group">
              15827302696（微信同号）
              <button 
                onClick={copyWechat}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-all duration-200 cursor-none"
                title="复制手机号"
              >
                {wechatCopied ? (
                  <Check size={14} className="text-white/80 opacity-100 transition-opacity" />
                ) : (
                  <Copy size={14} className="text-white/40 group-hover:text-white/80 opacity-50 group-hover:opacity-100 transition-all" />
                )}
              </button>
            </div>

            <a href="https://www.image2url.com/r2/default/documents/1788514948461-9be056a2-766c-4166-8da9-64090ab3e8d1.pdf" target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center justify-center gap-3 p-5 text-[11px] uppercase font-mono tracking-[0.3em] text-white/80 bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 rounded-full transition-all duration-300 group cursor-none glow-button w-full">
              在线简历 <MousePointerClick size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
