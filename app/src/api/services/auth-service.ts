import { User } from '@prisma/client'
import { generateIdFromEntropySize } from 'lucia'
import { createDate, isWithinExpirationDate, TimeSpan } from 'oslo'
import { singleton } from 'tsyringe'

import { TokenExpiredError } from '@/errors/token-expired-error'
import { db } from '@/util/db'

@singleton()
export class AuthService {
  async createEmailToken(user: User) {
    const token = generateIdFromEntropySize(25)
    const expiresAt = createDate(new TimeSpan(10, 'm'))

    return await db.$transaction(async ($t) => {
      await $t.emailAuthenticationToken.deleteMany({
        where: {
          userId: user.id,
        },
      })

      return $t.emailAuthenticationToken.create({
        data: {
          email: user.email,
          expiresAt,
          token,
          userId: user.id,
        },
      })
    })
  }

  verifyEmailToken(token: string) {
    return db.$transaction(async ($t) => {
      const tokenRecord = await $t.emailAuthenticationToken.findFirst({
        include: {
          user: true,
        },
        where: {
          token,
        },
      })
      if (!tokenRecord) {
        throw new TokenExpiredError()
      } else if (!isWithinExpirationDate(tokenRecord?.expiresAt)) {
        throw new TokenExpiredError()
      }

      await $t.emailAuthenticationToken.delete({
        where: {
          id: tokenRecord.id,
        },
      })

      const user = await $t.user.update({
        where: {
          id: tokenRecord.userId,
        },
        data: {
          emailVerifiedAt: new Date(),
        },
      })

      return user
    })
  }
}
