<div align="center">

# ⬡ ORION INDUSTRIES

### _Building the invisible layer of tomorrow_

> "Demain, la technologie ne se verra plus. Elle sera là, partout, silencieuse, intégrée à notre environnement, et capable de comprendre ce que nous faisons pour nous aider avant même qu'on le demande.
> C'est pour cela qu'Orion Industries a été créée : concevoir cette nouvelle génération de systèmes intelligents, où la technologie s'efface pour devenir une extension naturelle de l'intelligence humaine."
>
> — **Théo ANDRIMANANARISOA**, Founder & CEO

---

![Status](https://img.shields.io/badge/status-in%20development-orange)
![License](https://img.shields.io/badge/license-Proprietary-red)
![Stack](https://img.shields.io/badge/stack-React%20%7C%20NestJS%20%7C%20Prisma%20%7C%20PostgreSQL-blue)
![Monorepo](https://img.shields.io/badge/monorepo-TBD-lightgrey)

**Website:** `Coming soon` — domain not yet registered

</div>

---

## Table of contents

- [About](#about)
- [Divisions](#divisions)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Environment variables](#environment-variables)
- [Languages](#languages)
- [Contributing](#contributing)
- [Founders](#founders)
- [License](#license)

---

## About

**Orion Industries** is a global technology holding company focused on designing the next generation of intelligent systems — where hardware, software, and artificial intelligence converge to create seamless, invisible experiences.

The group operates across the full spectrum of technology: from embedded electronics and IoT devices, to cloud infrastructure, AI systems, robotics, and human-centered design. Every division shares the same core belief: technology should disappear into the environment and work _with_ humans, not _at_ them.

This repository contains the full monorepo powering the Orion Industries digital platform — corporate website, client portal, internal admin dashboard, and shared packages.

---

## Divisions

| Division                         | Focus                                                          | Status   |
| -------------------------------- | -------------------------------------------------------------- | -------- |
| **Orion Software**               | Enterprise software, SaaS platforms, custom development        | Active   |
| **Orion AI Systems**             | Artificial intelligence, machine learning, autonomous systems  | Active   |
| **Orion Hardware**               | Electronic design, embedded systems, PCB & product engineering | Active   |
| **Orion Robotics**               | Industrial and collaborative robotics, automation              | Active   |
| **Orion IoT & Smart Systems**    | Connected devices, domotics, smart environments                | Active   |
| **Orion Cloud & Infrastructure** | Cloud architecture, DevOps, cybersecurity                      | Active   |
| **Orion Labs**                   | R&D, applied research, technology incubation                   | Active   |
| **Orion Studio**                 | UI/UX design, product design, brand identity                   | Optional |

---

## Tech stack

### Frontend — `apps/web` & `apps/admin`

| Layer     | Technology                              |
| --------- | --------------------------------------- |
| Framework | React 18 + Vite                         |
| Language  | TypeScript                              |
| Styling   | CSS Modules + Design Tokens             |
| State     | To be defined (Zustand / Redux Toolkit) |
| Routing   | React Router v6                         |

### Backend — `apps/api`

| Layer     | Technology             |
| --------- | ---------------------- |
| Framework | NestJS                 |
| Language  | TypeScript             |
| ORM       | Prisma                 |
| Database  | PostgreSQL             |
| Auth      | JWT + Passport.js      |
| Real-time | WebSockets (Socket.io) |

### Shared packages — `packages/`

| Package            | Role                                      |
| ------------------ | ----------------------------------------- |
| `packages/ui`      | Shared component library                  |
| `packages/types`   | Shared TypeScript types & interfaces      |
| `packages/utils`   | Shared helpers, validators, formatters    |
| `packages/i18n`    | Internationalization (EN, FR, ES, ZH, AR) |
| `packages/testing` | Shared mocks, fixtures, test helpers      |
| `packages/config`  | Shared env schemas, constants, routes     |

### Infrastructure

| Tool       | Usage            |
| ---------- | ---------------- |
| Docker     | Containerization |
| Nginx      | Reverse proxy    |
| CI/CD      | To be defined    |
| Monitoring | To be defined    |

---

## Project structure

```
orion-industries/
├── apps/
│   ├── web/          # Public frontend (React + Vite)
│   ├── api/          # Backend API (NestJS)
│   └── admin/        # Internal dashboard
├── packages/
│   ├── ui/           # Shared UI components
│   ├── types/        # Shared TypeScript types
│   ├── utils/        # Shared utilities
│   ├── i18n/         # Internationalization
│   ├── testing/      # Shared test utilities
│   └── config/       # Shared configuration
├── infrastructure/   # Docker, Nginx, monitoring
├── scripts/          # DB, build, deploy scripts
└── docs/             # Architecture, API, security docs
```

Full detailed structure is documented in [`docs/architecture/`](./docs/architecture/).

---

## Getting started

> ⚠️ The local setup method (Docker vs manual) is not yet finalized. Both paths are documented below. Choose the one that matches your environment.

### Prerequisites

Make sure the following are installed on your machine:

- [Node.js](https://nodejs.org/) `>= 20.x`
- [npm](https://www.npmjs.com/) `>= 10.x` or [pnpm](https://pnpm.io/) `>= 9.x`
- [Docker](https://www.docker.com/) + [Docker Compose](https://docs.docker.com/compose/) _(for Docker path)_
- [Git](https://git-scm.com/)

---

### Option A — Docker (recommended)

```bash
# 1. Clone the repository
git clone https://github.com/orion-industries/orion-industries.git
cd orion-industries

# 2. Copy environment variables
cp .env.example .env
# → Fill in your values in .env (see Environment variables section)

# 3. Start all services
docker compose up --build

# 4. Apply database migrations
docker compose exec api npx prisma migrate dev

# 5. Seed the database (optional)
docker compose exec api npx prisma db seed
```

Services will be available at:

| Service               | URL                            |
| --------------------- | ------------------------------ |
| Web (frontend)        | http://localhost:5173          |
| API (backend)         | http://localhost:3000          |
| Admin dashboard       | http://localhost:5174          |
| API docs (Swagger)    | http://localhost:3000/api/docs |
| Database (PostgreSQL) | localhost:5432                 |

---

### Option B — Manual installation

```bash
# 1. Clone the repository
git clone https://github.com/orion-industries/orion-industries.git
cd orion-industries

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env
# → Fill in your values in .env

# 4. Set up the database
npx prisma migrate dev --prefix apps/api

# 5. Seed the database (optional)
npx prisma db seed --prefix apps/api

# 6. Start all apps in development mode
npm run dev
```

---

### Useful commands

```bash
# Start only the frontend
npm run dev --workspace=apps/web

# Start only the backend
npm run dev --workspace=apps/api

# Start only the admin
npm run dev --workspace=apps/admin

# Build all apps
npm run build

# Run all tests
npm run test

# Lint all packages
npm run lint

# Format all files
npm run format

# Reset the database (⚠️ destroys all data)
npm run db:reset
```

---

## Environment variables

Never commit your `.env` file. Always use `.env.example` as the reference template.

```bash
cp .env.example .env
```

Key variables:

```env
# App
NODE_ENV=development
PORT=3000

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/orion_db

# Auth
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d

# Frontend URLs
VITE_API_URL=http://localhost:3000
VITE_WS_URL=ws://localhost:3000

# (Additional variables documented in .env.example)
```

A complete `.env.example` with all required and optional variables is located at the root of the repository.

---

## Languages

Orion Industries targets a global audience. The platform is built with internationalization (i18n) first, supporting the world's most spoken languages:

| Code | Language         | Status  |
| ---- | ---------------- | ------- |
| `en` | English          | Primary |
| `fr` | French           | Active  |
| `es` | Spanish          | Planned |
| `zh` | Mandarin Chinese | Planned |
| `ar` | Arabic           | Planned |
| `ru` | Russian          | Planned |
| `hi` | Hindi            | Planned |

Translation files are managed in `packages/i18n/locales/`.

---

## Contributing

This is a proprietary project. External contributions are not open at this time.

For internal team members, please refer to [`docs/conventions/`](./docs/conventions/) for:

- Git branching strategy
- Commit message format (Conventional Commits)
- Code style and naming conventions
- Pull request process
- Testing requirements

---

## Founders

| Name                      | Role                         |
| ------------------------- | ---------------------------- |
| **Théo ANDRIMANANARISOA** | Founder & CEO                |
| _(open)_                  | Co-founder — to be announced |

---

## License

Copyright © 2025 Orion Industries. All rights reserved.

This software and its source code are proprietary and confidential. No part of this codebase may be reproduced, distributed, or transmitted in any form or by any means without the prior written permission of Orion Industries.

See [`LICENSE`](./LICENSE) for the full terms.

---

<div align="center">

**Orion Industries** — _Technology that disappears. Intelligence that remains._

</div>
