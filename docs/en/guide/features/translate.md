---
description: 'Foreign text on screen? Select it and get a translation: pick a provider, enter credentials, switch languages and copy the result.'
---

# Screenshot Translation

When you hit a foreign-language UI, error message or paper excerpt, select it and get the translation: **select → recognise the text → translate → side-by-side result**. It always uses the original image of the selection; annotations added afterwards are not included.

The result window stays on top, so switching to another app will not hide it while you read along.

## First time: pick a provider and enter credentials

Translation is done by **Alibaba Cloud Machine Translation** or **Baidu Translate**. Pick either one and enter its credentials once (recognising the text still happens on your machine):

1. Open **Settings → General → Translation settings** and choose **Alibaba Cloud Machine Translation** or **Baidu Translate** in the **Provider** dropdown;
2. Fill in the fields shown for that provider (both are masked by default; click the "eye" to reveal them temporarily):
   - Alibaba Cloud: **AccessKey ID** and **AccessKey Secret** from an account with machine translation enabled;
   - Baidu Translate: **APP ID** and **API Key** for the LLM text translation service on the Baidu Translate platform;
3. Pick the **target language** (Chinese / English / Japanese / Korean / French / German / Spanish / Russian) as the default for the result window;
4. Click **Save**, then **Test translation** — it sends one real sample sentence to the selected provider and shows the outcome in the card.

Switching providers swaps the input fields below it; both sets of credentials are kept, so switching back needs no retyping. Changes apply immediately, with no restart and no need to capture again. Credentials stay in the local settings on this computer and are never sent along with a screenshot or recognised text.

## How to translate

1. Press `F1` and select the foreign text tightly, without extra surroundings;
2. Click **Translate** on the toolbar (to the right of OCR);
3. The overlay closes and the **result window** opens: "Screenshot" on the left, "Translation" on the right, with a status line going from "Recognising text…" → "Translating into English…" → "Translated into English (source Japanese)";
4. Click **Copy translation** at the bottom, or right-click the translation to copy a selection or everything.

## What you can do in the result window

| What you want | What to do |
| --- | --- |
| Read small print in the image | Wheel over the left image (100%–800%, anchored at the pointer) |
| Look at another part when zoomed | **Right-drag** to pan |
| Change the target language | Use the "Translate to" dropdown — once the text is recognised it **re-translates immediately**, no new capture |
| Copy the translation | Click "Copy translation", or right-click for Copy / Copy all / Select all |
| Move or resize the window | Drag the header, or the bottom-right corner |
| Close it | Click × or press `Esc`; the same window is reused next time |

Zoom and position reset to 100% for a new image or after closing; there are no scrollbars, so pan with the right button. The language dropdown is greyed out while recognition is running — wait for the source text.

:::warning
**Closing the window before the result arrives discards that translation** — it will not pop up again, so click Translate once more. OCR and table recognition behave differently: closing them does not cancel recognition, and the window reopens when the result arrives.
:::

## What the status line means

| Message | What to do |
| --- | --- |
| "Please fill in the Alibaba Cloud AccessKey ID and AccessKey Secret first." / "Please fill in the Baidu Translate APP ID and API Key first." | Fill in the credentials for the selected provider under Settings → Translation settings and verify with "Test translation" |
| "No translatable text was recognised, please select again." | Select tighter, or check the left image is legible |
| "Text recognition failed: …" | Run OCR on its own once to see the details |
| "Translation failed: …" | Usually text too long, credentials without permission / in arrears, or no network |
| "Translated into English (source Japanese)" | Success; the parentheses show the detected source language |

## How it differs from OCR and tables

| What you want | Use | You get |
| --- | --- | --- |
| Extract the text as-is | OCR | Result window with line numbers, copy all or one line |
| Understand foreign text | Translation | Image and translation side by side, translation only |
| Turn a table into Excel | Table recognition | Editable grid, export xlsx / CSV |

## Good to know

- **Text only**: pictures, diagrams and icons are not translated; the output is plain text without the original layout;
- **One block per request**: about 5000 characters on Alibaba Cloud, and Baidu recommends staying under 2000 — translate long content in several selections;
- **No original in the right pane**: use the OCR button in a second window if you want to compare;
- **Quality follows recognition**: vertical text, decorative fonts, low contrast and occluded text recognise poorly — check the left image first;
- **Network required**: failures are reported without an automatic retry; switching language or clicking Translate again starts a new request;
- Eight target languages are available: Chinese, English, Japanese, Korean, French, German, Spanish, Russian.

:::tip
Recognition always runs locally and **images are never uploaded**; only the recognised text is sent for translation. Keep that in mind for sensitive content. A translation that looks wrong is usually a recognition error — a tighter, cleaner selection normally fixes it.
:::
