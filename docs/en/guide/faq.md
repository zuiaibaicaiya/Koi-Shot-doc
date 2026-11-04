---
description: 'koiShot FAQ: permissions, hotkey conflicts, annotation editing, OCR, screenshot translation, long capture, GIF and video recording, save locations and limitations.'
---

# FAQ

## Install & launch

### No main window after launching?

koiShot has **no persistent main window** — it only lives in the tray / menu bar. Left-click the tray icon to capture; the right-click menu opens settings or quits.

koiShot never shows up in the Windows taskbar or the `Alt + Tab` list either (not even the settings window), and on macOS it stays out of the Dock and `⌘ + Tab`. Quit it from the tray menu rather than from the taskbar / Dock.

### What does `Alt + Q` do?

It shows / hides the **capture overlay** (not a main window): press once to enter capture mode, again to cancel. The tray menu item is "Show/hide window".

### Hotkeys do nothing on Linux?

Linux global hotkeys rely on X11 and **do not work on Wayland**. Switch to an X11 session at the login screen.

### Theme changes have no effect?

The environment variable `KOISHOT_THEME=light|dark` **forces a theme** and takes priority over the setting in the app. If changing the theme does nothing, check whether that variable is set in your system environment; remove it and restart koiShot.

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

On Windows, global hotkeys are exclusive: if another app already owns the combination (graphics driver panels often grab `Alt + R`), rebinding to it fails immediately with a registration error — pick another combination. The same applies to default hotkeys that were already taken when koiShot started.

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

Bring the target window to the foreground (click the browser or document), click **Start** on the control bar, then scroll steadily. The message also appears when the page cannot scroll or the region already covers everything.

### The long screenshot is misaligned?

Scroll steadily and avoid fast flings; animations, videos or parallax effects can misalign — capture in segments. The result is saved and copied automatically, so you can still annotate it.

### Changed my mind in the middle of a long capture?

Click **Cancel** (✕) on the control bar: sampled frames are discarded, with no file and no clipboard entry. `Esc` while capturing behaves like **Finish** and produces an image — use Cancel when you do not want any output.

### GIF recording stopped by itself?

GIF has a frame budget (fps × 30, about 30 s) and a cumulative total-pixel budget (~320 million pixels — larger regions reach it sooner); hitting either stops and exports what was captured. Use **video recording** for longer clips.

### Video recording stopped at 10 minutes?

The maximum clip length is 10 minutes (recording time only — paused time is not counted); recording stops and exports automatically.

### I clicked Start but recording stays in the ready state?

If the encoder does not enter the recording state within about 5 seconds, koiShot reports "Video encoder start timed out" and cleans up:

1. Lower the frame rate to 30 fps or less under Settings → General → Recording (MP4), or disable the microphone and retry;
2. Close apps that occupy the GPU / encoder (other recorders, streaming tools) and update your graphics driver;
3. If it still fails, quit and relaunch koiShot.

### "The previous video is still exporting"?

Stopping a recording writes the H.264 file, so long clips and large regions take longer (often several seconds, longer for 10-minute clips). A new recording is refused until it finishes; if export takes more than about 30 seconds, koiShot force-finishes the session — a formed file is reported as complete, otherwise you get an error.

### Screenshots or recordings look washed out on an HDR monitor?

On Windows, koiShot detects HDR monitors and tone-maps screenshots, GIFs and recordings, producing standard SDR output (highlights no longer blow out). If it still looks washed out, check the system HDR setting and your graphics driver, or compare against another region / app. Very old systems that cannot provide FP16 capture fall back to 8-bit and may still look slightly washed out.

### GIF or video?

GIF for a few seconds that loops in chat or tickets; video when you need audio, more than 30 seconds, or higher quality.

## OCR & tables

### OCR or table recognition isn't working?

The engine and models ship with the installer. First run Settings → General → OCR self-check → "Run self-check"; if it reports a problem, open the models folder to verify the files, or reinstall.

### OCR feels slow or uses a lot of memory?

The engine preloads when a capture starts, so a few hundred MB (~185 MB) staying resident **is not a memory leak**; a temporary spike during recognition is normal too. If it still feels slow:

1. Quit koiShot completely (tray → Quit) and relaunch;
2. Confirm the self-check reports a healthy environment;
3. To save memory, set the environment variable `KOISHOT_OCR_PRELOAD=0` before launching — models then load at first recognition (slightly slower first use);
4. If it persists, report it (see below) with the self-check output.

### Table rows or columns are wrong?

- Select tightly around the table;
- Best results on regular tables with clear rules; verify complex or skewed tables and fix them with Merge / Split;
- Exports use the grid as currently shown, so fix first, export afterwards.

## Screenshot translation

### Translate says "Please fill in the Alibaba Cloud AccessKey ID and AccessKey Secret first"?

The machine translation step calls Alibaba Cloud, so you need your own credentials: go to Settings → General → Translation settings, enter the AccessKey ID / Secret, click **Save**, then **Test translation** — the test sends a real request and reports success or failure in the card. Changes apply immediately, no restart.

### Translation failed?

The status line on the right shows the reason returned by the service. The usual suspects:

1. **Text too long**: the whole recognised text is sent in one request and anything above the `TranslateGeneral` limit (about 5000 characters) is rejected — translate the screen in a few smaller selections;
2. **Invalid credentials / service not enabled / account in arrears**: make sure the AccessKey belongs to an account with machine translation enabled and verify with "Test translation";
3. **No network**: failures are not retried automatically; switch language or press Translate again.

### Does translation upload my image?

No. Recognition (OCR) always runs locally and **images never leave your machine**; only the recognised text is sent to Alibaba Cloud machine translation. Keep that in mind for sensitive content.

### The translation looks wrong?

Most "bad translations" start as bad recognition — check the text in the left image first, then select a cleaner region and retry. Vertical text, decorative fonts, low contrast and occluded text recognise poorly and translate just as poorly. The right pane shows only the translation; use the OCR button in a second window when you need the original side by side.

### Do I need a new capture after switching the target language?

No. Change the "Translate to" dropdown at the bottom of the result window and the same source text is translated again into the new language — no need to go back to the capture overlay.

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
| macOS recording version | Video recording (MP4) needs ScreenCaptureKit — macOS 12.3+ |
| Linux Wayland | No global hotkeys; UI-element highlight not implemented; best experience on Windows |
| Pin transforms | No rotation / mirroring |
| Annotation editing | Only the currently selected (newest) shape is editable |
| QR codes | QR family only — 1D barcodes and DataMatrix / Aztec / PDF417 are not supported |
| GIF duration | About 30 s per recording (fps × 30 frames) or ~320 million cumulative pixels, whichever comes first |
| GIF content | On Windows, semi-transparent windows may be missing from the GIF (capture performance trade-off) |
| Video duration | Up to 10 minutes per clip (paused time not counted) |
| Video frame rate | Up to 60 fps; the actual rate depends on machine performance and the encoder |
| Linux video recording | No native capture yet — falls back to compatible capture (~10 fps) |
| Long screenshots | Animations / videos may misalign; scroll steadily |
| Table recognition | Text, merges and size only — no fonts, exact colours or formula semantics; no diagonal headers, nested tables or vertical text; at least 2×2 cells required |
| Screenshot translation | Needs your own Alibaba Cloud AccessKey and network access (recognition stays local, images are not uploaded); one request per capture with a ~5000 character limit; only the translation is shown |
| AI features | Image editing and visual Q&A are currently hidden |

## Still stuck?

- Check the GitHub issues for similar reports;
- When filing a new issue, include the OS version, reproduction steps and any error or screenshot (**redact personal data**).
