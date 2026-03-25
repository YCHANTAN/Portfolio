Updated on March 25, 2026"

# Personal Portfolio

A modern, full-stack personal portfolio showcasing the intersection of scalable software engineering and environmental science research. Built with a decoupled architecture featuring a dynamic React frontend and a robust C# .NET backend.

## 🚀 Tech Stack

### Frontend
* **Framework:** React 18 (Bootstrapped with Vite)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Animations & UI:** Framer Motion / ReactBits.dev

### Backend & Database
* **Framework:** .NET 8 Web API (C#)
* **ORM:** Entity Framework Core
* **Database:** PostgreSQL

---

## 📁 Project Structure

The project is divided into two distinct environments to ensure separation of concerns:

```text
portfolio-workspace/
├── frontend/                 # React + TypeScript Client
│   ├── src/
│   │   ├── components/       # Reusable UI elements and ReactBits animations
│   │   ├── sections/         # Page sections (Hero, About, Projects, etc.)
│   │   └── App.tsx           # Main application layout
│   └── tailwind.config.js    # Styling configurations
│
└── backend/                  # C# .NET Web API Server
    ├── Controllers/          # API Endpoints (e.g., Contact routing)
    ├── Models/               # Data schema definitions
    ├── Data/                 # EF Core DbContext
    └── appsettings.json      # Database connection strings
