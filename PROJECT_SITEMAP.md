# SkyEdge Studio - Project Sitemap

## Project Overview
A Next.js web development project with i18n support (English & Spanish), component-based architecture, and modern UI components.

---

## Directory Structure

### Root Files
```
biome.json                 - Code formatter/linter configuration
components.json           - shadcn/ui components configuration
next-env.d.ts            - Next.js TypeScript declarations
next.config.ts           - Next.js configuration
package.json             - Dependencies and scripts
postcss.config.mjs       - PostCSS configuration
tsconfig.json            - TypeScript configuration
README.md                - Project documentation
```

### `/messages` - i18n Language Files
```
messages/
├── en.json              - English translations
└── es.json              - Spanish translations
```

### `/public` - Static Assets
```
public/
├── file.svg
├── globe.svg
├── next.svg
├── vercel.svg
└── window.svg
```

### `/src` - Application Source Code

#### **`/src/app` - Next.js App Router & Pages (i18n-enabled)**
```
src/app/
├── globals.css                 - Global styles (shared)
├── favicon.ico                 - Favicon (shared)
├── locale/                     - Localization routing config
├── favicon_io/                 - Favicon assets
│   ├── site.webmanifest
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── android-chrome-192x192.png
│   └── android-chrome-512x512.png
└── [locale]/                   - **Dynamic locale segment (en, es, etc.)**
    ├── layout.tsx              - Localized layout wrapper (imports ../globals.css)
    ├── page.tsx                - Home page (localized)
    ├── cookies/
    │   └── page.tsx            - Cookies policy page (localized)
    ├── privacy-policy/
    │   └── page.tsx            - Privacy policy page (localized)
    └── terms/
        └── page.tsx            - Terms & conditions page (localized)
```

**Key Structure Notes:**
- Root `layout.tsx` has been removed; all layout logic is in `[locale]/layout.tsx`
- All user-facing pages are now nested under `[locale]/` for i18n routing
- `globals.css` remains at `src/app/` and is imported from `[locale]/layout.tsx` with relative path (`../globals.css`)
- Favicon assets and CSS are shared across all locales
- Routes use middleware for locale detection and routing (not file-based redirects)

#### **`/src/components` - React Components**

**Top-level Components:**
```
src/components/
├── Navbar.tsx                   - Navigation bar
├── HeroSection.tsx              - Hero section
├── MainFeatureSection.tsx       - Main features
├── FeaturesSection.tsx          - Features showcase
├── FAQSection.tsx               - FAQ section
├── TestimonialSection.tsx       - Testimonials
├── CTA Section.tsx              - Call-to-action sections (CTASection.tsx & cta-section.tsx)
├── LogosSection.tsx             - Logo showcase
├── FooterSection.tsx            - Footer
├── pricing-section.tsx          - Pricing information
├── contact-form.tsx             - Contact form
└── line-shadow-text.tsx         - Custom text styling
```

**`/src/components/sections` - Page Sections**
```
sections/
├── Hero.tsx                     - Hero section (full-page)
├── About.tsx                    - About section
├── Services.tsx                 - Services section
├── Features.tsx                 - Features showcase
├── Team.tsx                     - Team members display
├── Testimonials.tsx             - Customer testimonials
├── Contact.tsx                  - Contact section
├── Gallery.tsx                  - Image gallery
└── Footer.tsx                   - Footer content
```

**`/src/components/ui` - shadcn/ui Components Library (40+ components)**
```
ui/
├── accordion.tsx                - Collapsible accordion
├── alert.tsx                    - Alert messages
├── alert-dialog.tsx             - Alert dialog modal
├── avatar.tsx                   - User avatars
├── badge.tsx                    - Badge labels
├── breadcrumb.tsx               - Breadcrumb navigation
├── button.tsx                   - Button component
├── card.tsx                     - Card container
├── carousel.tsx                 - Image carousel
├── chart.tsx                    - Chart/graph components
├── checkbox.tsx                 - Checkbox input
├── collapsible.tsx              - Collapsible content
├── command.tsx                  - Command palette
├── context-menu.tsx             - Right-click context menu
├── dialog.tsx                   - Modal dialog
├── drawer.tsx                   - Side drawer panel
├── dropdown-menu.tsx            - Dropdown menu
├── form.tsx                     - Form utilities (react-hook-form)
├── hover-card.tsx               - Hover preview card
├── input.tsx                    - Text input
├── input-otp.tsx                - One-time password input
├── label.tsx                    - Form label
├── menubar.tsx                  - Menu bar
├── navigation-menu.tsx          - Navigation menu
├── pagination.tsx               - Pagination controls
├── popover.tsx                  - Popover tooltip
├── progress.tsx                 - Progress bar
├── radio-group.tsx              - Radio button group
├── resizable.tsx                - Resizable panels
├── scroll-area.tsx              - Custom scrollable area
├── select.tsx                   - Select dropdown
├── separator.tsx                - Visual separator
├── sheet.tsx                    - Sheet panel
├── sidebar.tsx                  - Sidebar navigation
├── skeleton.tsx                 - Loading skeleton
├── slider.tsx                   - Range slider
├── sonner.tsx                   - Toast notifications
├── switch.tsx                   - Toggle switch
├── table.tsx                    - Data table
├── tabs.tsx                     - Tab navigation
├── textarea.tsx                 - Text area input
├── toggle.tsx                   - Toggle button
├── toggle-group.tsx             - Button group toggle
└── tooltip.tsx                  - Tooltip popover
```

