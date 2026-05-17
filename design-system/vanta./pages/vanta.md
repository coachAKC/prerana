# Vanta Page Overrides

> **PROJECT:** Vanta.
> **Generated:** 2026-05-16 20:20:41
> **Page Type:** Product Detail

> ⚠️ **IMPORTANT:** Rules in this file **override** the Master file (`design-system/MASTER.md`).
> Only deviations from the Master are documented here. For all other rules, refer to the Master.

---

## Page-Specific Rules

### Layout Overrides

- **Max Width:** 1400px or full-width
- **Grid:** 12-column grid for data flexibility
- **Sections:** 1. Hero with device mockup, 2. Screenshots carousel, 3. Features with icons, 4. Reviews/ratings, 5. Download CTAs

### Spacing Overrides

- **Content Density:** High — optimize for information display

### Typography Overrides

- No overrides — use Master typography

### Color Overrides

- **Strategy:** Dark/light matching app store feel. Star ratings in gold. Screenshots with device frames.

### Component Overrides

- Avoid: Load everything upfront
- Avoid: No caching strategy
- Avoid: Ignore bundle size growth

---

## Page-Specific Components

- No unique components for this page

---

## Recommendations

- Effects: Subtle hover (200-250ms), smooth transitions, sharp shadows if any, clear type hierarchy, fast loading
- Performance: Lazy load below-fold images and content
- Performance: Set appropriate cache headers
- Performance: Monitor and minimize bundle size
- CTA Placement: Download buttons prominent (App Store + Play Store) throughout
