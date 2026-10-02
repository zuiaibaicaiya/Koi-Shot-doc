import { useLang } from '@rspress/core/runtime';

interface FooterLink {
  text: string;
  href: string;
}

interface FooterContent {
  description: string;
  links: FooterLink[];
  copyright: string;
}

const content: Record<string, FooterContent> = {
  zh: {
    description:
      '跨平台截图工具：截图标注、贴图、长截图、GIF 录制、OCR 文字识别与表格识别。',
    links: [
      { text: '产品介绍', href: '/guide/start/introduction' },
      { text: '快捷键总表', href: '/guide/shortcuts' },
      { text: '常见问题', href: '/guide/faq' },
    ],
    copyright: `© ${new Date().getFullYear()} koiShot · 保留所有权利`,
  },
  en: {
    description:
      'Cross-platform capture tool: annotation, pin to desktop, long screenshot, GIF recording, offline OCR and table recognition.',
    links: [
      { text: 'Introduction', href: '/en/guide/start/introduction' },
      { text: 'Shortcuts', href: '/en/guide/shortcuts' },
      { text: 'FAQ', href: '/en/guide/faq' },
    ],
    copyright: `© ${new Date().getFullYear()} koiShot · All rights reserved`,
  },
};

export function Footer() {
  const lang = useLang();
  const { description, links, copyright } = content[lang === 'en' ? 'en' : 'zh'];

  return (
    <footer className="koishot-footer">
      <div className="koishot-footer__inner">
        <div className="koishot-footer__brand">
          <span className="koishot-footer__name">koiShot</span>
          <p className="koishot-footer__description">{description}</p>
        </div>
        <nav className="koishot-footer__links" aria-label="Footer">
          {links.map((link) => (
            <a key={link.href} className="koishot-footer__link" href={link.href}>
              {link.text}
            </a>
          ))}
        </nav>
      </div>
      <p className="koishot-footer__copyright">{copyright}</p>
    </footer>
  );
}
