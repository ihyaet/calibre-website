# Calibre — STYLE

> The design system, reconciled to the approved comps. Every color and type decision in the build derives from here. If something isn't defined, ask before inventing it.

---

## 1. Personality → principles

Calm · Confident · Thoughtful · Engineered · Creative. "A screen that whispers — never shouts."

- **Whitespace is the primary material.** When unsure, add space.
- **Spend boldness in two places only:** the oversized mono type and the glossy Shop Now button (plus the LCD strip). Everything else stays quiet.
- **The page breathes between two moods:** airy **light wash** sections and deep **plum** sections. The rhythm of light↔dark is part of the design.
- **Restraint reads as engineered:** sharp corners and hairline rules everywhere — *except* the one tactile, glossy CTA.

---

## 2. Color

**Purple is the only accent — but it's expressed as a whole family:** violet accent, lavender/blush gradient washes (light sections), and deep aubergine/plum surfaces (dark sections). No second hue. No teal/green/warm anything.

### Neutrals & surfaces
| Token | Hex | Use |
|---|---|---|
| `ink` | `#0E0E10` | Text/headlines on light. Near-black, faint warmth. |
| `paper` | `#FFFFFF` | Base of light sections (under the wash). |
| `plum` | `#1E0D22` | Base of **dark** sections (variants, specs, testimonials, footer top). Deep aubergine. |
| `plum-elev` | `#2C1633` | Elevated cards/panels on plum. |
| `line` | `#E6E6E8` | Hairline rules on light. |
| `line-plum` | `#3A2342` | Hairline rules on plum (spec table, dividers). |
| `mute` | `#8A8A90` | Secondary text on light. |
| `mute-plum` | `#A593AE` | Secondary text / labels on plum. |
| `on-plum` | `#F4EEF6` | Primary text on plum (off-white, not pure). |

### Accent
| Token | Hex | Use |
|---|---|---|
| `violet` | `#5B3DF5` | System accent — active states, focus, key backlight, LCD glow, links. Sparingly. |
| `violet-soft` | `#ECE9FE` | Selection / hover fills / soft borders on light. |
| `violet-border` | `#6E4FE0` | The thin frame around feature/testimonial image cards. |

### Light-section wash (gradient — not flat white)
A soft **blush → lavender** wash over paper. Subtle; type stays high-contrast on top.
```css
--wash: radial-gradient(120% 120% at 70% 30%, #FBF1F7 0%, #F1EAFA 45%, #FFFFFF 100%);
/* purple-banded variant (Workflow): faint horizontal lavender bands over the wash */
```

**Contrast:** verify `ink`/`mute` on the lightest wash point, and `violet`/`on-plum`/`mute-plum` on `plum`, all pass AA before shipping.

---

## 3. Typography

Two families only: **Geist Mono** (headlines, product names, eyebrows, prices, LCD) · **Geist Sans** (body, nav, UI, captions). Load via the `geist` package.

### Scale (fluid)
```css
--text-display: clamp(3.5rem, 9vw, 9rem);   /* hero + footer headline, full-bleed, overlaps imagery */
--text-h1:      clamp(2.5rem, 5vw, 4.5rem);  /* section headlines (Choose your Calibre, etc.) */
--text-h2:      clamp(2rem, 3.5vw, 3rem);
--text-h3:      clamp(1.5rem, 2vw, 2rem);
--text-body:    1.0625rem;                   /* 17px */
--text-small:   0.9375rem;                   /* 15px */
--text-label:   0.75rem;                     /* mono eyebrows / captions */
```

### Treatment (matches comps)
- **Headlines (Geist Mono):** **sentence case** ("Creative Workflow, Simplified", "Choose your Calibre", "For those who want the details."). Tight tracking on large sizes (`-0.02em`). Tight leading (1.0–1.1) at display size. Headlines routinely **overlap imagery** and sit **between ruled hairlines**.
- **Section eyebrow / header (Geist Mono):** e.g. "Where Creativity Meets Control" — mono, normal case, paired with a small **Geist Sans** descriptor to its right.
- **Prices (Geist Mono):** bracketed — `[ $99 ]` — right-aligned next to the model name.
- **Body (Geist Sans):** 400 weight, ~1.6 line-height, max measure ~60ch. Secondary in `mute` / `mute-plum`.
- **Ghosted wordmark:** oversized mono, very low opacity (≈6–10%), bleeds off the edges as a background layer (see §7).

---

## 4. Layout & grid

- **Swiss editorial**, 12-col, generous gutters, asymmetric by default.
- **Alternating mood:** Hero + Workflow = light wash; Variants + Specs + Testimonials + Footer-top = plum. Plan section order around this rhythm.
- **Composition varies every section:** left-headline + right-content (Variants, Specs), centered (Philosophy, Testimonials), full-bleed overlap (Hero), diagonal split (Footer CTA).
- **Ruled hairlines** run through/around big headlines as an editorial device (`RuledLines`) — these encode structure, not decoration.
- **Diagonal split:** the footer transitions plum→light on an angle; the keyboard sits across the seam.
- **Spacing:** 4px base (4/8/12/16/24/32/48/64/96/128). Section block padding `clamp(6rem, 12vw, 12rem)`.

---

## 5. Shape, borders, elevation

- **Border-radius 0** for structure: cards, spec table, dividers, image frames, sections.
- **Exception — the Shop Now button is fully round/pill and glossy** (see §6). This is the single intentional skeuomorphic moment; do not flatten it.
- **Borders:** 1px `line` (light) / `line-plum` (dark). Feature + testimonial image cards get a thin `violet-border` frame.
- **Elevation:** flat overall — no drop shadows on cards. Allowed shadows: the **Shop Now button** and a soft **`violet` glow** on the LCD strip.

