---
description: 'Highlight, redact, label and number anything on a screenshot: how the nine annotation tools work, how to edit what you drew, and where defaults live.'
---

# Annotation

After selecting a region, the nine tools on the left of the toolbar let you highlight the important part, hide sensitive details, add a note or number the steps. This page covers **how to draw** with each one and **what you can still change afterwards**.

## Picking a tool

**Pen → Rectangle → Ellipse → Arrow → Highlighter → Mosaic → Blur → Text → Number**

- Freehand circles: Pen; box something: Rectangle / Ellipse; point at something: Arrow;
- Mark a line: Highlighter; hide a phone number or avatar: Mosaic / Blur;
- Add a note: Text; label "step 1, step 2": Number.

Seven of them have a **small chevron** on the right:

- Click the **main button** to switch to that tool and start drawing;
- Click the **chevron** to open its property popup without switching tools;
- Click the **active main button** again to toggle the popup — no need to aim at the chevron.

Mosaic / Blur have no popup; they show a row of four line previews below the toolbar. Click one to choose the brush size.

## What the popup lets you change

Open a chevron and you get up to three rows of settings; there are no row labels — the icons speak for themselves:

| What you want | What to do |
| --- | --- |
| Colour | 9 preset swatches; click to switch, the active one is highlighted, hover shows the hex value |
| Thickness | Four line previews (Fine / Medium / Thick / Extra thick) with tooltips like "Medium (4px)"; for Text this row is the **font size** |
| Opacity | 5%–100% slider, drag or wheel; a percentage readout appears above the handle |

The arrow popup adds a grid of **8 styles** at the top, and the number popup adds a number row (value box / − / + / auto-increment) at the bottom.

- The popup does not steal the mouse: keep drawing while it is open, and it stays open after you pick something;
- Picking anything in the popup also **activates that tool**, so you can draw immediately;
- **Only one popup is open at a time**; the Mosaic / Blur row steps aside while a popup is open and returns when it closes;
- Close it with the chevron / main button again or `Esc`. It also closes when you start a new selection, switch to GIF recording or drag a pin window. **Drawing on the canvas does not close it** — adjust halfway, draw, then come back.

:::tip
The colours and thickness steps are the same ones in Settings → Annotation. Changes in this capture affect only this image, not your defaults (see [Annotation defaults](#annotation-defaults)).
:::

## How to use each tool

### Pen

Drag with the left button; each stroke is one undo step. A stroke **cannot be selected later** — undo with `Ctrl + Z` and redraw.

### Rectangle / Ellipse

Drag to draw; hold `Shift` for a **square / circle** (pressing or releasing mid-drag works immediately). On release the shape is selected with eight handles:

| What you want | What to do |
| --- | --- |
| Scale or flip | Drag a corner handle; hold `Shift` to keep it square / circular |
| Move one edge | Drag a middle handle (`Shift` has no effect here) |
| Move the whole shape | Drag inside it |
| Change border thickness | Wheel over it (1–40) |

Both are outline-only. Use the highlighter if you want to tint what is underneath.

### Arrow

Click Arrow and drag from tail to head. For another style, pick one of the 8 previews at the top of its popup. On release you get three handles — start / middle / end:

| What you want | What to do |
| --- | --- |
| Change the tail or direction | Drag the start or end handle |
| Bend the arrow | Drag the middle handle — it bends the way you pull |
| Move the whole arrow | Drag the shaft or head |
| Change thickness | Wheel over it (1–40) |

**Arrow with text**: the text-icon toggle at the bottom-right of the arrow popup opens an input box **at the arrow's start** once you finish drawing. The text and arrow are then linked:

- Dragging either moves the pair;
- Dragging the text rotates the whole arrow around its tip (only while that arrow is still selected);
- Double-click the text to edit it;
- Undo / redo handle both together, so you never end up with text and no arrow;
- The toggle resets to off at the start of every capture.

### Highlighter

Semi-transparent strokes that do not hide the content underneath; the line is twice the chosen thickness, with adjustable colour, thickness and opacity.

### Mosaic / Blur

1. Pick the tool and click one of the line previews below the toolbar (that is the brush size);
2. Drag over the area — it is pixelated / blurred immediately.

Only the brush size is adjustable, no colour or opacity. Mosaic is blocky and hides more; Blur is softer and less obvious. Painting **cannot be partly reverted** — undo removes the whole stroke.

### Text

1. Pick Text and set colour / font size / opacity in the popup;
2. **Click** where you want the text, then type;
3. `Enter` adds a line, `Ctrl + Enter` (`Cmd + Enter` on macOS) commits;
4. For text already placed: click to select it (then a swatch recolours it), double-click to edit it;
5. While typing, the wheel fine-tunes the font size (3–40, finer than the four popup steps).

| What you do | What happens |
| --- | --- |
| `Ctrl + Enter` | Commit |
| Click empty canvas inside the selection | Commit, then start a new text at that point |
| Click outside the selection | Commit only, no new input box |
| Click another text | Commit; single click selects it (recolour / drag), double-click edits it |
| Switch tools | Commit — nothing is lost |
| Click a swatch while typing | Only recolours this text; typing continues |
| Clear the text, then commit | Deletes it (recoverable with redo) |
| `Esc` | Discard this edit; when editing, restores the original |

### Number

1. Pick Number; set the **current number** with −/+ or by typing (1–9999) and turn auto-increment off if you like. Where each capture starts (1–999) is set in Settings → Annotation;
2. **Press and drag** to place a round badge at the press point with an arrow pointing to the release point; **click without dragging** for a plain badge;
3. Each placement increments (1, 2, 3…);
4. Drag the **tip handle** to change direction, or the **badge** to move it; a badge placed with a plain click has no tip;
5. Wheel over the selected number: over the badge it changes badge size (2–40), over the arrow its thickness (1–40) — independently.

Numbering restarts every capture; undo / redo moves the counter without skipping; with auto-increment off, every placement uses the same number.

## Can I change what I just drew?

Simple rule: **only the newest annotation stays editable**.

| State | What you can do |
| --- | --- |
| Just drawn, still selected | Drag handles to scale, drag the body to move, wheel to change thickness |
| After another shape, a tool switch, or undo / redo | Older shapes are frozen — pressing them is like pressing empty canvas and starts a new stroke |

So undo and redraw to fix an old annotation; adjust the current one while it is still selected.

Annotations stay inside the selected region, so exports are never cut off; handles and outlines may show outside on screen but **never appear in the exported image**. Mosaic / Blur painted near an edge can spill slightly and is cropped naturally on export.

## Undo & redo

| Key | Action |
| --- | --- |
| `Ctrl + Z` (`Cmd + Z`) | Undo |
| `Ctrl + Shift + Z` (`Ctrl + Y` also works on Windows) | Redo |

The two toolbar buttons do the same and turn grey when there is nothing to undo / redo.

## Annotation defaults

Default colour / thickness / opacity / arrow style / number start value and auto-increment for every tool live in **Settings → Annotation**, shared by captures and pins.

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
- Defaults apply **when annotation starts**; tweaks during a capture are not saved;
- "Restore defaults" on the Annotation settings page resets everything.
