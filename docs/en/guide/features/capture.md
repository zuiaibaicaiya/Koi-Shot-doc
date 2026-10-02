---
description: 'koiShot capture guide: region selection, square selection, element highlight, magnifier and toolbar.'
---

# Capture

## Start a Capture

- Press `F1` (capture) or `Alt + S` (capture and save);
- Click the tray icon and choose "Capture";
- Or use the button in the main window.

The screen dims and the **full screen under the mouse is preselected** as the initial region. A shortcut hint panel in the bottom-left corner lists the available actions.

## Region Selection

| Action | Effect |
| --- | --- |
| Left-drag | Select any rectangular region |
| `Shift` + drag | Select a square |
| Click a UI element | Select its exact bounds (button, input box, ...) |
| Drag handles | Resize from eight directions |
| `Esc` | Cancel |

**Element detection**: hovering highlights windows, buttons and images based on accessibility APIs (Windows UIA / macOS Accessibility); a single click selects the element precisely.

## Magnifier

While selecting, a magnifier shows pixels near the cursor for precise alignment and color picking.

## Confirm

After selection, a **toolbar** appears below the region. The active tool is highlighted, and tools that support styling open a property panel beneath the toolbar. All buttons:

| Group | Buttons | Purpose | Details |
| --- | --- | --- | --- |
| Annotation | Pen / Rectangle / Ellipse / Arrow / Highlighter / Mosaic / Gaussian Blur / Text / Number badge | Mark up the capture | [Annotation](/en/guide/features/annotation) |
| Edit | Undo / Redo | Step back or forward, `Ctrl/Cmd + Z` / `Ctrl/Cmd + Shift + Z` | [Undo / Redo](/en/guide/features/annotation#undo-redo) |
| Output | Copy | Copy the capture to the clipboard | [Saving & Output](/en/guide/features/output) |
| Output | Save | Save as PNG to the configured folder | [Saving & Output](/en/guide/features/output) |
| Output | Pin | Keep the capture on top of the desktop | [Pin](/en/guide/features/pin) |
| Output | OCR | Recognize text as copyable content | [OCR & Table](/en/guide/features/ocr-table) |
| Output | Table | Convert a table capture to xlsx / CSV / TSV | [OCR & Table](/en/guide/features/ocr-table) |
| Output | Long capture | Scroll and stitch a full-page image | [Long Capture & GIF](/en/guide/features/long-capture-gif) |
| Output | GIF | Record the region as a GIF | [Long Capture & GIF](/en/guide/features/long-capture-gif) |
| Exit | Cancel | Discard the capture (`Esc`) | — |

- `Enter` runs the default action for how the capture was started (`F1` → copy, `Alt + S` → save);
- `Esc` or "Cancel" aborts.

See [Annotation](/en/guide/features/annotation) for marking up, and [Saving & Output](/en/guide/features/output) for save paths and file naming.
