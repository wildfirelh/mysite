---
name: "光与像之间 · LH"
description: "A living photography catalogue where seasonal images, editorial type, and optical experiments share one visual language."
colors:
  paper: "#f2f0e9"
  paper-bright: "#faf9f5"
  ink: "#11110f"
  ink-soft: "#393833"
  quiet: "#65645d"
  line: "rgba(17, 17, 15, 0.24)"
  optical-acid: "#d8ff38"
  chamber-dark: "#0b0c0d"
  chamber-soft: "#181a1c"
  chamber-light: "#f5f4ee"
  spring-mat: "#dfe3ce"
  city-mat: "#dce7ed"
  focus-blue: "#3566ff"
  miss-red: "#f06f63"
typography:
  display:
    fontFamily: "Archivo Display, sans-serif"
    fontSize: "clamp(4rem, 12vw, 11rem)"
    fontWeight: 900
    lineHeight: 0.78
    letterSpacing: "-0.045em"
  editorial-headline:
    fontFamily: "Portfolio Serif, serif"
    fontSize: "clamp(3rem, 7vw, 6.8rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Aptos, Segoe UI, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: "normal"
  label:
    fontFamily: "Aptos, Segoe UI, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 780
    lineHeight: 1.6
    letterSpacing: "0.06em"
rounded:
  square: "0"
  circle: "50%"
  pill: "999px"
spacing:
  page-edge: "clamp(1rem, 3vw, 3rem)"
  photo-gap: "clamp(0.75rem, 1.8vw, 1.8rem)"
  section-y: "clamp(6rem, 13vw, 12rem)"
  compact: "0.75rem"
  standard: "1rem"
  roomy: "2rem"
components:
  navigation-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0.4rem 0"
  game-start:
    backgroundColor: "{colors.optical-acid}"
    textColor: "{colors.chamber-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    height: "3.6rem"
  game-start-hover:
    backgroundColor: "#33451a"
    textColor: "{colors.chamber-light}"
  status-toggle:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.72rem 0.9rem"
  status-toggle-hover:
    backgroundColor: "{colors.optical-acid}"
    textColor: "{colors.ink}"
  project-row:
    backgroundColor: "{colors.chamber-dark}"
    textColor: "{colors.chamber-light}"
    rounded: "{rounded.square}"
    padding: "1.65rem 0"
  project-row-hover:
    backgroundColor: "{colors.optical-acid}"
    textColor: "{colors.chamber-dark}"
  resource-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "1rem 0"
  resource-link-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  playlist-dialog:
    backgroundColor: "{colors.chamber-dark}"
    textColor: "{colors.chamber-light}"
    rounded: "{rounded.square}"
    padding: "clamp(1.5rem, 5vw, 2.5rem)"
  random-text-panel:
    backgroundColor: "{colors.chamber-dark}"
    textColor: "{colors.chamber-light}"
    activeColor: "{colors.optical-acid}"
    rounded: "{rounded.square}"
  photo-tile:
    backgroundColor: "#d3d0c6"
    rounded: "{rounded.square}"
  photon-target:
    backgroundColor: "rgba(216, 255, 56, 0.08)"
    textColor: "{colors.chamber-light}"
    rounded: "{rounded.circle}"
    size: "3.15rem"
---

# Design System: 光与像之间 · LH

## Overview

**Creative North Star: "The Living Contact Sheet"**

The site behaves like a photography exhibition catalogue left open on a warm light table. Oversized black type acts as architecture, while real photographs overlap, rotate, and change scale like selected prints being sequenced by hand. The experience is expressive but not autobiographical: the work identifies the maker before explanatory copy does.

Most of the exhibition stays flat, bright, and editorial. Dark optical chambers interrupt that paper world for projects, the photon game, and the playlist; acid lime appears only where a live signal, playable action, or current state needs attention. Motion reinforces the handling of prints and light rather than becoming decoration.

**Key Characteristics:**

