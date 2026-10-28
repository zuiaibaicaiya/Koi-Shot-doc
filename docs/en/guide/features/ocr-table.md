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

**Automatic orientation correction**: upside-down text lines (0°/180°) are flipped individually, and a whole image rotated by 90°/270° is corrected before detection. This is automatic; if the corresponding model is missing the step is skipped without affecting anything else.

Typical uses: extracting text from images, copying non-selectable text (dialogs, scans, video subtitles, PDF screenshots).

## Table recognition (screenshot to Excel)

1. Press `F1` and select the table region (keep the selection tight to the table);
2. Click **Table** on the toolbar;
3. The **"Table recognition"** window shows an **editable grid**:

   - **Double-click a cell** to edit its text;
   - Select at least two adjacent cells and click **Merge**; select a merged area and click **Split**;
   - **Low-confidence** cells get a tinted background with a "Confidence x, please verify" tooltip;
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

The feature aims to give you a **usable first draft** for three things: **text, merges and size** (column widths and row heights follow the source image). Font family/size, exact colours, formula semantics and conditional formats are out of scope.

::::tip
The cleaner the table and its rules, the better the result. Complex backgrounds (dark themes, gradients, colour blocks) are normalised before line detection, but always verify before exporting; skewed or perspective-distorted tables should be captured straight on.
::::

## Quick troubleshooting

| Symptom | What to do |
| --- | --- |
| Slow first recognition | Models are loaded on first use and then stay resident; the overlay preloads them, so normally nothing to do |
| "Model unavailable" | Run Settings → OCR self-check, inspect the models folder, reinstall if files are missing |
| Garbled OCR output | Only PP-OCRv6 models are supported; older model files in the folder cause an explicit error — remove them |
| Rows/columns wrong, merges lost | Select tighter around the table and fix with Merge / Split before exporting |
