import 'reflect-metadata'

import { NextRequest, NextResponse } from 'next/server'
import { container } from 'tsyringe'

import { AuthService } from '@/api/services/auth-service'
import { clientConfig } from '@/config/client-config'
import { TokenExpiredError } from '@/errors/token-expired-error'
import { routes } from '@/routes'
import { lucia } from '@/util/lucia'

export const GET = async (request: NextRequest) => {
  const token = request.nextUrl.searchParams.get('token')
  if (!token) {
    return NextResponse.redirect(new URL(routes.auth()))
  }

  const authService = container.resolve(AuthService)
  let user
  try {
    user = await authService.verifyEmailToken(token)
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return NextResponse.redirect(
        new URL(
          routes.auth({
            error: 'token_expired',
          }),
          clientConfig.NEXT_PUBLIC_APP_URL,
        ),
      )
    } else {
      return NextResponse.redirect(
        new URL(
          routes.auth({
            error: 'unknown',
          }),
          clientConfig.NEXT_PUBLIC_APP_URL,
        ),
      )
    }
  }

  await lucia.invalidateUserSessions(user.id)
  const session = await lucia.createSession(user.id, {})
  const sessionCookie = lucia.createSessionCookie(session.id)

  return NextResponse.redirect(
    new URL(routes.dashboard(), clientConfig.NEXT_PUBLIC_APP_URL),
    {
      headers: {
        'Set-Cookie': sessionCookie.serialize(),
      },
    },
  )
}
