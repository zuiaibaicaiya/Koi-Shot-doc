---
description: 'koiShot annotation guide: pen, rectangle, ellipse, arrow, highlighter, mosaic, blur, text and numbered badges; property popups, editing rules and defaults.'
---

# Annotation

## Nine tools

After selecting a region, the left part of the toolbar contains nine tools, in this order:

**Pen → Rectangle → Ellipse → Arrow → Highlighter → Mosaic → Blur → Text → Number**

Seven of them have a **small chevron** on their right:

- Click the **main button** to switch to that tool and start drawing;
- Click the **chevron** to open its property popup (does not switch tools);
- Clicking the **already active** main button again toggles the popup (no need to aim at the chevron).

**Mosaic / Blur** have no popup; they use a small panel below the toolbar with a "Thickness" row only.

## Property popup

| Row | Content | Notes |
| --- | --- | --- |
| Colour | 9 preset swatches | Click to switch; hover shows the hex value |
| Thickness | Fine / Medium / Thick / Extra thick | Shown as line previews with tooltips like "Medium (4px)"; for Text this row is the **font size**, for Mosaic/Blur the **brush size** |
| Opacity | 5% – 100% slider | Drag or wheel; a percentage tooltip appears above the handle while dragging |

- The popup does not steal mouse input: you can keep drawing while it is open, and it stays open;
- Picking anything in the popup (swatch, thickness, slider, toggle) also **activates that tool**;
- Close it with the chevron / main button again, or `Esc`.

:::tip
The colour and thickness values are the same ones used by Settings → Annotation. Changes made during a capture session affect only that session and are not written back to the defaults.
:::

## Tools

### Pen

Freehand drawing for circling irregular areas or handwriting notes. Each stroke is a separate undo step. Strokes **cannot be selected afterwards** — undo and redraw instead.

### Rectangle / Ellipse

1. Pick the tool, then drag; hold `Shift` while drawing to constrain to a **square / circle** (toggles live);
2. On release the shape **enters the selected state** with eight handles.

| Action | Result |
| --- | --- |
| Drag a corner handle | Scale from the opposite corner (flipping allowed) |
| Drag an edge handle | Move that edge only |
| Drag inside the shape | Move it |
| Wheel over the shape | Adjust border thickness (±1, 1–40) |

Both are outline-only shapes. Use the highlighter if you want to tint the content instead.

### Arrow

1. Pick Arrow; to change style, open the popup and choose from the **8 style previews**;
2. Drag from tail to head;
3. On release three handles appear: **start / middle / end**.

| Action | Result |
| --- | --- |
| Drag start or end handle | Change the tail or the direction |
| Drag the middle handle | Bend the arrow into a quadratic Bézier curve |
| Drag the shaft / head | Move the whole arrow |
| Wheel over the arrow | Adjust thickness (±1, 1–40) |

**Arrow + text**: the arrow popup has a text-icon toggle. When enabled, finishing an arrow (with a long enough drag) opens an inline text box **at the arrow's start point**. The text and arrow are then linked:

- Dragging either moves the pair; the text stays at the tail side;
- Dragging the linked text rotates the whole arrow around its tip (works with both the text and arrow tools);
- Double-click the linked text to edit it;
- Undo / redo handles both together;
- The toggle resets to off at the start of every capture.

### Highlighter

Semi-transparent highlighting that does not hide the content underneath. The stroke is drawn at twice the configured thickness; colour, thickness and opacity are adjustable.

### Mosaic / Blur

For hiding phone numbers, avatars, IDs and similar:

1. Pick the tool;
2. Choose "Thickness" (brush size) in the panel below the toolbar;
3. Paint over the area — it is pixelated / blurred immediately.

Only thickness is adjustable. Mosaic is blocky and hides better; blur is softer and keeps the layout. Painting cannot be partially reverted — undo removes the whole stroke.

### Text

1. Pick Text and set colour / font size / opacity in the popup;
2. **Click** the target position to open an input box and type;
3. `Enter` inserts a line break, `Ctrl + Enter` (`Cmd + Enter` on macOS) commits;
4. With the text tool: **click** an existing text to select it (clicking a swatch then recolours it), **double-click** to edit it;
5. While typing, the **wheel** adjusts the font size live.

| Action | Result |
| --- | --- |
| `Ctrl + Enter` | Commit |
| Click elsewhere / another text | Commit the current one, then continue |
| Switch tools | Commit — nothing is lost |
| Click a swatch while typing | Only recolours this text; typing continues |
| `Esc` | Discard this edit (restores the original when editing) |

### Number

1. Pick Number; set the start value or turn auto-increment off in the popup (start value 1–999);
2. **Press and drag** to place a round badge at the press point with an arrow pointing to the release point; **click without dragging** to place a plain badge;
3. Values auto-increment (1, 2, 3…);
4. In the selected state, drag the **tip handle** to change direction, or drag the **badge** to move the whole mark;
5. Wheel over the selected number: over the **badge** it changes the badge size, over the **shaft/head** it changes the arrow thickness.

- Numbering restarts at the configured start value for every capture;
- Undo / redo move the counter backwards / forwards without skipping;
- With auto-increment off, every placement uses the same number.

## Editing existing annotations

Annotations follow a "**only the newest one is editable**" rule (freezing):

| State | Behaviour |
| --- | --- |
| Just drawn, still selected | Drag handles to scale, drag the body to move, wheel to change thickness |
| After drawing a new shape / switching tools / undo-redo | Older shapes are **frozen**; pressing them is like pressing empty canvas and starts a new stroke |

So to change an old annotation, undo and redraw; to adjust the current one, use its handles.

**Bounds**: everything is clamped inside the selected region, so exported images are never cut off. Handles and outlines are drawn *outside* the stroke and never appear in the exported image.

## Undo & redo

| Shortcut | Action |
| --- | --- |
| `Ctrl + Z` (`Cmd + Z`) | Undo |
| `Ctrl + Shift + Z` (`Cmd + Shift + Z`) | Redo |

The toolbar buttons behave identically and are disabled when there is nothing to undo or redo.

## Annotation defaults

Default colour / thickness / opacity / arrow style / number start value and auto-increment for every tool live in **Settings → Annotation**, shared by the capture overlay and pin windows.

| Tool | Colour | Thickness | Opacity | Other |
| --- | --- | --- | --- | --- |
| Pen | `#F43F5E` | Thick (6) | 100% | — |
| Rectangle | `#F43F5E` | Thick (6) | 100% | — |
| Ellipse | `#F43F5E` | Thick (6) | 100% | — |
| Arrow | `#F43F5E` | Thick (6) | 100% | Style: solid |
| Highlighter | `#F43F5E` | Thick (6) | 100% | — |
| Mosaic | — | Thick (6) | — | — |
| Blur | — | Thick (6) | — | — |
| Text | `#F43F5E` | Thick (6, font size) | 100% | — |
| Number | `#F43F5E` | Thick (6) | 100% | Start 1, auto-increment on |

- Thickness has exactly four steps: Fine 2 / Medium 4 / Thick 6 / Extra thick 10;
- Defaults are applied **when annotation starts** (new capture, or when a tool is (re)selected); session tweaks are not saved;
- "Restore defaults" on the Annotation settings page resets everything.
