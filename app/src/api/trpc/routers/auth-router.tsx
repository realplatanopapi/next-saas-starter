import { container } from 'tsyringe'
import { z } from 'zod'

import { AuthService } from '@/api/services/auth-service'
import { UserService } from '@/api/services/user-service'
import { publicProcedure, router } from '@/api/trpc/trpc'
import { serverConfig } from '@/config/server-config'
import AuthTemplate from '@/email/templates/auth-template'
import { renderEmail } from '@/email/util/render-email'
import { routes } from '@/routes'
import { mailgun } from '@/util/mailgun'

export const authRouter = router({
  sendAuthEmail: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
      }),
    )
    .mutation(async ({ input }) => {
      const userService = container.resolve(UserService)
      const authService = container.resolve(AuthService)
      const user = await userService.findOrCreateWithEmail(input.email)
      const token = await authService.createEmailToken(user)
      const appUrl = serverConfig.NEXT_PUBLIC_APP_URL
      const loginUrl = new URL(routes.authEmailCallback(), appUrl)
      loginUrl.searchParams.set('token', token.token)

      const { html, text } = await renderEmail(
        <AuthTemplate
          appUrl={new URL(serverConfig.NEXT_PUBLIC_APP_URL)}
          loginUrl={loginUrl}
        />,
      )

      await mailgun.messages.create(serverConfig.MAILGUN_DOMAIN, {
        html,
        text,
        subject: 'Login to SaaS',
        from: `SaaS <noreply@${serverConfig.MAILGUN_API_KEY}>`,
        to: user.email,
      })

      return true
    }),
})
