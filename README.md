# post pilot

Plan. Create. Schedule. Grow — with AI.

## Monorepo structure
- `apps/web`: Next.js App Router marketing + product frontend.
- `apps/api`: NestJS API with modular architecture.
- `packages/ui`: shared UI primitives.
- `packages/utils`: shared typed contracts and constants.
- `packages/config`: shared TypeScript config.
- `docs`: architecture, API contracts, prompt strategy.

## Quick start
1. Copy `.env.example` values into local `.env` files as needed.
2. Install deps:
   ```bash
   npm install
   ```
3. Start infrastructure:
   ```bash
   docker compose up -d postgres redis
   ```
4. Run Prisma generate/migrations:
   ```bash
   npm run prisma:generate -w apps/api
   npm run prisma:migrate -w apps/api
   ```
5. Run apps:
   ```bash
   npm run dev -w apps/web
   npm run dev -w apps/api
   ```

## Architecture highlights
- Feature-based organization by domain.
- Controller → Service → Repository separation in API.
- BullMQ queue for scheduling with retries.
- Prisma/PostgreSQL persistence.
- Central prompt templates in `docs/prompts.json`.

## CI/CD
- PR CI runs install, type-check, lint, tests, and build.
- Main-branch CD builds Docker images and applies migrations.

## Deployment notes
- Build via Dockerfiles under `apps/web` and `apps/api`.
- Provision Postgres + Redis managed services.
- Use secure secret managers for API keys and Stripe tokens.
