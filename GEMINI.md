# Gemini CLI Context: Personal Portfolio

This file provides context and instructions for Gemini CLI when working on the Personal Portfolio project.

## Project Overview

A modern personal portfolio website showcasing software engineering and environmental science research. The project is a standalone React frontend application.

### Tech Stack

#### Frontend
- **Framework:** React 19 (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, Shadcn UI
- **Animations:** Framer Motion, ReactBits.dev (e.g., Plasma component)
- **Fonts:** Geist Variable
- **Forms:** Web3Forms (serverless)

## Project Structure

```text
portfolio-workspace/
└── frontend/                 # React + TypeScript Client
    ├── src/
    │   ├── components/       # Reusable UI elements (e.g., Plasma.tsx)
    │   ├── sections/         # Main page sections (Hero, About, Projects, etc.)
    │   ├── lib/              # Utilities (e.g., utils.ts for tailwind-merge)
    │   └── App.tsx           # Application entry and layout
    └── index.css             # Tailwind v4 configuration and custom theme
```

## Building and Running

### Frontend
- **Development:** `cd frontend && npm run dev`
- **Build:** `cd frontend && npm run build`
- **Lint:** `cd frontend && npm run lint`

## Development Conventions

### Frontend Conventions
- **Tailwind v4:** Uses the new `@theme` block in `index.css` for custom variables. Prefer using the custom theme tokens (e.g., `bg-charcoal`, `text-neutral-high`, `bg-amethyst`).
- **Components:** UI components should be placed in `src/components`. Page sections are organized in `src/sections`.
- **Styling:** Adhere to the established dark-themed aesthetic (Charcoal background with Amethyst accents).

## Key Files
- `frontend/src/App.tsx`: Main layout manager.
- `frontend/src/index.css`: Central theme and Tailwind v4 configuration.
- `README.md`: High-level project documentation and roadmap.
