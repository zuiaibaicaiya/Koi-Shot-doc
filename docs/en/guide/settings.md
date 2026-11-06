---
description: 'koiShot settings and tray: general settings, translation settings, hotkeys, annotation defaults, about page and automatic updates, open-source licenses, GIF and recording options, OCR self-check, tray menu.'
---

# Settings & Tray

Open settings via the **tray icon → Settings**. The full build version (including the git commit, e.g. `v1.1.0+g1a2b3c4`) is shown at the bottom of the sidebar.

The sidebar has four pages: **General / Hotkeys / Annotation / About**. Settings is not an always-on-top window — if another window covers it, pick "Settings" from the tray menu again to bring it forward.

## General

| Section | Setting | Description |
| --- | --- | --- |
| Language | UI language | 中文 / English, follows the system by default; switching **restarts** koiShot |
| Translation | Provider | Fixed to "Alibaba Cloud machine translation" — nothing to choose |
| Translation | AccessKey ID / AccessKey Secret | Credentials for Alibaba Cloud machine translation; both fields are masked by default — click the "eye" to reveal them temporarily, then click again to mask. **Save** writes them into the local settings |
| Translation | Target language | Chinese / English / Japanese / Korean / French / German / Spanish / Russian, the default for the Translate button (the result window can switch on the fly) |
| Translation | Test translation | Sends a real request with one sample sentence and reports success or failure in the card, so you can verify the credentials; changes apply immediately, no restart |
| Appearance | Theme | Follow system / Light / Dark, applied instantly to all windows |
| Save path | Save path | Common destination for captures, long screenshots, GIFs, recordings and table exports; defaults to a `koiShot` folder under Pictures |
| Save path | Open folder after save | Opens the folder after each save (off by default) |
| GIF recording | Size preset | High quality / Balanced (default) / Small size |
| GIF recording | Frame rate | 5–30 fps (default 15) |
| Recording (MP4) | Frame rate | 10–60 fps (default 30): 10 / 15 / 20 / 24 / 25 / 30 / 50 / 60; higher is smoother but costs more performance. The dropdown on the recording bar is synced with this setting; GIF (5–30) and video (10–60) keep separate values and never overwrite each other, and changes take effect on the next recording |
| Recording (MP4) | Microphone | "Record microphone audio", on by default; off or unauthorized means silent video |
| OCR self-check | Status / Run self-check / Open models folder | Verify the recognition models and runtime; the result lists the models and dictionaries actually loaded |

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

:::tip
Prefer combinations with `Ctrl` / `Alt` / `Shift` to avoid clashes with the system and other apps.
:::

## Annotation

Settings → Annotation holds **one default set per annotation tool** (nine tools): colour, thickness (font size for Text, brush size for Mosaic/Blur), opacity, arrow style, number start value and auto-increment.

- It uses the **same controls and values** as the toolbar popup (9 swatches, 4 thickness steps) — no free-form numbers;
- Defaults are applied **when annotation starts**: a new capture, or when you select a tool; tweaks made during a capture are not written back;
- The capture overlay and pin windows **share** these defaults;
- "Restore defaults" resets every tool at once (with confirmation).

Per-tool factory values: [Annotation defaults](/en/guide/features/annotation#annotation-defaults).

## About

This is the **only place** for about information: tray → Settings → the fourth sidebar page, About. There is no separate "About" tray item and no standalone About window. The page shows the logo, name, version, update status, feature description, the **QQ group**, an open-source license link and copyright:

- **Version**: the About page shows the full build version plus the platform tag (e.g. `1.1.2+g1a2b3c4 · windows-x64`), matching the installer naming; the `v…` label at the bottom of the sidebar comes from the same source;
- **Update status line**: directly below the version is a single status line: "Check for updates / Checking for updates… / Up to date · Check again / New version vX found · View release notes / Downloading vX (… MB)… N% / Verifying installer… / Waiting for idle time, or installing and restarting… / Update failed: <reason> · Retry · Open release page". On macOS / Linux you may also see "Installer downloaded · Open installer";
- **"Check for updates / Check again"** is the only manual control and **ignores the once-a-day check throttle**; "Retry" after a failed download or install resumes the chunks already downloaded instead of querying the API again, and "Open release page" lets you download manually;
- **QQ group**: the join QR code and group number **1134581312** — click the number to copy it;
- **Open-source licenses**: opens a read-only dialog listing each component's name, license, role and a "full license" link (opened in your browser) — Qt 6 (LGPL-3.0 / GPL-3.0), ONNX Runtime (MIT), PaddleOCR PP-OCRv6 and SLANet_plus, zxing-cpp (Apache-2.0), `gif.h` (public domain), X11/xcb (MIT) and more. The complete list also ships as `THIRD_PARTY_NOTICES.md` in the package. Close with the button or `Esc`; the dialog follows the current theme.

## Automatic updates

Once installed, **you never need to check for or download updates manually**: about 6 seconds after launch, koiShot queries the latest stable release on GitHub Releases in the background, with no repeat within 24 hours of a successful check. A 10-minute idle check also catches updates and resumes downloads if the app stays running for days. Only a strictly newer remote version triggers an update; pre-releases and drafts are ignored.

- **Fully automatic, no switches**: checking, downloading and installing never ask for confirmation, there are **no** "check automatically" / "install automatically" switches in settings, and no confirmation dialog. New versions are installed as soon as they are found;
- **Background download & verification**: tray balloons announce "New version found (downloading in the background…) ", "Update ready, will install when the system is idle", "Installing update, koiShot will restart automatically" and "Update failed". Installers are downloaded in parallel chunks with resume support and verified against the SHA-256 digest published with the release; updates are always **full installers** (~60 MB), never deltas;
- **Windows**: once the download is verified, koiShot waits for 2 continuous minutes without keyboard or mouse input, then quits, installs silently and relaunches the new version — no wizard to run;
- **macOS / Linux**: the downloaded package is handed to the system's default handler and you finish the install in the system wizard (drag into Applications for a DMG, administrator rights for a `.deb`). The app keeps running; silent installation is Windows-only. On some Linux desktops tray balloons are not clickable — use the About page for the status instead;
- **On failure**: failed checks (offline, API rate limits) are silent; only download / verification / install failures are reported, with "Retry" and "Open release page" on the About page. Losing the connection or quitting mid-download keeps the chunks, and the next launch resumes from them.

:::tip
To check right now, click "Check for updates / Check again" in Settings → About — it ignores the once-a-day throttle. More answers in the [FAQ](/en/guide/faq).
:::

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

Hovering the icon shows the app name; the menu items also show their current shortcuts. There is no "About" item — version, update status and licenses live in Settings → About. Besides capture actions, tray balloons also report update download and install progress (not clickable on some Linux desktops).

## About AI features

AI image editing and visual Q&A (Alibaba Bailian / Volcano Engine providers with API key, model and proxy settings) are built in but currently **hidden**: the "AI" section does not appear in settings, and pins have no "AI edit / AI understand" buttons or menu items. This page will be updated when they are enabled.
