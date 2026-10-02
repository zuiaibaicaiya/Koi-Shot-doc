# koiShot 使用文档站点

koiShot 是一款跨平台桌面截图工具，支持**截图标注、贴图、长截图、GIF 录制、本地离线 OCR 文字识别与表格识别（截图转 Excel）**。本仓库使用 [Rspress](https://rspress.rs/) 构建其官方文档站点，包含简体中文与 English 双语内容。

## 功能特性

- **截图**：框选、正方形选区、界面控件高亮点选、放大镜取色与截图工具栏
- **标注与编辑**：矩形、箭头、序号、文字、马赛克，属性面板与撤销重做
- **贴图**：将截图固定在桌面置顶显示，支持缩放、透明度调节与继续标注
- **长截图与 GIF 录制**：滚动自动拼接长截图，GIF 录制支持体积预设控制
- **OCR 与表格识别**：本地离线文字识别，截图转文字，截图转 Excel（导出 xlsx / CSV / TSV）
- **设置与快捷键**：界面语言、主题、保存路径、GIF 预设、OCR 自检、系统托盘与可自定义快捷键

## 技术栈

- 构建框架：[Rspress](https://rspress.rs/)（基于 Rsbuild / Rspack 的静态文档站框架）
- 语言：TypeScript（严格模式）+ React 19
- 代码规范与格式化：Biome
- 站点地图：@rspress/plugin-sitemap
- 自定义主题：见 `theme/` 目录

## 目录结构

```
.
├── docs/                  # 文档内容（Rspress root）
│   ├── zh/               # 简体中文文档
│   ├── en/               # English 文档
│   └── public/           # 静态资源（logo、favicon、安装向导截图等）
├── theme/                # 自定义主题组件与样式
├── rspress.config.ts     # 站点配置（标题、SEO、双语、sitemap、社交链接）
├── biome.json            # Biome 代码规范配置
├── tsconfig.json
└── package.json
```

> 上线前请将 `rspress.config.ts` 中的 `SITE_URL` 替换为真实域名（sitemap、og:url、canonical 均依赖它）。

## 本地开发

安装依赖：

```bash
npm install
```

启动开发服务器（热更新）：

```bash
npm run dev
```

## 构建与预览

构建生产版本：

```bash
npm run build
```

本地预览生产构建：

```bash
npm run preview
```

检查并自动修复代码规范：

```bash
npm run check
```

仅格式化：

```bash
npm run format
```

## 部署

`npm run build` 会在 `doc_build/`（默认输出目录）生成静态站点，可直接托管到任意静态服务器或对象存储 / CDN。部署时确保 `SITE_URL` 已设置为正式域名，以便 sitemap 与 SEO 元信息正确。

## 文档贡献

- 新增 / 调整文档请在 `docs/zh/` 与 `docs/en/` 同步维护，保持结构与文件名一致。
- 导航与侧边栏顺序由各目录下的 `_meta.json` / `_nav.json` 控制。
- 每个页面的 SEO 标题与描述在 `rspress.config.ts` 的 `pageMetas` 中覆盖配置。
