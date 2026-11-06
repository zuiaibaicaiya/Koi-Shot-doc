---
description: 'koiShot screenshot translation: select foreign text, local OCR, Alibaba Cloud machine translation, side-by-side result window, language switching and copying.'
---

# Screenshot Translation

Turn foreign text on screen into your language: **select → local OCR → Alibaba Cloud machine translation → side-by-side result window**. Handy for foreign-language UIs, error messages, papers and overseas sites.

Translation always uses the **original image of the selection** (annotations are excluded) — annotation strokes only hurt recognition, exactly like OCR and table recognition.

## Set up credentials first

Recognition runs locally; the machine translation calls Alibaba Cloud, so you need to enter credentials once:

1. Open **Settings → General → Translation settings** (an Alibaba Cloud account with the machine translation service enabled is required);
2. Fill in **AccessKey ID** and **AccessKey Secret**: both fields are masked by default — click the "eye" button to reveal them temporarily and click again to mask;
3. Choose the **target language** (Chinese / English / Japanese / Korean / French / German / Spanish / Russian) as the default for the Translate button;
4. Click **Save**, then **Test translation** — it sends a real request with one sample sentence and shows the result right in the card.

Changes take effect **immediately**: no restart, no need to capture again. Credentials are stored **only in the local settings file** (the Secret is written in plain text on your machine); the UI masks them by default and they are never sent with a screenshot or recognised text.

## How to translate

1. Press `F1` and select the region containing the foreign text (keep it tight around the text);
2. Click **Translate** on the toolbar (to the right of OCR);
3. The overlay closes and the **translation window** opens on the screen where the selection was:
   - Left: **"Screenshot"**, zoomable and pannable for comparison;
   - Right: **"Translation"**, with a status line going from "Recognising text…" to "Translating into English…" to "Translated into English (source Japanese)";
4. Click **Copy translation**, or right-click the translation to copy a selection or everything.

## Result window actions

| Action | Result |
| --- | --- |
| Wheel over the left image | Zoom the original **100%–800%**, anchored at the pointer |
| Right-drag after zooming | Pan the image (the left button stays for window dragging and text selection); the cursor becomes a hand |
| "Translate to" dropdown | Switch target language; when the source text is already recognised the translation is **redone immediately**, no new capture needed |
| "Copy translation" | Copies the whole translation and shows a "Copied to clipboard" toast |
| Right-click the translation | Copy (selection) / Copy all / Select all |
| Drag the header or empty area | Move the window |
| Drag the bottom-right corner | Resize the window |
| Header "×" or `Esc` | Close the window and release the result; the same window is reused next time |

- Zoom and scroll reset to **100%** on a new image or after closing;
- There are no visible scrollbars — after zooming, pan with the right button;
- The language dropdown is disabled while OCR is running (switching before the source text exists is pointless).

## Status messages

| Message | Meaning & what to do |
| --- | --- |
| "Please fill in the Alibaba Cloud AccessKey ID and AccessKey Secret first." | No credentials yet → fill them in under Settings → Translation settings and verify with "Test translation" |
| "No translatable text was recognised, please select again." | Nothing recognised in the region → select tighter, or check the left image is legible |
| "Text recognition failed: …" | Local OCR error → run OCR on its own once to see the details |
| "Translation failed: …" | The service returned an error — usually **text too long** (about 5000 characters per request), credentials without permission / in arrears, or no network |
| "Translated into English (source Japanese)" | Success; the parentheses show the auto-detected source language |

## How it differs from OCR and tables

| Feature | Network | Output | Best for |
| --- | --- | --- | --- |
| OCR | No (local) | Result window with line numbers, copy all or one line | Extracting the text on screen |
| Translation | Yes (text only) | Side-by-side window showing only the translation | Understanding foreign content |
| Table recognition | No (local) | Editable grid, export xlsx / CSV | Screenshot to Excel |

## Limitations

- **Text only**: pictures, diagrams and icons are not translated; the output is plain text with no original layout;
- **One request, no chunking**: the whole recognised text is sent at once and requests above the `TranslateGeneral` limit (about 5000 characters) are rejected — translate long content in several selections;
- **Original not kept**: the right pane shows only the translation; use the OCR button in a second window when you want the source text side by side;
- **Quality depends on OCR**: vertical text, decorative fonts, low contrast or occluded text recognise poorly and translate just as poorly — check the left image first;
- **Network required**: failures are reported without automatic retry; switching language, selecting again or pressing Translate again all start a new request;
- Eight target languages are available: Chinese, English, Japanese, Korean, French, German, Spanish, Russian.

:::tip
Recognition is always local and **images are never uploaded**; only the recognised text is sent to Alibaba Cloud machine translation. Keep that in mind for sensitive content.
:::

:::tip
When a translation looks wrong, check the left image first — most "bad translations" start as bad recognition, and a tighter selection usually fixes it.
:::
