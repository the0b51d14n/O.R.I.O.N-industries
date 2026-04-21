# O.R.I.O.N Industries — Site Web

> Plateforme web officielle d'**O.R.I.O.N Industries** — entreprise technologique multidisciplinaire spécialisée en informatique, électronique, ingénierie, domotique et IoT.

---

## Stack technique

| Couche | Technologie |
|---|---|
| Frontend | Next.js 16 (App Router) + TypeScript |
| Styling | Tailwind CSS |
| Auth | NextAuth.js |
| Backend | Fastify + TypeScript |
| Base de données | PostgreSQL + Prisma ORM |
| Cache | Redis (ioredis) |
| Paiement | Stripe |
| Stockage | Cloudflare R2 |
| Email | Nodemailer |
| SMS | Twilio |
| Push | Web Push (VAPID) |
| PDF | Puppeteer |
| Logs | Pino |
| Conteneurs | Docker + Nginx |

---

## Structure du projet

```
orion-industries/
├── frontend/          ← Next.js App Router
├── backend/           ← API Fastify
└── docker/            ← Docker Compose + Nginx
```

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