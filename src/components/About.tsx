import { motion } from 'motion/react';

export default function About() {
  const stories = [
    {
      title: '起点',
      content: '广告界"优等生"<span class="mx-2 opacity-30">/</span>211专业第一、国奖得主。从片场制助到执行制片，深扎传统广告与影视行业一线。',
      year: ''
    },
    {
      title: '2024 转折',
      content: '一次AI广告项目，让我看到技术重塑表达的可能。',
      year: ''
    },
    {
      title: '跨越',
      content: '辞去高薪制片工作，从零学习编程，加入清华系AI初创公司担任 AI 产品经理。',
      year: ''
    },
    {
      title: '我的超能力',
      content: '懂用户、懂内容、懂创作者的AI产品经理。一年积累多项0-1产品经验，带领部门实现月营收10万。',
      year: ''
    },
    {
      title: '希望',
      content: '做 AI 时代的 Builder，也做连接技术的 Communicator。',
      year: ''
    }
  ];

  return (
    <section id="about" className="space-y-16 py-10">
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-xl font-thin tracking-[0.3em] uppercase glow-text text-white/80">关于我</h2>
        <div className="flex-1 thin-divider"></div>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-500"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-[1px] h-4 bg-white/50"></div>
                <h3 className="text-sm font-light text-white/80 tracking-[0.2em] uppercase">{story.title}</h3>
              </div>
              <p className="text-white/60 leading-[1.8] font-100 text-[14px] tracking-wide" dangerouslySetInnerHTML={{ __html: story.content }} />
            </motion.div>
          ))}
        </div>

        <div className="-mt-4">
          <Timeline />
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const events = [
    { date: '2023.07–2023.09', title: '艾菲奖（全球实效营销奖项）', desc: '项目助理 · 第一次实习', milestone: false, type: 'work' },
    { date: '2023.12–2024.12（寒暑假）', title: 'Creavidia（广告代理）', desc: '执行制片', milestone: false, type: 'work' },
    { date: '2025.01', title: '无界矩阵 (清华系AI初创)', desc: 'AI产品经理', milestone: true, type: 'work' },
    { date: '2025.06', title: '本科毕业', desc: '东北师范大学', milestone: true, type: 'school' },
    { date: '2025.08', title: '第一个APP上线各大安卓应用商城', desc: '', milestone: false, type: 'milestone' },
    { date: '2025.09', title: '研究生入学', desc: '中国传媒大学 (MJC)', milestone: true, type: 'school' },
    { date: '2025.11', title: '第一次成为部门小leader', desc: '漫剧业务负责人', milestone: false, type: 'milestone' },
    { date: '2026.01', title: '部门月营收破10万', desc: '', milestone: false, type: 'milestone' },
    { date: '2026.02', title: '结束为期一年的AI初创实习，新的开始', desc: '', milestone: false, type: 'work' },
  ];

  return (
    <div className="relative py-4">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 thin-divider-vertical"></div>
      <div className="space-y-8">
        {events.map((event, idx) => {
          const isRight = event.type === 'work' || event.type === 'milestone';
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`flex items-center justify-between w-full ${isRight ? '' : 'flex-row-reverse'}`}
            >
               <div className="w-[45%]"></div>
               <div className="relative z-10 flex items-center justify-center">
                 <div className={`w-2 h-2 rounded-full ${event.milestone ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-white/20'}`}></div>
               </div>
               <div className={`w-[45%] ${isRight ? 'text-left pl-6' : 'text-right pr-6'}`}>
                 <div className="text-[9px] font-mono text-white/60 mb-1.5 uppercase tracking-[0.2em]">{event.date}</div>
                 <div className={`text-xs font-light mb-1 tracking-wide ${event.milestone ? 'text-white/90 glow-text' : 'text-white/70'}`}>
                   {event.type === 'milestone' && <span className="inline-block w-4 h-4 mr-2 text-white/60" style={{ textShadow: '0 0 6px rgba(255,255,255,0.5)' }}>✦</span>}
                   {event.title}
                 </div>
                 {event.desc && <div className="text-[11px] text-white/40 font-100 leading-relaxed tracking-wider">{event.desc}</div>}
               </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}