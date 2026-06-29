# Calibre — PRD

> Product requirements for the Calibre landing page. Describes **what** to build and **why**. Visual tokens live in `STYLE.md`; build conventions and workflow live in `SKILL.md`. **Updated to match the approved design comps — the comps are the source of truth.**

---

## 1. Product

**Calibre** is a premium mechanical keyboard for modern creators. Its signature feature is an **integrated LCD strip above the keys** that surfaces an app dock, media + clock, video timelines, shortcuts, widgets, and notifications — extending the creative workflow without breaking focus. The keys are backlit in violet (WASD / nav cluster light up in the renders).

**Audience:** designers, video editors, developers, musicians, streamers, and digital creators who value uninterrupted focus. ("A smarter workspace for designers, editors, streamers, and digital creators.")

**This is a landing page that sells.** It reads like an interactive design exhibition — every scroll is a new composition of oversized type, photography, motion, and whitespace — but it has a real shop with prices and a "Shop Now" path. Closer to an Apple keynote or a luxury editorial campaign than a conventional catalog, while still converting.

**Tone:** calm, confident, thoughtful, engineered, creative. "A screen that whispers — never shouts." Intelligent and understated.

**Wordmark:** `Calibre.` (with the trailing period), set in Geist Mono.

---

## 2. The signature elements (read first)

1. **The LCD strip** — the thesis of the page. A dedicated `LcdDisplay` component cycling real-looking states: **app dock** (macOS-style icons), **clock + media visualizer** (e.g. `9:80` + purple waveform bars), **video timeline** (clip thumbnails, scrubber, playhead, timecode). Keys backlight in violet alongside it.
2. **The "Shop Now" button** — a glossy, raised, 3D violet coin/pill button with a specular highlight and soft drop shadow. Playful, tactile, the one skeuomorphic moment on an otherwise flat page. Recurs across hero, variants, footer CTA. (See `STYLE.md` for the exact treatment — this is a deliberate exception to the flat/sharp rule.)

Everything else stays quiet around these two.

---

## 3. Commerce model (CONFIRMED from comps)

- **Real shop.** Primary CTA is **"Shop Now"**. Prices are shown (e.g. `[ $99 ]` in mono brackets).
- **Four distinct keyboard models**, not one product with variant axes. "Choose your Calibre — four keyboards, one philosophy. Pick the one that matches how you work."
  - Confirmed: **Calibre-01 Standard — $99**.
  - Three more models: **names + prices TBD** (do not invent as fact; placeholder + flag).
- Footer has a real **Shop** column (Accessories, Switch Sets, Keycap Sets, Gift Cards, Shipping Info), so the store is broader than the four headline models.
- **Out of scope v1:** actual cart/checkout/payment backend, accounts. "Shop Now" can route to a product page or stubbed checkout — confirm destination before building the CTA wiring.

---

## 4. Navigation

- **Navbar:** split layout — left: `About` · `Product` — center: `Calibre.` wordmark — right: `Resource` · `Contact`. Transparent over the hero wash; solid/condensed on scroll. Mobile: collapse to a menu.

---

## 5. Page structure & section requirements

Build order = top to bottom, **one section at a time** (see `SKILL.md`). Format: *purpose · content · components · motion.* Confirmed copy is quoted where known.

### 5.1 Hero — light wash
- **Purpose:** establish the feeling instantly.
- **Content:** oversized mono headline **"Creative Workflow, Simplified"** (sentence case, spans full width, overlaps the keyboard render). Keyboard render top-right with the LCD strip showing the app dock + violet-backlit keys. Glossy **Shop Now** button bottom-left. Body line bottom-right: **"Every key, considered. A screen that whispers — never shouts. Engineered for people who think in long, unbroken stretches."** Horizontal ruled hairlines cross the composition.
- **Components:** `Navbar`, `Hero`, `AnimatedHeadline`, `CtaButton`, `LcdDisplay`, `RuledLines`.
- **Motion:** orchestrated load — headline reveal → render parallax-in → LCD dock wakes → keys glow.