**`/src/components/magicui` - Custom/MagicUI Components**
```
magicui/
└── line-shadow-text.tsx         - Text with shadow effect
```

#### **`/src/config` - Configuration Files**
```
src/config/
└── index.ts                     - Centralized configuration
```

#### **`/src/hooks` - Custom React Hooks**
```
src/hooks/
└── use-mobile.ts                - Mobile device detection hook
```

#### **`/src/lib` - Utility Libraries**
```
src/lib/
├── seo.tsx                      - SEO utilities and metadata
├── utils.ts                     - General utility functions
```

---

## Key Technologies

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + PostCSS
- **UI Library:** shadcn/ui (40+ components)
- **Forms:** react-hook-form
- **Internationalization:** next-intl (EN, ES)
- **Code Quality:** Biome (formatter & linter)
- **Notifications:** Sonner (toast notifications)

---

## Page Routes (i18n-enabled with Middleware)

| Route | File | Purpose |
|-------|------|---------|
| `/en` | `app/[locale]/page.tsx` | Home page (English) |
| `/es` | `app/[locale]/page.tsx` | Home page (Spanish) |
| `/en/cookies` | `app/[locale]/cookies/page.tsx` | Cookie policy (English) |
| `/es/cookies` | `app/[locale]/cookies/page.tsx` | Cookie policy (Spanish) |
| `/en/privacy-policy` | `app/[locale]/privacy-policy/page.tsx` | Privacy policy (English) |
| `/es/privacy-policy` | `app/[locale]/privacy-policy/page.tsx` | Privacy policy (Spanish) |
| `/en/terms` | `app/[locale]/terms/page.tsx` | Terms & conditions (English) |
| `/es/terms` | `app/[locale]/terms/page.tsx` | Terms & conditions (Spanish) |

**Note:** Root `/` requests are handled by middleware (not file-based redirects) to detect user locale and forward appropriately.

---

## Component Hierarchy

```
App (Root Layout)
├── Navbar
├── [Page Sections]
│   ├── Hero / HeroSection
│   ├── About
│   ├── Services
│   ├── Features / FeaturesSection / MainFeatureSection
│   ├── Team
│   ├── Gallery
│   ├── Testimonials / TestimonialSection
│   ├── FAQ / FAQSection
│   ├── Contact / contact-form
│   └── CTA Sections
├── Footer / FooterSection
└── [UI Components - 40+ shadcn/ui components]
```

---

## File Statistics

- **Pages:** 5 (home, cookies, privacy, terms, + i18n routes)
- **Sections:** 9 major sections
- **UI Components:** 40+ shadcn/ui components
- **Total Components:** 20+ custom React components
- **Languages:** 2 (English, Spanish)
- **Configuration Files:** 5+ (biome, next.config, tsconfig, postcss, components)

---

## Development Workflow

1. **Write Components:** Create `.tsx` files in `/src/components`
2. **Style:** Use Tailwind CSS classes
3. **Add i18n:** Add translations to `messages/en.json` and `messages/es.json`
4. **Route:** Add pages in `/src/app`
5. **Build:** TypeScript compiles, Biome formats code
6. **Deploy:** Built on Next.js (supports Vercel, Docker, Node.js servers)

---

## Notes for AI Context

- This is a **Next.js SSR/SSG application** with modern development practices
- Uses **shadcn/ui** for UI components (not raw Tailwind)
- Supports **multiple languages** via `next-intl`
- **Component-driven architecture** with separation of concerns
- **Professional structure** suitable for production web applications
- Includes **legal pages** (privacy, terms, cookies policy)
