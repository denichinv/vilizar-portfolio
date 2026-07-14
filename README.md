# Vilizar Denichin — Front-End Developer Portfolio

A personal front-end portfolio built with Next.js, TypeScript, Tailwind CSS and Framer Motion.

The site presents selected projects, case studies, an About section, contact options, a downloadable CV, custom metadata, an Open Graph preview image, and a production deployment on Vercel.

Live site: https://vilizar.dev

---

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- React Icons
- Vercel

---

## Features

- Responsive dark-theme portfolio
- Mobile-friendly navigation
- Selected project cards
- Static case study pages
- Project-specific metadata
- Open Graph social preview image
- Custom app icon
- Downloadable CV
- Contact section with email, GitHub, LinkedIn and Calendly
- Accessible skip-to-content link
- Visible focus styles

---

## Project Structure

```txt
src/
├── app/
│   ├── projects/[slug]/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── data/
├── lib/
└── styles/
```

---

## Key Architecture Decisions

- `layout.tsx` contains shared layout elements like `Navbar` and `Footer`.
- `page.tsx` assembles the homepage sections.
- `src/data/projects.ts` stores project and case study content separately from UI.
- `src/data/contact.ts` stores reusable contact details.
- `components/ui` contains reusable UI primitives such as `Badge`.
- Project case study pages are statically generated with `generateStaticParams`.

---

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

## Validation

Run linting:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Run the production server locally:

```bash
npm run start
```

---

## Content Editing

### Projects

Project cards and case study content are managed in:

```txt
src/data/projects.ts
```

Each project includes:

- title
- description
- badges
- image
- live/source/case study links
- overview
- challenge
- architecture
- testing
- features
- tech stack

### Contact Details

Contact links are managed in:

```txt
src/data/contact.ts
```

Update this file if email, GitHub, LinkedIn or Calendly links change.

### CV

The downloadable CV is stored in:

```txt
public/cv/
```

The Hero button links directly to the PDF file.

---

## Deployment

The site is deployed on Vercel and connected to the custom domain:

```txt
https://vilizar.dev
```

Production deployments are triggered from the `main` branch.

---

## Future Improvements

- Add subtle section animations
- Improve case study depth with more measurable outcomes
- Add automated Playwright smoke tests
- Add GitHub Actions for lint and build checks
- Add sitemap and robots files
- Add structured data / JSON-LD
