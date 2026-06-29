# Calibre — SKILL

> Operating instructions for Claude Code. Read with `PRD.md` (what) and `STYLE.md` (how it looks). **This file governs how you work.** Updated to match the approved comps.

---

## 0. Operating rules (most important)

1. **Build one section at a time**, in `PRD.md` §5 order (Hero → Footer). Then **stop and wait for review** before the next. No full-page scaffold in one pass.
2. **Derive every visual decision from `STYLE.md`.** No off-system color, font, radius, or spacing.
3. **Confirm `PRD.md` §8 open items** before building dependent sections (model names/prices, Shop Now destination, available renders).
4. **No developer handoff** — production-quality code, not a throwaway prototype.
5. Ambiguous? Propose the smallest reasonable default and flag it — don't block.

---

## 1. Tech stack

**Always install at `@latest`.** Versions below are the current baseline (June 2026) for context — don't pin older.

- **Next.js 16** App Router · **React 19** · **TypeScript** (strict). Turbopack is the default bundler; **Node.js 20+** required. (Next 16.2+ bundles its docs via `AGENTS.md` and ships agent Skills like `next-dev-loop` for browser/console/React-tree verification — useful when driving the build with Claude Code.)
- **Tailwind CSS v4** (4.3+) — CSS-first `@theme`, no `tailwind.config.js` (see `STYLE.md` §10).
- **shadcn/ui** base primitives, **fully restyled** to Calibre tokens (never default look). v4 + React 19 are supported; on pnpm no peer-dep flag is needed (npm would need `--legacy-peer-deps`).
- **GSAP 3** (3.15+) + **ScrollTrigger**, used via **`@gsap/react`** `useGSAP`. GSAP is now fully free including all plugins (SplitText, MorphSVG, etc.).
- **Lenis** (1.3+) smooth scroll — package is `lenis`, React wrapper `lenis/react`. (Old `@studio-freight/*` packages are deprecated; `smoothTouch` is gone — use `syncTouch`.)
- **geist** package (`GeistSans`, `GeistMono`).
- **Icons:** minimal; **`@phosphor-icons/react`** preferred (`lucide-react` acceptable). LCD app-dock icons are imagery, not an icon set.

---

## 2. Folder structure

```
src/
  app/
    layout.tsx            # fonts, Lenis provider, metadata
    page.tsx              # composes sections in order
    globals.css           # @theme tokens + --wash (STYLE.md §10)
  components/
    sections/
      Hero.tsx
      CreativeWorkflow.tsx
      ProductPhilosophy.tsx
      ChooseYourCalibre.tsx     # product selector (4 models)
      Specifications.tsx
      Testimonials.tsx
      FooterCta.tsx
    ui/
      Navbar.tsx                # split nav, centered Calibre. wordmark
      CtaButton.tsx             # glossy 3D violet coin/pill — signature
      AnimatedHeadline.tsx      # reveal + typewriter/cursor variant
      RuledLines.tsx            # editorial hairline rules
      GhostWord.tsx             # oversized ghosted background wordmark
      SectionDivider.tsx
      ImageCard.tsx             # + violet-border variant
      ProductGallery.tsx
      FeatureSection.tsx
      SpecificationTable.tsx
      TestimonialCarousel.tsx   # VIDEO testimonials
      ProductVariantSelector.tsx# model selector: thumb rail -> render+name+price+CTA
      LcdDisplay.tsx            # signature: dock / clock+visualizer / timeline states
    shadcn/
  lib/
    gsap.ts                # register ScrollTrigger once; reduced-motion helpers
    lenis.tsx              # Lenis provider + GSAP ticker sync
    lcd-states.ts          # dock | clock | timeline state data
    utils.ts               # cn(), helpers
  data/
    products.ts            # 4 models: id, name, price, render(s), thumb
    specs.ts               # confirmed spec rows (PRD §5.5)
    testimonials.ts        # video poster, src, name, role
    footer-nav.ts          # Company / Product / Shop columns (PRD §5.7)
public/
  renders/                 # product images, LCD assets, video posters
```

Keep `sections/` thin (composition only); logic + styling in `ui/` + `lib/`.

---

## 3. Conventions

