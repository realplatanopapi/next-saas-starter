import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'

import { TRPCProvider } from '@/ui/api/trpc-provider'
import { ThemeProvider } from '@/ui/theme/theme-provider'

export const metadata: Metadata = {
  title: 'Next SaaS Starter',
}

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <TRPCProvider>{props.children}</TRPCProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
