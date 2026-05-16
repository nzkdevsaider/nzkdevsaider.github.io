---
name: daisyui-5
description: "daisyUI 5 component library for Tailwind CSS 4. Use when building UI with daisyUI components, applying class names, customizing themes, styling elements, or following daisyUI design patterns. Covers all components: button, card, modal, navbar, input, badge, alert, and more. Version 5.5.x downloaded from https://daisyui.com/llms.txt"
---

# daisyUI 5

daisyUI 5 is a CSS library for Tailwind CSS 4.  
daisyUI 5 provides class names for common UI components.

- [daisyUI 5 docs](http://daisyui.com)
- [Guide: How to use this file in LLMs and code editors](https://daisyui.com/docs/editor/)
- [daisyUI 5 release notes](https://daisyui.com/docs/v5/)
- [daisyUI 4 to 5 upgrade guide](https://daisyui.com/docs/upgrade/)

## Install Notes

[install guide](https://daisyui.com/docs/install/)

1. daisyUI 5 requires Tailwind CSS 4
2. `tailwind.config.js` is deprecated in Tailwind CSS v4 — do not use it. Tailwind CSS v4 only needs `@import "tailwindcss";` in the CSS file if it's a node dependency.
3. Install with `npm i -D daisyui@latest` then add `@plugin "daisyui";` to the CSS file.
4. CDN usage:
```html
<link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```
5. CSS file with node dependency:
```css
@import "tailwindcss";
@plugin "daisyui";
```

## Usage Rules

1. Add daisyUI class names (component + part + modifier) to HTML elements to style them.
2. Use Tailwind CSS utility classes for customizations not covered by daisyUI. Example: `btn px-10`.
3. Use `!` suffix on Tailwind utilities to force override if specificity is an issue (last resort). Example: `btn bg-red-500!`.
4. If no daisyUI component fits, build with Tailwind utilities.
5. Use Tailwind responsive prefixes for `flex`/`grid` layouts.
6. Only use existing daisyUI class names or Tailwind CSS utility classes.
7. Avoid writing custom CSS — prefer daisyUI and Tailwind classes.
8. Placeholder images: `https://picsum.photos/200/300` (adjust size as needed).
9. Don't add custom fonts unless necessary.
10. Don't add `bg-base-100 text-base-content` to `body` unless necessary.
11. For design decisions, follow Refactoring UI best practices.

## Config

[config docs](https://daisyui.com/docs/config/)

```css
/* minimal */
@plugin "daisyui";

/* light theme only */
@plugin "daisyui" {
  themes: light --default;
}

/* all defaults */
@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
  root: ":root";
  include: ;
  exclude: ;
  prefix: ;
  logs: true;
}

/* full example with all built-in themes */
@plugin "daisyui" {
  themes: light, dark, cupcake, bumblebee --default, emerald, corporate, synthwave --prefersdark, retro, cyberpunk, valentine, halloween, garden, forest, aqua, lofi, pastel, fantasy, wireframe, black, luxury, dracula, cmyk, autumn, business, acid, lemonade, night, coffee, winter, dim, nord, sunset, caramellatte, abyss, silk;
  root: ":root";
  include: ;
  exclude: rootscrollgutter, checkbox;
  prefix: daisy-;
  logs: false;
}
```

## Colors

### Semantic Color Names
| Name | Purpose |
|---|---|
| `primary` | Main brand color |
| `primary-content` | Foreground on primary |
| `secondary` | Secondary brand color |
| `secondary-content` | Foreground on secondary |
| `accent` | Accent brand color |
| `accent-content` | Foreground on accent |
| `neutral` | Non-saturated parts of UI |
| `neutral-content` | Foreground on neutral |
| `base-100` | Base page background |
| `base-200` | Slightly darker base |
| `base-300` | Even darker base |
| `base-content` | Foreground on base |
| `info` | Informational messages |
| `info-content` | Foreground on info |
| `success` | Success/safe messages |
| `success-content` | Foreground on success |
| `warning` | Warning/caution messages |
| `warning-content` | Foreground on warning |
| `error` | Error/danger messages |
| `error-content` | Foreground on error |

### Color Rules
- Use as Tailwind utilities: `bg-primary`, `text-secondary`, etc.
- Color values change per theme — no need for `dark:` prefix.
- Prefer daisyUI colors over Tailwind colors to support theming.
- Avoid `text-gray-800` etc. — breaks dark themes.
- `*-content` colors must contrast with their associated background.
- Use `base-*` for most of the page; `primary` for important elements.

### Custom Theme

```css
@import "tailwindcss";
@plugin "daisyui";
@plugin "daisyui/theme" {
  name: "mytheme";
  default: true;
  prefersdark: false;
  color-scheme: light;

  --color-base-100: oklch(98% 0.02 240);
  --color-base-200: oklch(95% 0.03 240);
  --color-base-300: oklch(92% 0.04 240);
  --color-base-content: oklch(20% 0.05 240);
  --color-primary: oklch(55% 0.3 240);
  --color-primary-content: oklch(98% 0.01 240);
  --color-secondary: oklch(70% 0.25 200);
  --color-secondary-content: oklch(98% 0.01 200);
  --color-accent: oklch(65% 0.25 160);
  --color-accent-content: oklch(98% 0.01 160);
  --color-neutral: oklch(50% 0.05 240);
  --color-neutral-content: oklch(98% 0.01 240);
  --color-info: oklch(70% 0.2 220);
  --color-info-content: oklch(98% 0.01 220);
  --color-success: oklch(65% 0.25 140);
  --color-success-content: oklch(98% 0.01 140);
  --color-warning: oklch(80% 0.25 80);
  --color-warning-content: oklch(20% 0.05 80);
  --color-error: oklch(65% 0.3 30);
  --color-error-content: oklch(98% 0.01 30);

  --radius-selector: 1rem;
  --radius-field: 0.25rem;
  --radius-box: 0.5rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 1;
  --noise: 0;
}
```

> All CSS variables are required. Use https://daisyui.com/theme-generator/ to create themes visually.

---

## Components

### accordion
[docs](https://daisyui.com/components/accordion/) — Shows/hides content, one open at a time.

**Classes:** `collapse`, `collapse-title`, `collapse-content`, `collapse-arrow`, `collapse-plus`, `collapse-open`, `collapse-close`

```html
<div class="collapse collapse-arrow">
  <input type="radio" name="accordion-1" checked="checked" />
  <div class="collapse-title">Title</div>
  <div class="collapse-content">Content</div>
</div>
```

- Uses radio inputs. All radios with the same `name` work as a group.
- Use different names for multiple accordion groups.

---

### alert
[docs](https://daisyui.com/components/alert/) — Informs users about important events.

**Classes:** `alert`, `alert-outline`, `alert-dash`, `alert-soft`, `alert-info`, `alert-success`, `alert-warning`, `alert-error`, `alert-vertical`, `alert-horizontal`

```html
<div role="alert" class="alert alert-info">Info message</div>
```

- Add `sm:alert-horizontal` for responsive layouts.

---

### avatar
[docs](https://daisyui.com/components/avatar/) — Shows a thumbnail.

**Classes:** `avatar`, `avatar-group`, `avatar-online`, `avatar-offline`, `avatar-placeholder`

```html
<div class="avatar">
  <div class="w-12 rounded-full">
    <img src="photo.jpg" />
  </div>
</div>
```

- Size with `w-*` / `h-*`. Use `mask-*` for shapes.

---

### badge
[docs](https://daisyui.com/components/badge/) — Shows status labels.

**Classes:** `badge`, `badge-outline`, `badge-dash`, `badge-soft`, `badge-ghost`, `badge-neutral`, `badge-primary`, `badge-secondary`, `badge-accent`, `badge-info`, `badge-success`, `badge-warning`, `badge-error`, `badge-xs`, `badge-sm`, `badge-md`, `badge-lg`, `badge-xl`

```html
<span class="badge badge-primary">New</span>
```

---

### breadcrumbs
[docs](https://daisyui.com/components/breadcrumbs/) — Navigation trail.

**Classes:** `breadcrumbs`

```html
<div class="breadcrumbs">
  <ul><li><a>Home</a></li><li>Page</li></ul>
</div>
```

---

### button
[docs](https://daisyui.com/components/button/) — Clickable action element.

**Classes:** `btn`, `btn-neutral`, `btn-primary`, `btn-secondary`, `btn-accent`, `btn-info`, `btn-success`, `btn-warning`, `btn-error`, `btn-outline`, `btn-dash`, `btn-soft`, `btn-ghost`, `btn-link`, `btn-active`, `btn-disabled`, `btn-xs`, `btn-sm`, `btn-md`, `btn-lg`, `btn-xl`, `btn-wide`, `btn-block`, `btn-square`, `btn-circle`

```html
<button class="btn btn-primary">Click me</button>
```

- Works on `<button>`, `<a>`, `<input>`.
- For disabled-by-class: add `tabindex="-1" role="button" aria-disabled="true"`.

---

### calendar
[docs](https://daisyui.com/components/calendar/) — Styles for Cally, Pikaday, React Day Picker.

**Classes:** `cally`, `pika-single`, `react-day-picker`

---

### card
[docs](https://daisyui.com/components/card/) — Groups and displays content.

**Classes:** `card`, `card-title`, `card-body`, `card-actions`, `card-border`, `card-dash`, `card-side`, `image-full`, `card-xs`, `card-sm`, `card-md`, `card-lg`, `card-xl`

```html
<div class="card card-border">
  <figure><img src="img.jpg" alt="..." /></figure>
  <div class="card-body">
    <h2 class="card-title">Title</h2>
    <p>Content</p>
    <div class="card-actions"><button class="btn btn-primary">Buy</button></div>
  </div>
</div>
```

- Use `sm:card-horizontal` for responsive layouts.

---

### carousel
[docs](https://daisyui.com/components/carousel/) — Scrollable content area.

**Classes:** `carousel`, `carousel-item`, `carousel-start`, `carousel-center`, `carousel-end`, `carousel-horizontal`, `carousel-vertical`

```html
<div class="carousel">
  <div class="carousel-item"><img src="img1.jpg" /></div>
  <div class="carousel-item"><img src="img2.jpg" /></div>
</div>
```

---

### chat
[docs](https://daisyui.com/components/chat/) — Conversation bubbles.

**Classes:** `chat`, `chat-start`, `chat-end`, `chat-image`, `chat-header`, `chat-footer`, `chat-bubble`, `chat-bubble-neutral`, `chat-bubble-primary`, `chat-bubble-secondary`, `chat-bubble-accent`, `chat-bubble-info`, `chat-bubble-success`, `chat-bubble-warning`, `chat-bubble-error`

```html
<div class="chat chat-start">
  <div class="chat-bubble">Hello!</div>
</div>
```

---

### checkbox
[docs](https://daisyui.com/components/checkbox/)

**Classes:** `checkbox`, `checkbox-primary`, `checkbox-secondary`, `checkbox-accent`, `checkbox-neutral`, `checkbox-success`, `checkbox-warning`, `checkbox-info`, `checkbox-error`, `checkbox-xs`, `checkbox-sm`, `checkbox-md`, `checkbox-lg`, `checkbox-xl`

```html
<input type="checkbox" class="checkbox checkbox-primary" />
```

---

### collapse
[docs](https://daisyui.com/components/collapse/) — Show/hide content.

**Classes:** `collapse`, `collapse-title`, `collapse-content`, `collapse-arrow`, `collapse-plus`, `collapse-open`, `collapse-close`

```html
<div tabindex="0" class="collapse collapse-arrow">
  <div class="collapse-title">Title</div>
  <div class="collapse-content">Content</div>
</div>
```

---

### countdown
[docs](https://daisyui.com/components/countdown/) — Animated number transition.

**Classes:** `countdown`

```html
<span class="countdown">
  <span style="--value:30;" aria-live="polite" aria-label="30">30</span>
</span>
```

---

### diff
[docs](https://daisyui.com/components/diff/) — Side-by-side comparison.

**Classes:** `diff`, `diff-item-1`, `diff-item-2`, `diff-resizer`

```html
<figure class="diff aspect-16/9">
  <div class="diff-item-1">Before</div>
  <div class="diff-item-2">After</div>
  <div class="diff-resizer"></div>
</figure>
```

---

### divider
[docs](https://daisyui.com/components/divider/)

**Classes:** `divider`, `divider-neutral`, `divider-primary`, `divider-secondary`, `divider-accent`, `divider-success`, `divider-warning`, `divider-info`, `divider-error`, `divider-vertical`, `divider-horizontal`, `divider-start`, `divider-end`

```html
<div class="divider">OR</div>
```

---

### dock
[docs](https://daisyui.com/components/dock/) — Bottom navigation bar.

**Classes:** `dock`, `dock-label`, `dock-active`, `dock-xs`, `dock-sm`, `dock-md`, `dock-lg`, `dock-xl`

```html
<div class="dock">
  <button class="dock-active">
    <svg>...</svg>
    <span class="dock-label">Home</span>
  </button>
</div>
```

- Add `<meta name="viewport" content="viewport-fit=cover">` for iOS.

---

### drawer
[docs](https://daisyui.com/components/drawer/) — Sidebar layout.

**Classes:** `drawer`, `drawer-toggle`, `drawer-content`, `drawer-side`, `drawer-overlay`, `drawer-end`, `drawer-open`, `is-drawer-open:`, `is-drawer-close:`

```html
<div class="drawer lg:drawer-open">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <label for="my-drawer" class="btn drawer-button lg:hidden">Open</label>
  </div>
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 min-h-full w-80 p-4">
      <li><button>Item 1</button></li>
    </ul>
  </div>
</div>
```

- All page content must be inside `drawer-content`.

---

### dropdown
[docs](https://daisyui.com/components/dropdown/)

**Classes:** `dropdown`, `dropdown-content`, `dropdown-start`, `dropdown-center`, `dropdown-end`, `dropdown-top`, `dropdown-bottom`, `dropdown-left`, `dropdown-right`, `dropdown-hover`, `dropdown-open`, `dropdown-close`

```html
<details class="dropdown">
  <summary>Open</summary>
  <ul class="dropdown-content menu bg-base-100 rounded-box w-52">
    <li><a>Item</a></li>
  </ul>
</details>
```

---

### fab
[docs](https://daisyui.com/components/fab/) — Floating Action Button.

**Classes:** `fab`, `fab-close`, `fab-main-action`, `fab-flower`

```html
<div class="fab">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">+</div>
  <button class="btn btn-lg btn-circle">A</button>
  <button class="btn btn-lg btn-circle">B</button>
</div>
```

---

### fieldset
[docs](https://daisyui.com/components/fieldset/) — Groups form elements.

**Classes:** `fieldset`, `fieldset-legend`, `label`

```html
<fieldset class="fieldset">
  <legend class="fieldset-legend">Settings</legend>
  <input type="text" class="input" />
  <p class="label">Helper text</p>
</fieldset>
```

---

### file-input
[docs](https://daisyui.com/components/file-input/)

**Classes:** `file-input`, `file-input-ghost`, `file-input-neutral`, `file-input-primary`, `file-input-secondary`, `file-input-accent`, `file-input-info`, `file-input-success`, `file-input-warning`, `file-input-error`, `file-input-xs`, `file-input-sm`, `file-input-md`, `file-input-lg`, `file-input-xl`

```html
<input type="file" class="file-input file-input-primary" />
```

---

### filter
[docs](https://daisyui.com/components/filter/) — Radio group filter with reset.

**Classes:** `filter`, `filter-reset`

```html
<form class="filter">
  <input class="btn btn-square" type="reset" value="×" />
  <input class="btn" type="radio" name="filter" aria-label="All" />
  <input class="btn" type="radio" name="filter" aria-label="Active" />
</form>
```

---

### footer
[docs](https://daisyui.com/components/footer/)

**Classes:** `footer`, `footer-title`, `footer-center`, `footer-horizontal`, `footer-vertical`

```html
<footer class="footer sm:footer-horizontal bg-base-200 p-10">
  <nav>
    <h6 class="footer-title">Company</h6>
    <a class="link link-hover">About</a>
  </nav>
</footer>
```

---

### hero
[docs](https://daisyui.com/components/hero/)

**Classes:** `hero`, `hero-content`, `hero-overlay`

```html
<div class="hero min-h-screen" style="background-image: url(img.jpg)">
  <div class="hero-overlay"></div>
  <div class="hero-content text-center text-neutral-content">
    <h1 class="text-5xl font-bold">Hello</h1>
  </div>
</div>
```

---

### hover-3d
[docs](https://daisyui.com/components/hover-3d/) — 3D tilt hover effect.

**Classes:** `hover-3d`

```html
<div class="hover-3d my-12 mx-2">
  <figure class="max-w-100 rounded-2xl">
    <img src="image.jpg" alt="..." />
  </figure>
  <div></div><div></div><div></div><div></div>
  <div></div><div></div><div></div><div></div>
</div>
```

- Must have exactly 9 direct children (1 content + 8 empty divs).
- No interactive elements inside.

---

### hover-gallery
[docs](https://daisyui.com/components/hover-gallery/) — Image gallery with hover reveal.

**Classes:** `hover-gallery`

```html
<figure class="hover-gallery max-w-60">
  <img src="img1.jpg" /><img src="img2.jpg" /><img src="img3.jpg" />
</figure>
```

- Up to 10 images. Images must be same dimensions.

---

### indicator
[docs](https://daisyui.com/components/indicator/) — Corner badge on another element.

**Classes:** `indicator`, `indicator-item`, `indicator-start`, `indicator-center`, `indicator-end`, `indicator-top`, `indicator-middle`, `indicator-bottom`

```html
<div class="indicator">
  <span class="indicator-item badge badge-primary">99+</span>
  <button class="btn">Inbox</button>
</div>
```

---

### input
[docs](https://daisyui.com/components/input/) — Text input field.

**Classes:** `input`, `input-ghost`, `input-neutral`, `input-primary`, `input-secondary`, `input-accent`, `input-info`, `input-success`, `input-warning`, `input-error`, `input-xs`, `input-sm`, `input-md`, `input-lg`, `input-xl`

```html
<input type="text" placeholder="Type here" class="input input-primary" />
```

---

### join
[docs](https://daisyui.com/components/join/) — Groups elements with shared borders.

**Classes:** `join`, `join-item`, `join-vertical`, `join-horizontal`

```html
<div class="join">
  <button class="btn join-item">A</button>
  <button class="btn join-item">B</button>
</div>
```

- Use `lg:join-horizontal` for responsive.

---

### kbd
[docs](https://daisyui.com/components/kbd/) — Keyboard shortcut display.

**Classes:** `kbd`, `kbd-xs`, `kbd-sm`, `kbd-md`, `kbd-lg`, `kbd-xl`

```html
<kbd class="kbd">Ctrl</kbd> + <kbd class="kbd">C</kbd>
```

---

### label
[docs](https://daisyui.com/components/label/)

**Classes:** `label`, `floating-label`

```html
<!-- Regular label -->
<label class="input">
  <span class="label">Email</span>
  <input type="email" placeholder="you@example.com" />
</label>

<!-- Floating label -->
<label class="floating-label">
  <input type="text" placeholder="Name" class="input" />
  <span>Name</span>
</label>
```

---

### link
[docs](https://daisyui.com/components/link/)

**Classes:** `link`, `link-hover`, `link-neutral`, `link-primary`, `link-secondary`, `link-accent`, `link-success`, `link-info`, `link-warning`, `link-error`

```html
<a class="link link-primary">Click me</a>
```

---

### list
[docs](https://daisyui.com/components/list/) — Vertical info rows.

**Classes:** `list`, `list-row`, `list-col-wrap`, `list-col-grow`

```html
<ul class="list">
  <li class="list-row">
    <img class="size-10 rounded-box" src="thumb.jpg" />
    <div class="list-col-grow">Title</div>
    <button class="btn btn-sm">Action</button>
  </li>
</ul>
```

---

### loading
[docs](https://daisyui.com/components/loading/)

**Classes:** `loading`, `loading-spinner`, `loading-dots`, `loading-ring`, `loading-ball`, `loading-bars`, `loading-infinity`, `loading-xs`, `loading-sm`, `loading-md`, `loading-lg`, `loading-xl`

```html
<span class="loading loading-spinner loading-lg"></span>
```

---

### mask
[docs](https://daisyui.com/components/mask/) — Clips element to a shape.

**Classes:** `mask`, `mask-squircle`, `mask-heart`, `mask-hexagon`, `mask-hexagon-2`, `mask-decagon`, `mask-pentagon`, `mask-diamond`, `mask-square`, `mask-circle`, `mask-star`, `mask-star-2`, `mask-triangle`, `mask-triangle-2`, `mask-triangle-3`, `mask-triangle-4`, `mask-half-1`, `mask-half-2`

```html
<img class="mask mask-squircle w-24" src="photo.jpg" />
```

---

### menu
[docs](https://daisyui.com/components/menu/)

**Classes:** `menu`, `menu-title`, `menu-dropdown`, `menu-dropdown-toggle`, `menu-disabled`, `menu-active`, `menu-focus`, `menu-dropdown-show`, `menu-xs`, `menu-sm`, `menu-md`, `menu-lg`, `menu-xl`, `menu-vertical`, `menu-horizontal`

```html
<ul class="menu bg-base-200 rounded-box w-56">
  <li><a>Item 1</a></li>
  <li class="menu-title">Section</li>
  <li><a>Item 2</a></li>
</ul>
```

---

### mockup-browser
[docs](https://daisyui.com/components/mockup-browser/)

**Classes:** `mockup-browser`, `mockup-browser-toolbar`

```html
<div class="mockup-browser border border-base-300">
  <div class="mockup-browser-toolbar">
    <div class="input">https://example.com</div>
  </div>
  <div class="p-4">Content</div>
</div>
```

---

### mockup-code
[docs](https://daisyui.com/components/mockup-code/)

**Classes:** `mockup-code`

```html
<div class="mockup-code">
  <pre data-prefix="$"><code>npm i daisyui</code></pre>
</div>
```

---

### mockup-phone
[docs](https://daisyui.com/components/mockup-phone/)

**Classes:** `mockup-phone`, `mockup-phone-camera`, `mockup-phone-display`

```html
<div class="mockup-phone">
  <div class="mockup-phone-camera"></div>
  <div class="mockup-phone-display"><div class="p-4">App content</div></div>
</div>
```

---

### mockup-window
[docs](https://daisyui.com/components/mockup-window/)

**Classes:** `mockup-window`

```html
<div class="mockup-window border border-base-300">
  <div class="p-4">Content</div>
</div>
```

---

### modal
[docs](https://daisyui.com/components/modal/)

**Classes:** `modal`, `modal-box`, `modal-action`, `modal-backdrop`, `modal-toggle`, `modal-open`, `modal-top`, `modal-middle`, `modal-bottom`, `modal-start`, `modal-end`

```html
<button onclick="my_modal.showModal()">Open</button>
<dialog id="my_modal" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Title</h3>
    <p>Content</p>
    <div class="modal-action">
      <form method="dialog"><button class="btn">Close</button></form>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop"><button>close</button></form>
</dialog>
```

---

### navbar
[docs](https://daisyui.com/components/navbar/)

**Classes:** `navbar`, `navbar-start`, `navbar-center`, `navbar-end`

```html
<div class="navbar bg-base-200">
  <div class="navbar-start"><a class="btn btn-ghost text-xl">Logo</a></div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal"><li><a>Link</a></li></ul>
  </div>
  <div class="navbar-end"><button class="btn btn-primary">Get Started</button></div>
</div>
```

---

### pagination
[docs](https://daisyui.com/components/pagination/) — Uses `join` component.

```html
<div class="join">
  <button class="join-item btn">«</button>
  <button class="join-item btn btn-active">1</button>
  <button class="join-item btn">2</button>
  <button class="join-item btn">»</button>
</div>
```

---

### progress
[docs](https://daisyui.com/components/progress/)

**Classes:** `progress`, `progress-neutral`, `progress-primary`, `progress-secondary`, `progress-accent`, `progress-info`, `progress-success`, `progress-warning`, `progress-error`

```html
<progress class="progress progress-primary" value="70" max="100"></progress>
```

---

### radial-progress
[docs](https://daisyui.com/components/radial-progress/)

**Classes:** `radial-progress`

```html
<div class="radial-progress" style="--value:70;" aria-valuenow="70" role="progressbar">70%</div>
```

- Use `--size` and `--thickness` CSS variables to customize.

---

### radio
[docs](https://daisyui.com/components/radio/)

**Classes:** `radio`, `radio-neutral`, `radio-primary`, `radio-secondary`, `radio-accent`, `radio-success`, `radio-warning`, `radio-info`, `radio-error`, `radio-xs`, `radio-sm`, `radio-md`, `radio-lg`, `radio-xl`

```html
<input type="radio" name="choice" class="radio radio-primary" />
```

---

### range
[docs](https://daisyui.com/components/range/)

**Classes:** `range`, `range-neutral`, `range-primary`, `range-secondary`, `range-accent`, `range-success`, `range-warning`, `range-info`, `range-error`, `range-xs`, `range-sm`, `range-md`, `range-lg`, `range-xl`

```html
<input type="range" min="0" max="100" value="40" class="range range-primary" />
```

---

### rating
[docs](https://daisyui.com/components/rating/)

**Classes:** `rating`, `rating-half`, `rating-hidden`, `rating-xs`, `rating-sm`, `rating-md`, `rating-lg`, `rating-xl`

```html
<div class="rating">
  <input type="radio" name="stars" class="rating-hidden" />
  <input type="radio" name="stars" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="stars" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="stars" class="mask mask-star-2 bg-orange-400" checked />
</div>
```

---

### select
[docs](https://daisyui.com/components/select/)

**Classes:** `select`, `select-ghost`, `select-neutral`, `select-primary`, `select-secondary`, `select-accent`, `select-info`, `select-success`, `select-warning`, `select-error`, `select-xs`, `select-sm`, `select-md`, `select-lg`, `select-xl`

```html
<select class="select select-primary">
  <option>Pick one</option>
  <option>Option A</option>
</select>
```

---

### skeleton
[docs](https://daisyui.com/components/skeleton/)

**Classes:** `skeleton`, `skeleton-text`

```html
<div class="skeleton h-32 w-32"></div>
<div class="skeleton skeleton-text">Loading...</div>
```

---

### stack
[docs](https://daisyui.com/components/stack/)

**Classes:** `stack`, `stack-top`, `stack-bottom`, `stack-start`, `stack-end`

```html
<div class="stack">
  <div class="card bg-base-100 shadow">Card 1</div>
  <div class="card bg-base-100 shadow">Card 2</div>
</div>
```

---

### stat
[docs](https://daisyui.com/components/stat/)

**Classes:** `stats`, `stat`, `stat-title`, `stat-value`, `stat-desc`, `stat-figure`, `stat-actions`, `stats-horizontal`, `stats-vertical`

```html
<div class="stats shadow">
  <div class="stat">
    <div class="stat-title">Total Users</div>
    <div class="stat-value">31K</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
</div>
```

---

### status
[docs](https://daisyui.com/components/status/) — Tiny status indicator dot.

**Classes:** `status`, `status-neutral`, `status-primary`, `status-secondary`, `status-accent`, `status-info`, `status-success`, `status-warning`, `status-error`, `status-xs`, `status-sm`, `status-md`, `status-lg`, `status-xl`

```html
<span class="status status-success"></span> Online
```

---

### steps
[docs](https://daisyui.com/components/steps/)

**Classes:** `steps`, `step`, `step-icon`, `step-neutral`, `step-primary`, `step-secondary`, `step-accent`, `step-info`, `step-success`, `step-warning`, `step-error`, `steps-vertical`, `steps-horizontal`

```html
<ul class="steps">
  <li class="step step-primary">Register</li>
  <li class="step step-primary">Profile</li>
  <li class="step">Payment</li>
</ul>
```

---

### swap
[docs](https://daisyui.com/components/swap/) — Toggle between two elements.

**Classes:** `swap`, `swap-on`, `swap-off`, `swap-indeterminate`, `swap-active`, `swap-rotate`, `swap-flip`

```html
<label class="swap swap-rotate">
  <input type="checkbox" />
  <div class="swap-on">🌙</div>
  <div class="swap-off">☀️</div>
</label>
```

---

### tab
[docs](https://daisyui.com/components/tab/)

**Classes:** `tabs`, `tab`, `tab-content`, `tabs-box`, `tabs-border`, `tabs-lift`, `tab-active`, `tab-disabled`, `tabs-top`, `tabs-bottom`

```html
<div role="tablist" class="tabs tabs-lift">
  <input type="radio" name="tabs" class="tab" aria-label="Tab 1" checked />
  <div class="tab-content p-4">Content 1</div>
  <input type="radio" name="tabs" class="tab" aria-label="Tab 2" />
  <div class="tab-content p-4">Content 2</div>
</div>
```

---

### table
[docs](https://daisyui.com/components/table/)

**Classes:** `table`, `table-zebra`, `table-pin-rows`, `table-pin-cols`, `table-xs`, `table-sm`, `table-md`, `table-lg`, `table-xl`

```html
<div class="overflow-x-auto">
  <table class="table table-zebra">
    <thead><tr><th>Name</th><th>Role</th></tr></thead>
    <tbody><tr><td>Alice</td><td>Admin</td></tr></tbody>
  </table>
</div>
```

---

### text-rotate
[docs](https://daisyui.com/components/text-rotate/) — Rotating text animation (2–6 items, 10s loop).

**Classes:** `text-rotate`

```html
<span class="text-rotate text-4xl font-bold">
  <span>
    <span>Design</span>
    <span>Develop</span>
    <span>Deploy</span>
  </span>
</span>
```

- Custom duration: `duration-12000` (milliseconds).
- Custom line height: `leading-[2]`.

---

### textarea
[docs](https://daisyui.com/components/textarea/)

**Classes:** `textarea`, `textarea-ghost`, `textarea-neutral`, `textarea-primary`, `textarea-secondary`, `textarea-accent`, `textarea-info`, `textarea-success`, `textarea-warning`, `textarea-error`, `textarea-xs`, `textarea-sm`, `textarea-md`, `textarea-lg`, `textarea-xl`

```html
<textarea class="textarea textarea-primary" placeholder="Write something..."></textarea>
```

---

### theme-controller
[docs](https://daisyui.com/components/theme-controller/) — Switch themes via checkbox/radio.

**Classes:** `theme-controller`

```html
<input type="checkbox" value="dark" class="theme-controller" />
```

---

### timeline
[docs](https://daisyui.com/components/timeline/)

**Classes:** `timeline`, `timeline-start`, `timeline-middle`, `timeline-end`, `timeline-snap-icon`, `timeline-box`, `timeline-compact`, `timeline-vertical`, `timeline-horizontal`

```html
<ul class="timeline">
  <li>
    <div class="timeline-start">2020</div>
    <div class="timeline-middle">●</div>
    <div class="timeline-end timeline-box">Event</div>
  </li>
</ul>
```

---

### toast
[docs](https://daisyui.com/components/toast/) — Corner-positioned notification stack.

**Classes:** `toast`, `toast-start`, `toast-center`, `toast-end`, `toast-top`, `toast-middle`, `toast-bottom`

```html
<div class="toast toast-end">
  <div class="alert alert-success">Saved!</div>
</div>
```

---

### toggle
[docs](https://daisyui.com/components/toggle/) — Styled switch checkbox.

**Classes:** `toggle`, `toggle-primary`, `toggle-secondary`, `toggle-accent`, `toggle-neutral`, `toggle-success`, `toggle-warning`, `toggle-info`, `toggle-error`, `toggle-xs`, `toggle-sm`, `toggle-md`, `toggle-lg`, `toggle-xl`

```html
<input type="checkbox" class="toggle toggle-primary" />
```

---

### tooltip
[docs](https://daisyui.com/components/tooltip/)

**Classes:** `tooltip`, `tooltip-content`, `tooltip-open`, `tooltip-top`, `tooltip-bottom`, `tooltip-left`, `tooltip-right`, `tooltip-primary`, `tooltip-secondary`, `tooltip-accent`, `tooltip-info`, `tooltip-success`, `tooltip-warning`, `tooltip-error`

```html
<div class="tooltip tooltip-right" data-tip="More info">
  <button class="btn">Hover me</button>
</div>
```

---

### validator
[docs](https://daisyui.com/components/validator/) — Color feedback based on input validation.

**Classes:** `validator`, `validator-hint`

```html
<input type="email" class="input validator" required />
<p class="validator-hint">Enter a valid email</p>
```

- Use with `input`, `select`, `textarea`.
