---
name: nextjs-component-generator
description: Generates reusable typed components for Next.js App Router with clear props, server/client boundaries, and Tailwind styling. Use when creating new sections, cards, media blocks, or page components.
---

# Next.js Component Generator

## Instructions

1. Decide if component is server or client (`"use client"` only when required).
2. Define a strict props type; avoid implicit any.
3. Build with composable structure and semantic tags.
4. Add Tailwind classes with mobile-first breakpoints.
5. Export reusable variants when patterns repeat.

## Template

```tsx
type Props = {
  title: string;
  description?: string;
};

export function FeatureBlock({ title, description }: Props) {
  return (
    <section className="border border-zinc-800 p-6">
      <h2 className="text-2xl font-black uppercase">{title}</h2>
      {description ? <p className="mt-2 text-zinc-300">{description}</p> : null}
    </section>
  );
}
```
