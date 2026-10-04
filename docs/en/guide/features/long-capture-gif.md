---
description: 'koiShot long screenshot and GIF recording guide: scroll stitching, size presets.'
---

# Long Screenshot & GIF

## Long Screenshot

1. Start a capture (`F1`) and select the starting region;
2. Click "Long capture" on the toolbar;
3. **Scroll the original content** — koiShot detects scrolling and stitches automatically;
4. A control bar and a live **preview window** show the stitched result;
5. Finish to copy the long image, then save it as a PNG (naming rules in [Saving & Output](/en/guide/features/output)).

:::tip
Scroll steadily and not too fast. Animated pages may stitch imperfectly.
:::

## GIF Recording

1. Start a capture (`F1`) and select the recording region (the GIF frame area);
2. Click "Record GIF" on the toolbar — a **control bar** appears in the ready-to-start state. Recording has **not started yet**; the red selection border stays visible so you can confirm or adjust the region;
3. Click the "Start recording" button on the control bar to begin capturing, then perform the actions to demonstrate. The bar shows status, elapsed time and captured frame count live;
4. Click "Stop recording" — the bar shows "Exporting" and the GIF is generated and saved automatically as `gif_date_time.gif`;
5. Changed your mind mid-way? Click "Cancel recording" to discard captured frames without generating a file.

### Control Bar Position

The bar sits below the selection, right-aligned, and reflows automatically when space is tight:

- Near the bottom edge of the screen, it flips above the selection;
- If the selection covers the taskbar (menu bar & Dock on macOS), it avoids the system area;
- In extreme cases (near full-screen recordings) it clamps back inside the screen and always stays fully visible.

### Recording Limits

Frame count and total pixels are both limited, so files stay small:

- Frame limit = fps × 30 — about **30 seconds** per recording (450 frames at the default 15 fps);
- The larger the selected region, the fewer frames allowed (by total pixel budget); reaching the limit **stops recording automatically** with a notice;
- Keep the region tight around the content you want to show instead of full screen.

### Frame Rate & Size Preset

Adjust in Settings → GIF recording (see [Settings & Tray](/en/guide/settings)):

| Setting | Description |
| --- | --- |
| Frame rate | 5 / 10 / 15 / 20 / 25 / 30 fps (default 15). Higher = smoother but larger files; lower fps suits static demos |
| Size preset | High quality (finer, larger) / Balanced (recommended) / Small size (chat or ticket attachments with size limits) |
