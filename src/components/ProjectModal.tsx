import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    subtitle?: string;
    tags: string[];
    stats?: { label: string; value: string }[];
    sections: { title: string; content: React.ReactNode }[];
    images?: string[];
  } | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setActiveImageIndex(0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current || !project?.images || project.images.length <= 1) return;
      
      const scrollTop = contentRef.current.scrollTop;
      const scrollHeight = contentRef.current.scrollHeight - contentRef.current.clientHeight;
      const progress = scrollTop / scrollHeight;
      const imageIndex = Math.floor(progress * (project.images.length - 1));
      setActiveImageIndex(imageIndex);
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll);
      return () => contentElement.removeEventListener('scroll', handleScroll);
    }
  }, [project?.images]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden glass-card rounded-3xl flex flex-col lg:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-none"
            >
              <X size={20} className="text-white/60" />
            </button>

            <div 
              ref={contentRef}
              className="lg:w-[55%] p-8 md:p-10 overflow-y-auto max-h-[90vh] lg:max-h-[calc(90vh-2rem)]"
            >
              <div className="mb-8">
                {project.subtitle && (
                  <p className="text-xl font-light text-white/60 tracking-wider">{project.subtitle}</p>
                )}
              </div>

              {project.stats && project.stats.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="glass-card p-3 rounded-xl text-center">
                      <div className="text-lg font-light text-white/80 mb-1">{stat.label}</div>
                      <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.15em]">{stat.value}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-8">
                {project.sections.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-sm font-light text-white/60 tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                      <span className="w-8 h-px bg-white/20"></span>
                      {section.title}
                    </h3>
                    <div className="text-[14px] text-white/50 font-100 leading-[2] tracking-wide pl-11">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-[45%] bg-[#0a0a0a] p-6 flex flex-col justify-center">
              <div className="relative">
                {project.images && project.images.length > 0 && (
                  <motion.div
                    key={activeImageIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-[12px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
                    style={{
                      boxShadow: '0 8px 32px rgba(0,0,0,0.6), inset 0 2px 4px rgba(0,0,0,0.3)'
                    }}
                  >
                    <img 
                      src={project.images[activeImageIndex]} 
                      alt="" 
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                )}
                
                {project.images && project.images.length > 1 && (
                  <div className="flex justify-center gap-2 mt-4">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === activeImageIndex 
                            ? 'bg-white/80 w-6' 
                            : 'bg-white/30 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}