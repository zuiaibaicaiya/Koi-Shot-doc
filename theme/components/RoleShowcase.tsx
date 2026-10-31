import { useLang } from '@rspress/core/runtime';

interface RoleItem {
  icon: string;
  role: string;
  en: string;
  features: string[];
  scene: string;
}

const zh: { intro: string; roles: RoleItem[] } = {
  intro: '六类典型用户，各自用哪几个核心功能？一眼对照。',
  roles: [
    {
      icon: '🎨',
      role: '设计师',
      en: 'Designers',
      features: ['贴图', '标注', '截图'],
      scene: '把模型和 UI 参考贴在桌面置顶对照，用箭头与序号轻松标注设计反馈。',
    },
    {
      icon: '💻',
      role: '开发者',
      en: 'Developers',
      features: ['截图', 'GIF 录制', 'MP4 录屏'],
      scene:
        '将 API 文档、日志和报错贴在屏幕上边看边写；用截图、GIF 或带声音的 MP4 录屏捕捉可复现的 Bug。',
    },
    {
      icon: '📊',
      role: '产品经理',
      en: 'Product Managers',
      features: ['OCR', '长截图', '表格识别'],
      scene:
        '记录用户流程和反馈线程：长截图保存完整页面，OCR 提取图内文字，表格截图直接转 Excel。',
    },
    {
      icon: '🎧',
      role: '客户支持',
      en: 'Customer Support',
      features: ['标注', 'GIF 录制', 'MP4 录屏'],
      scene:
        '逐步记录问题处理过程，框选高亮屏幕区域，用 GIF 或带麦克风讲解的录屏给用户直观引导。',
    },
    {
      icon: '📝',
      role: '作家与研究人员',
      en: 'Writers & Researchers',
      features: ['贴图', 'OCR'],
      scene:
        '用 OCR 从图片和扫描件中提取引文，写作时把参考内容贴图钉在桌面随手对照。',
    },
    {
      icon: '🎓',
      role: '教育者与培训师',
      en: 'Educators & Trainers',
      features: ['截图', '标注', 'MP4 录屏'],
      scene:
        '制作带标注的教程和演示课件：序号步骤图讲清结构，需要讲解时用录屏录下完整操作。',
    },
  ],
};

const en: typeof zh = {
  intro:
    'Six typical user profiles — which core features do they rely on? Compare at a glance.',
  roles: [
    {
      icon: '🎨',
      role: '设计师',
      en: 'Designers',
      features: ['Pin', 'Annotate', 'Capture'],
      scene:
        'Pin models and UI references on the desktop and mark up design feedback with arrows and badges.',
    },
    {
      icon: '💻',
      role: '开发者',
      en: 'Developers',
      features: ['Capture', 'GIF', 'MP4 recording'],
      scene:
        'Keep API docs, logs and errors on screen while coding; capture bugs with a screenshot, GIF or narrated MP4.',
    },
    {
      icon: '📊',
      role: '产品经理',
      en: 'Product Managers',
      features: ['OCR', 'Long capture', 'Table recognition'],
      scene:
        'Track user flows and feedback threads — full pages via long capture, text via OCR, and table screenshots straight to Excel.',
    },
    {
      icon: '🎧',
      role: '客户支持',
      en: 'Customer Support',
      features: ['Annotate', 'GIF', 'MP4 recording'],
      scene:
        'Document issues step by step, highlight screen areas, and guide users with a GIF or a narrated recording.',
    },
    {
      icon: '📝',
      role: '作家与研究人员',
      en: 'Writers & Researchers',
      features: ['Pin', 'OCR'],
      scene:
        'Extract quotes with OCR from images and scans; pin visual notes beside your writing.',
    },
    {
      icon: '🎓',
      role: '教育者与培训师',
      en: 'Educators & Trainers',
      features: ['Capture', 'Annotate', 'MP4 recording'],
      scene:
        'Create annotated tutorials and demos — numbered screenshots explain structure, recordings explain the flow.',
    },
  ],
};

export function RoleShowcase({ showIntro = true }: { showIntro?: boolean }) {
  const lang = useLang();
  const data = lang === 'zh' ? zh : en;
  return (
    <div className="koishot-roles">
      {showIntro && <p className="koishot-roles__intro">{data.intro}</p>}
      <div className="koishot-roles__grid">
        {data.roles.map((item) => (
          <div key={item.en} className="koishot-roles__card">
            <div className="koishot-roles__head">
              <span className="koishot-roles__icon">{item.icon}</span>
              <span className="koishot-roles__name">
                {lang === 'zh' ? item.role : item.en}
              </span>
            </div>
            <div className="koishot-roles__tags">
              {item.features.map((feature) => (
                <span key={feature} className="koishot-roles__tag">
                  {feature}
                </span>
              ))}
            </div>
            <p className="koishot-roles__scene">{item.scene}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
