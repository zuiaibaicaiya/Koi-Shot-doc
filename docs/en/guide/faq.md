---
description: 'Find the symptom you are seeing and follow the steps: launch, updates, permissions, hotkeys, annotations, pins, recording, recognition, translation and saved files.'
---

# FAQ

Find the **symptom you are seeing** below and follow the steps.

## Install & launch

### There is no window after launching?

koiShot has no persistent main window — it only lives in the tray / menu bar. Left-click the icon to capture; the right-click menu opens settings or quits.

On Windows, capture and pin windows never take a taskbar slot; **only the Settings window appears there**, and that button disappears when you close it. On macOS there is no Dock icon and no `⌘ + Tab` entry.

### What does `Alt + Q` do?

It shows / hides the capture overlay: press once to enter capture mode, again to cancel. The tray item is "Show/hide window".

### Hotkeys do nothing on Linux?

Global hotkeys do not work in a Wayland session — switch to X11 at the login screen.

### koiShot doesn't start at login on Linux / how do I turn autostart off?

The `.deb` starts koiShot at login for all users, with no switch in settings. If it does not appear after re-login, check that it launches from the application menu, then that `/etc/xdg/autostart/koishot.desktop` still exists.

To turn autostart off, delete that entry with admin rights: `sudo rm /etc/xdg/autostart/koishot.desktop`. See [Get Started](/en/guide/start/getting-started#start-at-login).

### Theme changes have no effect?

Check whether the environment variable `KOISHOT_THEME` is set — it forces a theme and overrides the setting in the app. Remove it and restart koiShot.

### The app restarted after switching language?

Expected. Switching between Chinese and English restarts koiShot to apply the new language; settings and hotkeys are preserved.

### Launching koiShot again opens no new window?

It is single-instance: launching it while it is running **starts a capture** instead of opening another window.

## Updates & Upgrades

### Do I have to check for updates or confirm anything?

No. koiShot checks in the background at startup and downloads and installs newer versions automatically — no confirmation dialog, no switch in settings. Tray notifications tell you when a download is in progress; the full flow is in [Settings & Tray](/en/guide/settings).

### Can I turn automatic updates off?

Not in this version — there is no switch and no "notify only" option. Offline checks are silent; only download / install failures are reported.

### Windows restarts the app automatically — what if I'm using it?

Installation waits until you have been **away from the keyboard and mouse for two continuous minutes**, then koiShot reopens. It stays fully usable while waiting; save any work in progress before it starts.

### Does macOS / Linux finish the install too?

The package is downloaded and handed to the system, but you finish it in the system dialog: drag koiShot into Applications on macOS, or complete the `.deb` install with administrator rights on Linux. The app keeps running.

### The download was interrupted / "Update failed"?

Progress is not lost when you lose the connection or quit the app — the next launch continues. To continue right away, click "Retry" under Settings → About; if GitHub is unreachable, "Open release page" lets you download and install manually.

### Can I check right now or upgrade manually?

Click "Check for updates / Check again" in Settings → About. Running a newer installer over the existing one also works on every platform and keeps your settings.

## Permissions (macOS)

### Screenshots are completely black?

Grant Screen Recording: System Settings → Privacy & Security → Screen Recording, enable koiShot, then quit and relaunch. Without permission captures are black with no error shown.

### Click-to-select a UI element does nothing?

That needs **Accessibility**: enable koiShot under System Settings → Privacy & Security → Accessibility. Without it, hovering silently falls back to a plain selection; everything else keeps working.

### A recording has no audio?

1. Check "Record microphone audio" under Settings → General → Recording (MP4) (on by default);
2. macOS asks for the microphone the first time you record with audio — allow it, and relaunch koiShot after changing permissions.

If the microphone is unavailable, koiShot records silently — video is never blocked by audio.

## Hotkeys

### A shortcut does nothing?

1. Make sure the tray icon is there, so koiShot is running;
2. Try another combination — it may clash with another app's global hotkey;
3. Rebind it under Settings → Hotkeys and confirm;
4. On macOS, `F1` is a system key by default: enable "Use F1, F2, etc. keys as standard function keys" in System Settings → Keyboard, or use a `Ctrl` / `Alt` / `Shift` combination.

On Windows, if another app has taken a combination exclusively (graphics panels often grab `Alt + R`), rebinding to it fails with a registration error — pick another.

## Capture & annotation

### I can't edit a shape I drew earlier?

Only the **newest** annotation is editable. Drawing another shape, switching tools or undo/redo freezes the older ones — pressing them behaves like pressing empty canvas. Undo and redraw, or adjust the shape while it is still selected. See [Can I change what I just drew?](/en/guide/features/annotation#can-i-change-what-i-just-drew).

### Where did the property panel go?

Pen / Rectangle / Ellipse / Arrow / Highlighter / Text / Number keep their properties in the **popup behind the chevron** (or click the active main button again). The small panel below the toolbar is only used by Mosaic and Blur; it steps aside while a popup is open and returns when the popup closes.

### I changed annotation defaults but this capture looks the same?

Defaults apply **when annotation starts** — a new capture, or re-selecting the tool. The current session keeps the values you picked during it.

### Does switching tools while typing drop my text?

No. Everything except `Esc` commits: switching tools, clicking elsewhere, clicking a swatch.

## Pin

### A pin blocks my view?

Lower its opacity with `Alt` + wheel, or click "Hide toolbar" to leave just the image.

### A pin disappeared unexpectedly?

With a pin focused, `Esc` (or `Ctrl/⌘ + W`) closes it by design; while typing text, `Esc` only exits the editor. Just pin again if it was accidental.

### Can pins be rotated or mirrored?

Not in this version — only zoom and opacity.

## Long screenshot / GIF / video

### "No valid scrolling detected"?

Click the target window (browser or document) to bring it forward, click **Start**, then scroll steadily. The message also appears when the page cannot scroll or the selection already covers everything; very small scrolls are not stitched immediately, so keep going.

### The long screenshot is misaligned?

Scroll steadily, avoid fast flings; animations, videos and parallax effects can misalign — capture in segments. The result is saved and copied automatically, so you can still annotate it.

### Changed my mind mid-way through a long capture?

Click **Cancel** (✕) on the control bar: everything captured is discarded, no image and no clipboard entry. `Esc` behaves like **Finish** and produces an image.

### GIF recording stopped by itself?

A GIF runs about 30 seconds at most, and less for a large region. At the limit it stops and exports what it has. Use video for longer clips.

### Video recording stopped at 10 minutes?

10 minutes per clip (paused time not counted) is the maximum; it stops and exports automatically.

### I clicked Start but recording stays in the ready state?

If it does not start within about 5 seconds, koiShot reports an encoder timeout. Try:

1. Lower the frame rate to 30 fps or less under Settings → General → Recording (MP4), or turn the microphone off;
2. Close apps that occupy the GPU / encoder (other recorders, streaming tools) and update your graphics driver;
3. Quit and relaunch koiShot;
4. **Linux**: older packages may lack the recording components — reinstall the current `.deb` from the release page. No extra system software is needed.

### "The previous video is still exporting"?

After stopping, the video has to be written to disk — longer clips and larger regions take longer. Wait for the message to disappear before starting a new recording.

### Screenshots or recordings look washed out on an HDR monitor?

On Windows, koiShot handles HDR so highlights no longer blow out. If it still looks washed out, check the system HDR switch and your graphics driver, or compare another region / app. On older machines video may still look washed out, but recording is not interrupted. Changing the system HDR switch mid-recording can leave this clip blank — record it once more.

### GIF or video?

GIF for a few seconds that loops in chat or tickets; video when you need audio, more than 30 seconds, or better quality.

## OCR & tables

### Recognition isn't working?

The engine and models ship with the installer. Run Settings → General → OCR self-check → "Run self-check" first; if it reports a problem, open the models folder to check the files, or reinstall.

### Recognition feels slow or uses a lot of memory?

Models are loaded in advance when a capture opens, so some resident memory use **is normal, not a leak**; a temporary spike during recognition is normal too. If it still feels wrong:

1. Quit koiShot completely from the tray and reopen it;
2. Confirm the self-check reports a healthy environment;
3. To save that memory, set the environment variable `KOISHOT_OCR_PRELOAD=0` before launching — models then load at first use (slightly slower the first time);
4. If it persists, see "Still stuck?" below and include the self-check result.

### Table rows or columns are wrong?

- Select tightly around the table;
- Regular tables with clear rules work best; verify complex or tilted tables and fix them with Merge / Split;
- Exports use the grid as it currently looks, so fix first, export afterwards.

## Screenshot translation

### Translate says "Please fill in the AccessKey ID and AccessKey Secret first"?

Translation needs your own credentials: Settings → General → Translation settings, enter the AccessKey ID / Secret, click **Save**, then **Test translation**. Changes apply immediately.

### Translation failed?

The status line on the right gives the reason. The usual ones:

1. **Text too long**: about 5000 characters per request — translate the screen in a few smaller selections;
2. **Invalid credentials / service not enabled / account in arrears**: verify with "Test translation";
3. **No network**: failures are not retried automatically — switch language or click Translate again.

### Does translation upload my image?

No. Recognition runs locally and **images never leave your machine**; only the recognised text is sent for translation. Keep that in mind for sensitive content.

### The translation looks wrong?

Most bad translations start as bad recognition — check the text in the left image, then select a cleaner region and retry. Vertical text, decorative fonts, low contrast and occluded text are the usual culprits. The right pane shows only the translation; open an OCR result window for the original.

### Do I need a new capture after switching target language?

No. Change the "Translate to" dropdown and the same source text is translated again.

## Saved files

### Where are my screenshots?

1. Settings → General → Save path (defaults to a `koiShot` folder under Pictures);
2. Files are named `name_date_time` — captures `koiShot_…png`, long screenshots `long_…`, GIFs `gif_…`, videos `koiShot_….mp4`, tables `table_…`;
3. Enable "Open folder after save" to have the folder pop open. See [Saving & output](/en/guide/features/output).

### Where does the table export go?

Straight into the save folder (no save dialog), named like `table_20261002_153045.xlsx`. With "Open folder after save" on, that folder also opens.

## Current limits

| Feature | Status |
| --- | --- |
| macOS permissions | Screen Recording and Accessibility must be granted; microphone asked for when needed |
| macOS recording | Needs macOS 12.3+ |
| Linux Wayland | No global hotkeys, no UI-element highlight; the fullest experience is on Windows |
| Pins | No rotation / mirroring |
| Annotation | Only the newest shape is editable |
| QR codes | QR family only — no 1D barcodes or DataMatrix |
| GIF | About 30 seconds per recording, less for large regions |
| Video | Up to 10 minutes and 60 fps; smoothness depends on your machine |
| Linux video | May run at about 10 fps; recording components ship with the package |
| Long screenshots | Animations / videos can misalign |
| Table recognition | No fonts, exact colours or formulas; no diagonal headers, nested tables or vertical text; at least 2×2 cells |
| Translation | Needs your own Alibaba Cloud AccessKey and network; about 5000 characters per request; translation only |
| Automatic updates | No switch, no confirmation; Windows finishes automatically, macOS / Linux need the system dialog |
| AI features | Image editing and visual Q&A are not available yet — nothing to click in the interface |

## Still stuck?

- Check the GitHub issues for similar reports;
- When filing a new issue, include the OS version, reproduction steps and any error or screenshot (**redact personal data**).
