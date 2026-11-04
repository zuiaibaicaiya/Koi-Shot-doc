---
description: 'koiShot capture guide: region selection, square selection, UI-element highlight, magnifier, shortcut hint panel and the capture toolbar.'
---

# Capture

## Starting a capture

Any of these:

- Press `F1` (capture) / `Alt + S` (capture & save) / `Alt + R` (region video recording);
- **Left-click** the tray icon — starts a capture immediately;
- Tray right-click menu → Capture / Capture & save;
- Launching koiShot again while it is running also **starts a capture** (single-instance behaviour).

The screen dims and enters selection mode. By default the **work area of the screen under the cursor** is pre-selected (screen minus taskbar / Dock / menu bar), so a plain click captures it; moving the mouse switches the preview to the rectangle under the cursor.

## Selecting a region

| Action | Result |
| --- | --- |
| Drag with the left button | Select any rectangular region |
| `Shift` + drag | Square region (press or release `Shift` mid-drag; clamped at screen edges) |
| Single click on a UI element | Select that element's exact bounds (button, input, image…) |
| Drag edges / corner handles | Resize the selection in eight directions |
| Drag inside the selection | Move the whole selection |
| Wheel (with an annotation selected) | Adjust the selected annotation's thickness / size |
| `Esc` | Cancel the capture |

### UI element highlight

While hovering without a selection, the window / button / image under the cursor is outlined and a **single click** turns it into the selection — no pixel-perfect alignment needed. Supported via:

- Windows: UI Automation (UIA);
- macOS: Accessibility (AX), requires permission;
- Linux: not implemented yet; falls back to plain selection.

Without permission nothing breaks: the highlight simply never appears.

### Magnifier

Moving the mouse during selection shows a magnifier that zooms the pixels next to the cursor, with a pixel grid plus **RGB readout** and coordinates below — handy for aligning edges or picking a colour.

### Shortcut hint panel

A translucent panel in the **left column of the screen** lists the keys available right now:

| Phase | Content |
| --- | --- |
| Before selecting | Drag to select · Shift+drag for a square · Click to select a UI element · Esc to cancel |
| Selection committed (toolbar visible) | Drag the selection to move/resize · Wheel adjusts the selected annotation · Ctrl+Z undo · Enter finish · Esc cancel |

It prefers the bottom-left corner, moves to the top-left only when the bottom-left is blocked, and hides entirely when both left corners are occupied by other overlays (selection, toolbar, magnifier). It hides while you are dragging, stays visible during the editing phase after the toolbar appears, and is not shown during GIF/MP4 recording.

## Toolbar

After you release the mouse, the toolbar appears below the selection. The active tool is highlighted; clicking it again opens its property popup. Buttons from left to right:

| Group | Button | Purpose | Details |
| --- | --- | --- | --- |
| Annotation | Pen / Rectangle / Ellipse / Arrow / Highlighter / Mosaic / Blur / Text / Number | Add annotations; the ones with a small chevron have a property popup | [Annotation](/en/guide/features/annotation) |
| Edit | Undo / Redo | Step back or forward, `Ctrl + Z` / `Ctrl + Shift + Z` (`Cmd` on macOS) | [Undo & redo](/en/guide/features/annotation#undo--redo) |
| Output | Pin | Pin the selection to the desktop | [Pin](/en/guide/features/pin) |
| Output | OCR | Recognise text in the selection, with line numbers | [OCR & tables](/en/guide/features/ocr-table) |
| Output | Translate | Recognise foreign text and machine-translate it into a side-by-side window | [Screenshot translation](/en/guide/features/translate) |
| Output | QR code | Decode QR codes in the selection and copy the content | [OCR & tables](/en/guide/features/ocr-table) |
| Output | Table | Rebuild a table into an editable grid, export xlsx / CSV | [OCR & tables](/en/guide/features/ocr-table) |
| Output | Long capture | Scroll-stitch a long screenshot | [Long screenshot, GIF & recording](/en/guide/features/long-capture-gif) |
| Output | Record GIF | Record the selection as an animated GIF | [Long screenshot, GIF & recording](/en/guide/features/long-capture-gif) |
| Output | Record video | Record the selection as MP4 (optional microphone audio) | [Long screenshot, GIF & recording](/en/guide/features/long-capture-gif) |
| Finish | Save / Cancel / Copy | Save to the configured folder, discard, or copy (rightmost) | [Saving & output](/en/guide/features/output) |

The toolbar flips above the selection when there is no room below, and is clamped horizontally when the selection touches a screen edge. It temporarily hides while you drag the selection.

## Finishing

- The **default action** depends on how you started; that button is highlighted in the brand colour:

  | Entry | Default action |
  | --- | --- |
  | `F1` / tray Capture / relaunch | Copy to clipboard |
  | `Alt + S` / tray Capture & save | Save to file (saves on mouse release, no toolbar) |
  | `Alt + P` / tray Pin to desktop | Pin on mouse release |
  | `Alt + R` | Show the recording bar in its ready state on release |

- `Enter` runs the current default action;
- Clicking Copy / Save / Pin finishes the capture with that action;
- Cancel or `Esc` discards it (while editing a text annotation, `Esc` only exits the editor).

:::tip
Annotation details: [Annotation](/en/guide/features/annotation). OCR, tables, QR codes and translation each have their own section; long capture, GIF and video: [Long screenshot, GIF & recording](/en/guide/features/long-capture-gif); paths, file names and formats: [Saving & output](/en/guide/features/output).
:::
