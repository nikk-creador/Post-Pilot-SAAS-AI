# post pilot Architecture

## Overview
post pilot is a monorepo SaaS platform with a Next.js web app and NestJS API. It uses PostgreSQL for primary state, Redis + BullMQ for scheduling, and external LLM providers for AI generation.

## Layers
- **UI layer** (`apps/web`): App Router pages, feature modules, reusable components.
- **API layer** (`apps/api`): controllers, services, repositories with NestJS DI.
- **Data layer**: Prisma models for users, posts, and audit logs.
- **Async layer**: BullMQ queue + worker for scheduled publishing with retry.
- **Shared packages**: typed contracts, constants, reusable UI components.

## Security and SaaS practices
- Environment-based configuration via `.env.example`.
- No secrets in source control.
- Plan gates through `User.plan` and post-limit constants.
- Centralized error handling with global exception filter.
