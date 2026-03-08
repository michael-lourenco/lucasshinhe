---
name: performance-optimization
description: Optimizes Next.js frontend performance for Lighthouse and Core Web Vitals with image strategy, lazy loading, bundle control, and render discipline. Use when improving loading speed and runtime performance.
---

# Performance Optimization

## Instructions

1. Use `next/image` with proper `sizes` and avoid oversized assets.
2. Lazy-load non-critical media and defer heavy client logic.
3. Keep client components minimal; prefer server rendering when possible.
4. Reduce layout shifts with explicit dimensions/aspect ratios.
5. Verify changes with Lighthouse/Web Vitals before and after.

## Checklist

- [ ] Largest hero media optimized
- [ ] Non-critical sections lazy/deferred
- [ ] Minimal JS in initial route
- [ ] Stable layout during load
- [ ] Performance regression avoided
