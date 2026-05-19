import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Sparkles, BrainCircuit, Code, Film, Video, PenTool, ArrowRight } from 'lucide-react';
import manjuImage from '../assets/project-manju.png';
import manjuImage2 from '../assets/project-manju2.png';
import manjuImage3 from '../assets/project-manju3.png';
import popwordsImage from '../assets/project-popwords.png';
import popwordsImage2 from '../assets/project-popwords2.png';
import nutsaiImage from '../assets/project-nutsai.png';
import nutsaiImage2 from '../assets/project-nutsai2.png';
import lifepromptImage from '../assets/project-lifeprompt.png';
import seedplanImage from '../assets/project-seedplan.jpg';
import insightweaverImage from '../assets/project-insightweaver.png';
import insightweaverImage2 from '../assets/project-insightweaver-intro.png';
import anhehu7Image from '../assets/project-anhehu7.jpg';
import autumnImage from '../assets/project-autumn.png';
import dunhuangImage from '../assets/project-dunhuang.png';
import promptBuyImage from "../assets/project-prompt-buy.png";
import ProjectModal from './ProjectModal';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const aiProjects = [
    {
      title: "AI 短剧全自动生产工作流",
      subtitle: "01 AI 短剧全自动生产工作流",
      image: manjuImage,
      tags: ["并发生产", "工作流设计", "API驱动"],
      stats: [
        { label: '60+ 并发', value: '全自动生产' },
        { label: '1000+ 集', value: '日产能级' },
        { label: '阿里云智能剪辑', value: 'API驱动' },
      ],
      images: [manjuImage, manjuImage2, manjuImage3],
      description: "作为核心工作流产品经理，主导小说转短视频的三阶段全自动流水线设计。构建可复用的提示词工程体系与分镜规范，攻克 AI 角色一致性与场景连贯性痛点；精准抽象自动化剪辑与流水线容错机制，协同技术团队落地 60+ 并发、日产千集级的全自动生产线。",
      sections: [
        {
          title: '项目概览',
          content: (
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-white/60">•</span>
                <div>
                  <strong className="text-white/80">我的角色：</strong>工作流产品经理 / 核心参与者
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/60">•</span>
                <div>
                  <strong className="text-white/80">核心贡献：</strong>业务全链路流程解构、提示词工程搭建、产品需求输出
                </div>
              </div>
            </div>
          )
        },
        {
          title: '行业痛点与挑战',
          content: (
            <p>传统网文改漫剧高度依赖人工"关键词检索-配图-剪辑"的流式作业，产能低且成本高。要实现工业化量产，必须解决两大核心痛点：一是内容生产链路中 AI 角色跨分镜一致性与视听连贯性的业务难点；二是高并发量产时，大模型频繁遭遇合规拦截与生成失败导致的流水线卡死问题。</p>
          )
        },
        {
          title: '工作流规划与跨职能协同',
          content: (
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-white/60">1.</span>
                <div>
                  <strong className="text-white/80">全链路业务架构设计：</strong>主导规划"文本处理→分镜生成→视频合成"三阶段全自动流水线，将非标的漫剧制作解构为标准、可工程化落地的业务流程图，为研发团队提供系统框架。
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/60">2.</span>
                <div>
                  <strong className="text-white/80">产品需求抽象与技术协同：</strong>
                  <ul className="mt-2 space-y-2 ml-6">
                    <li>• 针对高并发下的拦截和失败痛点，明确提出并定义了"多轮违规检测与自动重试"的产品层容错需求，推动并协助技术同学完成该机制的代码落地，确保 60+ 并发下流水线稳定运行。</li>
                    <li>• 规划基于阿里云智能剪辑 API 的自动化编排方案，将业务侧的剪辑逻辑转化为清晰的技术实现指标。</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/60">3.</span>
                <div>
                  <strong className="text-white/80">AIGC 提示词工程与分镜规范化：</strong>独立将分镜描述拆解为"环境-角色-动作-机位"原子化结构，构建高复用性的提示词模版库，从产品前端策略上攻克 AI 画面一致性难点，显著提升成片质量。
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "精品漫剧 · SOP & 团队管理",
      subtitle: "02 精品漫剧 · SOP & 团队管理",
      image: manjuImage2,
      tags: ["团队管理", "成本控制", "商业闭环"],
      stats: [
        { label: '10w+', value: '月营收破万元' },
        { label: '35%', value: '极致成本控制' },
        { label: '50+ 人', value: '众包漏斗管理' },
      ],
      images: [manjuImage2, manjuImage3],
      description: "作为项目负责人，将非标精品漫剧制作转化为标准化 SOP，通过 Vibe Coding 快速手搭原型验证内部自动化工具需求。从零搭建招聘、薪酬与绩效体系，管理 50+ 人众包漏斗，实现人力与 Token 成本控制在 35%，部门月营收突破 10 万元，项目获江苏省数据局官方报道。",
      sections: [
        {
          title: '项目概览',
          content: (
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-white/60">•</span>
                <div>
                  <strong className="text-white/80">我的角色：</strong>AIGC 项目负责人 / 团队管理者
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/60">•</span>
                <div>
                  <strong className="text-white/80">核心成效：</strong>统筹非标内容商业闭环，团队月产能 500+ 分钟，综合成本降低至 35%
                </div>
              </div>
            </div>
          )
        },
        {
          title: '业务背景',
          content: (
            <p>非标的"精品漫剧"往往极度依赖创作者的个人审美，难以像工业品一样复制。团队初期面临制作周期长、人效低、Token 消耗不可控、多工种协作混乱等痛点，亟需从"手工作坊"转型为"标准内容工厂"。</p>
          )
        },
        {
          title: 'SOP 落地与技术赋能',
          content: (
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-white/60">1.</span>
                <div>
                  <strong className="text-white/80">研发内部生产工具：</strong>作为项目负责人，持续洞察团队效率瓶颈，定义了"角色多视角批量生成"、"分镜头多景别/机位快速切换"等内部自动化工具需求。通过 Vibe Coding 快速手搭原型验证后，推动技术侧正式落地，大幅解放原画与剪辑人效。
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/60">2.</span>
                <div>
                  <strong className="text-white/80">跨职能团队组织架构：</strong>从零搭建涵盖招聘、薪酬、绩效的全套管理体系，统筹管理 50+ 人规模团队，将原本模糊的"漫剧制作"拆解为标准化工业流水线。
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/60">3.</span>
                <div>
                  <strong className="text-white/80">极致成本控制与闭环：</strong>上线 3 部精品漫剧与 9 部 PPT 漫，通过精准的提示词截断和流程调优，将"人力 + Token"的综合生产成本死死压在 35% 以内，月营收迅速突破 10 万元，实现商业闭环。
                </div>
              </div>
            </div>
          )
        },
        {
          title: '行业认可',
          content: (
            <p>因在 AIGC 能力边界（风格迁移、动作迁移、AI 真人效果）的深度探索与商业落地成果，以公司 AIGC 项目负责人身份接受<strong className="text-white/80">江苏省数据局官方报道</strong>。</p>
          )
        }
      ]
    },
    {
      title: "PopWords · 泡泡单词 App",
      subtitle: "03 PopWords · AI 词汇 App",
      image: popwordsImage,
      tags: ["产品0-1", "App上架", "Vibecoding"],
      stats: [
        { label: '产品 0-1', value: '全链路主导' },
        { label: '80%', value: '内容制作效率提升' },
        { label: 'Android', value: '安卓上架' },
      ],
      images: [popwordsImage, popwordsImage2],
      description: "作为产品负责人，主导面向 K-12 备考市场的 AI 情境记忆卡 App 从创意、调研到上架的全链路落地。针对 C 端内容生产瓶颈，独立设计并实现两个 AI 辅助生产脚本：自动化提取影视素材（如《疯狂动物城》）并批量输出例句、配图与语音合成。同时全套操盘 UI/UX 设计与 IP 角色声音克隆。项目成功在安卓应用商城上架。",
      sections: [
        {
          title: '项目概览',
          content: (
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-white/60">•</span>
                <div>
                  <strong className="text-white/80">我的角色：</strong>产品负责人 / Creator
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/60">•</span>
                <div>
                  <strong className="text-white/80">核心成效：</strong>实现 0-1 完整上架闭环，利用 AI 脚本提升内容制作效率 80%
                </div>
              </div>
            </div>
          )
        },
        {
          title: '核心痛点',
          content: (
            <p>针对 K-12 英语备考市场，传统的背单词 App 内容呆板、缺乏情境感。然而，若通过人工去电影/动画里寻找对应单词的情境片段，制作成本高上天，根本无法满足庞大的词库内容供给。</p>
          )
        },
        {
          title: '0-1 产品路径与 AI 脚本破局',
          content: (
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-white/60">1.</span>
                <div>
                  <strong className="text-white/80">用户与竞品研究：</strong>深度主导竞品全维度拆解，开展多场英语教学专家深度访谈，确立以"影视原声 AI 情境记忆卡"为核心的差异化产品路线。
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/60">2.</span>
                <div>
                  <strong className="text-white/80">独立开发 AI 脚本降本增效（效率提升 80%）：</strong>
                  <ul className="mt-2 space-y-2 ml-6">
                    <li>• <strong>脚本①：</strong>独立编写自动化提取脚本，直接从《疯狂动物城》、《功夫熊猫》等优质动漫画流中精准捕捉目标词汇的音视频片段。</li>
                    <li>• <strong>脚本②：</strong>搭建批量内容加工流，实现例句生成、配图匹配及高质量语音合成的自动化输出，彻底解决 C 端 App 刚需的内容库冷启动问题。</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/60">3.</span>
                <div>
                  <strong className="text-white/80">全链路体验打磨：</strong>独立完成 UI/UX 全套高保真设计，并利用 AI 声音克隆技术打造定制化的 IP 角色伴读音频。项目最终成功在安卓应用商城上架。
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "坚果 AI 学习平台",
      subtitle: "04 坚果 AI 学习平台",
      image: nutsaiImage,
      tags: ["AI教育", "SaaS平台", "敏捷开发"],
      stats: [
        { label: '清华零一学院', value: '联合推出' },
        { label: '400+ 份', value: '课程月销' },
        { label: 'Coze & Cursor', value: '快速敏捷开发' },
      ],
      images: [nutsaiImage, nutsaiImage2],
      description: "转行 AI 领域的 SaaS 平台探索实践。深度参与多功能模块的敏捷搭建与产品验证：基于 Coze 工作流搭建全自动 AI 编程教学模块；运用 Cursor/Bolt.new 进行无限刷题备考模块的前端开发；设计引导式课堂问答助手及多学科快捷指令，并主导 AI 互动小说的原型验证与策略输出。",
      sections: [
        {
          title: '项目概览',
          content: (
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-white/60">•</span>
                <div>
                  <strong className="text-white/80">我的角色：</strong>核心参与者 / 模块 PM
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/60">•</span>
                <div>
                  <strong className="text-white/80">核心成效：</strong>联合清华零一学院推出，负责多个核心 SaaS 功能模块的敏捷开发与快速验证
                </div>
              </div>
            </div>
          )
        },
        {
          title: '项目背景',
          content: (
            <p>在转行 AI 产品的初期探索阶段，面对快速迭代的"AI + 教育"浪潮，项目旨在通过敏捷开发，探索如何利用大模型和低代码工具重构传统在线教育的交互体验。</p>
          )
        },
        {
          title: '核心模块敏捷搭建与验证',
          content: (
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-white/60">1.</span>
                <div>
                  <strong className="text-white/80">AI 编程教学模块：</strong>利用 Coze（扣子）工作流深度定制全自动 AI 编程教学助手，实现低门槛的互动式代码引导。
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/60">2.</span>
                <div>
                  <strong className="text-white/80">无限刷题备考系统：</strong>使用 Cursor 与 Bolt.new 进行前端界面的快速开发与敏捷部署，接入智能题库，实现动态引导式错题重刷。
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/60">3.</span>
                <div>
                  <strong className="text-white/80">智能教学助手与指令设计：</strong>设计并优化了涵盖"学语文/学英语"在内的一系列高性能提示词快捷指令，搭建实效动态引导式课堂问答助手。
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/60">4.</span>
                <div>
                  <strong className="text-white/80">互动叙事探索：</strong>主导 AI 互动小说的全链路原型验证，输出深度竞品分析与产品策略文档，助推平台课程实现月销 400+ 份。
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "InsightWeaver · AI 辅助拆解与创作工具",
      subtitle: "05 InsightWeaver · AI 创意工具",
      image: insightweaverImage,
      tags: ["效率工具", "文案生产", "算法创新"],
      stats: [
        { label: '滑动窗口', value: '切片算法破局' },
        { label: '三步流水线', value: '人机协作模式' },
      ],
      images: [insightweaverImage, insightweaverImage2],
      description: "打破传统\"黑盒写作\"模式的创意效率工具。设计\"素材提取→人工组合→风格化生成\"的三步流水线，支持树状思维导图式纵深拓展。针对长文本大模型\"中间迷失\"与深入拓展失焦的行业难点，创新实现带重叠的滑动窗口切片算法与局部上下文定位（sourceContext），让长文本并发提取与下钻精准度实现质的突破。",
      sections: [
        {
          title: '项目概览',
          content: (
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-white/60">•</span>
                <div>
                  <strong className="text-white/80">我的角色：</strong>完全独立开发者 / Full-Stack Creator
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/60">•</span>
                <div>
                  <strong className="text-white/80">核心成效：</strong>打破"黑盒写作"，全栈操盘，用切片算法和立体思维树彻底解决长文本生成失焦痛点
                </div>
              </div>
            </div>
          )
        },
        {
          title: '行业痛点：黑盒写作与大模型迷失',
          content: (
            <p>市面上大多数写作辅助工具采用"长文本输入 -&gt; 直接输出结果"的粗暴模式。这种"黑盒模式"不仅让用户失去了对文章走向的控制权，更致命的是，大模型在面对上万字的长文本输入时，存在严重的"中间迷失（Lost in the Middle）"现象，极易漏掉极其核心的底层细节，给出的总结往往干瘪无用。</p>
          )
        },
        {
          title: '核心创新与全栈技术实现（完全独立开发）',
          content: (
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-white/60">1.</span>
                <div>
                  <strong className="text-white/80">人机协作三步流水线：</strong>将创作解构为"原子素材提取 → 人工自由拖拽组合 → 注入灵魂风格化生成"。AI 甘当绿叶打下手，人类做主编把控走向。
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/60">2.</span>
                <div>
                  <strong className="text-white/80">滑动窗口切片算法（解长文本迷失）：</strong>创新实现了带重叠区的滑动窗口切片算法。系统以 3000 字为基础块进行切分，并在块与块之间保留 300 字的重叠区防止断句。并发提取后，在全局层进行高效合并去重，确保万字长文"无死角"提取。
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/60">3.</span>
                <div>
                  <strong className="text-white/80">立体思维树与精准上下文定位（解下钻失焦）：</strong>支持用户针对感兴趣的观点进行树状思维导图式的无限纵深拓展。为了防止深入下钻时因携带全文导致大模型失焦，第一层切分时系统会保留 <code className="text-white/80 bg-white/10 px-1 rounded">sourceContext</code>（源上下文标记），向下深入时仅携带局部上下文，让挖掘二级、三级子观点时的精准度实现质的突破。
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/60">4.</span>
                <div>
                  <strong className="text-white/80">全栈构建与调优：</strong>内置并支持自定义保存多套高表现力的人设提示词库。独立完成了工具前端界面、后端逻辑搭建与全链调试。
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ];

  const aigcProjects = [
    { 
      title: "《人生提示词》", 
      role: "导演", 
      desc: "像素风美学探索，探索AIGC自动化帧生成", 
      image: lifepromptImage,
      icon: <PenTool size={16} />,
      link: "https://cropgif.net/videos/1779195089536-cac103e5-9c5a-45ce-9053-b6cb5b9b76c8.mp4"
    },
    { 
      title: "《安和路7号》", 
      role: "主创", 
      desc: "AI真人短剧主创，完整内容产品设计", 
      image: anhehu7Image,
      icon: <Film size={16} />,
      link: "https://cropgif.net/videos/1779197812257-0116ba92-8cc6-41c4-a9ff-511fc706c499.mp4"
    },
    { 
      title: "《秋分》", 
      role: "主创团队", 
      desc: "罕见病公益短片编剧，美术设计，制作执行", 
      image: autumnImage,
      icon: <Video size={16} /> 
    },
    { 
      title: "《梦回敦煌》", 
      role: "Demo 主创", 
      desc: "AI宣传片AIGC风格迁移与AI真人效果", 
      image: dunhuangImage,
      icon: <Sparkles size={16} />,
      link: "https://cropgif.net/videos/1779193333265-0df4bb3a-e44d-4060-832f-a542fec8eac8.mp4"
    },
    { 
      title: "《什么提示词值得花钱买？》", 
      role: "科普作者", 
      desc: "AI科普视频，解析付费提示词的价值", 
      image: promptBuyImage,
      icon: <Video size={16} />,
      link: "https://cropgif.net/videos/1779194384874-ffe7b0eb-bfce-4b5f-9b69-63b8396ff5be.mp4"
    }
  ];

  const filmProject = {
    title: "《种子计划》",
    role: "执行制片",
    desc: "中国人寿品牌宣传片",
    image: seedplanImage
  };

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="portfolio" className="space-y-20 py-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <div className="flex items-center gap-6 mb-16">
           <h2 className="text-xl font-thin tracking-[0.3em] uppercase glow-text text-white/80">项目作品集</h2>
           <div className="flex-1 thin-divider"></div>
        </div>
        
        <div className="space-y-12 mb-24">
          {aiProjects.map((proj, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div 
                  className={`glass-card rounded-3xl overflow-hidden flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} group hover:-translate-y-1 transition-transform duration-500 cursor-none`}
                  onClick={() => handleProjectClick(proj)}
                >
                  <div className={`md:w-[45%] order-2 md:order-${isEven ? '2' : '1'}`}>
                    <div className="p-8 md:p-10 h-full flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-[10px] font-mono text-white/30 tracking-[0.2em]">{proj.subtitle.split(' ')[0]}</span>
                        <div className="w-8 h-px bg-white/10"></div>
                      </div>
                      <h3 className="text-xl font-light text-white/90 tracking-widest mb-4">{proj.title}</h3>
                      
                      <div className="grid grid-cols-3 gap-3 mb-6">
                        {proj.stats.map((stat, sIdx) => (
                          <div key={sIdx} className="text-center p-3 bg-white/5 rounded-xl">
                            <div className="text-sm font-light text-white/80 mb-1">{stat.label}</div>
                            <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.1em]">{stat.value}</div>
                          </div>
                        ))}
                      </div>
                      
                      <p className="text-[13px] text-white/50 font-100 leading-relaxed tracking-wide">
                        {proj.description}
                      </p>
                      
                      <div className="mt-6 flex items-center gap-2 text-white/40 text-xs tracking-[0.1em] group-hover:text-white/70 transition-colors">
                        查看详情 <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                  
                  <div className={`md:w-[50%] h-56 md:h-auto order-1 md:order-${isEven ? '1' : '2'} overflow-hidden`}>
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
             <h3 className="text-[12px] font-thin tracking-[0.3em] uppercase text-white/50">精选 AIGC 创作</h3>
             <div className="w-12 h-px bg-white/20"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aigcProjects.map((proj, idx) => (
              <a 
                key={idx} 
                href={proj.link || '#'} 
                target={proj.link ? '_blank' : '_self'} 
                rel="noreferrer"
                className="glass-card p-5 rounded-2xl border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1 duration-300 block"
              >
                {proj.image && (
                  <div className="h-32 overflow-hidden rounded-xl mb-4">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity" />
                  </div>
                )}
                <div className="flex items-center gap-3 mb-3 text-white/80">
                  <div className="text-white/30">{proj.icon}</div>
                  <h4 className="font-light tracking-widest text-sm">{proj.title}</h4>
                </div>
                <div className="text-[10px] font-mono text-white/30 mb-3 uppercase tracking-[0.2em] border-b border-white/10 pb-2 inline-block">
                  {proj.role}
                </div>
                <p className="text-[12px] text-white/40 font-100 leading-relaxed tracking-wide">{proj.desc}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-4 mb-10">
             <h3 className="text-[12px] font-thin tracking-[0.3em] uppercase text-white/50">影视制片</h3>
             <div className="w-12 h-px bg-white/20"></div>
          </div>
          <div className="glass-card rounded-3xl overflow-hidden flex flex-col md:flex-row group hover:-translate-y-1 transition-transform duration-500">
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img src={filmProject.image} alt={filmProject.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <div className="text-[10px] font-mono text-white/30 mb-3 uppercase tracking-[0.2em]">
                {filmProject.role}
              </div>
              <h4 className="text-2xl font-light text-white/90 tracking-widest mb-4">{filmProject.title}</h4>
              <p className="text-[14px] text-white/40 font-100 leading-relaxed tracking-wide">{filmProject.desc}</p>
            </div>
          </div>
        </div>

      </motion.div>

      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        project={selectedProject}
      />
    </section>
  );
}