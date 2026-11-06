---
description: 'koiShot local OCR and table recognition: screenshot to text, screenshot to Excel, result window actions, export formats and tips.'
---

# OCR & Table Recognition

koiShot ships a **local, offline** engine (PaddleOCR PP-OCRv6 + ONNX Runtime). Models come with the installer — nothing to download, no network, and images are never uploaded.

To check the environment, open Settings → General → OCR self-check and click **Run self-check**, or "Open models folder" to inspect the bundled models.

## OCR text recognition

1. Press `F1` and select the region containing text;
2. Click **OCR** on the toolbar;
3. The **"OCR result"** window opens with **line numbers** on the left and recognised text on the right;
4. Copy what you need: **Copy** copies everything, **double-click a line** copies just that line (line numbers are not copied).

| Action | Result |
| --- | --- |
| "Copy" button | Copy all recognised text |
| Double-click a line | Copy only that line |
| Close button / `Esc` | Close the result window and release the result (closing while recognition is running does not cancel it; the window pops up again when the result arrives) |
| Recognition failed | A tray balloon reports the failure; retry or select a sharper region |

**Automatic orientation correction (on by default)**: koiShot can correct a whole image rotated by 90°/270° before detection and flip upside-down text lines (0°/180°) individually. Whole-image rotation is enabled by default (turn it off with the environment variable `PADDLEOCR_DOC_ORI=0`), but the helper models are **not bundled with the installer**; desktop screenshots are always upright and rotation is skipped when confidence is low, so it rarely runs in practice. Missing models are skipped silently and normal recognition is unaffected.

Typical uses: extracting text from images, copying non-selectable text (dialogs, scans, video subtitles, PDF screenshots).

When you need to **understand foreign text** rather than extract it, use **Translate** on the toolbar: it reuses the same local OCR and sends the text to Alibaba Cloud machine translation, with the image and the translation side by side (see [Screenshot translation](/en/guide/features/translate)).

## Table recognition (screenshot to Excel)

1. Press `F1` and select the table region (keep the selection tight to the table);
2. Click **Table** on the toolbar;
3. The **"Table recognition"** window shows an **editable grid**:

   - **Double-click a cell** to edit its text; column headers show Excel-style **A / B / C** labels matching the exported file;
   - Select at least two adjacent cells and click **Merge**; select a merged area and click **Split**. **Merge cannot be undone**: texts of merged cells are concatenated into the top-left cell — check before merging;
   - **Low-confidence** cells get a tinted background with a "Confidence x, please verify" tooltip; the rating is driven by the least certain fragment inside the cell, and cells you edited or filled yourself are no longer flagged.
4. Export any way you like:

   | Button | Result |
   | --- | --- |
   | Copy TSV | Copies the grid as TSV; pasting into Excel / Sheets splits it into columns automatically |
   | Export Excel | Writes `table_date_time.xlsx`, preserving **real merged cells** |
   | Export CSV | Writes `table_date_time.csv` (UTF-8 BOM, opens cleanly in Excel) |

- Files go into the folder set under Settings → General → Save path; with "Open folder after save" enabled the folder is opened as well (see [Saving & output](/en/guide/features/output));
- **What you export is what the window currently shows** — your edits and merges are included, not the raw recognition result.

### How it works & limits

Three recovery strategies are tried in order of authority; the first one that produces a grid wins:

1. **Structure model** (optional, off by default): recognises complex table structure; skipped when the model is absent;
2. **Line detection** (on by default): detects horizontal/vertical rules and derives cells and merges — best for ruled tables;
3. **Geometric fallback**: clusters text into rows and columns, works without rules but cannot express merges.

The feature aims to give you a **usable first draft** for three things: **text, merges and size** (column widths and row heights follow the source image at 100% zoom). Font family/size, exact colours, formula semantics and conditional formats are out of scope.

### Known boundaries

- A table needs **at least 2 rows and 2 columns** to be recognised (no upper limit);
- Diagonal headers, nested sub-tables and vertical text are not supported (they get flattened or merged);
- Complex backgrounds (dark themes, gradients, colour blocks) and low-contrast rules are handled with background normalisation, dark-theme inversion and local-contrast line detection, so even very light grey rules are picked up; only lines whose signal is genuinely too weak are missed, causing a silent fallback to geometric recovery, which cannot express merges;
- Exported Excel stores **numbers as text**: order IDs, phone numbers and leading zeros are preserved; values that parse cleanly (thousands separators, percentages, currency, dates) are converted to real numbers.

:::tip
The cleaner the table and its rules, the better the result. Complex backgrounds (dark themes, gradients, colour blocks) are normalised before line detection, but always verify before exporting; skewed or perspective-distorted tables should be captured straight on.
:::

## QR code recognition

Decode QR codes in the selection and copy the content **straight to the clipboard** — no result window.

### During a capture

1. Press `F1` and select the region containing the QR code;
2. Click **QR code** on the toolbar (to the right of OCR and Translate);
3. Decoding uses the **original image** at capture time (annotations are not included). On success a toast shows the decoded content and the capture overlay closes automatically; the content is already on your clipboard.

### In a pin window

1. Click **QR code** on the pin toolbar to enter selection mode (crosshair cursor);
2. Drag a rectangle around the QR code and release to decode and copy;
3. Click the button again or press `Esc` to exit the mode; a barely-moved drag is treated as accidental and ignored.

### Behaviour & limits

- **Multiple codes** in the selection are all decoded; contents are joined line by line and the count is reported; duplicates are removed;
- Only the **QR family** is supported (including Micro QR / Rectangle QR); 1D barcodes and DataMatrix / Aztec / PDF417 are not;
- Content is copied **as raw text**: URLs, Wi-Fi credentials and contact cards are not parsed and no links are opened;
- Very small codes are upscaled automatically before decoding;
- On failure the reason is shown and the previous clipboard content is **not overwritten**;
- If the build ships without the decoding component, the button remains and reports "QR code recognition is not enabled in this build".

## Quick troubleshooting

| Symptom | What to do |
| --- | --- |
| Slow first recognition | Models are loaded on first use and then stay resident; the overlay preloads them, so normally nothing to do |
| "Model unavailable" | Run Settings → OCR self-check, inspect the models folder, reinstall if files are missing |
| Garbled OCR output | Only PP-OCRv6 models are supported; older model files in the folder cause an explicit error — remove them |
| Rows/columns wrong, merges lost | Select tighter around the table and fix with Merge / Split before exporting |
| QR code not decoded | Make sure it is a QR-family code (1D barcodes / DataMatrix are not supported); frame the code completely and avoid extra surrounding content |