---

## 6. The Shop Now button (signature CTA)

A tactile, raised violet **coin/pill**:
- Fill: `violet` with a top→bottom sheen (lighter specular highlight at top ~`#7C5BFF`, deeper violet toward the base).
- A darker violet **ring/rim** + soft outer **drop shadow** to read as a physical button.
- Label: Geist Mono, small, slightly tracked ("Shop Now"), `paper` color, centered.
- **Hover:** lift (translateY up a few px) + glow. **Press/active:** depress (translateY down, shrink shadow). Transitions 0.15–0.25s.
- Shapes: circular coin (hero/variants/footer overlap) or pill — keep one radius language. Respect reduced-motion (no lift animation, keep the visual).

---

## 7. Signature background device — ghosted wordmark (`GhostWord`)

- Oversized Geist Mono word/phrase (e.g. "Creative Workflow", "Everyday Tools") as a background layer.
- Opacity ≈ 6–10%; color `ink` on light / `on-plum` on plum.
- Deliberately **clipped by the viewport** (bleeds off both edges).
- Subtle horizontal parallax/marquee on scroll. Never competes with foreground type for legibility.

---

## 8. The LCD strip (`LcdDisplay`) visual spec

- Thin dark horizontal panel above the keys; crisp UI inside; soft `violet` glow.
- **States (data-driven, reusable):**
  - **dock** — row of rounded app icons (macOS-style), used in Hero/Footer.
  - **clock + visualizer** — large time readout (`9:80`) + violet audio waveform bars (Philosophy).
  - **timeline** — video clip thumbnails + scrubber + playhead + timecode (`00:03:15:10`) (Workflow).
  - (extensible: notification toast, color picker).
- Keys backlight in `violet` (WASD / nav cluster) to match the active state.
- Transitions between states: quick crossfade/slide ~0.3–0.4s.

---

## 9. Motion

GSAP + ScrollTrigger for reveals; Lenis for smooth scroll. **Discipline over quantity.**

- **Easing:** `power3.out`/`power4.out` entrances; micro-interactions 0.15–0.3s; loops only for ambient (ghost wordmark, LCD).
- **Approved signature moments:**
  1. Hero load sequence — headline reveal → render parallax-in → LCD dock wakes → keys glow.
  2. **Typewriter / cursor reveal** on the footer (and optionally section) headline — the blinking caret is part of the design. *(This revises the earlier "no typewriter" guidance — the comps use it deliberately; keep it confined to designated headlines, not body copy.)*
  3. `GhostWord` parallax/marquee.
  4. LCD state transitions + key backlight.
  5. Shop Now hover-lift / press.
  6. Diagonal reveal at the footer seam.
  7. Per-section scroll reveals (mask/clip or line slide-up).
- **Reduced motion:** disable parallax, marquee, autoplay, typewriter (show full text), button lift; fall back to opacity fades. Requirement, not optional.

---

## 10. Tailwind v4 (4.3+) token mapping

Tailwind v4's CSS-first `@theme` is unchanged through 4.3 — this block stays valid. Add it **after** any base tokens `shadcn init` wrote. Drop into `globals.css`:
```css
@import "tailwindcss";

@theme {
  --color-ink: #0E0E10;
  --color-paper: #FFFFFF;
  --color-plum: #1E0D22;
  --color-plum-elev: #2C1633;
  --color-line: #E6E6E8;
  --color-line-plum: #3A2342;
  --color-mute: #8A8A90;
  --color-mute-plum: #A593AE;
  --color-on-plum: #F4EEF6;
  --color-violet: #5B3DF5;
  --color-violet-soft: #ECE9FE;
  --color-violet-border: #6E4FE0;

  --font-mono: var(--font-geist-mono), ui-monospace, monospace;
  --font-sans: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;

  --radius: 0px;            /* structure */
  --radius-pill: 9999px;    /* Shop Now button only */
}

:root {
  --text-display: clamp(3.5rem, 9vw, 9rem);
  --text-h1: clamp(2.5rem, 5vw, 4.5rem);
  --text-h2: clamp(2rem, 3.5vw, 3rem);
  --text-h3: clamp(1.5rem, 2vw, 2rem);
  --wash: radial-gradient(120% 120% at 70% 30%, #FBF1F7 0%, #F1EAFA 45%, #FFFFFF 100%);
}

body { background: var(--color-paper); color: var(--color-ink); }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
Wire `GeistSans.variable` + `GeistMono.variable` on `<html>`. Light sections get `background: var(--wash)`; dark sections get `bg-plum text-on-plum`.

---

## 11. Do / Don't

**Do:** lean on whitespace · alternate light-wash and plum sections · keep the one glossy CTA tactile · violet sparingly · sharp corners for structure · sentence-case mono headlines that overlap imagery · ruled hairlines as structure · ghosted background wordmarks.

**Don't:** add a second accent hue · flatten or restyle the Shop Now button · round structural cards · drop-shadow everything · ALL-CAPS headlines · typewriter effects on body copy (headlines only) · cream/beige backgrounds · animate just because GSAP is available.

---

## 12. Writing (copy is design material)

Plain verbs, sentence case, no filler; intelligent and understated. Name things by what the user controls ("Shop Now"), keep a control's name through the flow. Errors are specific and in the brand voice. Marketing copy is specific over clever — describe what the LCD strip *does*. Confirmed voice samples: "A screen that whispers — never shouts." / "Engineered for people who think in long, unbroken stretches."
