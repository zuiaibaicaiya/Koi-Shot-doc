---
description: 'Copy text out of screenshots and turn tables into editable Excel files: how to use OCR, table recognition and QR decoding.'
---

# OCR & Table Recognition

This page covers two jobs: **copying text you cannot select** and **turning a table in a screenshot into an editable Excel file**. Select a region, click a button — no network, no account, and the image never leaves your machine.

Like a pin, the result window stays on top, so switching to another app will not hide it while you copy. If nothing happens, go to Settings → General → OCR self-check and click **Run self-check**, or "Open models folder" to check the files are there.

## Copy text out of a picture

1. Press `F1` and select the region with text;
2. Click **OCR** on the toolbar;
3. After a moment the result window opens: line numbers on the left, recognised text on the right;
4. Click **Copy** for everything, or **double-click one line** to copy just that line (line numbers are not copied).

| What you want | What to do |
| --- | --- |
| Copy all the text | Click "Copy" |
| Only one line | Double-click that line |
| Close the window | Click × or press `Esc`; if recognition is still running, the window reopens when the result arrives |
| Recognition failed | A tray notification appears — select a sharper region and retry |

:::tip
If the text is upside down, vertical or rotated, straighten the picture and keep the selection tight before recognising — it makes a big difference. Text in everyday desktop screenshots is upright, so you normally need to do nothing.
:::

Handy for dialogs, scans, video subtitles and PDF screenshots where the text cannot be selected.

When you need to **understand** foreign text rather than extract it, click **Translate** on the toolbar: it translates the recognised text and shows the image next to the result (see [Screenshot translation](/en/guide/features/translate)).

## Turn a table screenshot into Excel

1. Press `F1` and select the table tightly, without extra content around it;
2. Click **Table** on the toolbar;
3. The result window shows a **grid you can edit**:

   - Double-click a cell to change its text; column headers are **A / B / C**, matching the exported file;
   - Select at least two cells → click **Merge** (their text is joined into the top-left cell); select a merged cell → click **Split** to undo the merge. **Merge cannot be undone**, so check first;
   - Uncertain cells get a tinted background with a "please verify" tooltip; cells you edited yourself are no longer flagged.
4. When it looks right, pick how to take it away:

   | Click | What you get |
   | --- | --- |
   | Copy TSV | The whole table on the clipboard; pasting into Excel / Sheets splits it into columns |
   | Export Excel | `table_date_time.xlsx`, with real merged cells preserved |
   | Export CSV | `table_date_time.csv`, opens cleanly in Excel |

Files land in the folder from Settings → General → Save path; with "Open folder after save" on, that folder opens automatically (see [Saving & output](/en/guide/features/output)). **The export is exactly what the window shows** — your edits, merges and splits included.

### When table recognition works best

- Regular tables with clear rules are the most accurate, including merged cells;
- Tables without rules still produce a grid from the text positions, but you have to add merges yourself;
- Dark themes, gradients and colour blocks are handled automatically, but verify before exporting;
- You get an **editable first draft**: text, merges and column/row sizes follow the image. Fonts, exact colours and formulas are not restored.

### Good to know

- A table needs **at least 2 rows and 2 columns**;
- Diagonal headers, nested tables and vertical text get flattened or merged;
- Excel exports store numbers as text, so order IDs, phone numbers and leading zeros survive;
- Straighten a skewed or perspective-distorted table before capturing it.

:::tip
A tight selection with clear rules saves the most work. For complex backgrounds or tilted tables, spend half a minute checking the grid before exporting.
:::

## Scan a QR code

Select a QR code, click one button, and the content is on your clipboard — no result window.

### During a capture

1. Press `F1` and select the code;
2. Click **QR code** on the toolbar (to the right of OCR and Translate);
3. A toast shows the decoded content and the overlay closes — **just paste it**. Annotations added afterwards are not included.

### In a pin window

1. Click **QR code** on the pin toolbar — the cursor becomes a crosshair;
2. Drag a box around the code and release to decode and copy;
3. Click the button again or press `Esc` to leave the mode. A tiny box will not decode — frame the whole code.

### Good to know

- **Multiple codes** in one selection are all decoded, joined line by line, with duplicates removed;
- Only the **QR family** is supported (including Micro QR) — 1D barcodes and DataMatrix are not;
- You get the raw text: no links are opened and Wi-Fi / contact cards are not parsed;
- Very small codes are enlarged automatically before decoding;
- On failure the reason is shown and your existing clipboard content is **not overwritten**;
- If this build lacks the component, the button says "QR code recognition is not enabled in this build".

## If it didn't work

| What you see | Try this |
| --- | --- |
| First recognition is slow | Models load on first use and then stay ready — normally nothing to do |
| "Model unavailable" | Run Settings → OCR self-check → "Run self-check", or open the models folder; reinstall if files are missing |
| Garbled text | Older model files in the folder are the usual cause — remove them |
| Wrong rows/columns or lost merges | Select tighter around the table, then fix it with Merge / Split |
| QR code not decoded | Make sure it is a QR-family code, frame it completely, avoid extra surroundings |
