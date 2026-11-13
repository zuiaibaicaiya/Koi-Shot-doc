---
description: 'Where to change language, theme, save folder, hotkeys and annotation defaults; where to see version and update status; what the tray menu does.'
---

# Settings & Tray

Change the UI language, theme, save folder, hotkeys or the colours your annotations start with — all here. Open it with **tray icon → Settings**. The sidebar has four pages: General / Hotkeys / Annotation / About.

## General

| What you want to change | Where | Notes |
| --- | --- | --- |
| UI language | Language → UI language | 中文 / English, follows the system by default; the app restarts to apply and keeps your settings |
| Theme | Appearance → Theme | Follow system / Light / Dark, applied instantly to every window |
| Where files are saved | Save path → Save path | One folder for captures, long screenshots, GIFs, recordings and table exports; defaults to `koiShot` under Pictures. Click "Browse" to change it |
| Open the folder after saving | Save path → Open folder after save | Off by default; turn it on to have the folder pop open after each save |
| GIF quality / frame rate | GIF recording | Size preset High quality / Balanced / Small size, 5–30 fps (default 15) — see [GIF recording](/en/guide/features/long-capture-gif#gif-recording) |
| Video frame rate / audio | Recording (MP4) | 10–60 fps (default 30), microphone on by default; change it on the recording bar before starting and it applies to that recording |
| Translation account | Translation | Pick a provider (Alibaba Cloud Machine Translation / Baidu Translate), then enter its credentials — Alibaba Cloud AccessKey ID / Secret, or Baidu APP ID / API Key. Choose a target language, Save, then verify with "Test translation" — see [Screenshot translation](/en/guide/features/translate) |
| Whether recognition is healthy | OCR self-check | Click "Run self-check", or "Open models folder" to inspect the files |

## Hotkeys

Settings → Hotkeys lets you rebind **5 global actions** (defaults in [Shortcuts](/en/guide/shortcuts)):

| Action | Default |
| --- | --- |
| Capture | `F1` |
| Capture & save | `Alt + S` |
| Pin to desktop | `Alt + P` |
| Show / hide the capture overlay | `Alt + Q` |
| Record video | `Alt + R` |

Click **Edit** on a row, press the new combination, then **Confirm** — it works **immediately**, no restart.

| What happens | What to do |
| --- | --- |
| "Already used by another action" | Pick a different combination |
| Nothing happens when pressed | Check for another app using it; games, remote desktops and VMs can grab keys exclusively — change the combination or close the app |
| `F1` does nothing on macOS | Enable "Use F1, F2, etc. keys as standard function keys" in System Settings → Keyboard, or use a `Ctrl` / `Alt` / `Shift` combination |

:::tip
Combinations with `Ctrl` / `Alt` / `Shift` clash less often with the system and other apps.
:::

## Annotation

Settings → Annotation holds **one default set per tool** (nine tools): colour, thickness (font size for Text, brush size for Mosaic / Blur), opacity, arrow style, number start value and auto-increment.

- These are the same colours and thickness steps you see in the toolbar popup (9 swatches, 4 steps);
- Defaults are applied **when a new capture starts or you re-select a tool**; tweaks made during a capture are not saved;
- Captures and pins share these defaults;
- "Restore defaults" resets everything at once (with a confirmation).

Factory values: [Annotation defaults](/en/guide/features/annotation#annotation-defaults).

## About

About information lives only in **tray → Settings → the fourth sidebar page, About**; there is no separate "About" tray item. On that page you will find:

- The **version number** (matching the installer name); the full build version also appears at the bottom of the sidebar;
- **One status line** telling you whether you are up to date, a new version was found, it is downloading, it is waiting for idle time, it is installing and restarting, or the update failed; when you start the check yourself, the download line also says it will install and restart automatically when ready;
- **"Check for updates / Check again"** to check right now; "Retry" resumes a failed download instead of starting over; "Open release page" downloads manually;
- **QQ group 1134581312** — click the number to copy it, or scan the QR code;
- **"Open-source licenses"** — a read-only window listing the third-party components and links to their full licenses (opened in your browser); close with `Esc` or the button.

## Automatic updates

**You never need to check for updates manually.** koiShot checks in the background at startup and downloads and installs a newer version automatically — no confirmation dialog, no switch in settings.

| Your system | How the update finishes |
| --- | --- |
| Windows | **Found in the background**: after the download, koiShot waits until you have been away from the keyboard and mouse for two continuous minutes, then installs and reopens — no wizard to run. **You clicked "Check for updates / Check again / Retry"**: it installs and restarts as soon as the download is verified, without waiting — save your work before clicking |
| macOS / Linux | The downloaded package is handed to the system; finish it in the system dialog while the app keeps running |

:::tip
A broken download, losing the connection or quitting mid-way does not lose progress — the next launch continues, or click "Retry" on the About page to continue right away. Offline checks are silent. To check immediately, use "Check for updates / Check again".
:::

## Tray

koiShot lives in the system tray with no main window.

- **Left-click** the icon: start a capture;
- **Right-click menu**:

| Item | Purpose |
| --- | --- |
| Capture | Start a capture (default action: copy) |
| Capture & save | Save on mouse release |
| Pin to desktop | Pin on mouse release |
| Show/hide window | Show or hide the capture overlay |
| Settings | Open settings (About lives here too) |
| Quit | Exit completely |

The first four items show their current shortcuts and update when you rebind them. Hovering the icon shows the app name; update progress also arrives as tray notifications (on some Linux desktops those are not clickable — use the About page instead).

:::tip
If another window covers Settings, pick "Settings" from the tray menu again or click the koiShot button in the taskbar to bring it back. On Windows, Settings is the only koiShot window that appears in the taskbar — the button disappears when you close it.
:::

## AI features

AI image editing and visual Q&A are **not available yet** — there are no buttons or settings for them in the interface. This page will explain how to use them once they are enabled.
