<div align="center">

<img src="./apps/web/public/images/logo.png" alt="Orion Industries" width="110" />

<br/>

```
O R I O N   I N D U S T R I E S
```

**`Technology that disappears. Intelligence that remains.`**

<br/>

[![Status](https://img.shields.io/badge/status-in_development-orange?style=flat-square)]()
[![Version](https://img.shields.io/badge/version-0.1.0-111111?style=flat-square)]()
[![License](https://img.shields.io/badge/license-Proprietary-cc0000?style=flat-square)]()
[![Node](https://img.shields.io/badge/Node.js-≥20-339933?style=flat-square&logo=node.js&logoColor=white)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)]()
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)]()
[![NestJS](https://img.shields.io/badge/NestJS-10-E0234E?style=flat-square&logo=nestjs&logoColor=white)]()
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=flat-square&logo=prisma&logoColor=white)]()
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?style=flat-square&logo=postgresql&logoColor=white)]()
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?style=flat-square&logo=docker&logoColor=white)]()
[![Tailwind](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)]()

<br/>

[🌐 English](#english) · [🇫🇷 Français](#français) · [🇪🇸 Español](#español) · [🇨🇳 中文](#中文) · [🇸🇦 العربية](#العربية)

</div>

---

<a name="english"></a>

<div align="center">

# 🌐 ENGLISH

</div>

### Vision

> _"Tomorrow, technology will no longer be visible. It will be everywhere — silent, integrated into our environment, capable of understanding what we do to help us before we even ask._
>
> _This is why Orion Industries was created: to design this new generation of intelligent systems, where technology fades away to become a natural extension of human intelligence."_
>
> — **Théo ANDRIMANANARISOA**, Founder & CEO

### About

**Orion Industries** is a global technology holding company engineering the next generation of intelligent systems — where hardware, software, and artificial intelligence converge into seamless, invisible experiences.

Operating across the full spectrum of technology — from embedded electronics and IoT, to cloud infrastructure, AI, robotics, and human-centered design — the group is driven by one conviction: **technology must disappear into the environment and work _with_ humans, not _at_ them.**

This repository contains the full monorepo powering the Orion Industries digital platform — corporate website, client portal, internal admin dashboard, and all shared packages.

### Divisions

<div align="center">

| Division                           | Domain                                                          |   Status   |
| :--------------------------------- | :-------------------------------------------------------------- | :--------: |
| ⬡ **Orion Software**               | Enterprise software · SaaS platforms · Custom development       |  `Active`  |
| ⬡ **Orion AI Systems**             | Artificial intelligence · Machine learning · Autonomous systems |  `Active`  |
| ⬡ **Orion Hardware**               | Electronic design · Embedded systems · PCB engineering          |  `Active`  |
| ⬡ **Orion Robotics**               | Industrial robotics · Collaborative automation                  |  `Active`  |
| ⬡ **Orion IoT & Smart Systems**    | Connected devices · Domotics · Smart environments               |  `Active`  |
| ⬡ **Orion Cloud & Infrastructure** | Cloud architecture · DevOps · Cybersecurity                     |  `Active`  |
| ⬡ **Orion Labs**                   | Applied R&D · Technology incubation · Research                  |  `Active`  |
| ⬡ **Orion Studio**                 | UI/UX design · Product design · Brand identity                  | `Optional` |

</div>

### Architecture

```
orion-industries/
│
├── apps/
│   ├── web/            ── Public platform        React 18 · Vite · Tailwind v4
│   ├── api/            ── Backend API             NestJS · Prisma · PostgreSQL
│   └── admin/          ── Internal dashboard      React 18 · Vite · Tailwind v4
│
├── packages/
│   ├── ui/             ── Shared component library
│   ├── types/          ── Shared TypeScript types & interfaces
│   ├── utils/          ── Shared helpers, validators, formatters
│   ├── i18n/           ── Internationalization    EN · FR · ES · ZH · AR · PT · HI
│   ├── testing/        ── Shared mocks, fixtures, test helpers
│   └── config/         ── Shared env schemas, constants, routes
│
├── infrastructure/     ── Docker · Nginx · Monitoring · Deployment
├── scripts/            ── DB · Build · Deploy automation
└── docs/               ── Architecture · API · Security · Conventions
```

### Tech Stack

**Frontend** — `apps/web` & `apps/admin`

| Layer     | Technology              |
| :-------- | :---------------------- |
| Framework | React 18 + Vite         |
| Language  | TypeScript 5            |
| Styling   | Tailwind CSS v4         |
| State     | Zustand                 |
| Routing   | React Router v6         |
| HTTP      | Axios                   |
| Real-time | Socket.io Client        |
| i18n      | i18next + react-i18next |

**Backend** — `apps/api`

| Layer      | Technology                          |
| :--------- | :---------------------------------- |
| Framework  | NestJS 10                           |
| Language   | TypeScript 5                        |
| ORM        | Prisma                              |
| Database   | PostgreSQL 16                       |
| Auth       | JWT + Passport.js                   |
| Real-time  | Socket.io (WebSockets)              |
| Validation | class-validator + class-transformer |
| Security   | Helmet + @nestjs/throttler          |

**Shared Packages** — `packages/`

| Package            | Role                                   |
| :----------------- | :------------------------------------- |
| `packages/ui`      | Shared component library               |
| `packages/types`   | Shared TypeScript types & interfaces   |
| `packages/utils`   | Shared helpers, validators, formatters |
| `packages/i18n`    | Internationalization                   |
| `packages/testing` | Shared mocks, fixtures, test helpers   |
| `packages/config`  | Shared env schemas, constants, routes  |

**Infrastructure**

| Tool       | Usage            |
| :--------- | :--------------- |
| Docker     | Containerization |
| Nginx      | Reverse proxy    |
| CI/CD      | To be defined    |
| Monitoring | To be defined    |

### Getting Started

**Prerequisites**

```bash
node  >= 20.0.0
npm   >= 10.0.0
git   >= 2.40.0
docker + docker-compose
```

**Setup**

```bash
# 1 — Clone
git clone https://github.com/orion-industries/orion-industries.git
cd orion-industries

# 2 — Environment
cp .env.example .env
# → Fill in your values

# 3 — Install
npm install
```

**Run locally — Option A: Docker** _(recommended)_

```bash
npm run docker:up
```

| Service    | URL                            |
| :--------- | :----------------------------- |
| Web        | http://localhost:5173          |
| API        | http://localhost:3000          |
| Admin      | http://localhost:5174          |
| Swagger    | http://localhost:3000/api/docs |
| PostgreSQL | localhost:5432                 |

**Run locally — Option B: Manual**

```bash
npm run dev
```

**Commands**

```bash
npm run dev              # Start all apps
npm run dev:web          # Frontend only
npm run dev:api          # Backend only
npm run dev:admin        # Admin only
npm run build            # Build all apps
npm run test             # Run all tests
npm run lint             # Lint all packages
npm run format           # Format all files
npm run db:migrate       # Apply DB migrations
npm run db:seed          # Seed database
npm run db:studio        # Prisma Studio GUI
npm run db:reset         # ⚠️  Reset all data
npm run docker:up        # Start Docker stack
npm run docker:down      # Stop Docker stack
```

### Environment Variables

Never commit your `.env` file. Always use `.env.example` as reference.

```bash
cp .env.example .env
```

Key variables:

```env
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/orion_db
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=15m
VITE_API_URL=http://localhost:3000/api
VITE_WS_URL=ws://localhost:3000
```

### Languages

<div align="center">

|    `en`    |   `fr`    |    `es`    |    `zh`    |    `ar`    |    `pt`    |    `hi`    |
| :--------: | :-------: | :--------: | :--------: | :--------: | :--------: | :--------: |
|  English   | Français  |  Español   |    中文    |  العربية   | Português  |   हिन्दी   |
| ✅ Primary | ✅ Active | 🔄 Planned | 🔄 Planned | 🔄 Planned | 🔄 Planned | 🔄 Planned |

</div>

### Contributing

This is a **proprietary project**. External contributions are not open at this time.

Internal team members — refer to [`docs/conventions/`](./docs/conventions/) for:

```
Git branching strategy    →  docs/conventions/git.md
Commit format             →  docs/conventions/commits.md
Code style & naming       →  docs/conventions/code.md
Pull request process      →  docs/conventions/pull-requests.md
Testing requirements      →  docs/conventions/testing.md
```

### Team

| Role          | Name                      |
| :------------ | :------------------------ |
| Founder & CEO | **Théo ANDRIMANANARISOA** |
| Co-founder    | _Open — to be announced_  |

### License

```
Copyright © 2025 Orion Industries. All rights reserved.
Proprietary & Confidential. Unauthorized use strictly prohibited.
See LICENSE for full terms.
```

[↑ Back to top](#english)

---

<a name="français"></a>

<div align="center">

# 🇫🇷 FRANÇAIS

</div>

### Vision

> _"Demain, la technologie ne se verra plus. Elle sera là, partout, silencieuse, intégrée à notre environnement, et capable de comprendre ce que nous faisons pour nous aider avant même qu'on le demande._
>
> _C'est pour cela qu'Orion Industries a été créée : concevoir cette nouvelle génération de systèmes intelligents, où la technologie s'efface pour devenir une extension naturelle de l'intelligence humaine."_
>
> — **Théo ANDRIMANANARISOA**, Fondateur & CEO

### À propos

**Orion Industries** est une holding technologique mondiale qui conçoit la prochaine génération de systèmes intelligents — là où le hardware, le software et l'intelligence artificielle convergent pour créer des expériences seamless et invisibles.

Du circuit embarqué à l'infrastructure cloud, en passant par l'IA, la robotique et le design centré humain, le groupe est animé par une conviction : **la technologie doit s'effacer dans son environnement et travailler _avec_ l'humain, non _contre_ lui.**

Ce dépôt contient le monorepo complet qui alimente la plateforme digitale d'Orion Industries — site corporate, portail client, tableau de bord interne, et tous les packages partagés.

### Divisions

<div align="center">

| Division                           | Domaine                                                              |   Statut    |
| :--------------------------------- | :------------------------------------------------------------------- | :---------: |
| ⬡ **Orion Software**               | Logiciels d'entreprise · Plateformes SaaS · Développement sur mesure |   `Actif`   |
| ⬡ **Orion AI Systems**             | Intelligence artificielle · Machine learning · Systèmes autonomes    |   `Actif`   |
| ⬡ **Orion Hardware**               | Conception électronique · Systèmes embarqués · Ingénierie PCB        |   `Actif`   |
| ⬡ **Orion Robotics**               | Robotique industrielle · Automatisation collaborative                |   `Actif`   |
| ⬡ **Orion IoT & Smart Systems**    | Objets connectés · Domotique · Environnements intelligents           |   `Actif`   |
| ⬡ **Orion Cloud & Infrastructure** | Architecture cloud · DevOps · Cybersécurité                          |   `Actif`   |
| ⬡ **Orion Labs**                   | R&D appliquée · Incubation technologique · Recherche                 |   `Actif`   |
| ⬡ **Orion Studio**                 | Design UI/UX · Design produit · Identité de marque                   | `Optionnel` |

</div>

### Architecture

```
orion-industries/
│
├── apps/
│   ├── web/            ── Plateforme publique     React 18 · Vite · Tailwind v4
│   ├── api/            ── API Backend             NestJS · Prisma · PostgreSQL
│   └── admin/          ── Tableau de bord interne React 18 · Vite · Tailwind v4
│
├── packages/
│   ├── ui/             ── Bibliothèque de composants partagés
│   ├── types/          ── Types & interfaces TypeScript partagés
│   ├── utils/          ── Helpers, validateurs, formateurs partagés
│   ├── i18n/           ── Internationalisation    EN · FR · ES · ZH · AR · PT · HI
│   ├── testing/        ── Mocks, fixtures, helpers de test partagés
│   └── config/         ── Schémas env, constantes, routes partagés
│
├── infrastructure/     ── Docker · Nginx · Monitoring · Déploiement
├── scripts/            ── Automatisation DB · Build · Déploiement
└── docs/               ── Architecture · API · Sécurité · Conventions
```

### Stack Technique

**Frontend** — `apps/web` & `apps/admin`

| Couche     | Technologie             |
| :--------- | :---------------------- |
| Framework  | React 18 + Vite         |
| Langage    | TypeScript 5            |
| Styles     | Tailwind CSS v4         |
| État       | Zustand                 |
| Routing    | React Router v6         |
| HTTP       | Axios                   |
| Temps réel | Socket.io Client        |
| i18n       | i18next + react-i18next |

**Backend** — `apps/api`

| Couche          | Technologie                         |
| :-------------- | :---------------------------------- |
| Framework       | NestJS 10                           |
| Langage         | TypeScript 5                        |
| ORM             | Prisma                              |
| Base de données | PostgreSQL 16                       |
| Auth            | JWT + Passport.js                   |
| Temps réel      | Socket.io (WebSockets)              |
| Validation      | class-validator + class-transformer |
| Sécurité        | Helmet + @nestjs/throttler          |

**Packages partagés** — `packages/`

| Package            | Rôle                                   |
| :----------------- | :------------------------------------- |
| `packages/ui`      | Bibliothèque de composants partagés    |
| `packages/types`   | Types & interfaces TypeScript partagés |
| `packages/utils`   | Helpers, validateurs, formateurs       |
| `packages/i18n`    | Internationalisation                   |
| `packages/testing` | Mocks, fixtures, helpers de test       |
| `packages/config`  | Schémas env, constantes, routes        |

**Infrastructure**

| Outil      | Usage            |
| :--------- | :--------------- |
| Docker     | Conteneurisation |
| Nginx      | Reverse proxy    |
| CI/CD      | À définir        |
| Monitoring | À définir        |

### Démarrage

**Prérequis**

```bash
node  >= 20.0.0
npm   >= 10.0.0
git   >= 2.40.0
docker + docker-compose
```

**Installation**

```bash
# 1 — Cloner le dépôt
git clone https://github.com/orion-industries/orion-industries.git
cd orion-industries

# 2 — Variables d'environnement
cp .env.example .env
# → Remplir les valeurs dans .env

# 3 — Installer les dépendances
npm install
```

**Lancer en local — Option A : Docker** _(recommandé)_

```bash
npm run docker:up
```

| Service    | URL                            |
| :--------- | :----------------------------- |
| Web        | http://localhost:5173          |
| API        | http://localhost:3000          |
| Admin      | http://localhost:5174          |
| Swagger    | http://localhost:3000/api/docs |
| PostgreSQL | localhost:5432                 |

**Lancer en local — Option B : Manuel**

```bash
npm run dev
```

**Commandes**

```bash
npm run dev              # Lancer toutes les apps
npm run dev:web          # Frontend uniquement
npm run dev:api          # Backend uniquement
npm run dev:admin        # Admin uniquement
npm run build            # Builder toutes les apps
npm run test             # Lancer tous les tests
npm run lint             # Linter tous les packages
npm run format           # Formater tous les fichiers
npm run db:migrate       # Appliquer les migrations
npm run db:seed          # Seed de la base de données
npm run db:studio        # Prisma Studio GUI
npm run db:reset         # ⚠️  Réinitialiser toutes les données
npm run docker:up        # Démarrer la stack Docker
npm run docker:down      # Arrêter la stack Docker
```

### Variables d'environnement

Ne jamais committer le fichier `.env`. Utiliser toujours `.env.example` comme référence.

```bash
cp .env.example .env
```

Variables clés :

```env
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/orion_db
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=15m
VITE_API_URL=http://localhost:3000/api
VITE_WS_URL=ws://localhost:3000
```

### Langues

<div align="center">

|     `en`      |   `fr`    |   `es`    |   `zh`    |   `ar`    |   `pt`    |   `hi`    |
| :-----------: | :-------: | :-------: | :-------: | :-------: | :-------: | :-------: |
|    English    | Français  |  Español  |   中文    |  العربية  | Português |  हिन्दी   |
| ✅ Principale | ✅ Active | 🔄 Prévue | 🔄 Prévue | 🔄 Prévue | 🔄 Prévue | 🔄 Prévue |

</div>

### Contribuer

Ce projet est **propriétaire**. Les contributions externes ne sont pas ouvertes pour le moment.

Pour les membres de l'équipe interne, consulter [`docs/conventions/`](./docs/conventions/) :

```
Stratégie de branches Git  →  docs/conventions/git.md
Format des commits         →  docs/conventions/commits.md
Style de code & nommage    →  docs/conventions/code.md
Processus de Pull Request  →  docs/conventions/pull-requests.md
Exigences de tests         →  docs/conventions/testing.md
```

### Équipe

| Rôle            | Nom                       |
| :-------------- | :------------------------ |
| Fondateur & CEO | **Théo ANDRIMANANARISOA** |
| Co-fondateur    | _Ouvert — à annoncer_     |

### Licence

```
Copyright © 2025 Orion Industries. Tous droits réservés.
Logiciel propriétaire et confidentiel. Toute utilisation non autorisée est strictement interdite.
Voir LICENSE pour les conditions complètes.
```

[↑ Retour en haut](#français)

---

<a name="español"></a>

<div align="center">

# 🇪🇸 ESPAÑOL

</div>

### Visión

> _"Mañana, la tecnología ya no será visible. Estará en todas partes — silenciosa, integrada en nuestro entorno, capaz de comprender lo que hacemos para ayudarnos antes incluso de que lo pidamos._
>
> _Por eso se creó Orion Industries: para diseñar esta nueva generación de sistemas inteligentes, donde la tecnología se desvanece para convertirse en una extensión natural de la inteligencia humana."_
>
> — **Théo ANDRIMANANARISOA**, Fundador & CEO

### Acerca de

**Orion Industries** es una holding tecnológica global que diseña la próxima generación de sistemas inteligentes — donde hardware, software e inteligencia artificial convergen en experiencias invisibles y fluidas.

Desde electrónica embebida e IoT hasta infraestructura cloud, IA, robótica y diseño centrado en el ser humano, el grupo está impulsado por una convicción: **la tecnología debe desvanecerse en el entorno y trabajar _con_ los humanos, no _contra_ ellos.**

Este repositorio contiene el monorepo completo que alimenta la plataforma digital de Orion Industries — sitio corporativo, portal de clientes, panel de administración interno y todos los paquetes compartidos.

### Divisiones

<div align="center">

| División                           | Dominio                                                         |   Estado   |
| :--------------------------------- | :-------------------------------------------------------------- | :--------: |
| ⬡ **Orion Software**               | Software empresarial · Plataformas SaaS · Desarrollo a medida   |  `Activo`  |
| ⬡ **Orion AI Systems**             | Inteligencia artificial · Machine learning · Sistemas autónomos |  `Activo`  |
| ⬡ **Orion Hardware**               | Diseño electrónico · Sistemas embebidos · Ingeniería PCB        |  `Activo`  |
| ⬡ **Orion Robotics**               | Robótica industrial · Automatización colaborativa               |  `Activo`  |
| ⬡ **Orion IoT & Smart Systems**    | Dispositivos conectados · Domótica · Entornos inteligentes      |  `Activo`  |
| ⬡ **Orion Cloud & Infrastructure** | Arquitectura cloud · DevOps · Ciberseguridad                    |  `Activo`  |
| ⬡ **Orion Labs**                   | I+D aplicada · Incubación tecnológica · Investigación           |  `Activo`  |
| ⬡ **Orion Studio**                 | Diseño UI/UX · Diseño de producto · Identidad de marca          | `Opcional` |

</div>

### Arquitectura

```
orion-industries/
│
├── apps/
│   ├── web/            ── Plataforma pública      React 18 · Vite · Tailwind v4
│   ├── api/            ── API Backend             NestJS · Prisma · PostgreSQL
│   └── admin/          ── Panel interno           React 18 · Vite · Tailwind v4
│
├── packages/
│   ├── ui/             ── Biblioteca de componentes compartidos
│   ├── types/          ── Tipos e interfaces TypeScript compartidos
│   ├── utils/          ── Helpers, validadores, formateadores compartidos
│   ├── i18n/           ── Internacionalización    EN · FR · ES · ZH · AR · PT · HI
│   ├── testing/        ── Mocks, fixtures, helpers de prueba compartidos
│   └── config/         ── Esquemas env, constantes, rutas compartidas
│
├── infrastructure/     ── Docker · Nginx · Monitoring · Despliegue
├── scripts/            ── Automatización DB · Build · Despliegue
└── docs/               ── Arquitectura · API · Seguridad · Convenciones
```

### Stack Técnico

**Frontend** — `apps/web` & `apps/admin`

| Capa         | Tecnología              |
| :----------- | :---------------------- |
| Framework    | React 18 + Vite         |
| Lenguaje     | TypeScript 5            |
| Estilos      | Tailwind CSS v4         |
| Estado       | Zustand                 |
| Enrutamiento | React Router v6         |
| HTTP         | Axios                   |
| Tiempo real  | Socket.io Client        |
| i18n         | i18next + react-i18next |

**Backend** — `apps/api`

| Capa          | Tecnología                          |
| :------------ | :---------------------------------- |
| Framework     | NestJS 10                           |
| Lenguaje      | TypeScript 5                        |
| ORM           | Prisma                              |
| Base de datos | PostgreSQL 16                       |
| Auth          | JWT + Passport.js                   |
| Tiempo real   | Socket.io (WebSockets)              |
| Validación    | class-validator + class-transformer |
| Seguridad     | Helmet + @nestjs/throttler          |

**Paquetes compartidos** — `packages/`

| Paquete            | Rol                                       |
| :----------------- | :---------------------------------------- |
| `packages/ui`      | Biblioteca de componentes compartidos     |
| `packages/types`   | Tipos e interfaces TypeScript compartidos |
| `packages/utils`   | Helpers, validadores, formateadores       |
| `packages/i18n`    | Internacionalización                      |
| `packages/testing` | Mocks, fixtures, helpers de prueba        |
| `packages/config`  | Esquemas env, constantes, rutas           |

**Infraestructura**

| Herramienta | Uso               |
| :---------- | :---------------- |
| Docker      | Contenedorización |
| Nginx       | Proxy inverso     |
| CI/CD       | Por definir       |
| Monitoring  | Por definir       |

### Primeros Pasos

**Requisitos previos**

```bash
node  >= 20.0.0
npm   >= 10.0.0
git   >= 2.40.0
docker + docker-compose
```

**Instalación**

```bash
# 1 — Clonar
git clone https://github.com/orion-industries/orion-industries.git
cd orion-industries

# 2 — Variables de entorno
cp .env.example .env
# → Completar los valores en .env

# 3 — Instalar dependencias
npm install
```

**Ejecutar en local — Opción A: Docker** _(recomendado)_

```bash
npm run docker:up
```

| Servicio   | URL                            |
| :--------- | :----------------------------- |
| Web        | http://localhost:5173          |
| API        | http://localhost:3000          |
| Admin      | http://localhost:5174          |
| Swagger    | http://localhost:3000/api/docs |
| PostgreSQL | localhost:5432                 |

**Ejecutar en local — Opción B: Manual**

```bash
npm run dev
```

**Comandos**

```bash
npm run dev              # Iniciar todas las apps
npm run dev:web          # Solo frontend
npm run dev:api          # Solo backend
npm run dev:admin        # Solo admin
npm run build            # Compilar todas las apps
npm run test             # Ejecutar todas las pruebas
npm run lint             # Linting de todos los paquetes
npm run format           # Formatear todos los archivos
npm run db:migrate       # Aplicar migraciones
npm run db:seed          # Poblar base de datos
npm run db:studio        # Prisma Studio GUI
npm run db:reset         # ⚠️  Resetear todos los datos
npm run docker:up        # Iniciar stack Docker
npm run docker:down      # Detener stack Docker
```

### Variables de Entorno

Nunca commitear el archivo `.env`. Usar siempre `.env.example` como referencia.

```bash
cp .env.example .env
```

Variables clave:

```env
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/orion_db
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=15m
VITE_API_URL=http://localhost:3000/api
VITE_WS_URL=ws://localhost:3000
```

### Idiomas

<div align="center">

|     `en`     |   `fr`    |      `es`      |      `zh`      |      `ar`      |      `pt`      |      `hi`      |
| :----------: | :-------: | :------------: | :------------: | :------------: | :------------: | :------------: |
|   English    | Français  |    Español     |      中文      |    العربية     |   Português    |     हिन्दी     |
| ✅ Principal | ✅ Activo | 🔄 Planificado | 🔄 Planificado | 🔄 Planificado | 🔄 Planificado | 🔄 Planificado |

</div>

### Contribuir

Este es un **proyecto propietario**. Las contribuciones externas no están abiertas por el momento.

Para miembros del equipo interno, consultar [`docs/conventions/`](./docs/conventions/):

```
Estrategia de ramas Git   →  docs/conventions/git.md
Formato de commits        →  docs/conventions/commits.md
Estilo de código          →  docs/conventions/code.md
Proceso de Pull Request   →  docs/conventions/pull-requests.md
Requisitos de pruebas     →  docs/conventions/testing.md
```

### Equipo

| Rol            | Nombre                    |
| :------------- | :------------------------ |
| Fundador & CEO | **Théo ANDRIMANANARISOA** |
| Co-fundador    | _Abierto — por anunciar_  |

### Licencia

```
Copyright © 2025 Orion Industries. Todos los derechos reservados.
Software propietario y confidencial. Uso no autorizado estrictamente prohibido.
Ver LICENSE para los términos completos.
```

[↑ Volver al inicio](#español)

---

<a name="中文"></a>

<div align="center">

# 🇨🇳 中文

</div>

### 愿景

> _"明天，技术将不再可见。它将无处不在——沉默、融入我们的环境，在我们开口之前就能理解我们的需求并提供帮助。_
>
> _这就是 Orion Industries 创立的原因：设计新一代智能系统，让技术消融于环境之中，成为人类智慧的自然延伸。"_
>
> — **Théo ANDRIMANANARISOA**，创始人兼首席执行官

### 关于我们

**Orion Industries** 是一家全球技术控股公司，致力于打造下一代智能系统——硬件、软件与人工智能在此交汇，创造无缝、无形的体验。

从嵌入式电子和物联网，到云基础设施、人工智能、机器人技术和以人为本的设计，集团秉持一个信念：**技术必须融入环境，与人类协同工作，而非对抗人类。**

本仓库包含驱动 Orion Industries 数字平台的完整单体仓库——企业官网、客户门户、内部管理后台及所有共享包。

### 业务部门

<div align="center">

| 部门                               | 领域                            |   状态   |
| :--------------------------------- | :------------------------------ | :------: |
| ⬡ **Orion Software**               | 企业软件 · SaaS平台 · 定制开发  | `运营中` |
| ⬡ **Orion AI Systems**             | 人工智能 · 机器学习 · 自主系统  | `运营中` |
| ⬡ **Orion Hardware**               | 电子设计 · 嵌入式系统 · PCB工程 | `运营中` |
| ⬡ **Orion Robotics**               | 工业机器人 · 协作自动化         | `运营中` |
| ⬡ **Orion IoT & Smart Systems**    | 连接设备 · 智能家居 · 智能环境  | `运营中` |
| ⬡ **Orion Cloud & Infrastructure** | 云架构 · DevOps · 网络安全      | `运营中` |
| ⬡ **Orion Labs**                   | 应用研发 · 技术孵化 · 研究      | `运营中` |
| ⬡ **Orion Studio**                 | UI/UX设计 · 产品设计 · 品牌形象 |  `可选`  |

</div>

### 架构

```
orion-industries/
│
├── apps/
│   ├── web/            ── 公共平台              React 18 · Vite · Tailwind v4
│   ├── api/            ── 后端API               NestJS · Prisma · PostgreSQL
│   └── admin/          ── 内部管理后台           React 18 · Vite · Tailwind v4
│
├── packages/
│   ├── ui/             ── 共享组件库
│   ├── types/          ── 共享TypeScript类型与接口
│   ├── utils/          ── 共享工具函数、验证器、格式化器
│   ├── i18n/           ── 国际化              EN · FR · ES · ZH · AR · PT · HI
│   ├── testing/        ── 共享测试工具、模拟数据、夹具
│   └── config/         ── 共享环境配置、常量、路由
│
├── infrastructure/     ── Docker · Nginx · 监控 · 部署
├── scripts/            ── 数据库 · 构建 · 部署自动化
└── docs/               ── 架构 · API · 安全 · 开发规范
```

### 技术栈

**前端** — `apps/web` & `apps/admin`

| 层级     | 技术                    |
| :------- | :---------------------- |
| 框架     | React 18 + Vite         |
| 语言     | TypeScript 5            |
| 样式     | Tailwind CSS v4         |
| 状态管理 | Zustand                 |
| 路由     | React Router v6         |
| HTTP     | Axios                   |
| 实时通信 | Socket.io Client        |
| 国际化   | i18next + react-i18next |

**后端** — `apps/api`

| 层级     | 技术                                |
| :------- | :---------------------------------- |
| 框架     | NestJS 10                           |
| 语言     | TypeScript 5                        |
| ORM      | Prisma                              |
| 数据库   | PostgreSQL 16                       |
| 认证     | JWT + Passport.js                   |
| 实时通信 | Socket.io (WebSockets)              |
| 数据验证 | class-validator + class-transformer |
| 安全     | Helmet + @nestjs/throttler          |

**共享包** — `packages/`

| 包名               | 职责                     |
| :----------------- | :----------------------- |
| `packages/ui`      | 共享UI组件库             |
| `packages/types`   | 共享TypeScript类型与接口 |
| `packages/utils`   | 共享工具函数             |
| `packages/i18n`    | 国际化                   |
| `packages/testing` | 共享测试工具             |
| `packages/config`  | 共享配置                 |

**基础设施**

| 工具       | 用途     |
| :--------- | :------- |
| Docker     | 容器化   |
| Nginx      | 反向代理 |
| CI/CD      | 待定     |
| Monitoring | 待定     |

### 快速开始

**环境要求**

```bash
node  >= 20.0.0
npm   >= 10.0.0
git   >= 2.40.0
docker + docker-compose
```

**安装**

```bash
# 1 — 克隆仓库
git clone https://github.com/orion-industries/orion-industries.git
cd orion-industries

# 2 — 环境变量
cp .env.example .env
# → 填写 .env 中的值

# 3 — 安装依赖
npm install
```

**本地运行 — 方式A：Docker** _(推荐)_

```bash
npm run docker:up
```

| 服务        | 地址                           |
| :---------- | :----------------------------- |
| 网站前端    | http://localhost:5173          |
| API接口     | http://localhost:3000          |
| 管理后台    | http://localhost:5174          |
| Swagger文档 | http://localhost:3000/api/docs |
| PostgreSQL  | localhost:5432                 |

**本地运行 — 方式B：手动**

```bash
npm run dev
```

**常用命令**

```bash
npm run dev              # 启动所有应用
npm run dev:web          # 仅启动前端
npm run dev:api          # 仅启动后端
npm run dev:admin        # 仅启动管理后台
npm run build            # 构建所有应用
npm run test             # 运行所有测试
npm run lint             # 代码检查
npm run format           # 代码格式化
npm run db:migrate       # 执行数据库迁移
npm run db:seed          # 填充测试数据
npm run db:studio        # Prisma Studio界面
npm run db:reset         # ⚠️  重置所有数据
npm run docker:up        # 启动Docker服务栈
npm run docker:down      # 停止Docker服务栈
```

### 环境变量

切勿提交 `.env` 文件。始终以 `.env.example` 为参考模板。

```bash
cp .env.example .env
```

关键变量：

```env
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/orion_db
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=15m
VITE_API_URL=http://localhost:3000/api
VITE_WS_URL=ws://localhost:3000
```

### 支持语言

<div align="center">

|  `en`   |   `fr`    |   `es`    |   `zh`    |   `ar`    |   `pt`    |   `hi`    |
| :-----: | :-------: | :-------: | :-------: | :-------: | :-------: | :-------: |
| English | Français  |  Español  |   中文    |  العربية  | Português |  हिन्दी   |
| ✅ 主要 | ✅ 已上线 | 🔄 计划中 | 🔄 计划中 | 🔄 计划中 | 🔄 计划中 | 🔄 计划中 |

</div>

### 贡献指南

本项目为**专有项目**，暂不接受外部贡献。

内部团队成员请参阅 [`docs/conventions/`](./docs/conventions/)：

```
Git分支策略        →  docs/conventions/git.md
提交信息格式       →  docs/conventions/commits.md
代码风格与命名     →  docs/conventions/code.md
Pull Request流程   →  docs/conventions/pull-requests.md
测试要求           →  docs/conventions/testing.md
```

### 团队

| 职位               | 姓名                      |
| :----------------- | :------------------------ |
| 创始人兼首席执行官 | **Théo ANDRIMANANARISOA** |
| 联合创始人         | _开放 — 待宣布_           |

### 许可证

```
版权所有 © 2025 Orion Industries。保留所有权利。
专有且保密软件。严禁未经授权使用。
完整条款请参阅 LICENSE 文件。
```

[↑ 返回顶部](#中文)

---

<a name="العربية"></a>

<div align="center">

# 🇸🇦 العربية

</div>

<div dir="rtl">

### الرؤية

> _"غداً، لن تكون التكنولوجيا مرئية. ستكون في كل مكان — صامتة، مندمجة في بيئتنا، قادرة على فهم ما نفعله لمساعدتنا قبل أن نطلب ذلك._
>
> _لهذا أُسِّست Orion Industries: لتصميم هذا الجيل الجديد من الأنظمة الذكية، حيث تتلاشى التكنولوجيا لتصبح امتداداً طبيعياً للذكاء البشري."_
>
> — **Théo ANDRIMANANARISOA**، المؤسس والرئيس التنفيذي

### نبذة عنا

**Orion Industries** هي شركة قابضة تكنولوجية عالمية تعمل على هندسة الجيل القادم من الأنظمة الذكية — حيث يتقاطع الأجهزة والبرمجيات والذكاء الاصطناعي لإنشاء تجارب سلسة وغير مرئية.

من الإلكترونيات المضمنة وإنترنت الأشياء إلى البنية التحتية السحابية والذكاء الاصطناعي والروبوتات والتصميم المتمحور حول الإنسان، يسير المجموعة وفق قناعة واحدة: **يجب أن تذوب التكنولوجيا في بيئتها وتعمل _مع_ البشر، لا _ضدهم_.**

يحتوي هذا المستودع على المونوريبو الكامل الذي يشغّل المنصة الرقمية لـ Orion Industries — الموقع المؤسسي، بوابة العملاء، لوحة الإدارة الداخلية، وجميع الحزم المشتركة.

### الأقسام

| القسم                              | المجال                                              |  الحالة   |
| :--------------------------------- | :-------------------------------------------------- | :-------: |
| ⬡ **Orion Software**               | برمجيات المؤسسات · منصات SaaS · التطوير المخصص      |   `نشط`   |
| ⬡ **Orion AI Systems**             | الذكاء الاصطناعي · التعلم الآلي · الأنظمة المستقلة  |   `نشط`   |
| ⬡ **Orion Hardware**               | التصميم الإلكتروني · الأنظمة المضمنة · هندسة PCB    |   `نشط`   |
| ⬡ **Orion Robotics**               | الروبوتات الصناعية · الأتمتة التعاونية              |   `نشط`   |
| ⬡ **Orion IoT & Smart Systems**    | الأجهزة المتصلة · المنازل الذكية · البيئات الذكية   |   `نشط`   |
| ⬡ **Orion Cloud & Infrastructure** | البنية السحابية · DevOps · الأمن السيبراني          |   `نشط`   |
| ⬡ **Orion Labs**                   | البحث والتطوير التطبيقي · حضانة التكنولوجيا · البحث |   `نشط`   |
| ⬡ **Orion Studio**                 | تصميم UI/UX · تصميم المنتج · هوية العلامة التجارية  | `اختياري` |

### البنية المعمارية

```
orion-industries/
│
├── apps/
│   ├── web/            ── المنصة العامة         React 18 · Vite · Tailwind v4
│   ├── api/            ── API الخلفية           NestJS · Prisma · PostgreSQL
│   └── admin/          ── لوحة الإدارة الداخلية React 18 · Vite · Tailwind v4
│
├── packages/
│   ├── ui/             ── مكتبة المكونات المشتركة
│   ├── types/          ── أنواع وواجهات TypeScript المشتركة
│   ├── utils/          ── أدوات ومدققات ومنسقات مشتركة
│   ├── i18n/           ── التدويل    EN · FR · ES · ZH · AR · PT · HI
│   ├── testing/        ── أدوات اختبار ونماذج مشتركة
│   └── config/         ── إعدادات ومتغيرات وثوابت مشتركة
│
├── infrastructure/     ── Docker · Nginx · المراقبة · النشر
├── scripts/            ── أتمتة DB · البناء · النشر
└── docs/               ── المعمارية · API · الأمان · الاتفاقيات
```

### المكدس التقني

**الواجهة الأمامية** — `apps/web` & `apps/admin`

| الطبقة       | التقنية                 |
| :----------- | :---------------------- |
| الإطار       | React 18 + Vite         |
| اللغة        | TypeScript 5            |
| التنسيق      | Tailwind CSS v4         |
| إدارة الحالة | Zustand                 |
| التوجيه      | React Router v6         |
| HTTP         | Axios                   |
| الوقت الفعلي | Socket.io Client        |
| التدويل      | i18next + react-i18next |

**الواجهة الخلفية** — `apps/api`

| الطبقة         | التقنية                             |
| :------------- | :---------------------------------- |
| الإطار         | NestJS 10                           |
| اللغة          | TypeScript 5                        |
| ORM            | Prisma                              |
| قاعدة البيانات | PostgreSQL 16                       |
| المصادقة       | JWT + Passport.js                   |
| الوقت الفعلي   | Socket.io (WebSockets)              |
| التحقق         | class-validator + class-transformer |
| الأمان         | Helmet + @nestjs/throttler          |

**الحزم المشتركة** — `packages/`

| الحزمة             | الدور                    |
| :----------------- | :----------------------- |
| `packages/ui`      | مكتبة المكونات المشتركة  |
| `packages/types`   | أنواع وواجهات TypeScript |
| `packages/utils`   | أدوات مشتركة             |
| `packages/i18n`    | التدويل                  |
| `packages/testing` | أدوات الاختبار           |
| `packages/config`  | الإعدادات المشتركة       |

**البنية التحتية**

| الأداة     | الاستخدام     |
| :--------- | :------------ |
| Docker     | الحاويات      |
| Nginx      | الوكيل العكسي |
| CI/CD      | قيد التحديد   |
| Monitoring | قيد التحديد   |

### البدء السريع

**المتطلبات الأساسية**

```bash
node  >= 20.0.0
npm   >= 10.0.0
git   >= 2.40.0
docker + docker-compose
```

**التثبيت**

```bash
# 1 — استنساخ المستودع
git clone https://github.com/orion-industries/orion-industries.git
cd orion-industries

# 2 — متغيرات البيئة
cp .env.example .env
# → أدخل قيمك في .env

# 3 — تثبيت الاعتماديات
npm install
```

**التشغيل المحلي — الخيار A: Docker** _(موصى به)_

```bash
npm run docker:up
```

| الخدمة           | العنوان                        |
| :--------------- | :----------------------------- |
| الواجهة الأمامية | http://localhost:5173          |
| API              | http://localhost:3000          |
| لوحة الإدارة     | http://localhost:5174          |
| Swagger          | http://localhost:3000/api/docs |
| PostgreSQL       | localhost:5432                 |

**التشغيل المحلي — الخيار B: يدوي**

```bash
npm run dev
```

**الأوامر**

```bash
npm run dev              # تشغيل جميع التطبيقات
npm run dev:web          # الواجهة الأمامية فقط
npm run dev:api          # الواجهة الخلفية فقط
npm run dev:admin        # لوحة الإدارة فقط
npm run build            # بناء جميع التطبيقات
npm run test             # تشغيل جميع الاختبارات
npm run lint             # فحص الكود
npm run format           # تنسيق الملفات
npm run db:migrate       # تطبيق ترحيلات قاعدة البيانات
npm run db:seed          # ملء قاعدة البيانات
npm run db:studio        # واجهة Prisma Studio
npm run db:reset         # ⚠️  إعادة تعيين جميع البيانات
npm run docker:up        # تشغيل مكدس Docker
npm run docker:down      # إيقاف مكدس Docker
```

### متغيرات البيئة

لا تقم أبداً بإيداع ملف `.env`. استخدم دائماً `.env.example` كمرجع.

```bash
cp .env.example .env
```

المتغيرات الرئيسية:

```env
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/orion_db
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=15m
VITE_API_URL=http://localhost:3000/api
VITE_WS_URL=ws://localhost:3000
```

### اللغات المدعومة

|   `en`    |   `fr`   |   `es`   |   `zh`   |   `ar`   |   `pt`    |   `hi`   |
| :-------: | :------: | :------: | :------: | :------: | :-------: | :------: |
|  English  | Français | Español  |   中文   | العربية  | Português |  हिन्दी  |
| ✅ رئيسية | ✅ نشطة  | 🔄 مخططة | 🔄 مخططة | 🔄 مخططة | 🔄 مخططة  | 🔄 مخططة |

### المساهمة

هذا **مشروع خاص**. المساهمات الخارجية غير مفتوحة في الوقت الحالي.

لأعضاء الفريق الداخلي، يرجى الرجوع إلى [`docs/conventions/`](./docs/conventions/):

```
استراتيجية فروع Git   →  docs/conventions/git.md
تنسيق الـ commits     →  docs/conventions/commits.md
أسلوب الكود والتسمية →  docs/conventions/code.md
عملية Pull Request    →  docs/conventions/pull-requests.md
متطلبات الاختبار      →  docs/conventions/testing.md
```

### الفريق

| الدور                   | الاسم                       |
| :---------------------- | :-------------------------- |
| المؤسس والرئيس التنفيذي | **Théo ANDRIMANANARISOA**   |
| المؤسس المشارك          | _مفتوح — سيُعلن عنه لاحقاً_ |

### الترخيص

```
حقوق النشر © 2025 Orion Industries. جميع الحقوق محفوظة.
برنامج خاص وسري. يُحظر الاستخدام غير المصرح به بشكل صارم.
راجع ملف LICENSE للاطلاع على الشروط الكاملة.
```

[↑ العودة إلى الأعلى](#العربية)

</div>

---

<div align="center">

<img src="./apps/web/public/images/logo.png" alt="Orion Industries" width="48" />

<br/>

**ORION INDUSTRIES**

_Technology that disappears. Intelligence that remains._

<br/>

`Copyright © 2025 Orion Industries — All rights reserved`

</div>
