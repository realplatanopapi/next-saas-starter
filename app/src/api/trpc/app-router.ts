import { authRouter } from '@/api/trpc/routers/auth-router'
import { publicProcedure, router } from '@/api/trpc/trpc'

export const appRouter = router({
  auth: authRouter,
  health: publicProcedure.query(() => 'ok'),
})

export type AppRouter = typeof appRouter
