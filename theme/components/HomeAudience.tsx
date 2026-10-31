import { useLang, usePage } from '@rspress/core/runtime';

interface AudienceGroup {
  icon: string;
  title: string;
  items: string[];
}

interface AudienceContent {
  title: string;
  subtitle: string;
  groups: AudienceGroup[];
}

const zh: AudienceContent = {
  title: '适用人群',
  subtitle: '看看 koiShot 是否适合你',
  groups: [
    {
      icon: '🧩',
      title: '平台与安装',
      items: [
        'Windows 10 及以上：安装向导默认仅当前用户，无需管理员权限',
        'macOS：按 Apple 芯片 / Intel 下载对应 DMG，首次运行需授予屏幕录制权限',
        'Linux：X11 桌面，提供 Debian / Ubuntu 的 .deb 安装包',
        '中英文界面、浅色 / 深色 / 跟随系统，5 个全局快捷键均可自定义',
      ],
    },
    {
      icon: '💼',
      title: '职业类型',
      items: [
        '学生 / 教师：课件、作业与论文配图',
        '办公与行政：汇报材料、流程说明配图',
        '程序员 / 产品 / 测试：Bug 截图标注、需求沟通',
        '自媒体 / 运营：教程配图、素材收集整理',
        '客服 / 技术支持：工单附图、操作步骤演示',
      ],
    },
    {
      icon: '🗓️',
      title: '使用场景',
      items: [
        '日常沟通：截图标注问题位置，复制即发',
        '教程制作：序号步骤图快速产出图文说明',
        '数据整理：表格截图一键转 Excel，免手动录入',
        '资料摘录：长截图保存整页，OCR 提取图内文字',
        '多任务对照：参考图贴在桌面，边看边做',
      ],
    },
    {
      icon: '✅',
      title: '需求特征',
      items: [
        '每天都离不开截图，希望标注与输出一步到位',
        '在意隐私：文字与表格识别必须本地离线完成',
        '不想忍受水印、广告或订阅费',
        '可能跨 Windows / macOS / Linux 多平台工作',
      ],
    },
  ],
};

const en: AudienceContent = {
  title: 'Who Is It For',
  subtitle: 'See whether koiShot fits your needs',
  groups: [
    {
      icon: '🧩',
      title: 'Platforms & Install',
      items: [
        'Windows 10 or later: per-user installer, no admin rights required',
        'macOS: pick the Apple Silicon or Intel DMG; grant Screen Recording on first run',
        'Linux: X11 desktops, Debian / Ubuntu .deb package provided',
        'Chinese / English UI, light / dark / system themes, five rebindable global hotkeys',
      ],
    },
    {
      icon: '💼',
      title: 'Professions',
      items: [
        'Students / teachers: courseware, homework & paper figures',
        'Office & admin: reports and process documentation',
        'Developers / PM / QA: annotated bug reports, requirement reviews',
        'Creators / marketing: tutorial images, asset collection',
        'Support / helpdesk: ticket screenshots, step-by-step demos',
      ],
    },
    {
      icon: '🗓️',
      title: 'Use Cases',
      items: [
        'Daily communication: annotate a problem and paste it away',
        'Tutorials: numbered step images in minutes',
        'Data reuse: table screenshot to Excel, no retyping',
        'Research: long captures of full pages, OCR for text in images',
        'Multitasking: pin a reference image and work alongside it',
      ],
    },
    {
      icon: '✅',
      title: 'Needs Profile',
      items: [
        'Capture screenshots daily and want annotate + output in one flow',
        'Privacy matters: recognition must run locally and offline',
        'No watermarks, ads or subscriptions',
        'Work across Windows / macOS / Linux',
      ],
    },
  ],
};

export function HomeAudience() {
  const { pageType } = usePage();
  const lang = useLang();
  if (pageType && pageType !== 'home') return null;
  const content = lang === 'zh' ? zh : en;
  return (
    <section className="koishot-audience">
      <h2 className="koishot-audience__title">{content.title}</h2>
      <p className="koishot-audience__subtitle">{content.subtitle}</p>
      <div className="koishot-audience__grid">
        {content.groups.map((group) => (
          <div key={group.title} className="koishot-audience__card">
            <div className="koishot-audience__card-title">
              <span className="koishot-audience__icon">{group.icon}</span>
              {group.title}
            </div>
            <ul className="koishot-audience__list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
