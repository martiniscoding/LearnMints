# LearnMints — landing page

Marketing site for LearnMints, a micro-LMS for independent tutors in India. Next.js 16 (App Router), React 19, Tailwind v4, TypeScript. The whole
page prerenders to static HTML.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static prerender
npm start
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/app/page.tsx` | The page. Section copy and lists are the arrays at the top. |
| `src/app/layout.tsx` | Metadata, fonts, JSON-LD graph. |
| `src/app/globals.css` | Design tokens and all page styling, in section order. |
| `src/lib/site.ts` | Brand facts, FAQ copy, and the schema.org objects built from them. |
| `src/components/Hero.tsx` | The centred hero copy. |
| `src/components/FeeCalculator.tsx` | The commission-vs-flat slider (the only client component). |
| `src/assets/*.ttf` | Anek Latin, pinned to two instances, for the social card. |

Edit FAQ copy in one place — `src/lib/site.ts` — and both the rendered accordion
and the `FAQPage` structured data follow.

## Design

Indigo ink on cool paper, marigold for emphasis, and one green reserved for money
that has actually settled. Display type is Anek Latin (Ek Type, an Indian
foundry), set light and at normal width; body is IBM Plex Sans. Tokens live on
`:root` and `@theme` at the top of `globals.css`; change them there rather than in
component styles.

Display type follows a weight ladder — the larger the type, the lighter it is set.
The tokens are `--wt-air` (250, for the h1 and the price), `--wt-light` (300, for
section headings), `--wt-book` (400), `--wt-medium` (500, for small headings and
buttons) and `--wt-semi` (600). Body text stays at 400: light weights are elegant
at display sizes and hard to read at paragraph sizes. Nothing is set condensed.

The only motion left is the slow drift on the watermark panel, which
`prefers-reduced-motion` disables. Text contrast meets WCAG AA throughout.

## SEO

- Full Metadata API: canonical, `en-IN` hreflang, Open Graph, Twitter card, robots directives, geo and PWA tags.
- JSON-LD `@graph`: `Organization`, `WebSite`, `SoftwareApplication` (with the ₹5,000 `Offer`), `FAQPage`.
- Generated `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, and a 1200×630 OG/Twitter card rendered with the brand typeface.
- `next/font` self-hosts both families, so there is no CLS and no third-party font request.

## Before launch

- Set the real domain in `src/lib/site.ts` (`url`), plus the contact address, phone and social handles. Everything else derives from it.
- Point the CTAs at the real signup route; they currently jump to `#pricing`.
- Substantiate or soften the 8% comparison rate in `FeeCalculator.tsx` (`COMMISSION`). Cite a source or reword before you run ads against them.
- The copy claims no outbound messaging anywhere — no WhatsApp, SMS or email sending — because none is integrated. Students reach a course through a link the teacher shares and sign in with a phone number and a passcode. If a messaging channel ships, the copy to revisit is `tagline`, `description`, `faqs` and `featureList` in `src/lib/site.ts` and the `facts`, `included` and `priceIncludes` arrays in `src/app/page.tsx`.
- `priceValidUntil` in the `Offer` is set to 2027-03-31; keep it ahead of today or search engines will treat the offer as expired.
