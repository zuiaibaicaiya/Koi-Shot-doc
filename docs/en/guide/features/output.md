---
description: 'Where captured files go, what they are called and how to change it; what copy, save and pin each give you.'
---

# Saving & Output

After a capture you either paste it somewhere or keep a file. This page tells you **where files go, what they are called, and how to change it** — plus what each feature hands you.

## Three ways to take the result

| What you want | What to do | You get |
| --- | --- | --- |
| Send it into chat or a document | Click "Copy" | It is on the clipboard; no file is created |
| Keep a file | Click "Save" or press `Alt + S` | It lands in the folder from Settings → General → Save path |
| Keep it visible | Click "Pin" | An always-on-top window; save a file from it later if needed (see [Pin](/en/guide/features/pin)) |
| Extract text / tables / a translation | Click OCR, Table or Translate | A result window where you copy or export (see [OCR & tables](/en/guide/features/ocr-table), [Screenshot translation](/en/guide/features/translate)) |

## What files are called

Everything uses `name_date_time` (24-hour clock). Several files in the same second get `_1`, `_2` appended, so **nothing is overwritten**:

| Content | Example |
| --- | --- |
| Capture / pin | `koiShot_20261002_153045.png` |
| Video recording | `koiShot_20261002_153045.mp4` |
| Long screenshot | `long_20261002_153045.png` |
| GIF | `gif_20261002_153045.gif` |
| Table export | `table_20261002_153045.xlsx` or `.csv` |

## Where they go, and how to change it

- By default, a `koiShot` folder inside your system Pictures folder;
- To change it: "Browse" under Settings → General → Save path;
- To open the folder after every save: enable **"Open folder after save"** (off by default, so consecutive captures do not keep popping windows).

## Does each feature save a file automatically?

| Feature | Auto-save? | What you get |
| --- | --- | --- |
| Capture (Save / `Alt + S`) | Yes | Written straight to the save folder; a failed write shows a message rather than silently dropping it |
| Capture (Copy) | No | Clipboard only |
| Pin | Only if you ask | "Save annotated image" or right-click "Save original" creates the file |
| Long screenshot | Yes | "Finish" saves `long_*.png` **and copies it to the clipboard** |
| GIF | Yes | "Finish recording" produces `gif_*.gif` |
| Video recording | Yes | "Finish recording" produces `koiShot_*.mp4` |
| Table recognition | Yes | "Export Excel" / "Export CSV" writes into the save folder |
| Screenshot translation | No | Translation only — copy it with the button or the context menu |

## Formats

- Captures, long screenshots and pins: **PNG**, lossless, annotations included;
- Video recordings: **MP4**, optionally with microphone audio, playable in any player;
- GIF recordings: **GIF**, loops automatically in chat;
- Tables: **Excel (`.xlsx`, with merged cells)** or **CSV**; you can also copy the whole grid and paste it into Excel / Sheets with the columns already split.

:::tip
If you usually paste right after capturing, leave "Open folder after save" off. If you archive everything, turn it on to see where each file landed.
:::
