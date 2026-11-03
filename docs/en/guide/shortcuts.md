---
description: 'koiShot shortcut reference: 5 global hotkeys, in-capture keys, text editing, pin window and result windows — all customizable.'
---

# Shortcuts

## Global hotkeys

Work from any foreground app (rebind under Settings → Hotkeys, see [Settings & tray](/en/guide/settings#hotkeys)):

| Shortcut | Action |
| --- | --- |
| `F1` | Capture (default action: copy) |
| `Alt + S` | Capture & save (saves on mouse release) |
| `Alt + P` | Pin to desktop (pins on mouse release) |
| `Alt + Q` | Show / hide the capture overlay (press again to cancel) |
| `Alt + R` | Record a region as MP4 (recording bar appears on release) |

## During a capture

| Key / action | Result |
| --- | --- |
| Drag | Select a region |
| `Shift` + drag | Square selection (toggles live) |
| Single click | Select the highlighted UI element |
| Drag inside the selection | Move the selection |
| `Enter` | Run the default action (copy / save / pin / record, depending on the entry) |
| `Esc` | Cancel the capture / close a property popup / discard a text edit |
| `Ctrl + Z` | Undo annotation |
| `Ctrl + Shift + Z` | Redo annotation |
| Wheel over the selected annotation | Adjust its thickness / size |

On macOS, `Ctrl` maps to `Cmd`.

## While editing text

| Key | Result |
| --- | --- |
| `Enter` | New line |
| `Ctrl + Enter` (`Cmd + Enter`) | Commit |
| `Esc` | Discard this edit (restores the original when editing) |
| Wheel | Adjust font size |

Clicking elsewhere, clicking a swatch or switching tools commits instead of discarding — only `Esc` drops the input.

## In a pin window

| Action | Result |
| --- | --- |
| Drag | Move the pin |
| Wheel | Zoom (0.3–4.0×) |
| `Alt` + wheel | Opacity (5%–100%; not while typing) |
| `Ctrl + Z` / `Ctrl + Shift + Z` | Undo / redo annotation |
| `Esc` / `Ctrl + W` (`Cmd + W`) | Close the pin (during text editing or QR selection `Esc` exits the mode first) |
| Drag over text with no tool active | Select text, recognise it and copy to the clipboard |
| "QR code" → drag a rectangle | Decode the QR code and copy its content (button again or `Esc` to cancel) |

## While recording (long screenshot / GIF / video)

| Key / action | Result |
| --- | --- |
| `Esc` | Long screenshot: stop and produce the image; GIF / video: cancel the recording (captured frames are discarded); ready state: cancel |
| Control / recording bar buttons | Long screenshot: Start ▶ / Finish ✓ / Cancel ✕; GIF and video first require confirming "Start recording"; video also has Pause ❚❚ / Resume ▶ while recording. Buttons are icons — hover to see the name |
| Recording-bar frame-rate dropdown (GIF / video ready state) | Change the frame rate directly; locked once recording starts |
| Drag inside the region (ready state) | Move the recording region (move only, no resize; cannot leave the current screen; also applies to long capture) |

## Result windows

| Key / action | Result |
| --- | --- |
| `Esc` | Close the OCR / table result window |
| Double-click a line (OCR) | Copy just that line |

:::tip
All global hotkeys can be rebound and take effect immediately; a conflict message means the combination is already taken by koiShot or another app.
:::
