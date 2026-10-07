# Yashpal Singh — AI/ML Engineer Portfolio

A modern, dark-themed personal portfolio for an AI/ML engineer, built to showcase production-oriented AI work and convert visitors into freelance clients.

## Overview

This is a single-page portfolio website presenting AI/ML engineering projects, technical skills and freelance services (RAG applications, LLM applications, AI agents, machine learning and computer vision).

## Features

- Responsive, mobile-friendly layout
- Sticky glass navbar with a mobile menu
- Animated hero with an AI system flow diagram and a technology strip
- Four project case studies, including the RAG architecture flow
- Services section
- Interactive, tabbed technical skills section
- Engineering process and "why work with me" sections
- Contact call-to-action section
- Scroll-reveal and hover animations (Framer Motion)
- SEO metadata (title, description, Open Graph)

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- TypeScript
- React 18
- Tailwind CSS 3
- Framer Motion
- Lucide React

## Project Structure

```text
src/
├── app/                 # Next.js App Router: layout, page, global styles
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Page sections (Hero, Projects, Services, ...)
│   └── ui/              # Reusable primitives (Section, SectionHeading, Reveal, FlowDiagram)
├── data/                # Static content: projects, services, skills, process, site/navigation
└── types/               # Shared TypeScript types
public/                  # Static assets
```

Content is edited in `src/data/`; components only render it.

## Getting Started

```bash
git clone <repository-url>
cd <project-directory>
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

This project does not require any environment variables.

## Available Scripts

```bash
npm run dev     # Start the development server
npm run build   # Create a production build
npm run start   # Run the production build
```

## Deployment

The app is a standard Next.js project and can be deployed on [Vercel](https://vercel.com/) or any platform that supports Next.js. It is not deployed by this repository's configuration.

## License

Personal project. All rights reserved.

## Author

**Yashpal Singh** — AI/ML Engineer

- GitHub: `<your-github-url>`
- LinkedIn: `<your-linkedin-url>`

Update the placeholder contact links in `src/data/site.ts`.
