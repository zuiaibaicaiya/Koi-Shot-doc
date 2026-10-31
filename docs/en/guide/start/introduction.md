---
description: 'koiShot overview: a cross-platform capture tool with annotation, pin, long screenshot, GIF & MP4 recording, OCR and table recognition.'
---

# Introduction

## What is koiShot

**koiShot** is a cross-platform desktop capture and pin tool for Windows, macOS and Linux. Beyond plain screenshots it bundles annotation, pin-to-desktop, long screenshots, GIF recording, region video recording (MP4), OCR and table recognition (screenshot to Excel) in one app. All text and table recognition runs **locally** — no network, no image uploads.

koiShot is a **tray-only** application: there is no persistent main window. It lives in the system tray / menu bar and is driven from the tray, global hotkeys or the capture overlay.

## Highlights

| Feature | Description |
| --- | --- |
| Capture | Multi-screen capture, region selection, square selection, hover-highlight of UI elements, magnifier with RGB readout |
| Annotation | Pen, rectangle, ellipse, arrow (8 styles), highlighter, mosaic, blur, text, numbered badges |
| Output | Copy to clipboard, save to file, pin to desktop |
| Pin | Keep a screenshot always on top; zoom, opacity, annotate further; drag over text to copy it via OCR |
| Long screenshot | Scroll and stitch automatically — great for web pages and chat logs |
| GIF recording | Record a region as an animated GIF with frame and pixel budgets |
| Video recording | Record a region as MP4 (H.264 + microphone, 10–60 fps), up to 10 minutes per clip |
| OCR | Local PaddleOCR engine; results with line numbers, copy all or a single line |
| Table recognition | Screenshot to an editable grid, manual merge/split, export xlsx / CSV or copy as TSV |
| Extras | Customizable global hotkeys, tray residency, light/dark themes, Chinese/English UI, configurable annotation defaults |

## Use cases

- **Everyday communication**: annotate a problem area and paste it into chat or a ticket.
- **Docs & tutorials**: number, arrow and label steps to produce illustrated guides quickly.
- **Data wrangling**: screenshot a table → table recognition → export to Excel, no retyping.
- **Reading & clipping**: long screenshots for whole pages; OCR to extract text from images.
- **Reference while working**: pin a reference image to a corner of the screen.
- **Demos**: GIF for a few seconds of interaction; MP4 when you need audio or a longer clip.

## Platforms & requirements

| Platform | Requirements |
| --- | --- |
| Windows | Windows 10 or later; the installer needs no admin rights |
| macOS | Screen Recording permission; Accessibility for UI-element highlight; Microphone for audio in recordings (see [FAQ](/en/guide/faq)) |
| Linux | X11 session (global hotkeys do not work on Wayland); a `.deb` package is provided |

## Three moves to get going

1. Press `F1` — start a capture;
2. Select a region, then click Copy / Save / Pin on the toolbar;
3. Press `Alt + Q` — show or hide the capture overlay (press again to cancel).

See [Shortcuts](/en/guide/shortcuts) for the full list; all global hotkeys are customizable.

## Language & theme

Change the UI language (Chinese / English, follows the system by default; the app restarts to apply) and the theme (System / Light / Dark, applied instantly) under Settings → General. Every window — capture overlay, pins, result windows, recording bar — follows the theme.
