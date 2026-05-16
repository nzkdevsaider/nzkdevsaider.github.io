---
version: alpha
name: Ukiyo Portfolio
description: Personal portfolio design system for Sebastián Morales. Warm earthy tones with a card-centric layout and animated sticker accents.
colors:
  surface: "#f5f0ea"
  surface-dim: "#ede5d8"
  surface-muted: "#d9c9b2"
  on-surface: "#4a3d32"
  primary: "#5c4a38"
  secondary: "#c4ab92"
  accent: "#8c6e52"
  company: "#b45309"
  white: "#ffffff"
typography:
  display:
    fontFamily: Geist
    fontSize: 60px
    fontWeight: 500
    lineHeight: 1.1
  headline-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: 600
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
  label-md:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: 500
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: 400
rounded:
  sm: 8px
  md: 12px
  lg: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
components:
  main-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
  experience-card:
    backgroundColor: "{colors.surface-dim}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  badge-availability:
    backgroundColor: "{colors.surface-dim}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    padding: 10px
  badge-date:
    backgroundColor: "{colors.surface-dim}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    padding: 8px
  badge-skill:
    backgroundColor: "{colors.surface-dim}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    padding: 12px
  company-logo-sm:
    backgroundColor: "{colors.company}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    width: 24px
    height: 24px
  company-logo-md:
    backgroundColor: "{colors.company}"
    textColor: "{colors.white}"
    rounded: 12px
    width: 36px
    height: 36px
  project-showcase:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
  sticker:
    width: 100px
    height: 100px
  divider:
    backgroundColor: "{colors.surface-muted}"
    height: 1px
  caption:
    textColor: "{colors.secondary}"
    typography: "{typography.label-sm}"
  highlight:
    textColor: "{colors.accent}"
    typography: "{typography.label-sm}"
---

## Overview

Ukiyo is a warm minimal portfolio. The UI combines earthy OKLCH tones with clean sans-serif typography and a card-centric layout. The card surfaces as a warm-white container on a warm beige background, anchored by a dark hero banner at the top of the card.

Key personality traits:

- **Warm but technical** — earthy brown palette references craft and depth; the dark banner creates contrast that frames the profile below
- **Card-centric** — all content lives inside a single rounded card; sticker illustrations float outside as personality accents on large viewports
- **Motion-aware** — Framer Motion drives soft blur-ins on the name heading, stagger fade-ups on experience cards, a scaleY reveal on section title bars, and an infinite floating bob on stickers

The design intentionally avoids high saturation. The single high-chroma accent is amber (`#b45309`) reserved exclusively for company logo placeholders.

## Colors

The palette derives from the custom DaisyUI `ukiyo` theme defined in OKLCH and approximated here in sRGB hex for tooling compatibility.

- **Surface (`#f5f0ea`)**: Warm off-white — card background and primary surface.
- **Surface-dim (`#ede5d8`)**: Slightly deeper tone — badge backgrounds and experience card backgrounds.
- **Surface-muted (`#d9c9b2`)**: Muted earthy tan — borders, dividers, subtle outlines.
- **On-surface (`#4a3d32`)**: Dark warm brown — primary text, icon fills, section bar accents.
- **Primary (`#5c4a38`)**: Deep earthy brown — project showcase card background.
- **Secondary (`#c4ab92`)**: Warm tan — secondary and muted text.
- **Accent (`#8c6e52`)**: Medium amber-brown — subtle secondary accents.
- **Company (`#b45309`)**: Amber-700 — company logo placeholder backgrounds; the only saturated accent.

Use `on-surface` for all primary text and icon fills. Use `surface-dim` as the default badge background. Reserve `company` exclusively for company logo placeholders. No other saturated colors are used.

## Typography

All type is set in **Geist** (loaded via Next.js Google Fonts). No serif typefaces. Type scale uses Tailwind responsive prefixes.

- **Display (`60px / 500`)**: Single-use heading for the full name. Animated with soft-blur-in on mount (`opacity 0→1`, `blur 8px→0`, `y 12px→0`, 700ms ease-out). Responsive: `48px` on mobile, `60px` on `md+`.
- **Headline-md (`16px / 600`)**: Used for section titles — Sobre mí, Experiencia laboral, Educación, Habilidades. Always paired with a left vertical bar accent (`2px × 20px`, `on-surface` color, scaleY animated on viewport entry). Letter spacing `-0.01em`.
- **Body-md (`14px / 400`, line-height 1.6)**: Paragraph and highlight text throughout.
- **Label-md (`12px / 500`)**: Date badges, company names in cards.
- **Label-sm (`12px / 400`, 50–60% opacity)**: Secondary metadata — positions, locations, muted bullets.

## Layout

The page scrolls naturally. No viewport-height containers.

```
┌── body (bg: surface, min-h-screen, relative) ────────────────┐
│  [Sticker L] absolute left-6 top-80   hidden on <xl          │
│  [Sticker R] absolute right-6 top-48  hidden on <xl          │
│                                                               │
│  main (container, max-w-4xl, padding: 8px md:64px)           │
│  └── card (shadow-xl, rounded-3xl, overflow-hidden)          │
│      ├── Banner (h-64, dark image, gradient-to-top)          │
│      ├── Presentation (-mt-20, z-10, px-6)                   │
│      │   ├── FreelanceBadge                                   │
│      │   ├── Name (H1, blur-in animation)                     │
│      │   ├── SocialLinks                                      │
│      │   ├── Subtitle (position + company badge)              │
│      │   └── Tagline                                          │
│      └── Content (px-6 pb-12, flex col gap-8)                │
│          ├── AboutMe                                          │
│          ├── Experiencia laboral                              │
│          ├── Educación                                        │
│          └── Habilidades                                      │
└───────────────────────────────────────────────────────────────┘
```