- Warm paper grounds, hard black rules, and broad editorial whitespace.
- Monumental Archivo grotesque paired with a display Chinese serif and a quiet system sans.
- Real photography in deliberately uneven crops, scales, offsets, and contact-sheet rhythms.
- Dark, square-edged optical chambers punctuated by rare acid-lime signals.
- Responsive recomposition that preserves the exhibition, game, and playlist on touch screens.

## Colors

The palette begins as paper and ink, borrows restrained mats from the photograph sets, and reserves luminous color for optical interaction.

### Primary

- **Optical Acid**: The sole high-energy signal. Use it for the photon game action, live status dot, active dialog label and link, and responsive hover inversions.

### Secondary

- **Spring Mat**: A pale botanical field used only behind the spring journal so the photographs retain their seasonal context.
- **City Mat**: A cool architectural field used only behind the city journal.

### Neutral

- **Warm Paper**: The dominant exhibition background and the light text color on inverted controls.
- **Bright Paper**: A brighter reserve neutral for subtle tonal separation.
- **Catalogue Ink**: Primary type, hard dividers, inverted hover fields, and selection fill.
- **Soft Ink**: Long-form copy and captions that should remain readable without competing with display type.
- **Quiet Ink**: Metadata, descriptions, and secondary labels.
- **Optical Chamber / Optical Chamber Soft**: Near-black project and game surfaces; use the softer value to distinguish the game without introducing a card boundary.
- **Chamber Light**: Primary text in dark sections.
- **Catalogue Line**: Low-contrast rules and dividers; it structures lists without turning them into cards.
- **Focus Blue**: A functional keyboard-focus color used globally, deliberately independent of the exhibition palette.
- **Miss Red**: A momentary photon-game error outline, not a decorative accent.

**The One Live Signal Rule.** Optical Acid is the only recurring chromatic interaction signal; do not introduce competing neon accents.

**The Photograph Owns Its Color Rule.** Seasonal fields may echo the photographs, but their job is to frame the work, never to recolor or overpower it.

## Typography

**Display Font:** Archivo Display (local Archivo Black file, sans-serif fallback)  
**Body Font:** Aptos, Segoe UI, PingFang SC, Microsoft YaHei, sans-serif  
**Editorial Font:** Portfolio Serif (local Noto Serif SC display file, serif fallback)

**Character:** Heavy, tightly packed Latin display words establish the exhibition architecture. The Chinese serif provides reflective editorial voice, while the system sans keeps navigation, descriptions, metadata, game instructions, and numeric readouts direct.

### Hierarchy

- **Display** (900, fluid 4rem–11rem, 0.78 line-height): Hero words and major English section names. Mobile headings remain oversized and wrap intentionally rather than shrinking to ordinary title scale.
- **Editorial Headline** (600, fluid 3rem–6.8rem, 1.06 line-height): Chinese catalogue statements and closing language; keep lines short and allow generous surrounding space.
- **Title** (600, approximately 1.15rem–2.15rem): Project names, resource names, and dialog headings in the editorial serif.
- **Body** (400, approximately 1rem, 1.7–2 line-height): Introductory and explanatory Chinese copy, generally constrained to 24–28rem or 66ch.
- **Label** (760–850, approximately 0.58rem–0.76rem): Navigation, captions, metadata, game labels, and uppercase English markers. Uppercase markers use wider tracking; ordinary Chinese labels do not.

**The Type Is Structure Rule.** Display words may touch edges, overlap photographs, and wrap into sculptural blocks; body copy must remain calm, conventionally aligned, and comfortably spaced.

**The Three-Voice Rule.** Use Archivo for monumental display, Portfolio Serif for editorial emphasis, and the system sans for utility. Do not substitute extra typefaces for local variation.

## Layout

