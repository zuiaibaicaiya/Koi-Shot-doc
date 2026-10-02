---
description: koiShot saving and output guide: save path, file naming rules, clipboard copy and open-folder option.
---

# Saving & Output

Captures, long screenshots, GIFs and table exports all need to "land" somewhere — this page explains where files go and how they are named.

## Output Options

| Option | Description |
| --- | --- |
| Copy to clipboard | Paste directly into chat, docs or tickets — no file created |
| Save to file | Written to the folder set in Settings → General → Save path |
| Pin to desktop | Shown as an always-on-top window; save later from the pin window (see [Pin](/en/guide/features/pin)) |

## File Naming

All saved files follow a `name_date_time` pattern (24-hour). Saving multiple items within the same second appends `_1`, `_2` etc., so files **never overwrite** each other:

| Content | Example |
| --- | --- |
| Capture / pin save | `koiShot_20261002_153045.png` |
| Long screenshot | `long_20261002_153045.png` |
| GIF recording | `gif_20261002_153045.gif` |
| Table export | `table_20261002_153045.csv` (same for xlsx / tsv) |

## Default Save Location

- By default files go to the `koiShot` subfolder under your system Pictures folder (e.g. `Pictures\koiShot` on Windows);
- Change it via Settings → General → Save path ("Browse");
- With "Open folder after save" enabled, the folder opens automatically after each save (off by default, to avoid stealing focus during rapid captures).

## File Formats

- Captures and long screenshots are saved as **PNG** (lossless, ideal for annotated screenshots);
- GIF recordings are saved as **GIF**;
- Table recognition exports to **xlsx (Excel) / CSV / TSV** (see [OCR & Table Recognition](/en/guide/features/ocr-table)).

:::tip
If you mostly paste captures directly, keep "Open folder after save" off. If you archive screenshots, turn it on to confirm each file's location right after saving.
:::
