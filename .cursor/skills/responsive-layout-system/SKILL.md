---
name: responsive-layout-system
description: Applies a mobile-first responsive layout system for mixed media and content storytelling. Use when pages include text, images, videos, and CTA blocks across phone, tablet, and desktop.
---

# Responsive Layout System

## Instructions

1. Build for mobile first, then scale to `md` and `lg`.
2. Keep consistent max width and horizontal padding per section.
3. Use adaptive media containers for 16:9, 9:16, and 1:1.
4. Alternate content/media only on larger breakpoints.
5. Ensure touch-friendly controls and readable text sizes.

## Layout Rules

- Prefer `grid gap-* md:grid-cols-2` for split sections.
- Keep section spacing consistent (`py-10`, `py-14`, etc.).
- Avoid layout shifts by setting aspect ratios on media containers.
