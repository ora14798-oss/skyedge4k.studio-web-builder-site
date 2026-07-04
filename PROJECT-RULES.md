# Scope Rules — Language, Services, Pricing & Showcase Update

Locked in before work starts. If it's not listed under "In scope" below, we don't touch it.

## Hard rule: design stays untouched
No changes to layout, colors, typography, spacing, animations, or component structure anywhere on the site, except where explicitly listed below. This is a content/scope change, not a redesign.

## In scope

### 1. Add Hebrew as a 3rd language
- Current: `en`, `es` via next-intl (`src/i18n/routing.ts`, `messages/en.json`, `messages/es.json`).
- Add `he` locale + `messages/he.json` (full translation, mirrors existing keys).
- Hebrew is RTL — the Hebrew version of the site will render right-to-left (`dir="rtl"`). English and Spanish stay exactly as they are, fully LTR, unaffected.
- Re-connect `LanguageSwitcher.tsx` into `Navbar.tsx` (it's currently disconnected — `Navbar.tsx:9` has a comment saying it was removed) so all 3 languages are actually selectable.

### 2. Remove the SEO service, everywhere — ✅ DONE
- Stripped "Basic SEO"/"Advanced SEO Strategy" from the pricing plan feature lists in all 3 languages, plus every other SEO-as-a-service mention across marquee text, hero badge/description, testimonials, FAQ, footer, and the site's own meta/schema tags (`src/lib/seo.tsx`, `layout.tsx`, `src/config/index.ts`, legal pages).
- Kept: the site's own technical SEO metadata setup (title/description/schema.org tags — the "good start for SEO" baked into the build) and the internal `getSEOTags`/`SchemaMarkup` utility naming — these aren't a marketed service, just how the site itself gets indexed correctly.

### 2b. Google Ads also removed as a service — ✅ DONE
The business has exactly 3 real services (matching the 3 pricing tiers), not "web dev + Google Ads":
1. **Landing Page Websites** — custom-built or launched from SkyEdge4K's own premium in-house templates
2. **Professional Business Websites** — same custom-or-template flexibility, full multi-page presence
3. **Online Store with CRM** — e-commerce with a built-in CRM, easy/fast self-management

`MainFeatureSection.tsx` now shows these 3 as the services cards (3-column grid, with a new cart icon for the store). Every Google Ads mention was rewritten or removed across marquee, hero, testimonials, FAQ (2 FAQ items rewritten), footer services list, and schema.org markup in all 3 languages.

### 3. Pricing changes
- **Prices shown in local currency per language**: EN → USD, ES → Mexican Peso, HE → Israeli Shekel, converted at today's exchange rate.
- **Landing Page plan**: gets a promo in all 3 languages (converted to local currency). Hebrew shows ₪699, which includes domain + hosting for 2 years, a 3-month support/guarantee window with 10 free revisions, then ₪100/month afterward for ongoing maintenance and small changes. EN/ES show the same promo converted to USD/MXN.
- **Online Store plan**: price itself is unchanged — only its currency display adapts per language.
- **Professional Website plan**: no promo — only its currency display adapts per language.

### 4. New interactive "My Work" showcase section
- Currently your past work is just a hardcoded image grid buried inside `MainFeatureSection.tsx` (~lines 32-42, 195-232) — not its own section.
- Phase 1 (now): pull this out into its own dedicated, interactive section (hover/lightbox-style, responsive grid) using the current placeholder images, matching the existing design system exactly (no new colors/fonts/style).
- Phase 2 (later, once you send them): swap in your real project images/names/links.
- Must work cleanly on both mobile and desktop.

## Explicitly out of scope
- No real e-commerce build (cart, checkout, products, payment integration) — "Online Store" stays a pricing/service description, not a functioning store.
- No changes to Hero, Logos, CTA, Testimonials, FAQ, Footer sections, or overall Navbar design (only re-adding the language switcher).
- No new pages/routes — everything stays one page, per your "personal brand, one page" direction.

## Confirmed
1. **Landing Page promo** applies in all 3 languages, converted to local currency (not just Hebrew).
2. **Hebrew renders RTL**; English/Spanish stay LTR, untouched.
