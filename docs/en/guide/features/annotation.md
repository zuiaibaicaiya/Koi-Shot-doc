---
description: 'koiShot annotation guide: pen, rectangle, ellipse, arrow, highlighter, mosaic, blur, text, number badges, property panel, undo/redo.'
---

# Annotation

## Choosing a Tool

After framing the region, the **toolbar** appears below the selection. The active tool is **highlighted**, and for tools that support styling, a **property panel** opens under the toolbar — every change applies instantly. Annotations are confined to the selection and can be rolled back anytime with undo/redo.

## Tool Reference

### Pen

**Use**: freehand drawing for irregular areas or handwritten notes.

**How to use**:

1. Click "Pen" in the toolbar (it highlights when active);
2. Pick color, width and opacity in the property panel;
3. Hold the left button and drag to draw; release to finish the stroke;
4. Draw multiple strokes freely — each stroke is one undo step.

**Example**: circle the error message in an app screenshot by hand.

**Note**: pen strokes can't be selected or edited afterwards — undo with `Ctrl/Cmd + Z` and redraw.

### Rectangle / Ellipse

**Use**: outline regular areas such as a button or a table block.

**How to use**:

1. Click "Rectangle" or "Ellipse";
2. Set color, width and opacity in the property panel;
3. Hold the left button, drag from start point to end point, release to finish;
4. Drawn shapes stay editable (see [Editing](#editing)).

**Example**: draw a red rectangle around the invalid input field in a form.

**Note**: both are outlined shapes with no fill; to highlight the underlying content instead, use the "Highlighter".

### Arrow

**Use**: point at a specific element to show direction or causality.

**How to use**:

1. Click "Arrow"; to change the style, click the **dropdown** beside the button and pick one of 8 styles;
2. Hold the left button and drag — the arrow points from the start point to the end point;
3. Drawn arrows can be moved and resized as a whole.

**Example**: draw an arrow from the "Settings button" to the "menu that opens" to show what happens on click.

**Note**: drag direction determines where the arrow points; if reversed, undo and redraw or adjust the selected arrow.

### Highlighter

**Use**: semi-transparent highlighting that emphasizes content without hiding it.

**How to use**:

1. Click "Highlighter";
2. Pick a color and width;
3. Hold the left button and swipe across the text or area to emphasize.

**Example**: highlight the key clauses in a contract screenshot with yellow.

**Note**: the highlighter is semi-transparent by design — it offers no opacity setting.

### Mosaic

**Use**: pixelate painted areas to hide sensitive information.

**How to use**:

1. Click "Mosaic";
2. Adjust the brush **width** in the property panel;
3. Hold the left button and paint over the content — painted areas pixelate immediately.

**Example**: paint over phone numbers and avatars in a chat screenshot.

**Note**: painted areas can't be restored to the original pixels (only undone as a whole stroke); make sure everything sensitive is covered.

### Gaussian Blur

**Use**: smooth blur, softer than mosaic — good when you don't want an obvious "censored" look.

**How to use**: same as "Mosaic" — pick the tool, adjust the width, paint over the target area.

**Example**: blur a personal-info panel in the background while keeping the overall look of the image.

**Note**: only the brush **width** applies; for strong masking, prefer Mosaic.

### Text

**Use**: add typed notes directly on the capture.

**How to use**:

1. Click "Text";
2. Set color, width (i.e. font size) and opacity in the property panel;
3. **Click** the spot where the text should go, then type;
4. While editing, press `Enter` for a new line; scrolling the **wheel** adjusts the text width in real time;
5. Press `Ctrl + Enter` (`Cmd + Enter` on macOS) to commit, or `Esc` to discard.

**Example**: add "click here to sign in" next to the login button.

**Note**: don't click outside the input box before committing; pressing `Esc` discards what you've typed.

### Number Badge

**Use**: place numbered badges that mark the order of steps — great for tutorials.

**How to use**:

1. Click "Number badge"; use the **dropdown** beside the button to set the start number or toggle auto-increment;
2. Click each spot in order — badges appear as 1, 2, 3… and **auto-increment**;
3. Adjust color and width in the property panel; placed badges can be selected and moved.

**Example**: mark steps ①②③ on a settings screenshot for a how-to guide.

**Note**: undo rewinds the counter (after undoing ③, the next click places ③ again — no skipped numbers); with auto-increment off, every click uses the same number.

## Property Panel

For most tools the panel shows three rows, top to bottom:

| Setting | Options | Notes |
| --- | --- | --- |
| Color | 9 preset swatches | Click to switch; the active swatch highlights |
| Width | Fine / Medium / Thick / Extra thick | Affects line or stroke width |
| Opacity | 5%–100% slider | Applies in real time |

**Exceptions**: Mosaic and Gaussian Blur use only the brush size, so their panel shows the width row only; the Highlighter is semi-transparent by design and needs no opacity setting.

## Editing

| Action | How |
| --- | --- |
| Select | Click a drawn shape (rectangle, ellipse, arrow, badge; pen strokes aren't selectable) |
| Resize | Drag one of the eight outer handles; the frame sits outside the shape so strokes stay visible |
| Move | Drag the shape as a whole |
| Delete | Select it and press `Ctrl/Cmd + Z` to undo that step |

**Boundary**: annotations are strictly clipped to the selection, so exports never lose a corner.

## Undo / Redo

| Shortcut | Action |
| --- | --- |
| `Ctrl + Z` (`Cmd + Z` on macOS) | Undo the last step |
| `Ctrl + Shift + Z` (`Cmd + Shift + Z` on macOS) | Redo |

The toolbar "Undo / Redo" buttons do the same. Number badges stay consistent: undoing rewinds the counter and redoing continues it — no skipped or repeated numbers.
