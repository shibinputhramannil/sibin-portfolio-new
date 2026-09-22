# SIBIN P - Full Stack Developer Portfolio

Production-ready, accessible, and high-performance personal developer portfolio website for **SIBIN P**, Full Stack Developer. Engineered using Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Live Architecture & Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router architecture)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing, zero `any`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design tokens for light and dark modes
- **Theme System**: [next-themes](https://github.com/pacocoursey/next-themes) (Light, Dark, and System persistence)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) with accessibility fallbacks for `prefers-reduced-motion`
- **Deployment Target**: Vercel (Edge-ready, static page generation)

---

## 📁 Project Architecture

```
C:\portfolio
├── app/
│   ├── favicon.ico
│   ├── globals.css         # Custom tokens, dark mode variants, reduced motion
│   ├── layout.tsx          # Root layout, OpenGraph, JSON-LD schema, ThemeProvider
│   ├── page.tsx            # Single-page assembled portfolio
│   ├── robots.ts           # Dynamic SEO robots.txt
│   └── sitemap.ts          # Dynamic SEO sitemap.xml
├── components/
│   ├── about/              # Professional summary & factual background
│   ├── certifications/     # Verified certifications & interactive modal
│   ├── contact/            # Direct channels & client-validated contact form
│   ├── education/          # Academic background & professional focus
│   ├── experience/         # Factual internship timeline
│   ├── footer/             # Brand footer, copyright, navigation
│   ├── hero/               # Headline, CTAs, portrait card & developer terminal
│   ├── layout/             # Sticky glassmorphic navbar with active section spy
│   ├── projects/           # Featured IcorpERP card, secondary grid & modal
│   ├── skills/             # Categorized interactive technical skill matrix
│   ├── theme-provider.tsx  # Next-themes wrapper
│   └── ui/                 # Button, Badge, BackToTop, ScrollProgress, ThemeToggle
├── data/
│   ├── certifications.ts   # Verified certification credentials
│   ├── experience.ts       # Documented internships and education
│   ├── projects.ts         # Verified GitHub and ongoing projects
│   └── skills.ts           # Categorized technology stack
├── lib/
│   └── utils.ts            # Tailwind class merging utility (clsx + twMerge)
├── public/
│   ├── images/             # Real developer headshot & visual assets
│   └── resume/             # Verified print-ready resume (HTML & PDF)
├── types/
│   └── index.ts            # Centralized TypeScript domain interfaces
├── .env.example            # Environment variables template
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🌟 Key Features

1. **Strictly Factual & Verified Content**:
   - Primary focus on **IcorpERP**, an ongoing Django REST Framework + PostgreSQL enterprise platform.
   - Verified computer vision project: **Face Recognition (PCA & ANN)** with eigenface extraction and neural network classification.
   - Verified B2B Trade platform: **CORRIDOR** built with Next.js App Router and Redux Toolkit.
   - Documented internships at **Upcode Software Labs** and **Internship Studio, Pune**.
   - Verified certifications from **Upcode Software Labs** and **Internship Studio**.

2. **Genuine Dual-Theme System**:
   - Custom light palette with crisp neutral backgrounds and deep charcoal text (`#09090b`).
   - Custom dark palette with high-contrast slate surfaces and subtle borders.
   - System preference detection and persistent localStorage state.

3. **High-Fidelity Interactive Modals**:
   - **Project Detail Modal**: Inspect architecture highlights, documented modules, and technical specs.
   - **Certificate Modal**: Official credential preview with topic curriculum and verification IDs.

4. **Performance & Accessibility**:
   - Semantic HTML5 landmark tags (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`).
   - Visible focus states with WCAG 2.1 AA contrast compliance.
   - Fully responsive down to 320px mobile screens without horizontal scroll.
   - Auto-respects `prefers-reduced-motion`.

5. **SEO & Structured Data**:
   - Comprehensive OpenGraph and Twitter card metadata.
   - JSON-LD structured data for `Person` and `ProfilePage`.
   - Automated dynamic `sitemap.xml` and `robots.txt`.

---

## 🛠️ Local Development

### 1. Prerequisites
- Node.js >= 18.18 (tested on Node v24)
- npm >= 9.0

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Code Quality & Type Check
```bash
# Type check with TypeScript compiler
npx tsc --noEmit

# Lint code
npm run lint
```

### 5. Production Build
```bash
npm run build
npm run start
```

---

## 🚢 Vercel Deployment Guide

This project is tailored specifically for zero-config deployment on Vercel:

### Method 1: Using GitHub + Vercel Dashboard (Recommended)
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Initial professional portfolio"
   git remote add origin https://github.com/shibinputhramannil/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com).
3. Click **Add New...** &rarr; **Project**.
4. Select the `portfolio` repository and click **Import**.
5. Framework preset will automatically be detected as **Next.js**.
6. Click **Deploy**.

### Method 2: Using Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 📄 License & Ownership

© 2026 SIBIN P. All rights reserved.
