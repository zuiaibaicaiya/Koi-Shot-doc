---
description: 'koiShot pin guide: keep a screenshot always on top, zoom and opacity, pin toolbar and context menu, drag-to-copy text with OCR.'
---

# Pin to Desktop

## What a pin is

A pin turns a screenshot into an **always-on-top floating window** — perfect for keeping a reference visible while working elsewhere. Pins sit above normal windows (they may cover the taskbar / Dock) and include the full annotation toolbar.

## Creating a pin

Any of these:

- Click "Pin" on the capture toolbar after selecting a region;
- Press `Alt + P`: the capture is pinned as soon as you release the mouse (no toolbar);
- Tray menu → "Pin to desktop".

## Pin window

| Action | Result |
| --- | --- |
| Drag the image | Move the pin (drag it to any screen edge, even over the taskbar / Dock) |
| Wheel | Zoom (0.3–4.0×); the current percentage is shown on the toolbar |
| `Alt` + wheel | Adjust opacity (5%–100%) |
| `Esc` / `Ctrl + W` (`Cmd + W`) | Close this pin |

- While dragging, the toolbar hides temporarily so it never blocks the drag; it comes back on release;
- The toolbar sits centred below the content and **flips above** when there is no room; when the image is narrower than the toolbar and sits at a screen edge, the toolbar is clamped horizontally so every button stays clickable;
- Pins never steal focus, so clicking toolbar buttons does not interrupt text annotation input; while typing, `Alt` + wheel does not change opacity (the wheel adjusts font size then).

## Pin toolbar

| Button | Purpose |
| --- | --- |
| Nine annotation tools | Annotate on the pin exactly as during capture — see [Annotation](/en/guide/features/annotation) |
| Undo / Redo | Same behaviour as the capture overlay |
| Copy | Copy the pin image to the clipboard (original, without annotations) |
| QR code | Enter selection mode; drag a rectangle around a QR code to decode and copy its content |
| Save annotated image | Save the **composited** image (including annotations) |
| Zoom percentage | Current zoom level (0.3–4.0) |
| Hide toolbar | Collapse the toolbar for a clean image; re-show from the context menu |
| Close | Close the pin |

## Pin context menu

Right-click a pin:

| Item | Purpose |
| --- | --- |
| Copy | Copy the pin image to the clipboard |
| Save original | Save the **un-annotated** original screenshot |
| Hide / Show toolbar | Collapse or expand the annotation toolbar |
| Hide / Show shadow | Toggle the drop shadow |
| Close | Close the pin |

File names and locations follow the shared rules in [Saving & output](/en/guide/features/output).

## Drag over text to copy it (no tool selected)

With **no annotation tool active**, you can select text directly on the pin:

1. Hover over text — the cursor becomes an **I-beam** and a light blue dashed hint appears;
2. Drag across the text you want; each selected line is highlighted in translucent blue (**what lights up is exactly what will be recognised**);
3. On release the text is recognised and **copied to the clipboard**, with a toast such as "Copied N lines to the clipboard".

The selection is textual, like Word or a browser — a **contiguous run of text**, not the pixels under the pointer:

| Case | Selected range |
| --- | --- |
| Single line | From the press point to the release point |
| First line of a multi-line drag | Press point → end of line |
| Middle lines | Whole lines |
| Last line | Start of line → release point |

- Dragging upwards or downwards gives the same result;
- Pressing in blank space above or below snaps to the nearest line;
- A drag shorter than 4 display pixels counts as a mis-click;
- With an annotation tool active, the same spot draws an annotation instead;
- Selecting again while recognition is running shows "Recognising, please wait…";
- An empty result shows "No text recognised".

Recognition caveats:

- Recognition runs on the **original image**: text covered by mosaic / blur annotations is still recognised from underneath;
- The result is an **approximate whole-word superset** of what you selected: a few extra characters may appear at either end; selection is exact only within a single line — a diagonal drag includes the full start/end of every line it crosses.

## Closing a pin

- The "Close" button on the toolbar;
- "Close" in the context menu;
- `Esc` or `Ctrl + W` (`Cmd + W` on macOS).

While editing a text annotation, `Esc` only exits the editor — it will not close the pin.

:::tip
Save annotated image → for showing the highlighted result; right-click "Save original" → for delivering the clean screenshot. One pin, two outputs.
:::

:::tip
Pins stay on top. If a pin blocks your work, lower its opacity with `Alt` + wheel instead of moving it around. Rotation / mirroring is not supported in the current version.
:::
