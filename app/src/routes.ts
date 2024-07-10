import { clientConfig } from '@/config/client-config'

export const routes = {
  auth: (query?: { error: 'token_expired' | 'unknown' }) => {
    const url = new URL('/auth', clientConfig.NEXT_PUBLIC_APP_URL)
    if (query?.error) {
      url.searchParams.set('error', query.error)
    }

    return url.toString()
  },
  authEmailCallback: () => '/auth/email',
  dashboard: () => '/dashboard',
  logout: () => '/auth/logout',
}
