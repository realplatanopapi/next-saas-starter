import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { routes } from '@/routes'
import { lucia } from '@/util/lucia'

export const getUser = async () => {
  const sessionCookie = cookies().get(lucia.sessionCookieName)
  const session = sessionCookie
    ? await lucia.validateSession(sessionCookie.value)
    : null

  return session?.user
}

export const getUserOrRedirect = async () => {
  const user = await getUser()
  if (!user) {
    return redirect(routes.auth())
  }

  return user
}
