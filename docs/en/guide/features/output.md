---
description: 'koiShot saving and output: save path, file naming, clipboard and per-feature write behaviour and formats.'
---

# Saving & Output

Captures, pins, long screenshots, GIFs, recordings and table exports all end up somewhere — this page explains where, under what name, and in which format.

## Output channels

| Channel | Description |
| --- | --- |
| Clipboard | Paste straight into chat, docs or a ticket; no file is created |
| File | Written into the folder configured under Settings → General → Save path |
| Pin | Shown as an always-on-top window; save from the pin when needed (see [Pin](/en/guide/features/pin)) |
| Result window | OCR / table recognition open their own window for copying or exporting (see [OCR & tables](/en/guide/features/ocr-table)) |

## File naming

Every saved file uses `name_date_time` (24-hour clock). Saving several files within the same second appends `_1`, `_2`, so **nothing is overwritten**:

| Content | Example |
| --- | --- |
| Capture / pin | `koiShot_20261002_153045.png` |
| Video recording | `koiShot_20261002_153045.mp4` |
| Long screenshot | `long_20261002_153045.png` |
| GIF recording | `gif_20261002_153045.gif` |
| Table export | `table_20261002_153045.xlsx` / `table_20261002_153045.csv` |

## Default location

- Defaults to a `koiShot` folder inside the system Pictures folder (e.g. `Pictures\koiShot` on Windows);
- Change it with "Browse" under Settings → General → Save path;
- Enable "Open folder after save" to open the destination after each save (off by default, so consecutive captures do not steal focus).

## What each feature writes

| Feature | Auto-save | Notes |
| --- | --- | --- |
| Capture (Save / `Alt + S`) | Yes | Writes straight into the save folder; a "Save failed" dialog appears if the write fails — nothing is dropped silently |
| Capture (Copy) | No | Clipboard only |
| Pin | On demand | Only when you use "Save annotated image" or "Save original" |
| Long screenshot | Yes | "Finish" writes `long_*.png` **and** copies it to the clipboard |
| GIF recording | Yes | "Stop recording" encodes and writes `gif_*.gif` |
| Video recording | Yes | "Stop recording" exports and writes `koiShot_*.mp4`; honours "Open folder after save" |
| Table recognition | Yes | "Export Excel" / "Export CSV" writes into the save folder (opened as well when "Open folder after save" is on) |

## Formats

- Captures, long screenshots and pins are saved as **PNG** (lossless);
- Video recordings are **MP4** (H.264 video, optional AAC microphone audio);
- GIF recordings are **GIF**;
- Table recognition exports **xlsx** (with real merged cells) and **CSV** (UTF-8 BOM), and can copy the whole grid as **TSV** (see [OCR & tables](/en/guide/features/ocr-table)).

:::tip
If you usually paste right after capturing, leave "Open folder after save" off; if you archive everything, turn it on to confirm the location after each save.
:::
