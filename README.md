# O.R.I.O.N Industries — Site Web

> Plateforme web officielle d'**O.R.I.O.N Industries** — entreprise technologique multidisciplinaire spécialisée en informatique, électronique, ingénierie, domotique et IoT.

---

## Stack technique

| Couche | Technologie |
|---|---|
| Frontend | Next.js 16 (App Router) + TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| State UI | Zustand |
| Server State | React Query |
| Auth | Auth.js (NextAuth v5) |
| Backend | Fastify + TypeScript |
| Base de données | PostgreSQL + Prisma ORM |
| Cache & Queue | Redis (ioredis) + BullMQ |
| Paiement | Stripe |
| Stockage | Cloudflare R2 |
| Email | Resend |
| SMS | Twilio |
| Push | Web Push (VAPID) |
| PDF | Puppeteer |
| Logs | Pino |
| Erreurs | Sentry |
| Conteneurs | Docker + Nginx |
| CI/CD | GitHub Actions |

---

## Architecture globale

```
Frontend (UI)
   ↓
API Client (fetch unique)
   ↓
Backend (modules métier)
   ↓
Services (Stripe / Email / SMS)
   ↓
Database (PostgreSQL via Prisma)
   ↓
Cache & Jobs (Redis / BullMQ)
```

---

## Structure du projet

