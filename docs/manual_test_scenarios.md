# Prerana Landing Page - Manual Test Scenarios

## Overview
This document outlines manual test scenarios for the Prerana landing page. These scenarios focus on aspects that are difficult or impossible to catch with automated unit tests (Vitest) or end-to-end tests (Playwright), such as visual fidelity, animation smoothness, cross-browser rendering quirks, and tactile user experience.

## 1. Visual & Aesthetic Fidelity (Cross-Browser & Device)
Automated tests can verify CSS classes are applied, but only human eyes can verify the final render looks correct across different rendering engines.

*   **Scenario 1.1: Backdrop Blur Rendering**
    *   **Action**: Scroll down the page so the background gradients and bento grid elements pass underneath the sticky navbar.
    *   **Expected**: The navbar should have a smooth frosted-glass effect (`backdrop-blur-xl`) and slightly tint the elements behind it.
    *   **Focus**: Test explicitly on Safari (iOS/macOS) and Firefox, as `backdrop-filter` sometimes suffers from visual artifacts or poor performance compared to Chrome.
*   **Scenario 1.2: Gradient Glow Visibility**
    *   **Action**: Observe the background illumination (orange/blue blurred circles) and the subtle glow behind the Hero bento card.
    *   **Expected**: The gradients should blend smoothly without color banding.
    *   **Focus**: View on a display with lower brightness/contrast settings to ensure the subtle shadows (`shadow-orange-900/5`) and glows are still visible and don't look muddy.

## 2. Animation & Interaction Smoothness
Framer-motion animations are used for page load and interactions. Playwright can wait for animations to finish, but cannot judge if they are "janky" or dropping frames.

*   **Scenario 2.1: Page Load Sequence**
    *   **Action**: Hard refresh the page (`Cmd+Shift+R`).
    *   **Expected**: The Bento cards should cascade in smoothly with their staggered delays (`delay: 0.1`, `0.2`, etc.). There should be no stuttering, and text should not "pop" abruptly after the animation starts.
    *   **Focus**: Throttle CPU performance (via DevTools or testing on an older mobile device) to ensure the framer-motion animations degrade gracefully and don't freeze the browser.
*   **Scenario 2.2: Hover State Snappiness**
    *   **Action**: Rapidly move the cursor back and forth across the Krea, Selaras, and Vanta bento cards.
    *   **Expected**: The scale transforms (`group-hover:scale-110`) and background color transitions should feel immediate and smooth, without getting "stuck" in a half-hovered state if the mouse moves too fast.

## 3. Tactile UX & Edge Cases
These test the "feel" of interactions, particularly things that rely on continuous physical mouse movement.

*   **Scenario 3.1: "The Suite" Dropdown Mouse Tracking**
    *   **Action**: Hover over "The Suite" in the navbar to open the dropdown menu. Slowly move the mouse cursor *down* from the navbar text into the dropdown menu area itself.
    *   **Expected**: The dropdown should remain open.
    *   **Focus**: Ensure there is no "dead zone" (gap) between the trigger button and the dropdown menu (`pt-4` padding area) that causes the `onMouseLeave` event to fire and abruptly close the menu before the user can click a link.
*   **Scenario 3.2: Mobile Touch Targets & Hover Translation**
    *   **Action**: On a physical mobile device, tap the interactive bento cards (which have complex `group-hover` states on desktop).
    *   **Expected**: The cards should register the tap as a click (navigation to the link) without requiring a "double tap" (where iOS sometimes interprets the first tap as a hover trigger). The touch targets should be large enough to hit comfortably.

## 4. Responsive Edge-Case Layouts
Playwright can test specific viewport sizes (e.g., 375px, 1280px), but humans are better at spotting awkward transitions in between standard breakpoints.

*   **Scenario 4.1: The "In-Between" Tablet Landscape**
    *   **Action**: Slowly resize the browser window between `768px` (md breakpoint) and `1024px`.
    *   **Expected**: The 4-column Bento grid (`md:grid-cols-4`) might feel cramped or text might overlap before hitting the mobile 1-column layout. Ensure the text truncation and spacing still look premium at `800px` wide.
*   **Scenario 4.2: Footer Alignment on Ultra-Wide**
    *   **Action**: Maximize the window on a large external monitor (e.g., 27" or 32").
    *   **Expected**: The `max-w-7xl` constraint should keep the content centered, and the absolute positioned background gradients shouldn't "break" or leave hard edges visible on the far sides of the screen.
