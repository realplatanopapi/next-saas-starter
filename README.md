# Next SaaS Template

My personal template for building full-stack SaaS apps with Next.js and TypeScript.

## Stack

- Next.js
- Prisma
- trpc
- Chakra UI
- Docker Compose, for external services like Postgres, Redis, Elasticsearch, etc
- Fly.io for hosting

## Setup

### Development

In one tab, spin up Postgres:

```shell
docker compose up
```

In another tab, setup the app:

```shell
cd app
pnpm install
pnpm db:migrate
```

Then, start the development server:

```shell
pnpm dev
```

The app should be available at http://localhost:3000.

### Setting up email authentication

This app is setup to authenticate users with a magic link that gets sent via email by way of Mailgun.
You'll need to replace the values of the `MAILGUN_*` variables in `.env` to get that to work.