```
orion-industries/
│
├── frontend/                                # UI Next.js (aucune logique métier)
│   │
│   ├── app/                                 # Routing App Router
│   │   │
│   │   ├── layout.tsx                       # layout global (navbar + footer)
│   │   ├── globals.css                      # styles globaux (tailwind)
│   │   ├── loading.tsx                      # loading global
│   │   ├── error.tsx                        # gestion erreurs UI
│   │   ├── not-found.tsx                    # 404
│   │   │
│   │   ├── (public)/                        # pages marketing
│   │   │   ├── page.tsx                     # landing page
│   │   │   ├── about/
│   │   │   │   └── page.tsx                 # présentation entreprise
│   │   │   └── contact/
│   │   │       └── page.tsx                 # formulaire contact
│   │   │
│   │   ├── (shop)/                          # e-commerce UI
│   │   │   ├── page.tsx                     # catalogue produits
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx                 # page produit
│   │   │   ├── cart/
│   │   │   │   └── page.tsx                 # panier
│   │   │   └── checkout/
│   │   │       └── page.tsx                 # paiement Stripe
│   │   │
│   │   ├── (auth)/                          # authentification UI
│   │   │   ├── login/page.tsx
│   │   │   ├── register/page.tsx
│   │   │   ├── forgot-password/page.tsx
│   │   │   └── reset-password/page.tsx
│   │   │
│   │   ├── (account)/                       # espace utilisateur
│   │   │   ├── layout.tsx                   # layout dashboard user
│   │   │   ├── page.tsx                     # dashboard principal
│   │   │   ├── orders/
│   │   │   │   ├── page.tsx                 # liste commandes
│   │   │   │   └── [id]/page.tsx            # détail commande
│   │   │   ├── settings/page.tsx
│   │   │   └── notifications/page.tsx
│   │   │
│   │   ├── (admin)/                         # dashboard admin
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── products/page.tsx
│   │   │   ├── orders/page.tsx
│   │   │   ├── users/page.tsx
│   │   │   ├── analytics/page.tsx
│   │   │   └── support/page.tsx
│   │   │
│   │   └── api/                             # BFF léger (optionnel)
│   │       └── auth/route.ts
│   │
│   ├── components/                          # composants UI
│   │   │
│   │   ├── ui/                              # design system (aucune logique)
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── modal.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── spinner.tsx
│   │   │   └── skeleton.tsx
│   │   │
│   │   ├── layout/                          # structure globale
│   │   │   ├── navbar.tsx
│   │   │   ├── footer.tsx
│   │   │   └── sidebar.tsx
│   │   │
│   │   └── features/                        # UI par domaine métier
│   │       ├── shop/
│   │       │   ├── product-card.tsx
│   │       │   ├── product-grid.tsx
│   │       │   └── filters.tsx
│   │       ├── cart/
│   │       │   ├── cart-drawer.tsx
│   │       │   └── cart-item.tsx
│   │       ├── auth/
│   │       │   ├── login-form.tsx
│   │       │   └── register-form.tsx
│   │       ├── orders/
│   │       │   └── order-card.tsx
│   │       └── support/
│   │           ├── chat-window.tsx
│   │           └── ticket-form.tsx
│   │
│   ├── lib/                                 # outils techniques
│   │   ├── api-client.ts                    # fetch centralisé (unique point d'accès backend)
│   │   ├── auth.ts                          # gestion session
│   │   ├── utils.ts                         # helpers UI
│   │   └── config.ts                        # config app
│   │
│   ├── hooks/                               # state UI uniquement
│   │   ├── useAuth.ts                       # session utilisateur
│   │   ├── useCart.ts                       # panier UI
│   │   └── useNotifications.ts              # notifications UI
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   └── types/                               # import depuis shared/ uniquement
│
│
├── backend/                                 # API Fastify (logique métier)
│   │
│   ├── src/
│   │   ├── server.ts                        # entrypoint serveur
│   │   │
│   │   ├── core/                            # infra interne
│   │   │   ├── database.ts                  # Prisma init
│   │   │   ├── redis.ts                     # cache + sessions
│   │   │   ├── logger.ts                    # Pino config
│   │   │   ├── config.ts                    # env loader
│   │   │   └── errors.ts                    # standardisation erreurs API
│   │   │
│   │   ├── modules/                         # modules métier (chaque module = système autonome)
│   │   │   ├── auth/                        # login / register / sessions / 2FA
│   │   │   │   ├── controller.ts            # endpoints HTTP
│   │   │   │   ├── service.ts               # logique métier
│   │   │   │   ├── repo.ts                  # accès DB
│   │   │   │   └── schema.ts               # validation Zod
│   │   │   ├── users/                       # gestion utilisateurs
│   │   │   ├── products/                    # catalogue + stock
│   │   │   ├── orders/                      # commandes
│   │   │   ├── cart/                        # panier serveur
│   │   │   ├── payments/                    # Stripe + webhook
│   │   │   ├── notifications/               # email / SMS / push
│   │   │   ├── support/                     # tickets + chat SSE
│   │   │   └── admin/                       # permissions + analytics
│   │   │
│   │   ├── jobs/                            # workers async (BullMQ)
│   │   │   ├── email.job.ts                 # emails async
│   │   │   ├── sms.job.ts                   # SMS async
│   │   │   └── pdf.job.ts                   # génération facture PDF
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.ts                      # protection routes
│   │   │   ├── rateLimit.ts                 # anti-abus
│   │   │   └── validate.ts                  # validation globale Zod
│   │   │
│   │   └── utils/
│   │       └── crypto.ts                    # hash / tokens / 2FA
│   │
│   ├── prisma/
│   │   ├── schema.prisma                    # modèles BDD
│   │   └── seed.ts                          # données initiales
│   │
│   └── package.json
│
│
├── shared/                                  # source unique de vérité (anti-doublon absolu)
│   │
│   ├── api/
│   │   └── contracts/                       # contrats API stricts frontend ↔ backend
│   │       ├── auth.schema.ts
│   │       ├── product.schema.ts
│   │       ├── order.schema.ts
│   │       └── payment.schema.ts
│   │
│   ├── types/                               # types partagés
│   │   ├── user.ts
│   │   ├── product.ts
│   │   ├── order.ts
│   │   └── common.ts
│   │
│   └── constants/
│       └── roles.ts                         # rôles : user / admin / etc.
│
│
├── infra/                                   # infra production
│   ├── nginx.conf                           # reverse proxy
│   ├── github-actions.yml                   # CI/CD pipeline
│   └── monitoring.ts                        # Sentry config
│
│
├── docker/
│   ├── frontend.Dockerfile                  # build Next.js
│   ├── backend.Dockerfile                   # build Fastify
│   ├── docker-compose.yml                   # environnement dev
│   └── docker-compose.prod.yml              # environnement production
│
│
├── docs/
│   ├── architecture.md                      # système global
│   ├── api.md                               # endpoints backend
│   └── conventions.md                       # règles strictes dev
│
└── README.md
```