The spatial model is an edge-aware editorial scroll. Global horizontal padding is fluid, while the hero deliberately lets type and photography approach or cross the viewport edge. The first viewport is at least one small-viewport height with a 760px desktop floor and a 700px phone floor, keeping the LIGHT / FRAME composition immersive across devices.

Photography stories use a 12-column desktop grid with intentionally asymmetric spans, vertical offsets, occasional overlap, and one full-bleed panorama or strip where the sequence needs release. The base photo gap is fluid. Intro, photon, and resources sections use split editorial columns; projects use a three-column row. Large vertical intervals separate chapters so each photographic journal reads as a new spread, not another card stack.

At 900px, split sections collapse to one column and project rows simplify to two columns. At 640px, stories become a two-column contact sheet: the lead image spans both columns, supporting images use portrait crops, and special wide images span the row. Headings re-order for left-aligned reading, project rows become one column, and the photon game runs edge-to-edge while its heading and instructions retain page padding. Navigation stays visible, loses the secondary wordmark, and gives every link or button a 2.75rem minimum touch target.

### Photo Handling

Use only real supplied photographs with meaningful alternative text and intrinsic width/height. Images fill their assigned frames with `object-fit: cover`; cropping is an editorial choice, so preserve the implemented aspect ratios when replacing assets. Hero prints may rotate slightly, overlap, and cast a soft physical shadow. Journal images are mostly square-edged and flat; only the deliberately overlaid spring print carries a stronger print shadow. Lazy-load below-fold images and preload only the hero image needed for first paint.

**The Sequence Before Symmetry Rule.** Preserve the hierarchy of lead, support, portrait, and panorama images; do not normalize the journals into equal cards or a uniform masonry feed.

## Elevation & Depth

The system is flat by default. Depth comes from overlap, scale, tonal section changes, translucent header blur, and a small vocabulary of shadows reserved for objects that physically float: loose hero prints, the overlapping spring print, the status pill, and the playlist dialog. The photon target uses glow as emitted light rather than conventional elevation.

### Shadow Vocabulary

- **Loose Print** (`0 1.3rem 4rem rgba(27, 23, 13, 0.15)`): Hero photographs that appear placed on the paper surface.
- **Overlaid Print** (`0 1.5rem 3rem rgba(35, 52, 27, 0.18)`): The single rotated spring image layered above its sequence.
- **Floating Status** (`0 0.8rem 2.4rem rgba(17, 17, 15, 0.2)`): The persistent playlist pill; it deepens slightly on hover.
- **Modal Chamber** (`0 2rem 6rem rgba(0, 0, 0, 0.4)`): The playlist dialog over a blurred backdrop.
- **Photon Glow** (`0 0 1.8rem rgba(216, 255, 56, 0.45)`): Emission around the target, intensified during hover and focus.

**The Flat Exhibition Rule.** Never add resting shadows to lists, content sections, captions, or ordinary photo tiles. A shadow must communicate a loose print, floating control, modal layer, or emitted light.

## Shapes

The exhibition is predominantly square-edged: images, section fields, list rows, the game frame, and the playlist dialog use hard corners and one-pixel rules. This keeps the layout closer to a printed catalogue than a software dashboard. Circular geometry is reserved for the photon target, its reticle, and the live status dot. The only pill is the floating playlist control.

Borders are structural and thin. Full-black rules divide major paper sections; translucent light or ink rules divide rows inside dark or light surfaces. Slight photo rotations belong only to collage and overlaid-print moments and should remain within a few degrees.

**The Geometry Has Meaning Rule.** Squares hold content, circles represent light, and the pill represents persistent status. Do not round generic containers.

## Components

### Navigation

- **Style:** A fixed translucent paper bar with a blurred background, compact wordmark, and small heavy utility labels. It gains a low-contrast bottom rule after scrolling.
- **States:** Hover and keyboard focus draw a one-pixel underline from left to right. The active section is announced with `aria-current`; visual behavior should remain understated.
- **Mobile:** Keep all destinations visible and provide 2.75rem minimum targets; remove only the secondary wordmark text and separator.

