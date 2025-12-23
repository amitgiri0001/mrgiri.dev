# mrgiri.dev

Personal portfolio website for **Amit Giri** — Senior Software Engineer based in Singapore.

🌐 **Live**: [mrgiri.dev](https://mrgiri.dev)

```
// Based on Magic Portfolio by Once UI System
// https://github.com/once-ui-system/magic-portfolio
// License: CC BY-NC 4.0
```

## Features

- 📄 **About Page** — Professional bio, technical skills, work experience, and education
- 📝 **Blog** — Technical articles and project showcases (MDX-powered)
- 📥 **Resume Download** — Dynamic resume from Google Drive (always up-to-date)
- 📅 **Calendar Booking** — Google Calendar integration for scheduling calls
- 🌙 **Dark/Light Mode** — System preference with manual toggle
- 🔗 **Social Links** — GitHub, LinkedIn, Substack, Email

## Tech Stack

- **Framework**: Next.js 15
- **UI System**: Once UI
- **Language**: TypeScript
- **Content**: MDX
- **Hosting**: Vercel (recommended)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Configuration

### Key Files

| File | Purpose |
|------|---------|
| `src/resources/content.tsx` | Personal info, work experience, skills, education |
| `src/resources/once-ui.config.ts` | Site config, routes, theme, SEO settings |
| `src/resources/icons.ts` | Custom icon library |
| `src/app/blog/posts/*.mdx` | Blog posts |
| `public/images/avatar.jpg` | Profile photo |

### Updating Resume

The resume downloads from Google Drive. To update:
1. Go to Google Drive
2. Right-click your resume → "Manage versions" → "Upload new version"
3. Same link works automatically (no code change needed)


## License

Based on Magic Portfolio, distributed under the CC BY-NC 4.0 License.

---

Built with ❤️ by [Amit Giri](https://github.com/amitgiri0001)
