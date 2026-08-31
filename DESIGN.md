---
name: "Pokemon Pokedex"
description: "A mobile-first, device-like Pokedex interface for browsing, collecting, battling, and team planning."
colors:
  pokedex-red: "#d61f1f"
  pokedex-red-dark: "#9c1616"
  pokedex-red-light: "#da4e4e"
  screen-forest: "#244238"
  screen-forest-light: "#305045"
  phosphor-mint: "#8cf2d0"
  electric-spark: "#f9c31f"
  lens-blue: "#2badee"
  button-green: "#2eb85c"
  shell-bg: "#e7ebef"
  ink: "#1b2632"
  panel: "#fafafa"
  rail: "#d9e0e8"
  muted-rail: "#d1d9e0"
  muted-ink: "#52667a"
  border: "#b3bfcc"
  fire-type: "#f47b25"
  water-type: "#308ce8"
  electric-type: "#f9ce1f"
  grass-type: "#5cb82e"
  psychic-type: "#eb477e"
typography:
  display:
    fontFamily: "Ark Pixel, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "normal"
  headline:
    fontFamily: "Ark Pixel, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "Ark Pixel, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "normal"
  body:
    fontFamily: "Ark Pixel, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Ark Pixel, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "normal"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  screen-pad: "16px"
components:
  button-primary:
    backgroundColor: "{colors.pokedex-red}"
    textColor: "{colors.panel}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    height: "40px"
  button-device:
    backgroundColor: "{colors.button-green}"
    textColor: "{colors.panel}"
    rounded: "{rounded.sm}"
    padding: "6px 12px"
    height: "32px"
  input-screen:
    backgroundColor: "{colors.screen-forest-light}"
    textColor: "{colors.phosphor-mint}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
    height: "40px"
  chip-type:
    backgroundColor: "{colors.fire-type}"
    textColor: "{colors.panel}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  pokemon-cell:
    backgroundColor: "{colors.screen-forest-light}"
    textColor: "{colors.phosphor-mint}"
    rounded: "{rounded.md}"
    padding: "6px"
---

# Design System: Pokemon Pokedex

## 1. Overview

**Creative North Star: "掌上图鉴控制台"**

This system should feel like a handheld Pokedex console: compact, tactile, mechanical, and game-native. The product surface is the red device shell, the deep green screens, the glowing text, the small physical controls, and the dense data panels working together as one usable object.

The visual system is allowed to feel playful, but it must stay task-focused. Mobile users are browsing, filtering, collecting, battling, and building teams; every flourish has to support those jobs. The interface should reject ordinary website composition and preserve the sense that the user is operating a device.

**Key Characteristics:**
- Mobile-first device composition, with the Pokedex shell as the primary surface.
- Game-like mechanical controls with crisp state feedback.
- Dense information presented inside dark screen panels with phosphor-colored text.
- Bilingual typography that balances readable Chinese UI with pixel-label atmosphere.
- Motion and shadow used for interaction feedback, not decorative spectacle.

## 2. Colors

The palette is Pokemon-world naming over real device roles: Pokedex red for the shell, phosphor mint for screen text, electric spark for attention, and type colors for Pokemon semantics.

### Primary
- **Pokedex Red**: The device body, primary action color, and strongest identity signal. Use it for the outer Pokedex shell and high-confidence primary controls.
- **Pokedex Red Dark**: Mechanical depth on the shell, hinge darkening, and pressed states.
- **Pokedex Red Light**: Highlight edge on the shell and bevel gradients.

### Secondary
- **Screen Forest**: The core screen background. It is the main reading surface inside the Pokedex.
- **Screen Forest Light**: Header bars, input surfaces, selected rows, and raised controls inside the screen.
- **Phosphor Mint**: Screen text, selected borders, focus rings inside the Pokedex, and high-priority data.

### Tertiary
- **Electric Spark**: Warning, highlight, and special attention color. Use sparingly so it keeps game-energy value.
- **Lens Blue**: The large Pokedex indicator lens and small system-light accents.
- **Button Green**: Physical random/action buttons and success-confirming device controls.