Content sections use `gap-8` vertical spacing. Each section is a `<section>` with a `SectionTitle` and its content. The main card uses `overflow-hidden` to clip the banner's rounded corners. Presentation has `relative z-10` to appear over the banner gradient overlap. Stickers use `position: absolute` relative to the `body` — they stay at their document position when scrolling, not fixed to the viewport.

## Elevation & Depth

- **Main card**: `box-shadow: 0 20px 60px rgba(0,0,0,0.12)` (`shadow-xl`) — the only elevated surface.
- **Experience / Education cards**: No shadow; `border: 1px solid surface-muted/30` only.
- **Badges**: No shadow; rely on background contrast.

The design intentionally uses a single elevation layer. Avoid adding shadows to inner cards or badges.

## Shapes

- **Main card**: `border-radius: 24px` (`rounded-3xl`)
- **Experience / Education cards**: `border-radius: 12px` (`rounded-xl`)
- **Badges, skill pills**: `border-radius: 9999px` (`rounded-full`)
- **Company logos (sm)**: `border-radius: 8px` (`rounded-md`)
- **Company logos (md)**: `border-radius: 12px` (`rounded-xl`)
- **Stickers**: Raw image — no border, no circular clip. The image itself carries its own shape.

## Components

### Badge

Three variants — always `rounded-full`:

| Variant | Background | Text color | Use |
|---|---|---|---|
| `availability` | `surface-dim` | `on-surface` | "Disponible para freelance" |
| `date` | `surface-dim` | `on-surface` | Date ranges in cards |
| `skill` | `surface-dim` | `on-surface` | Technology skill tags |

### SectionTitle

Left vertical bar (`2px × 20px`, `on-surface` color, `rounded-full`) + `<h2>` heading. Animation: bar scales from `scaleY: 0` to `scaleY: 1` (400ms, top origin) and the whole element translates from `x: -16, opacity: 0` to `x: 0, opacity: 1` (500ms ease-out) when entering the viewport (`whileInView`, `once: true`).

### CompanyLogo

Two sizes — amber-700 (`#b45309`) rounded square. Displays the first letter of the company name in white bold. Accepts an optional `src` prop for a real image.

- **sm** (`24×24px`, `rounded-md`): used inline inside the current-job pill badge in Presentation.
- **md** (`36×36px`, `rounded-xl`): used in ExperienceCard and EducationCard headers.

### ExperienceCard

Full-width card with `bg-surface-dim/40`, `border border-surface-muted/30`, `rounded-xl`. Split into two columns:

- **Left (45%)**: `CompanyLogo` + company name + `Badge (date)` + position + location
- **Right (55%)**: Arrow bullet highlights (`→ text` in label-sm style, 60% opacity)

Animated: `opacity: 0, y: 16` → `opacity: 1, y: 0` with `staggerChildren: 0.12s` on viewport entry.

### SkillBadge

`Badge` with `skill` variant. Staggered pop animation (`scale: 0.82 → 1`, `opacity: 0 → 1`, `0.32s`) using `motion.div` with `staggerChildren: 0.055s`.

### ProjectShowcase

Dark card (`bg-primary`, `rounded-xl`). Fixed width `w-52` on desktop, full width on mobile. Contains:
- `{Título}` heading in white/90
- `{Contenido}` text in white/60
- Three pagination dots centered at the bottom

### Sticker

`100×100px` freeform image — no border, no circular clip, no wrapper shape. The image file provides its own silhouette. Animations:

- **Float**: `y: [0, -10, 0]`, 3s loop, `ease: easeInOut` — always active when not hovered. Controlled via `useState(hovered)` on the outer `motion.div`.
- **Hover**: Outer float pauses (`y → 0`, 0.35s easeOut). Inner `motion.img` scales to `1.1` (0.25s easeOut).
- **Hover end**: Float resumes from `y: 0`, seamlessly restarting the loop.
- **Visible**: `xl:block` only (hidden on smaller viewports where there is no side space).
- **Position**: `absolute left-6 top-80` (left) and `absolute right-6 top-48` (right) relative to `body`.

### FreelanceBadge

`Badge (availability)` containing a live-indicator dot + butterfly icon + text. The dot is a two-layer animation: a solid `bg-emerald-500` circle and an absolute-positioned `motion.span` that pulses outward (`scale: [1,1,2.2]`, `opacity: [0,0.55,0]`, 1.8s loop). The loop reset is invisible because both the first and last keyframe have `opacity: 0`.

## Do's and Don'ts

**Do:**
- Use `on-surface` for all icons and primary text
- Use `surface-dim` as badge backgrounds
- Keep experience and education cards on a two-column grid
- Animate sections with `whileInView` + `once: true` (no repeat)
- Keep stickers hidden below `xl` breakpoint
- Separate float and hover animations into two nested `motion` elements to avoid loop conflicts

**Don't:**
- Add shadows to inner cards (experience, education)
- Use saturated colors outside of company logos
- Add new typefaces or font weights other than `500` and `600`
- Use `h-screen` or `overflow-hidden` on the main card container (breaks scroll)
- Animate stickers with `whileInView` — they use persistent `animate` driven by `useState`
- Put `whileHover` and a repeating `animate` on the same `motion` element — it causes loop restart bugs
- Use `position: fixed` for stickers — use `absolute` relative to `body` so they scroll with the document
