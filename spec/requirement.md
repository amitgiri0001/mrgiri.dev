# Portfolio Personalization Checklist

## 1. Personal Information (`src/resources/content.tsx`)

| Item | Current Value | Update To |
|------|---------------|-----------|
| First Name | `Selene` | Your first name |
| Last Name | `Yu` | Your last name |
| Role | `Design Engineer` | Your job title |
| Email | `example@gmail.com` | Your email |
| Location | `Asia/Jakarta` | Your timezone (e.g., `America/New_York`) |
| Languages | `["English", "Bahasa"]` | Your languages |
| Avatar | `/images/avatar.jpg` | Replace with your photo |

## 2. Social Links (`src/resources/content.tsx`)

Update these URLs to your own profiles:
- GitHub → your GitHub
- LinkedIn → your LinkedIn  
- Instagram → your Instagram (or remove)
- Threads → your Threads (or remove)
- Email → auto-uses `person.email`

## 3. Homepage Content (`src/resources/content.tsx`)

- **Headline**: `"Building bridges between design and code"` → Your tagline
- **Subline**: The intro paragraph about "I'm Selene, a design engineer at ONCE UI..."
- **Featured work**: Update the title and link to your best project

## 4. About Page (`src/resources/content.tsx`)

- **Intro description**: The paragraph about being "Jakarta-based design engineer"
- **Work Experience**: Replace FLY, Creativ3 with your actual jobs
- **Studies**: Replace University of Jakarta with your education
- **Technical Skills**: Update Figma/Next.js sections with your skills
- **Calendar link**: `https://cal.com` → your scheduling link

## 5. Project Files (`src/app/work/projects/`)

Replace or edit these MDX files with your own projects:
- `automate-design-handovers-with-a-figma-to-code-pipeline.mdx`
- `building-once-ui-a-customizable-design-system.mdx`
- `simple-portfolio-builder.mdx`

## 6. Blog Posts (`src/app/blog/posts/`)

These are currently template documentation posts. Replace with your own writing:
- `quick-start.mdx`
- `pages.mdx`
- `blog.mdx`
- `components.mdx`
- `content.mdx`
- `localization.mdx`
- `mailchimp.mdx`
- `password.mdx`
- `seo.mdx`
- `styling.mdx`
- `work.mdx`

## 7. Images (`public/images/`)

| Folder | What to Replace |
|--------|-----------------|
| `avatar.jpg` | Your profile photo |
| `gallery/` | Your own photos (8 images) |
| `og/home.jpg` | Social sharing preview image |
| `projects/project-01/` | Your project screenshots/videos |

## 8. Configuration (`src/resources/once-ui.config.ts`)

| Setting | Current | Action |
|---------|---------|--------|
| `baseURL` | `https://demo.magic-portfolio.com` | Your domain (e.g., `https://mrgiri.dev`) |
| `schema.name` | `Once UI` | Your name or brand |
| `schema.email` | `lorant@once-ui.com` | Your email |
| `sameAs` links | Once UI social links | Your social links |
| `mailchimp.action` | Placeholder URL | Your Mailchimp form URL (or disable newsletter) |

## 9. Optional: Styling (`src/resources/once-ui.config.ts`)

Customize the look:
- `theme`: `"dark"` / `"light"` / `"system"`
- `brand`: Choose from `blue`, `indigo`, `violet`, `cyan`, etc.
- `accent`: Secondary color
- `border`: `"rounded"` / `"playful"` / `"conservative"`

## 10. Routes (`src/resources/once-ui.config.ts`)

Enable/disable pages:
```typescript
const routes = {
  "/": true,        // Home
  "/about": true,   // About
  "/work": true,    // Projects
  "/blog": true,    // Blog (set false if you don't want it)
  "/gallery": true, // Gallery (set false if you don't want it)
};
```

---

## Quick Start Priority

If you want to get started fast, update these **5 things first**:

1. **`person` object** in `content.tsx` — name, role, email, location
2. **`baseURL`** in `once-ui.config.ts` — `https://mrgiri.dev`
3. **`/public/images/avatar.jpg`** — your photo
4. **`social` array** in `content.tsx` — your links
5. **`home.headline` and `home.subline`** — your intro

