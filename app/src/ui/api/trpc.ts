import { createTRPCReact } from '@trpc/react-query'

import type { AppRouter } from '@/api/trpc/app-router'

export const trpc = createTRPCReact<AppRouter>()
