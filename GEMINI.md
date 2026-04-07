# Gemini CLI Context: Personal Portfolio

This file provides context and instructions for Gemini CLI when working on the Personal Portfolio project.

## Project Overview

A full-stack personal portfolio website showcasing software engineering and environmental science research. The project uses a decoupled architecture with a modern React frontend and a .NET backend.

### Tech Stack

#### Frontend
- **Framework:** React 19 (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, Shadcn UI
- **Animations:** Framer Motion, ReactBits.dev (e.g., Plasma component)
- **Fonts:** Geist Variable

#### Backend
- **Framework:** .NET 9 Web API (C#)
- **Status:** Currently in initial boilerplate state.
- **Planned Tech:** Entity Framework Core, PostgreSQL (per README).

## Project Structure

```text
portfolio-workspace/
├── frontend/                 # React + TypeScript Client
│   ├── src/
│   │   ├── components/       # Reusable UI elements (e.g., Plasma.tsx)
│   │   ├── sections/         # Main page sections (Hero, About, Projects, etc.)
│   │   ├── lib/              # Utilities (e.g., utils.ts for tailwind-merge)
│   │   └── App.tsx           # Application entry and layout
│   └── index.css             # Tailwind v4 configuration and custom theme
│
└── backend/                  # .NET Web API Server
    ├── Program.cs            # API entry point and middleware
    ├── backend.csproj        # Project dependencies
    └── appsettings.json      # Configuration
```

## Building and Running

### Frontend
- **Development:** `cd frontend && npm run dev`
- **Build:** `cd frontend && npm run build`
- **Lint:** `cd frontend && npm run lint`

### Backend
- **Development:** `cd backend && dotnet run`
- **Watch Mode:** `cd backend && dotnet watch`
- **OpenAPI/Swagger:** Available at `/openapi/v1.json` or through the interactive UI in development.

## Development Conventions

### Frontend Conventions
- **Tailwind v4:** Uses the new `@theme` block in `index.css` for custom variables. Prefer using the custom theme tokens (e.g., `bg-charcoal`, `text-neutral-high`, `bg-amethyst`).
- **Components:** UI components should be placed in `src/components`. Page sections are organized in `src/sections`.
- **Styling:** Adhere to the established dark-themed aesthetic (Charcoal background with Amethyst accents).

### Backend Conventions
- **API Style:** Follow RESTful principles.
- **Middleware:** Configuration is handled in `Program.cs` using the minimal APIs pattern or standard Controller pattern as the project grows.
- **Data Access:** (Planned) Use Entity Framework Core for PostgreSQL interactions.

## Key Files
- `frontend/src/App.tsx`: Main layout manager.
- `frontend/src/index.css`: Central theme and Tailwind v4 configuration.
- `backend/Program.cs`: Backend routing and service configuration.
- `README.md`: High-level project documentation and roadmap.
