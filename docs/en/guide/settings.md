---
description: 'koiShot settings and tray: general settings, hotkeys, annotation defaults, about page, GIF and recording options, OCR self-check, tray menu.'
---

# Settings & Tray

Open settings via the **tray icon → Settings**. The current version is shown at the bottom of the settings sidebar.

The sidebar has four pages: **General / Hotkeys / Annotation / About**. Settings is not an always-on-top window — if another window covers it, pick "Settings" from the tray menu again to bring it forward.

## General

| Section | Setting | Description |
| --- | --- | --- |
| Language | UI language | 中文 / English, follows the system by default; switching **restarts** koiShot |
| Appearance | Theme | Follow system / Light / Dark, applied instantly to all windows |
| Save path | Save path | Common destination for captures, long screenshots, GIFs, recordings and table exports; defaults to a `koiShot` folder under Pictures |
| Save path | Open folder after save | Opens the folder after each save (off by default) |
| GIF recording | Size preset | High quality / Balanced (default) / Small size |
| GIF recording | Frame rate | 5–30 fps (default 15) |
| Recording (MP4) | Frame rate | 10–30 fps (default 30) |
| Recording (MP4) | Microphone | "Record microphone audio", on by default; off or unauthorized means silent video |
| OCR self-check | Status / Run self-check / Open models folder | Verify the recognition models and runtime |

## Hotkeys

Settings → Hotkeys lists the **5 global actions** (defaults in [Shortcuts](/en/guide/shortcuts)):

| Action | Default |
| --- | --- |
| Capture | `F1` |
| Capture & save | `Alt + S` |
| Pin to desktop | `Alt + P` |
| Show / hide window (capture overlay) | `Alt + Q` |
| Record video | `Alt + R` |

To rebind: click **Edit** on the row, press the new combination in the "Edit shortcut · <action>" dialog, then **Confirm** — it is saved and re-registered **immediately**, no restart needed.

If the combination is already used by another koiShot action, the dialog says so. It may also be taken by a system shortcut (e.g. macOS `Cmd + Shift + 3/4/5`, Windows `Win + Shift + S`) or by another background app's global hotkey.

**Rebinding doesn't take effect?** Some apps (games, remote desktops, virtual machines) intercept keys exclusively, so global hotkeys never arrive — try another combination or close the interfering app.

**`F1`-style function keys conflict on macOS?** `F1`–`F12` act as system keys by default. Enable "Use F1, F2, etc. keys as standard function keys" in System Settings → Keyboard, or use a combination with `Ctrl` / `Alt` / `Shift`.

::::tip
Prefer combinations with `Ctrl` / `Alt` / `Shift` to avoid clashes with the system and other apps.
::::

## Annotation

Settings → Annotation holds **one default set per annotation tool** (nine tools): colour, thickness (font size for Text, brush size for Mosaic/Blur), opacity, arrow style, number start value and auto-increment.

- It uses the **same controls and values** as the toolbar popup (9 swatches, 4 thickness steps) — no free-form numbers;
- Defaults are applied **when annotation starts**: a new capture, or when you select a tool; tweaks made during a capture are not written back;
- The capture overlay and pin windows **share** these defaults;
- "Restore defaults" resets every tool at once (with confirmation).

Per-tool factory values: [Annotation defaults](/en/guide/features/annotation#annotation-defaults).

## About

Settings → About shows the logo, name, version, feature description and copyright, plus an **Open-source licenses** link. Clicking it opens a modal listing Qt 6, ONNX Runtime, PaddleOCR and other third-party components with links (opened in your browser); close it with the button or `Esc`.

## Tray

koiShot lives in the system tray:

- **Left-click**: start a capture;
- **Right-click menu**:

| Item | Purpose |
| --- | --- |
| Capture | Start a capture; default action is copy |
| Capture & save | Save as soon as the region is released |
| Pin to desktop | Pin as soon as the region is released |
| Show/hide window | Show or hide the capture overlay |
| Settings | Open settings (About lives here too) |
| Quit | Exit completely |

Hovering the icon shows the app name; the menu items also show their current shortcuts.

## About AI features

AI image editing and visual Q&A (Alibaba Bailian / Volcano Engine providers with API key, model and proxy settings) are built in but currently **hidden**: the "AI" section does not appear in settings, and pins have no "AI edit / AI understand" buttons or menu items. This page will be updated when they are enabled.
