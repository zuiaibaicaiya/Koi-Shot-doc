---
description: 'koiShot FAQ: permissions, hotkey conflicts, annotation editing, OCR, long capture, GIF and video recording, save locations and limitations.'
---

# FAQ

## Install & launch

### No main window after launching?

koiShot has **no persistent main window** — it only lives in the tray / menu bar. Left-click the tray icon to capture; the right-click menu opens settings or quits.

### What does `Alt + Q` do?

It shows / hides the **capture overlay** (not a main window): press once to enter capture mode, again to cancel. The tray menu item is "Show/hide window".

### Hotkeys do nothing on Linux?

Linux global hotkeys rely on X11 and **do not work on Wayland**. Switch to an X11 session at the login screen.

### The app restarted after switching language?

Expected: switching between Chinese and English restarts koiShot to apply the new language; settings and hotkeys are preserved.

### Launching koiShot again opens no new window?

koiShot is single-instance: launching it while running **starts a capture** instead of opening another window.

## Permissions (macOS)

### Screenshots are completely black?

Grant Screen Recording: System Settings → Privacy & Security → Screen Recording, enable koiShot, then quit and relaunch. **Without permission captures are black and no error is shown.**

### Click-to-select a UI element does nothing?

That needs **Accessibility**: System Settings → Privacy & Security → Accessibility, enable koiShot. Without it the highlight silently falls back to plain selection; everything else keeps working.

### A recording has no audio?

1. Check "Record microphone audio" under Settings → General → Recording (MP4) (on by default);
2. Grant koiShot microphone access in System Settings → Privacy & Security → Microphone;
3. Relaunch koiShot after changing permissions.

If the microphone is unavailable, koiShot **records silently** and tells you afterwards — video is never blocked by audio.

## Hotkeys

### A shortcut does nothing?

1. Make sure koiShot is running (tray icon present);
2. Check for conflicts with other apps' global hotkeys — try another combination;
3. Rebind it under Settings → Hotkeys and confirm registration;
4. On macOS, `F1` is a system key by default — enable "Use F1, F2, etc. keys as standard function keys" or use `Ctrl` / `Alt` / `Shift`.

## Capture & annotation

### I can't edit a shape I drew earlier?

Annotations follow the "only the newest is editable" rule: drawing another shape, switching tools or undo/redo **freezes** older ones — pressing them behaves like pressing empty canvas. Undo and redraw, or adjust while the shape is still selected. See [Editing existing annotations](/en/guide/features/annotation#editing-existing-annotations).

### Where did the property panel go?

Pen / Rectangle / Ellipse / Arrow / Highlighter / Text / Number keep their properties in the **popup behind the chevron** (or click the active main button again). The small panel below the toolbar is only used by Mosaic and Blur.

### I changed annotation defaults but this capture looks the same?

Defaults apply **when annotation starts** — a new capture or re-selecting the tool. The current session keeps the values you picked during it.

### Does switching tools while typing drop my text?

No. Everything except `Esc` commits: switching tools, clicking elsewhere on the canvas, clicking a swatch.

## Pin

### A pin blocks my view?

Lower its opacity with `Alt` + wheel, or hide the toolbar from the toolbar button / context menu.

### A pin disappeared unexpectedly?

While a pin has focus, `Esc` (or `Ctrl/⌘ + W`) closes it by design; during text editing `Esc` only exits the editor. Just pin again if it was accidental.

### Can pins be rotated or mirrored?

Not in the current version — only zoom and opacity.

## Long screenshot / GIF / video

### "No valid scrolling detected"?

Bring the target window to the foreground (click the browser or document), click **Start**, then scroll steadily. The message also appears when the page cannot scroll or the region already covers everything.

### The long screenshot is misaligned?

Scroll steadily and avoid fast flings; animations, videos or parallax effects can misalign — capture in segments. The result is saved and copied automatically, so you can still annotate it.

### GIF recording stopped by itself?

GIF has a frame budget (fps × 30, about 30 s) and a total-pixel budget; hitting either stops and exports automatically. Use **video recording** for longer clips.

### Video recording stopped at 10 minutes?

The maximum clip length is 10 minutes; recording stops and exports automatically.

### GIF or video?

GIF for a few seconds that loops in chat or tickets; video when you need audio, more than 30 seconds, or higher quality.

## OCR & tables

### OCR or table recognition isn't working?

The engine and models ship with the installer. First run Settings → General → OCR self-check → "Run self-check"; if it reports a problem, open the models folder to verify the files, or reinstall.

### OCR feels slow or uses a lot of memory?

The engine preloads when a capture starts. If it still feels slow:

1. Quit koiShot completely (tray → Quit) and relaunch;
2. Confirm the self-check reports a healthy environment;
3. If it persists, report it (see below) with the self-check output.

### Table rows or columns are wrong?

- Select tightly around the table;
- Best results on regular tables with clear rules; verify complex or skewed tables and fix them with Merge / Split;
- Exports use the grid as currently shown, so fix first, export afterwards.

## Saved files

### Where are my screenshots?

1. Settings → General → Save path (defaults to a `koiShot` folder under Pictures);
2. Files are named `name_date_time` — captures `koiShot_…png`, long screenshots `long_…`, GIFs `gif_…`, videos `koiShot_….mp4`, tables `table_…`;
3. Enable "Open folder after save" to jump there automatically. See [Saving & output](/en/guide/features/output).

### Where does the table export go?

Straight into the save folder (no native save dialog) and the folder is opened; the name looks like `table_20261002_153045.xlsx`.

## Limitations

| Limitation | Notes |
| --- | --- |
| macOS permissions | Screen Recording required; Accessibility for UI highlight; Microphone for audio |
| Linux Wayland | No global hotkeys; UI-element highlight not implemented; best experience on Windows |
| Pin transforms | No rotation / mirroring |
| Annotation editing | Only the currently selected (newest) shape is editable |
| GIF duration | About 30 s per recording (fps × 30 frames) |
| Video duration | Up to 10 minutes per clip |
| Long screenshots | Animations / videos may misalign; scroll steadily |
| Table recognition | Text, merges and size only — no fonts, exact colours or formula semantics |
| AI features | Image editing and visual Q&A are currently hidden |

## Still stuck?

- Check the GitHub issues for similar reports;
- When filing a new issue, include the OS version, reproduction steps and any error or screenshot (**redact personal data**).