### Neutral
- **Shell Background**: The outer page background behind the device.
- **Ink**: Primary text outside the screen.
- **Panel**: Light panel fill for generic shadcn surfaces and readable overlay content.
- **Rail / Muted Rail / Muted Ink / Border**: Secondary UI structure, muted copy, dividers, and ordinary form boundaries.

### Named Rules

**The Device First Rule.** Red belongs to the Pokedex hardware first, not to decorative page sections.

**The Phosphor Screen Rule.** Inside screen panels, use Screen Forest plus Phosphor Mint as the default relationship; do not turn the screen into ordinary light-mode UI.

**The Type Color Rule.** Full-spectrum colors are reserved for Pokemon type meaning and battle semantics, not random decoration.

## 3. Typography

**Display Font:** Ark Pixel  
**Body Font:** Ark Pixel  
**Label/Mono Font:** Ark Pixel

**Character:** The type system uses one bilingual pixel-style family across the product. Ark Pixel carries both Chinese and English so the whole interface feels like one handheld game device instead of a mixed web UI.

### Hierarchy

- **Display** (400, 2.25rem, 1.15): App heading and rare console-style emphasis only.
- **Headline** (700, 1.25rem, 1.2): Pokemon names, major panel titles, and battle result headings.
- **Title** (700, 1rem, 1.25): Section headers, tabs, and compact panel titles.
- **Body** (400, 0.875rem, 1.5): Descriptions, stats, helper text, and readable bilingual copy. Keep prose within 65-75ch.
- **Label** (400, 0.625rem, 1.2): Device labels, IDs, small counters, and compact button text.

### Named Rules

**The Pixel Everywhere Rule.** All product text uses Ark Pixel. Keep Chinese readable by using compact copy, moderate line height, and smaller information chunks rather than switching to a non-pixel body font.

**The No Fluid UI Type Rule.** Product UI uses fixed rem sizes and breakpoint adjustments; do not scale text with viewport width.

## 4. Elevation

The system uses a hybrid of mechanical bevels and restrained shadows. The Pokedex shell and physical buttons earn inset highlights and pressed shadows; screen content stays mostly flat, using tonal layers, borders, and focus rings for depth.

### Shadow Vocabulary

- **Device Shell** (`inset 3px 3px 8px hsl(var(--pokedex-frame-light) / 0.5), inset -3px -3px 8px hsl(var(--pokedex-frame-dark) / 0.6), 6px 6px 20px hsl(0 0% 0% / 0.3)`): Outer Pokedex frame only.
- **Device Cover** (`inset 3px 3px 10px hsl(var(--pokedex-frame-light) / 0.4), inset -3px -3px 10px hsl(var(--pokedex-frame-dark) / 0.5), 4px 4px 12px hsl(0 0% 0% / 0.2)`): Closed cover and large plastic shell surfaces.
- **Screen Bezel** (`inset 2px 2px 4px hsl(0 0% 100% / 0.3), inset -2px -2px 4px hsl(0 0% 0% / 0.2)`): Gray screen housing only.
- **Screen Well** (`inset 4px 4px 12px hsl(0 0% 0% / 0.5), inset -2px -2px 8px hsl(var(--pokedex-screen-light) / 0.1)`): Deep display area.
- **Button Press** (`inset 2px 2px 4px hsl(0 0% 100% / 0.4), inset -2px -2px 4px hsl(0 0% 0% / 0.2), 2px 2px 4px hsl(0 0% 0% / 0.2)`): Physical controls that need tactile feedback.

### Named Rules

**The Mechanical Feedback Rule.** Buttons and inputs should feel like physical controls with crisp feedback. Use pressed states, small translate transforms, and focus rings.

**The Screen Flatness Rule.** Pokemon cells, stats, lists, and filters inside screens should not float as cards. Use borders and tonal states instead.

## 5. Components

### Buttons