### 5.2 Creative Workflow — light wash, purple-banded
- **Purpose:** show the LCD strip inside real creative work.
- **Content:** section header — left mono **"Where Creativity Meets Control"**, right small sans **"A smarter workspace for designers, editors, streamers, and digital creators."** Oversized **ghosted background wordmark** (e.g. "…ur Everyday Tools…") bleeding off-edge. Centerpiece: laptop running an NLE (video edit) + keyboard whose LCD shows a **video timeline** (clip thumbnails, scrubber, timecode).
- **Components:** `FeatureSection`, `LcdDisplay`, `ImageCard`, `GhostWord`, `SectionDivider`.
- **Motion:** ghost wordmark parallax/marquee; LCD switches to timeline state on enter.

### 5.3 Product Philosophy — light, centered
- **Purpose:** the "why" — interruption is the enemy; Calibre protects focus.
- **Content:** centered mono headline **"You didn't lose focus. / Your tools took it."** Centered image trio: main card (violet-bordered) = LCD showing **clock `9:80` + purple media visualizer** with violet-lit keys; flanking = **MAC/WIN toggle** detail (violet slider) and a floating **switch** (tactile, Cherry-style). Centered stat copy: **"It takes an average of 23 minutes to fully return to a task after an interruption. Most of those interruptions? They came from the tools that were supposed to help you."**
- **Components:** `AnimatedHeadline`, `ImageCard` (violet-border variant), `ProductGallery`, `SectionDivider`.
- **Motion:** centered type reveal; flanking cards drift/peek (horizontal gallery feel).

### 5.4 Choose your Calibre (Product Selector) — dark plum
- **Purpose:** pick a model and shop.
- **Content:** left — oversized mono **"Choose your Calibre"** + sans subcopy **"Four keyboards, one philosophy. Pick the one that matches how you work."** + vertical **thumbnail rail** (selectable, active-state marker). Right — large product render with glossy **Shop Now** overlapping it; below: model name + price as **`Calibre-01 Standard ········ [ $99 ]`** (mono, bracketed price, right-aligned).
- **Components:** `ProductVariantSelector` (= model selector across 4 models), `ProductGallery`, `ImageCard`, `CtaButton`.
- **Motion:** main render crossfades on thumbnail select; price/name swap; selector micro-interactions.

### 5.5 Materials & Specifications — dark plum
- **Purpose:** prove craftsmanship.
- **Content:** left mono headline **"For those who want the details."** Right — spec table, hairline rows, muted label left / white value right (right-aligned). **Confirmed specs:**
  | Label | Value |
  |---|---|
  | Layout | 75% TKL — 84 keys |
  | Switches | Tactile 45g (pre-lubed) — hot-swappable |
  | Keycaps | PBT Doubleshot, Cherry profile |
  | Case | CNC aluminum, matte anodized |
  | Connectivity | USB-C (braided cable included) + Bluetooth 5.1 |
  | Battery | 4000mAh — up to 6 weeks wireless |
  | Weight | 1.2kg |
- **Components:** `SpecificationTable`, `AnimatedHeadline`.
- **Motion:** restrained; rows reveal in sequence.

### 5.6 Testimonials — dark plum
- **Purpose:** social proof in the brand voice — **video** testimonials, not text quotes or star ratings.
- **Content:** centered mono headline **"From people with / better things to do / than write reviews."** Center: video card (poster image, play button, name + role overlaid — e.g. **"Jhon Doe" / "Content Creator"**), violet-bordered frame. Adjacent cards peek left/right (carousel).
- **Components:** `TestimonialCarousel` (video variant), `ImageCard`.
- **Motion:** smooth horizontal transitions; play opens video; reduced-motion → no autoplay, pausable.

