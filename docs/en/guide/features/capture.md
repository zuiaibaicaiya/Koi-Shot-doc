---
description: 'How to start a capture, select exactly the right area, what every toolbar button does, and how to finish or cancel.'
---

# Capture

This page walks through **the whole flow**, from pressing a hotkey to walking away with the image: selecting a region, reading the on-screen hints, using the toolbar, and finishing.

## Start a capture

Any of these:

- Press `F1` (capture), `Alt + S` (capture & save) or `Alt + R` (region video recording);
- **Left-click** the tray icon — a capture starts immediately;
- Tray right-click menu → Capture / Capture & save;
- Launching koiShot again while it is running also **starts a capture** (single-instance behaviour).

The screen dims. By default the **work area of the screen under the cursor** is pre-selected (screen minus taskbar / Dock / menu bar), so a plain click captures it; moving the mouse switches the preview to the rectangle under the cursor.

## Selecting a region

| What you want | What to do |
| --- | --- |
| Any rectangle | Drag with the left button |
| A square | Hold `Shift` while dragging (pressing or releasing mid-drag works immediately; clamped at screen edges) |
| Exactly one button or input box | Hover until it is outlined, then **single-click** |
| Resize the selection | Drag an edge or corner handle — eight directions |
| Move the selection | Drag inside it |
| Change the selected annotation's size | Wheel over it |
| Call the whole thing off | `Esc` |

### What the cursor is telling you

No rules to memorise — the cursor shows what happens if you press:

| Cursor | Meaning |
| --- | --- |
| Crosshair | You can start a stroke or place a point here: empty canvas, older shapes that are no longer selected, an arrow's endpoints, or the screen before a selection exists |
| Move (four-way) | This whole thing can be dragged: the selected shape, an arrow shaft, a number badge, or inside the selection |
| Directional resize arrows | This edge or corner can be pulled: the eight handles of a selected shape, or the selection border |
| I-beam | In a pin window, there is text here you can drag across to copy |
| Arrow / hand | Toolbar and popup backgrounds show the arrow; buttons, swatches and sliders show a hand, meaning "clickable" (greyed-out buttons fall back to the arrow) |

The move cursor belongs only to the **currently selected, still editable** item. Once a shape is frozen, pressing it starts a new stroke and the cursor returns to a crosshair.

### Let the mouse pick a UI element for you

Before you drag a selection, hovering over a window, button or image outlines it — **one click turns that into the selection**, with no pixel-perfect alignment.

- Works on Windows and macOS; macOS needs Accessibility permission;
- Not available on Linux yet — it falls back to a plain selection;
- Without permission nothing breaks: the highlight simply never appears.

### Magnifier

While selecting, a magnifier appears in a screen corner: it zooms the pixels next to the cursor, shows a pixel grid, and gives you the **RGB value** and coordinates below — handy for aligning edges or picking a colour.

### Shortcut hints on the left

A translucent panel in the **left column of the screen** lists the keys available at this moment:

| Phase | What it says |
| --- | --- |
| Before selecting | Drag to select · Shift+drag for a square · Click a UI element · Esc to cancel |
| Selection committed (toolbar visible) | Drag the selection to move/resize · Wheel adjusts the annotation · Ctrl+Z undo · Enter finish · Esc cancel |

It prefers the bottom-left, moves to the top-left when that is blocked, and hides when both left corners are occupied by other overlays. It hides while you drag and returns on release; it is not shown during GIF / video recording.

## Toolbar

After you release the mouse, the toolbar appears below the selection. Buttons from left to right:

| Group | Button | What it does | Details |
| --- | --- | --- | --- |
| Annotation | Pen / Rectangle / Ellipse / Arrow / Highlighter / Mosaic / Blur / Text / Number | Draw on the capture; chevron buttons also open a property popup | [Annotation](/en/guide/features/annotation) |
| Edit | Undo / Redo | Step back or forward, `Ctrl + Z` / `Ctrl + Shift + Z` (`Ctrl + Y` also works on Windows) | [Undo & redo](/en/guide/features/annotation#undo--redo) |
| Output | Pin | Keep this region on top of your desktop | [Pin](/en/guide/features/pin) |
| Output | OCR | Turn text in the image into copyable text | [OCR & tables](/en/guide/features/ocr-table) |
| Output | Translate | Translate foreign text into a side-by-side window | [Screenshot translation](/en/guide/features/translate) |
| Output | QR code | Decode a QR code and copy its content | [OCR & tables](/en/guide/features/ocr-table) |
| Output | Table | Turn a table into an editable grid, export to Excel | [OCR & tables](/en/guide/features/ocr-table) |
| Output | Long capture | Scroll and stitch a whole page into one image | [Long screenshot, GIF & recording](/en/guide/features/long-capture-gif) |
| Output | Record GIF | Record the region as an animated GIF | [Long screenshot, GIF & recording](/en/guide/features/long-capture-gif) |
| Output | Record video | Record the region as MP4 (with optional audio) | [Long screenshot, GIF & recording](/en/guide/features/long-capture-gif) |
| Finish | Save / Cancel / Copy | Save to the configured folder, discard, or copy (rightmost) | [Saving & output](/en/guide/features/output) |

Buttons are icons — **hover to see their names**; near the bottom of the screen the hint flips above the button, and greyed-out buttons show none. The active tool is highlighted; clicking it again opens its property popup.

The toolbar sits below the selection by default, flips above when there is no room, and is clamped inside the screen at edges. It hides while you drag the selection and returns on release. With multiple monitors it stays entirely on the screen that overlaps the selection most, never split or clipped.

## Finishing

**Press `Enter` to run the default action for how you started** — that button is highlighted in blue:

| How you got here | What `Enter` does |
| --- | --- |
| `F1` / tray Capture / relaunch | Copy to clipboard |
| `Alt + S` / tray Capture & save | Save to file (on mouse release, no toolbar) |
| `Alt + P` / tray Pin to desktop | Pin on mouse release |
| `Alt + R` | Show the recording bar, ready for you to press Start |

You can also click Copy / Save / Pin directly. Cancel or `Esc` discards the capture (while editing a text annotation, `Esc` only leaves the editor).

:::tip
Annotation: [Annotation](/en/guide/features/annotation). Text, tables, QR codes and translation: [OCR & tables](/en/guide/features/ocr-table) and [Screenshot translation](/en/guide/features/translate). Long captures, GIF and video: [Long screenshot, GIF & recording](/en/guide/features/long-capture-gif). Where files go: [Saving & output](/en/guide/features/output).
:::
