# Next SaaS Starter

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

The app should be available at http://localhost:3000, where you should see something like this:

<img width="420" alt="Screenshot 2024-07-09 at 11 54 24 PM" src="https://github.com/realplatanopapi/next-saas-starter/assets/6979137/2d5a3641-aa3c-4243-94db-11f67908d530">

### Setting up email authentication

This app is setup to authenticate users with a magic link that gets sent via email by way of Mailgun.
You'll need to replace the values of the `MAILGUN_*` variables in `.env` to get that to work.
