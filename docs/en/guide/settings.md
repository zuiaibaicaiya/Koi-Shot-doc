---
description: 'koiShot settings and tray: general settings, hotkeys, save path, GIF presets, OCR self-check.'
---

# Settings & Tray

Open Settings from the tray menu or the main window (`Alt + Q`). The current version is shown at the bottom of the settings sidebar.

## General

| Setting | Description |
| --- | --- |
| Language | 中文 / English, follows system by default; switching **restarts the app** to apply |
| Theme | Follow system / Light / Dark, applied immediately |
| Save path | Default save location (a `koiShot` folder under Pictures), browse to change |
| Open folder after save | Auto-open the folder after saving (off by default) |
| GIF size preset | High quality / Balanced (default) / Small size |
| OCR self-check | Verify models & environment; open models directory |

## Hotkeys

All global hotkeys are editable under Settings → Hotkeys (defaults and actions: [Shortcuts](/en/guide/shortcuts)): click "Edit", press the new combination, confirm — changes apply immediately. Conflicts with other actions are detected and reported. A combination may also be taken by system shortcuts (e.g. macOS `Cmd + Shift + 3/4/5`, Windows `Win + Shift + S`) or global hotkeys of other background apps — just pick another one. Combinations including `Ctrl` / `Alt` / `Shift` are recommended.

**Rebinding doesn't take effect?** Some apps (games, remote desktops, virtual machines) intercept keys exclusively, so global hotkeys never arrive — try a different combination or close the interfering app.

**`F1`-style function keys conflict on macOS?** `F1`–`F12` act as media/system keys by default. To use them for capture, enable "Use F1, F2, etc. keys as standard function keys" in "System Settings → Keyboard", or switch to a combination with `Ctrl` / `Alt` / `Shift`.

## Tray

- **Left-click** the tray icon: start a capture;
- **Right-click menu**: Capture · Capture & save · Capture & pin · Show/hide window · Settings · About · Quit.

## About AI Features

AI image editing and visual Q&A (Alibaba Bailian / Volcano Engine providers, API key, proxy settings) are built in but currently **hidden** in the UI. This document will be updated once they are enabled.