---

## Règles critiques

**❌ Interdit**
- Logique métier dans le frontend
- Duplication de types frontend/backend
- Hooks métier dans le backend
- CSS dispersé sans système

**✅ Obligatoire**
- Backend = source unique de vérité
- `shared/` = contrats API stricts
- Frontend = UI pure
- 1 feature = 1 module backend

---

## Prérequis

- [Node.js](https://nodejs.org) v18+
- [Docker](https://docker.com) & Docker Compose
- [PostgreSQL](https://postgresql.org) (ou via Docker)
- [Redis](https://redis.io) (ou via Docker)

---

## Installation

### 1. Cloner le dépôt

```bash
git clone https://github.com/ton-username/orion-industries.git
cd orion-industries
```

### 2. Variables d'environnement

```bash
# Backend
cp backend/.env.example backend/.env

# Frontend
cp frontend/.env.example frontend/.env.local
```

Remplir les variables dans chaque fichier `.env`.

### 3. Lancer la base de données (Docker)

```bash
cd docker
docker-compose up -d
```

### 4. Backend

```bash
cd backend
npm install
npx prisma migrate dev
npx prisma db seed
npm run dev
```

### 5. Frontend

```bash
cd frontend
npm install
npm run dev
```

L'application est disponible sur **http://localhost:3000**  
L'API tourne sur **http://localhost:4000**

---

## Scripts disponibles

### Frontend

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production |
| `npm run lint` | Vérification ESLint |

### Backend

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement (tsx watch) |
| `npm run build` | Compilation TypeScript |
| `npm run start` | Serveur de production |
| `npx prisma studio` | Interface visuelle base de données |
| `npx prisma migrate dev` | Appliquer les migrations |
| `npx prisma db seed` | Peupler la base de données |

---

## Fonctionnalités

### Vitrine
- Page d'accueil — présentation entreprise, domaines, valeurs, projets
- Pages projets — détail des projets ORION
- À propos — histoire et équipe
- Contact — formulaire de contact

### Boutique
- Catalogue produits avec filtres et recherche
- Fiches produits avec galerie et avis
- Panier persistant
- Paiement Stripe sécurisé
- Confirmation de commande par email

### Espace client
- Inscription / Connexion (JWT + Refresh Token)
- 2FA (double authentification)
- Historique des commandes
- Paramètres du compte
- Centre de notifications

### Support
- Système de tickets
- Chat en temps réel (SSE)
- Notifications push, email et SMS

### Administration
- Dashboard analytique
- Gestion produits (CRUD)
- Gestion commandes
- Gestion clients
- Gestion des tickets support

---

## Variables d'environnement

### `backend/.env`

```env
NODE_ENV=development
PORT=4000
DATABASE_URL=postgresql://postgres:password@localhost:5432/orion_db
REDIS_URL=redis://localhost:6379
JWT_SECRET=...
JWT_REFRESH_SECRET=...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
SMTP_HOST=...
SMTP_PORT=587
SMTP_USER=...
SMTP_PASS=...
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
VAPID_PUBLIC_KEY=...
VAPID_PRIVATE_KEY=...
R2_ACCOUNT_ID=...
R2_ACCESS_KEY_ID=...
R2_SECRET_ACCESS_KEY=...
R2_BUCKET_NAME=orion-assets
FRONTEND_URL=http://localhost:3000
```

### `frontend/.env.local`

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_VAPID_PUBLIC_KEY=...
```

---

## Déploiement

### Générer les clés VAPID

```bash
cd backend
npx web-push generate-vapid-keys
```

### Production (Docker)

```bash
cd docker
docker-compose -f docker-compose.prod.yml up -d
```

---

## Licence

© 2025 O.R.I.O.N Industries — Tous droits réservés.  
Ce projet est propriétaire et confidentiel. Toute reproduction ou distribution est interdite sans autorisation écrite.

---

*Développé par O.R.I.O.N Industries*