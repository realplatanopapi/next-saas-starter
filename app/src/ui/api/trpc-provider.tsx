'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import React, { PropsWithChildren, useMemo } from 'react'
import superjson from 'superjson'

import { trpc } from './trpc'

export const TRPCProvider = (props: PropsWithChildren) => {
  const { children } = props
  const queryClient = useMemo(() => new QueryClient(), [])
  const trpcClient = useMemo(
    () =>
      trpc.createClient({
        links: [
          httpBatchLink({
            url: '/api/trpc',
            transformer: superjson,
          }),
        ],
      }),
    [],
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}
