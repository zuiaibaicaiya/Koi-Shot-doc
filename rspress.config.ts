import * as path from 'node:path';
import { defineConfig } from '@rspress/core';
import { pluginSitemap } from '@rspress/plugin-sitemap';

/**
 * 站点正式地址：GitHub Pages（仓库 Koi-Shot-doc 部署在 /Koi-Shot-doc 子路径下）。
 * 如后续绑定独立域名，改为 `https://你的域名` 并把下方 base 改为 '/'。
 */
const SITE_URL = 'https://zuiaibaicaiya.github.io/Koi-Shot-doc';
const BASE_PATH = '/Koi-Shot-doc/';

/** 每个路由的 SEO 标题与描述（覆盖中英文所有页面） */
const pageMetas: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'koiShot 使用文档：截图、标注、贴图、长截图、60fps 录屏、OCR 与表格识别',
    description:
      'koiShot 跨平台截图工具使用文档：截图标注、贴图、长截图、GIF 录制、最高 60 帧的 MP4 录屏、本地离线 OCR 文字识别与表格识别（截图转 Excel），无水印无广告。',
  },
  '/guide/start/introduction': {
    title: '产品介绍 | koiShot',
    description:
      'koiShot 是什么：一款支持标注、贴图、长截图、GIF 与 MP4 录制、OCR 文字识别与表格识别的跨平台桌面截图工具。',
  },
  '/guide/start/getting-started': {
    title: '获取与安装 | koiShot',
    description:
      '下载 Windows 安装向导与 macOS DMG 安装 koiShot，无需构建，OCR 已内置，开箱即用。',
  },
  '/guide/features/capture': {
    title: '截图 | koiShot 使用文档',
    description:
      'koiShot 截图使用说明：框选、正方形选区、界面控件高亮点选、放大镜取色、快捷键提示面板与截图工具栏。',
  },
  '/guide/features/annotation': {
    title: '标注与编辑 | koiShot 使用文档',
    description:
      'koiShot 标注工具使用说明：画笔、矩形、圆形、箭头、荧光笔、马赛克、模糊、文字与序号，属性弹窗、编辑规则与默认值。',
  },
  '/guide/features/pin': {
    title: '贴图 | koiShot 使用文档',
    description:
      'koiShot 贴图功能：截图固定在桌面置顶显示，支持缩放、透明度调节、继续标注与框选识别文字。',
  },
  '/guide/features/long-capture-gif': {
    title: '长截图、GIF 与 MP4 录屏 | koiShot 使用文档',
    description:
      'koiShot 长截图滚动自动拼接、GIF 录制与框选 MP4 录屏教程：控制条与录制条按钮、取消与完成、时长与体积上限、帧率 10–60 与体积预设，适合网页、聊天记录与操作演示。',
  },
  '/guide/features/ocr-table': {
    title: 'OCR 与表格识别 | koiShot 使用文档',
    description:
      'koiShot 本地离线 OCR 文字识别与表格识别：截图转文字、截图转 Excel，导出 xlsx / CSV 或复制 TSV。',
  },
  '/guide/settings': {
    title: '设置与托盘 | koiShot 使用文档',
    description:
      'koiShot 设置说明：界面语言、主题、保存路径、GIF 与录屏参数、OCR 自检、快捷键、标注默认值与系统托盘。',
  },
  '/guide/shortcuts': {
    title: '快捷键总表 | koiShot 使用文档',
    description:
      'koiShot 快捷键大全：F1 截图、Alt+S 保存、Alt+P 贴图、Alt+R 录屏等全局快捷键与截图过程快捷键，支持自定义。',
  },
  '/guide/faq': {
    title: '常见问题 | koiShot 使用文档',
    description:
      'koiShot 常见问题解答：macOS 权限授权、快捷键冲突、标注编辑、OCR 排查、录屏与功能限制说明。',
  },
  '/en/': {
    title:
      'koiShot Docs: Capture, Pin, Long Screenshot, 60 fps Recording, OCR & Tables',
    description:
      'koiShot documentation: screenshot annotation, pin to desktop, long screenshots, GIF and up to 60 fps MP4 recording, local offline OCR and table recognition — no ads or watermarks.',
  },
  '/en/guide/start/introduction': {
    title: 'Introduction | koiShot',
    description:
      'koiShot is a cross-platform desktop capture and pin tool with annotation, long screenshot, GIF and MP4 recording, OCR and table recognition.',
  },
  '/en/guide/start/getting-started': {
    title: 'Get Started | koiShot',
    description:
      'Download the Windows installer, macOS DMG or Linux .deb to install koiShot — no build required, OCR included.',
  },
  '/en/guide/features/capture': {
    title: 'Capture | koiShot Docs',
    description:
      'koiShot capture guide: region selection, square selection, UI element highlight, magnifier, shortcut hint panel and toolbar.',
  },
  '/en/guide/features/annotation': {
    title: 'Annotation | koiShot Docs',
    description:
      'koiShot annotation guide: pen, shapes, arrow styles, highlighter, mosaic, blur, text, numbered badges, property popups and defaults.',
  },
  '/en/guide/features/pin': {
    title: 'Pin to Desktop | koiShot Docs',
    description:
      'koiShot pin guide: keep a screenshot always on top, zoom, opacity, on-pin annotation and drag-to-copy text with OCR.',
  },
  '/en/guide/features/long-capture-gif': {
    title: 'Long Screenshot, GIF & MP4 Recording | koiShot Docs',
    description:
      'koiShot long screenshot stitching, GIF recording and region MP4 video recording: control and recording bar buttons, cancel vs finish, duration and size limits, 10–60 fps settings.',
  },
  '/en/guide/features/ocr-table': {
    title: 'OCR & Tables | koiShot Docs',
    description:
      'koiShot local offline OCR and table recognition: screenshot to text or Excel (xlsx / CSV, copy as TSV).',
  },
  '/en/guide/settings': {
    title: 'Settings & Tray | koiShot Docs',
    description:
      'koiShot settings: language, theme, save path, GIF and recording options, OCR self-check, hotkeys, annotation defaults and tray menu.',
  },
  '/en/guide/shortcuts': {
    title: 'Shortcuts | koiShot Docs',
    description:
      'koiShot shortcut reference: F1 capture, Alt+S save, Alt+P pin, Alt+R record and in-capture keys, all customizable.',
  },
  '/en/guide/faq': {
    title: 'FAQ | koiShot Docs',
    description:
      'koiShot FAQ: macOS permissions, hotkey conflicts, annotation editing, OCR, recording and known limitations.',
  },
};

