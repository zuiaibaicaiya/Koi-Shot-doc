---
description: 'Keep a screenshot always on top for reference: create a pin, zoom and fade it, annotate further, and copy text straight off the image.'
---

# Pin to Desktop

Use a pin when you want a screenshot to stay visible while you work in other windows. It becomes a small **always-on-top window** you can still annotate — handy for reference images, comparisons and quick notes.

## Create a pin

Any of these:

- After selecting a region, click **Pin** on the capture toolbar;
- Press `Alt + P`: the region is pinned as soon as you release the mouse (no toolbar);
- Tray menu → "Pin to desktop".

## What you can do with a pin

| What you want | What to do |
| --- | --- |
| Move it | Drag the image (right to a screen edge if you like) |
| Zoom in / out | Wheel (0.3–4.0×); the current percentage is on the toolbar |
| Back to original size | Click the zoom percentage on the toolbar |
| See what is behind it | `Alt` + wheel lowers opacity (5%–100%) |
| Close this pin | `Esc` / `Ctrl + W` (`Cmd + W`), or the "Close" button |

:::tip
If a pin blocks your work, lower its opacity with `Alt` + wheel instead of moving it around. Rotation and mirroring are not supported in this version.
:::

The toolbar finds its own place: normally below the image, flipping above when there is no room, and clamped inside the screen at edges so every button stays clickable. With a very large image that no longer fits above or below, it may cover a small part of the picture. It hides while you drag the pin and returns on release.

## Toolbar and right-click menu

| Button | Purpose |
| --- | --- |
| Nine annotation tools | Keep annotating on the pin, same as during capture (including `Shift` for straight lines) — see [Annotation](/en/guide/features/annotation) |
| Undo / Redo | Step back or forward through annotations |
| Copy | Copy the original image (no annotations) to the clipboard |
| QR code | Enter selection mode; box a QR code to decode and copy it |
| Save annotated image | Save the **composited** image |
| Zoom percentage | Current zoom; click to reset to 100% |
| Hide toolbar / Close | Leave just the image / close the pin |

Right-clicking a pin also offers "Save original" (the clean screenshot), "Hide / Show toolbar", "Hide / Show shadow" and "Close". Where files go and how they are named: [Saving & output](/en/guide/features/output).

:::tip
Use "Save annotated image" to show someone the marked-up result; right-click "Save original" for a clean copy. One pin, two outputs.
:::

## Drag over text to copy it

With **no annotation tool active**, select text right on the image as you would on a web page:

1. Hover over text — the cursor becomes an **I-beam** with a light-blue dashed hint;
2. Drag across the words; each selected line lights up in translucent blue — **what lights up is what gets recognised**;
3. Release: the text is recognised and **copied to the clipboard**. A toast at the bottom shows a short preview, so you can check the result without pasting.

Selection is textual, like a browser: a contiguous run of text, not the pixels under the pointer. Within one line it runs from press point to release point; across lines the first line runs to its end, middle lines are taken whole, and the last line runs to the release point. Up or down gives the same result, and blank space above or below snaps to the nearest line.

| What happens | What it means |
| --- | --- |
| Barely moved the mouse | Treated as a mis-click — drag further across the text |
| Pressed blank space or used the right button | No text selection; it just moves the pin |
| An annotation tool is active | The same spot draws an annotation |
| Selected again while recognising | "Recognising, please wait…" |
| Nothing recognised | "No text recognised" |
| Nothing happens at all | Check the recognition environment under Settings → OCR self-check; moving the pin and everything else still works |

Two caveats: recognition reads the **original image**, so text hidden under mosaic / blur is still readable; and the result is an **approximate whole run** that may include a few extra characters at either end — a single-line selection is the most precise.

## Close a pin

Click "Close" on the toolbar, choose "Close" from the context menu, or press `Esc` / `Ctrl + W` (`Cmd + W`). While typing a text annotation, `Esc` only exits the editor — it will not close the pin.
