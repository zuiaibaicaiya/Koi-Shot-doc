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

After selection, a toolbar appears under the region with annotation tools and output actions (Copy, Save, Pin, OCR, Table, Long capture, GIF, Cancel).

- `Enter` runs the default action for how the capture was started (`F1` → copy, `Alt + S` → save);
- `Esc` or "Cancel" aborts.

See [Annotation](/en/guide/features/annotation) for marking up, and [Saving & Output](/en/guide/features/output) for save paths and file naming.
