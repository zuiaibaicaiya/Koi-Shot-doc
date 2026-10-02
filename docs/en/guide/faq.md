---
description: 'koiShot FAQ: permissions, hotkey conflicts, OCR availability, known limitations.'
---

# FAQ

## Install & Launch

### No window after launch?

koiShot starts **minimized to the tray** by design. Click the tray icon to capture, right-click for the menu.

### Hotkeys dead on Linux?

Global hotkeys rely on X11 and are **not yet supported on Wayland** — switch to an X11 session.

### The app "restarted" after switching language?

That's expected: switching 中文 / English restarts koiShot automatically to apply the new language. Settings and hotkeys are preserved.

### Running koiShot again opens no new window?

koiShot is a **single-instance** app: launching it while it already runs (e.g. double-clicking the desktop icon) doesn't open a new window — it **triggers a capture** instead, turning any launcher into a capture shortcut.

## macOS Permissions

### Screenshots are all black?

Grant Screen Recording: System Settings → Privacy & Security → Screen Recording → enable koiShot, then restart it. Without the permission captures are black with no error.

### Element highlight does not work?

Also grant **Accessibility** permission. Without it the feature silently degrades to plain selection.

## OCR & Tables

### OCR or table recognition not working?

The engine and models ship with the installer and work out of the box. Run Settings → OCR self-check first; if it fails, open the models directory to check the files, or reinstall the app.

### OCR slow or memory heavy?

By default the engine warms up when a capture opens to keep first recognition fast. If it feels noticeably slow or memory use is high:

1. Quit koiShot fully (tray icon → Quit) and start it again;
2. Run Settings → OCR self-check to confirm the environment is healthy;
3. If it persists, file an issue as described in [Still stuck?](#still-stuck) with the self-check result attached.

### Table results misaligned?

Keep the selection close to the table, scroll steadily, and use merge/split to fix errors before export.

## Saved Files

### Can't find a saved screenshot?

1. Check Settings → General → Save path (by default a `koiShot` subfolder under your system Pictures folder);
2. Files are named `name_date_time` (e.g. `koiShot_20261002_153045.png`) — sort by time to find them easily;
3. Enable "Open folder after save" to jump to the folder after each save. See [Saving & Output](/en/guide/features/output).

## Known Limitations

| Limitation | Detail |
| --- | --- |
| macOS permissions | Screen Recording required; Accessibility needed for element highlight |
| Linux Wayland | No global hotkeys; best pin/overlay experience is on Windows |
| Pin transforms | Rotate/mirror not available yet |
| AI features | Hidden in the UI for now |
| Long capture | Animated pages may stitch imperfectly |

## Still stuck?

Check existing GitHub issues first; when filing a new one, include your OS version, steps to reproduce and screenshots (mind privacy — no personal data).
