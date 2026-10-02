---
description: 'koiShot OCR and table recognition guide: screenshot to text or Excel, export formats and tips.'
---

# OCR & Table Recognition

Recognition runs **locally** (PaddleOCR + ONNX Runtime) and the required models ship **with the installer** — nothing to download, no network needed, and images never leave your machine.

To verify the environment, run "Self-check" under Settings → OCR, or open the models directory to inspect the bundled files.

## OCR (Screenshot to Text)

1. Capture a region containing text;
2. Click "OCR";
3. An "OCR Result" window lists the recognized text with line numbers:
   - Click **Copy** to copy all text (a toast confirms it);
   - **Double-click a line** to copy just that line;
   - If recognition fails, a tray notification appears — retry or reselect a clearer region.

## Table Recognition (Screenshot to Excel)

1. Capture the table area;
2. Click "Table";
3. The result opens as an **editable grid**: fix text in place, merge/split cells manually, and pay attention to low-confidence hints;
4. Output the result either way:
   - Click **Copy** to copy the table as **TSV** — paste into Excel / WPS and it splits into columns automatically;
   - Export to a file as **xlsx / CSV / TSV** (naming rules in [Saving & Output](/en/guide/features/output)).

:::tip
Clean, well-aligned tables give the best results. Keep the selection close to the table and verify before exporting.
:::
