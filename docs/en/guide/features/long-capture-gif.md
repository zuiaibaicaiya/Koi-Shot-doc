---
description: 'Long screenshots for pages that do not fit, GIFs for short demos, MP4 for audio or longer clips: how to use all three.'
---

# Long Screenshot, GIF & Recording

Use this page when one screen is not enough, or when you need to show someone how something works. Pick one first:

| What you want | Use |
| --- | --- |
| Save a whole web page or chat log as one image | **Long screenshot** |
| Record a few seconds to drop into chat or a ticket | **GIF** (loops automatically, small file) |
| Audio, narration, or more than 30 seconds | **Video (MP4)** |

All three start the same way: select a region, click a toolbar button, then click Finish — the result is saved automatically.

## Long screenshot

### How to use it

1. Press `F1` and select the starting region (its width becomes the width of the long image);
2. Click **Long capture** on the toolbar. A **control bar** appears near the selection (bottom-right, flipping above if needed) and a **preview window** opens, usually to the right;
3. Click **Start** (▶) on the bar, then **scroll the page** (wheel, scrollbar or trackpad). koiShot stitches as you scroll;
4. The preview shows what has been stitched so far;
5. Click **Finish** (✓): the image is saved as `long_date_time.png` and **copied to the clipboard** — paste it anywhere (see [Saving & output](/en/guide/features/output)).

:::tip
Before Start, the wheel is intercepted inside the selection to prevent accidents: scroll the page into position first, then move the cursor outside the selection. After Start, scrolling works normally. In the ready state you can drag inside the selection to move the capture area.
:::

The bar has three icon-only buttons — hover to see their names: Start ▶ / Finish ✓ / Cancel ✕.

| What happens | What to do |
| --- | --- |
| Changed your mind before starting | Click **Cancel** (✕) or press `Esc` |
| Want to abandon mid-way | Click **Cancel** — everything captured is discarded, no image, no clipboard entry |
| Want to keep what is stitched | Click **Finish**, or press `Esc` (same as Finish while capturing) |
| "No valid scrolling detected" | Click the target window (e.g. the browser) to bring it forward, then Start again and scroll steadily |

### Tips for a clean result

- Scroll steadily with moderate steps, not fast flings;
- Scrolling back up is fine — repeated parts are removed;
- Sticky headers and fixed footers appear only once;
- If a frame cannot be matched, koiShot waits for the next scroll rather than producing a misaligned image;
- Animations, videos and parallax scrolling can misalign — capture in segments; split very long pages too.

## GIF recording

### How to use it

1. Press `F1` and select the region to record (this becomes the GIF frame);
2. Click **Record GIF**. Recording does **not** start yet: a bar appears with the selection outlined in the accent colour, so you can confirm the area;
3. Click **Start recording** on the bar and perform the actions; the bar shows elapsed time and frame count;
4. Click **Finish recording** — the bar shows "Exporting" and the file is saved as `gif_date_time.gif`;
5. Click **Cancel recording** to throw away everything captured.

Bar buttons are icons with hover names: ready state shows start and cancel, recording replaces start with finish, and both are disabled while exporting.

### Before you start

Drag inside the selection in the ready state to move the area (move only, no resize); it locks once recording starts. **Keep the selection on one monitor** — a selection spanning two screens records only the part on one of them.

The bar sits centred below the selection, flips above near the screen bottom, and stays fully visible and clickable at screen edges.

### How long, and which quality

- About **30 seconds** per recording; larger areas run out sooner. At the limit, recording stops automatically and exports what it has. Use video for longer clips;
- Photos, video and gradients come out cleanly, without large colour bands or speckling;
- Under Settings → General → GIF recording:

  | Setting | How to choose |
  | --- | --- |
  | Frame rate | 5–30 fps, default 15 — higher is smoother but larger |
  | Size preset | "High quality" for clarity, "Balanced" for everyday use, "Small size" when a chat or ticket limits attachments (smaller picture, fewer frames, smallest file) |

- The bar also has a frame-rate dropdown: **change it before pressing Start recording and it applies right away**. Once recording starts it is locked. Changing it in Settings only sets the default for the next recording.

## Video recording (MP4)

### How to use it

1. Press `Alt + R`, or click **Record video** on the capture toolbar;
2. Select the region — the recording bar appears in its ready state;
3. Confirm the area and click **Start recording**;
4. The bar shows `REC` and elapsed time. Click **Pause** (❚❚) for a break, then **Resume** (▶): **paused time does not count and no frozen segment appears in the video**;
5. Click **Finish recording**, wait for "Exporting video", and the file is saved as `koiShot_date_time.mp4`;
6. **Cancel recording** deletes the partial file.

The bar uses the same icon buttons and hover hints as GIF, plus Pause / Resume and the frame-rate dropdown.

### Good to know before you record

| Item | What to expect |
| --- | --- |
| Maximum length | **10 minutes** per clip (paused time not counted); it stops and exports automatically |
| Audio | Microphone on by default; if you turn it off or macOS denies it, you get a silent video — the picture is unaffected |
| Frame rate | 10–60 fps, default 30. Choose on the bar before starting; locked afterwards |
| System requirements | Windows 10 1903+ with no extra permission; macOS 12.3+ with Screen Recording granted; on Linux or older machines the picture may drop to about 10 fps |
| Region | Locked after starting; output can differ from the selection by 1 pixel. A selection across monitors drops frames noticeably — stay on one screen |
| HDR screens | Highlights no longer blow out. Changing the system HDR switch mid-recording may leave this clip blank or washed out again — record it once more |
| While exporting | A new recording is refused until the previous one finishes; just wait for the message to disappear |

:::tip
Smaller regions and shorter clips are sharper and smaller. 30–60 fps is plenty for a demo; if recording has not started after about 5 seconds, koiShot reports an encoder timeout — lower the frame rate or turn the microphone off and try again.

On Windows, some semi-transparent floating widgets may be missing from a GIF; normal windows are unaffected.
:::