const defaultMeta: Record<string, { title: string; description: string }> = {
  zh: pageMetas['/'],
  en: pageMetas['/en/'],
};

/** 规范化路由：去掉 index 与首尾斜杠，得到如 /guide/faq 的路径 */
function normalizeRoutePath(routePath: string): string {
  return routePath
    .replace(/index(\.html)?$/, '')
    .replace(/\.html$/, '')
    .replace(/\/+$/, '');
}

function metaFor(route: { routePath: string; lang: string }) {
  const normalized = normalizeRoutePath(route.routePath);
  const lang = route.lang === 'en' ? 'en' : 'zh';
  return pageMetas[normalized] ?? defaultMeta[lang];
}

function urlFor(route: { routePath: string }): string {
  return `${SITE_URL}${normalizeRoutePath(route.routePath) || '/'}`;
}

/** 首页页脚：QQ 交流群二维码展示 */
const footerMessage = `
<div align="center">
  <img src="${SITE_URL}/images/qq-group.jpg" width="220" alt="koiShot QQ 交流群二维码" />
  <p>QQ 交流群：<strong>1134581312</strong> · 扫一扫二维码，加入群聊</p>
</div>
`;

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  base: BASE_PATH,
  title: 'koiShot：截图、标注、贴图、长截图、OCR 与表格识别',
  description: 'koiShot 使用文档：截图、标注、贴图、长截图、OCR 与表格识别。',
  logoText: 'koiShot',
  lang: 'zh',
  icon: '/favicon.ico',
  logo: {
    light: '/koi-logo.svg',
    dark: '/koi-logo.svg',
  },
  head: [
    [
      'meta',
      {
        name: 'keywords',
        content:
          'koiShot,截图工具,截图软件,贴图,长截图,滚动截图,OCR,文字识别,表格识别,截图转Excel,GIF录制,标注,screenshot tool,pin to desktop,OCR,table recognition',
      },
    ],
    ['meta', { name: 'author', content: 'koiShot' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['meta', { property: 'og:site_name', content: 'koiShot' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: `${SITE_URL}/koi-logo.png` }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    (route) => [
      'meta',
      { property: 'og:title', content: metaFor(route).title },
    ],
    (route) => [
      'meta',
      { property: 'og:description', content: metaFor(route).description },
    ],
    (route) => ['meta', { property: 'og:url', content: urlFor(route) }],
    (route) => [
      'meta',
      {
        property: 'og:locale',
        content: route.lang === 'en' ? 'en_US' : 'zh_CN',
      },
    ],
    (route) => [
      'meta',
      { name: 'twitter:title', content: metaFor(route).title },
    ],
    (route) => [
      'meta',
      { name: 'twitter:description', content: metaFor(route).description },
    ],
    (route) => ['link', { rel: 'canonical', href: urlFor(route) }],
  ],
  plugins: [
    pluginSitemap({
      siteUrl: SITE_URL,
      defaultChangeFreq: 'weekly',
      defaultPriority: '0.7',
      customMaps: {
        '/': { loc: `${SITE_URL}/`, changefreq: 'weekly', priority: '1.0' },
        '/en/': {
          loc: `${SITE_URL}/en/`,
          changefreq: 'weekly',
          priority: '1.0',
        },
      },
    }),
  ],
  locales: [
    {
      lang: 'zh',
      label: '简体中文',
      title: 'koiShot：截图、标注、贴图、长截图、OCR 与表格识别',
      description:
        'koiShot 使用文档：截图、标注、贴图、长截图、OCR 与表格识别。',
    },
    {
      lang: 'en',
      label: 'English',
      title:
        'koiShot: Capture, Annotation, Pin, Long Screenshot, OCR & Table Recognition',
      description:
        'koiShot documentation: capture, annotation, pin, long screenshot, OCR and table recognition.',
    },
  ],
  themeConfig: {
    footer: {
      message: footerMessage,
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/zuiaibaicaiya/Koi-Shot-doc',
      },
    ],
  },
});