### Components
- Function components, named exports, typed props (`interface XProps`), no `any`.
- Server Components by default; `"use client"` only for GSAP/Lenis/state/events.
- Primitives accept `className`, merge via `cn()`.
- Accessibility is part of "done": semantics, one `<h1>` (Hero), labelled controls, visible focus, alt text on every render/poster.

### Styling
- Tailwind utilities from `@theme` tokens. **Light sections** use `background: var(--wash)`; **dark sections** use `bg-plum text-on-plum` with `border-line-plum` hairlines.
- Sharp corners (`--radius: 0`) for structure. **Only `CtaButton`** uses `--radius-pill` + the glossy treatment from `STYLE.md` §6 — do not flatten it.
- Type sizes via the CSS vars (`--text-display`, etc.).

### Animation
- Register GSAP/ScrollTrigger once in `lib/gsap.ts`; run in `useGSAP()` (or `gsap.context`) and **clean up** on unmount.
- Sync Lenis to the GSAP ticker; drive ScrollTrigger off Lenis. Wrapper from `lenis/react`; set `autoRaf: false` when driving from the GSAP ticker (single RAF loop), `syncTouch: true` for touch smoothing.
- Provide `usePrefersReducedMotion`; gate parallax, marquee (`GhostWord`), typewriter, autoplay, and button-lift on it (fallbacks in `STYLE.md` §9).
- Typewriter/cursor reveal: **headlines only** (footer + optional section headers), never body copy.

### Images / media
- `next/image` everywhere; explicit `sizes`; `priority` only on hero render; AVIF/WebP; lazy below fold.
- Testimonial videos: poster image + click-to-play; no autoplay with sound; pausable; captions if available.

### State / data
- `ChooseYourCalibre`: selected model in client state → swaps render + name + price + CTA target.
- LCD: state id from `lib/lcd-states.ts`; `LcdDisplay` renders/cycles dock | clock | timeline.

---

## 4. shadcn usage

Install only what's used (Button as the base under `CtaButton`, Dialog/Sheet for mobile nav + any video modal). Restyle immediately: ring/focus → `violet`, structural radius → 0, colors → tokens. Never ship defaults.

---

## 5. Per-section checklist (DoD)

- [ ] Matches `STYLE.md` (color incl. correct light-wash/plum mode, type, spacing, radius, motion).
- [ ] Composition distinct from neighbors; light↔dark rhythm respected.
- [ ] Responsive 320px → ultrawide; oversized/overlapping type reflows cleanly.
- [ ] Keyboard accessible; visible focus; semantic landmarks; alt text; contrast checked on its background.
- [ ] `prefers-reduced-motion` respected.
- [ ] GSAP cleaned up; no console errors; no layout shift.
- [ ] Components typed + reusable; real or clearly-labeled placeholder content (don't invent the 3 unknown model names/prices as fact).
- [ ] Stopped for review before next section.

---

## 6. Workflow notes

- Author prefers **GitHub Desktop** over the git CLI — small, coherent, reviewable commits; no destructive git commands.
- Extend existing components rather than duplicating.
- Surface assumptions and any unverifiable product claims rather than presenting them as fact.

---

## 7. Setup & commands

Scaffold + install once (pnpm recommended — avoids React 19 peer-dep flags). Everything pulls `@latest`:
```bash
# 1. Scaffold: Next 16 + React 19 + Tailwind v4, TS, App Router, src/, @/* alias
pnpm create next-app@latest calibre --ts --tailwind --eslint --app --src-dir --import-alias "@/*"
cd calibre

# 2. Animation + smooth scroll + fonts + icons (latest)
pnpm add gsap @gsap/react lenis geist @phosphor-icons/react

# 3. shadcn (supports Tailwind v4 + React 19); add primitives as needed
pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest add button dialog
```
**globals.css note:** `shadcn init` writes its own base tokens (OKLCH) into `globals.css`. Keep them, then add the Calibre `@theme` tokens + `--wash` from `STYLE.md` §10 — don't overwrite shadcn's base layer.

Day-to-day:
```bash
pnpm dev      # Turbopack dev server
pnpm build    # must pass before a section is "done"
pnpm lint     # must be clean
```
Requires **Node.js 20+**.
