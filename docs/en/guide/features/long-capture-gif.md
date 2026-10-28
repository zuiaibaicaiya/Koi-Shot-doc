---
description: 'koiShot long screenshot, GIF recording and MP4 video recording: scroll stitching, recording bar, duration and size limits, frame rate settings.'
---

# Long Screenshot, GIF & Recording

## Long screenshot

When a page does not fit on one screen, capture it by scrolling and let koiShot stitch the frames.

### Steps

1. Press `F1` and select the starting region (the stitched image keeps this width);
2. Click "Long capture" on the toolbar — a **control bar** and a **"Long screenshot preview"** window appear; the bar reads "Click Start, then scroll to stitch automatically";
3. Click **Start**, then **scroll the original content** (wheel, scrollbar or trackpad); koiShot detects scrolling and appends frames;
4. The bar and preview show the captured frame count and the stitched result live;
5. Click **Finish** when done: the image is **saved as `long_date_time.png` and copied to the clipboard** (see [Saving & output](/en/guide/features/output)).

- Changed your mind before starting: click "Close" or press `Esc`;
- Pressing `Esc` while capturing stops and produces the image, like "Finish";
- If no scrolling is detected, koiShot reports "No valid scrolling detected" — click the target window first (e.g. the browser) and retry.

### Tips

- Scroll steadily with moderate steps;
- Sticky headers and fixed footers appear only once in the stitched image;
- Best for static content; animations, videos or parallax scrolling may misalign — capture such pages in segments;
- Very long pages produce very large images; split them if needed.

## GIF recording

Record a region as an animated GIF — ideal for short interactions in chat or tickets.

### Steps

1. Press `F1` and select the recording region (the GIF frame);
2. Click "Record GIF". Recording does **not** start immediately: the bar appears in the **ready** state, the red selection border stays visible, timer and frame count are 0 — confirm or adjust the region now;
3. Click **Start recording** to begin capturing, then perform the actions to demonstrate; the bar shows status, elapsed time and captured frames;
4. Click **Stop recording**; the bar shows "Exporting" and the GIF is generated as `gif_date_time.gif`;
5. Click **Cancel recording** to discard captured frames without producing a file.

### Control bar position

The bar sits below the selection, right-aligned, and reflows automatically:

- Near the bottom edge, it flips above the selection;
- If the selection covers the taskbar (menu bar / Dock on macOS), the bar avoids the system area;
- In extreme cases (near full-screen) it is clamped inside the screen and stays fully visible.

### Limits

GIF has both a **frame budget** and a **total-pixel budget**:

- Frame limit = fps × 30 — about **30 seconds** (450 frames at the default 15 fps);
- The larger the region, the fewer frames allowed; hitting either budget **stops recording automatically**;
- Keep the region tight around the content.

### Frame rate & size preset

Settings → General → GIF recording (see [Settings & tray](/en/guide/settings)):

| Setting | Description |
| --- | --- |
| Frame rate | 5 / 10 / 15 / 20 / 25 / 30 fps (default 15) |
| Size preset | High quality (finer dithering, larger files) / Balanced (recommended) / Small size (for size-limited attachments) |

## Video recording (MP4)

Choose video when you need **audio**, a **longer clip** or **better quality**.

### Steps

1. Press `Alt + R` (or click "Record video" on the capture toolbar);
2. Select the region — the shortcut entry shows the recording bar in its **ready** state as soon as you release the mouse; the toolbar entry shows it after clicking the button;
3. Click **Start recording**; the bar shows `REC`, elapsed seconds and frames;
4. Click **Stop recording**; the bar shows "Exporting video" and the file is saved as `koiShot_date_time.mp4`;
5. **Cancel recording** discards the partial file.

### Rules & limits

| Item | Description |
| --- | --- |
| Duration | Up to **10 minutes** per clip; recording stops and exports automatically at the limit |
| Frame rate | 10–30 fps (default 30), under Settings → General → Recording (MP4) |
| Audio | Microphone capture is on by default; if disabled or unauthorized, koiShot records silently — the video is unaffected |
| Region | Locked once recording starts (encoding resolution is fixed) |
| Capture | Native capture on macOS (30 fps); otherwise a compatible fallback (~10 fps) |

::::tip
Smaller regions and shorter clips give sharper, smaller results. Use GIF for a few seconds of looping demo; use video when you need narration, audio, or more than 30 seconds.
::::
