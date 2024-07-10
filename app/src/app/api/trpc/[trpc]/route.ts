import 'reflect-metadata'

import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

import { appRouter } from '@/api/trpc/app-router'

const handler = (req: Request) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
  })
}

export const GET = handler
export const POST = handler