### Buttons

- **Game Start:** A square, full-width acid bar with dark heavy text and a 3.6rem minimum height. Hover/focus changes to deep olive with light text; disabled state becomes muted charcoal and keeps a wait cursor.
- **Status Toggle:** A black floating pill with an acid live dot. Hover/focus invert the pill to acid, turn the dot dark, lift it 2px, and deepen the shadow.
- **Dialog Close:** A quiet text control with a bottom rule and a 2.75rem hit area; acid appears on hover/focus.
- **Focus:** Preserve the global 3px blue focus ring unless a component supplies an equally clear component-specific focus treatment.

### Cards / Containers

- **Project Rows:** These are ruled editorial rows, not cards. On hover they move slightly right and invert to acid, with all secondary text becoming dark.
- **Resource Links:** Two-column ruled rows on desktop and label/description rows on mobile. Hover/focus invert to ink and shift right slightly.
- **Playlist Dialog:** A square near-black floating chamber anchored above the status pill on desktop and inset from both phone edges on mobile. It uses the native dialog backdrop, restores focus to its opener, and prevents page scrolling while open. Its random-text panel embeds the two supplied text endpoints in a sandboxed frame because those endpoints do not expose CORS headers; segmented controls switch between 唐诗 and 动漫台词, and “再来一条” reloads the active source with a cache buster.

### Photo Tiles

- **Style:** Square-edged image frames with editorial crops, small soft-ink captions, and no generic overlays or badges.
- **Motion:** Journal photographs render immediately at every breakpoint. Do not gate real work behind intersection observers, opacity, or clip paths; motion is reserved for the hero, dialog, navigation, and playable light interactions.
- **Replacement:** Match the existing orientation and narrative role before changing a source. Do not fabricate locations, dates, or captions.

### Photon Field

- **Style:** A near-black observation field with thin acid crosshairs, a circular reticle, tabular readouts, and one glowing circular target.
- **Behavior:** The target supports pointer, Enter, and Space activation; misses flash the restrained red outline. While the game runs, the persistent playlist button moves out of the way.
- **Motion:** Target repositioning uses short 120ms expressive transitions; hits use a 180ms expansion. Keep the field playable without relying on animation alone.

### Motion & Reduced Motion

State transitions generally run 180–220ms. Modal entrance and photon movement use `cubic-bezier(.16, 1, .3, 1)`; the scroll cue uses a slower 2.2-second travel; the status dot uses a 2-second pulse. Scroll parallax is capped and applied only in the hero. Under `prefers-reduced-motion: reduce`, smooth scrolling, transitions, repeated animations, and parallax are effectively removed while content remains fully visible.

## Do's and Don'ts

### Do:

- **Do** lead with photographs and exhibition-scale type; explanatory copy supports the sequence rather than introducing the author first.
- **Do** preserve the paper/ink base, rare Optical Acid signal, and seasonal mats tied to specific journals.
- **Do** keep photo replacements truthful, dimensioned, meaningfully described, and cropped to the role they occupy.
- **Do** test the 900px and 640px recompositions, 320px minimum width, keyboard navigation, dialog focus return, random-text source switching and refresh, game keyboard input, and reduced-motion mode after visual changes.
- **Do** update both `DESIGN.md` and `.impeccable/design.json` when durable tokens, components, breakpoints, motion, or visual rules change.

### Don't:

- **Don't** turn photography journals, project rows, or resource links into rounded cards.
- **Don't** normalize the asymmetric photo sequences into equal tiles or replace real work with decorative stock imagery.
- **Don't** introduce gradients, extra neon colors, or shadows outside the documented optical and floating-object roles.
- **Don't** shrink mobile display type into a conventional heading scale or hide core navigation, the photon game, or playlist behavior.
- **Don't** remove visible keyboard focus, touch targets, alternative text, intrinsic image dimensions, or reduced-motion fallbacks.
