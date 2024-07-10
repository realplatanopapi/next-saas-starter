import { redirect } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'

import { serverConfig } from '@/config/server-config'
import { routes } from '@/routes'
import { lucia } from '@/util/lucia'

export async function GET(request: NextRequest) {
  const sessionCookie = request.cookies.get(lucia.sessionCookieName)
  if (!sessionCookie) return redirect(routes.auth())

  await lucia.invalidateSession(sessionCookie.value)

  const blankCookie = lucia.createBlankSessionCookie()
  const redirectUrl = new URL(routes.auth(), serverConfig.NEXT_PUBLIC_APP_URL)
  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-Cookie': blankCookie.serialize(),
    },
  })
}