### 5.7 Footer CTA + Footer — dark plum → light diagonal split
- **Purpose:** the conversion moment, then the footer.
- **Content:** top dark band — mono headline with **typing-cursor reveal**: **"Engineered for the hour before the world catches up"** (ruled hairlines above/below). **Diagonal split** into a light area with the keyboard render (hand typing, LCD dock) + glossy **Shop Now**. Oversized **ghosted "Creative Workflow" wordmark** behind. Footer: body line **"Every key, considered. A screen that whispers — never shouts. Engineered for people who think in long, unbroken stretches."** + social icons (Facebook, Instagram, LinkedIn, YouTube).
  - **Footer nav columns:**
    - **Company:** Press · Affiliates · FAQ · Blog · Contact
    - **Product:** Our Story · The Screen · The Feel · Colorways · Specifications
    - **Shop:** Accessories · Switch Sets · Keycap Sets · Gift Cards · Shipping Info
  - **Bottom bar:** `© 2025 Calibre Inc.` (left) · Cookies Policy · Privacy Policy (right).
- **Components:** `Footer`, `CtaButton`, `AnimatedHeadline` (typewriter variant), `GhostWord`, `RuledLines`.
- **Motion:** headline types in; diagonal reveal; end calm.

---

## 6. Component inventory

| Component | Notes |
|---|---|
| `Navbar` | Split nav, centered `Calibre.` wordmark; transparent→solid on scroll; mobile menu. |
| `Hero` | Opening composition wrapper. |
| `CtaButton` | **Glossy 3D violet coin/pill** ("Shop Now"); hover lift + press. Signature control. |
| `ProductGallery` | Render gallery; reused in Workflow, Philosophy, Variants. |
| `FeatureSection` | Flexible text+media composition (left / right / overlap / centered). |
| `SpecificationTable` | Semantic table, hairline rows, label/value, dark-section styling. |
| `TestimonialCarousel` | **Video** testimonials; poster + play, name/role, peeking neighbors. |
| `Footer` | 3-column nav + body line + socials + copyright; diagonal top. |
| `ImageCard` | Editorial image container; **violet-border** variant; overlap caption/label. |
| `ProductVariantSelector` | **Model selector** across 4 keyboards; thumbnail rail → main render + name + price + Shop Now. |
| `AnimatedHeadline` | Oversized mono type; reveal + **typewriter/cursor** variant. |
| `SectionDivider` / `RuledLines` | Hairline editorial rules; mono section labels (real structure). |
| `GhostWord` | Oversized low-opacity background wordmark, bleeds off-edge; parallax. |
| `LcdDisplay` ⭐ | Signature. States: **dock**, **clock+visualizer**, **video timeline** (+ notification, picker). Reusable. |

---

## 7. Non-functional requirements

- **Responsive:** mobile-first, 320px → ultrawide; oversized type and overlap must reflow without breaking. Dark and light sections both tested.
- **Accessible:** WCAG 2.1 AA. Visible focus, semantic landmarks, one `<h1>`, alt text, reduced-motion honored, carousel/menu keyboard-operable, contrast checked on **both** light wash and dark plum (violet-on-plum, white-on-plum, ink-on-wash).
- **SEO:** semantic headings, metadata + OG, Product structured data where sensible, meaningful alt text.
- **Performance:** next/image (AVIF/WebP), lazy-load below fold, fonts via `geist`, GSAP/ScrollTrigger registered once + cleaned up, no CLS, good Core Web Vitals.

## 8. Decisions to confirm

1. Names + prices for the **3 remaining keyboard models** (only Calibre-01 Standard / $99 is known).
2. **Shop Now destination** — product page vs stubbed checkout vs external store.
3. Whether real product **photography/renders** exist for all four models + spec/material shots.

## 9. Definition of done (per section)

Matches `STYLE.md`; responsive; keyboard-accessible; reduced-motion respected; real or clearly-labeled placeholder content; components typed and reusable; **reviewed before moving to the next section.**