- **Shape:** Gently mechanical rectangles for most controls (8px), tighter device buttons for hardware-like controls (4px), full circles only for lights and icon closures.
- **Primary:** Pokedex Red with Panel text, 40px height, 8px 16px padding. Use for standard app-level primary actions.
- **Device:** Button Green, Lens Blue, Electric Spark, or gray hardware controls with inset button shadows. Use for Pokedex controls such as random, D-pad, battle, and type-chart triggers.
- **Hover / Focus:** Use color shifts, 2px focus rings, and short 150-250ms transitions. Active states should press inward or move by 1-2px.
- **Secondary / Ghost:** Use Screen Forest Light with Phosphor Mint text inside the Pokedex screen; use muted neutral hover states outside the shell.

### Chips

- **Style:** Type badges use Pokemon type colors, white text, small rectangular corners, and a dark border to read like game labels.
- **State:** Filter and favorite-group chips use pill shapes, with selected chips filling in Phosphor Mint or the group color and unselected chips staying tonal.

### Cards / Containers

- **Corner Style:** 8px for ordinary shadcn cards, 12-24px only for the Pokedex outer hardware and major shell edges.
- **Background:** Pokedex screens use Screen Forest and Screen Forest Light. Generic panels use Panel, Rail, and Shell Background.
- **Shadow Strategy:** Hardware uses bevel shadows. Screen content uses borders and tonal state changes.
- **Border:** Screen content should use Phosphor Mint at low opacity for dividers and selected states.
- **Internal Padding:** 6-12px inside screen cells and controls, 16-24px for outer shell padding.

### Inputs / Fields

- **Style:** Search and inline fields inside the screen use Screen Forest Light, Phosphor Mint text, muted phosphor placeholder text, and 8px corners.
- **Focus:** Focus shifts the border toward Phosphor Mint or Ring Red and keeps the ring visible.
- **Error / Disabled:** Disabled controls reduce opacity and prevent pointer interaction; errors should use destructive red only when the user must act.

### Navigation

- **Style:** There is no website nav. Mode switching is device-control driven: icon buttons, tabs inside detail panels, and compact selectors inside the Pokedex screen.
- **Active State:** Active view and selected Pokemon states use clear borders, rings, or filled chips rather than page-level nav highlights.
- **Mobile Treatment:** Controls must remain reachable and compact; avoid desktop nav bars, large menus, or landing-page style section links.

### Pokedex Shell

The signature component is the red two-panel Pokedex. It owns the strongest color, the largest radii, and the bevel shadow vocabulary. New screens should fit inside the existing screen wells rather than adding free-floating page cards around the device.

### Pokemon Cell

Pokemon cells are compact selection controls: screen-light background, phosphor border, pixel ID, sprite center, and optional favorite mark. Selected state uses a full border plus ring and a small scale lift.

## 6. Do's and Don'ts

### Do:

- **Do** keep the Pokedex shell as the product surface, with red hardware and green screen panels carrying the experience.
- **Do** prioritize mobile touch ergonomics: compact but reachable buttons, stable screen heights, and clear selected states.
- **Do** use Phosphor Mint for screen text and selected state, not generic black-on-white content inside the device.
- **Do** reserve Pokemon type colors for semantic type, battle, and team information.
- **Do** make buttons and inputs feel like physical controls with fast, crisp feedback.
- **Do** keep bilingual Chinese and English text readable with Ark Pixel by using concise copy, compact line lengths, and clear spacing.

### Don't:

- **Don't** make this feel like a marketing landing page, SaaS dashboard, generic content site, blog, or decorative fan page.
- **Don't** wrap ordinary website UI in Pokemon colors and call it a Pokedex.
- **Don't** add oversized hero sections, feature explanations, or desktop-first compositions around the device.
- **Don't** mix in non-pixel web fonts for ordinary UI text unless a missing glyph forces a system fallback.
- **Don't** turn screen panels into floating card grids. Use tonal layers, borders, and compact controls.
- **Don't** use side-stripe borders, gradient text, decorative glassmorphism, hero metrics, or repeated identical icon-card grids.
