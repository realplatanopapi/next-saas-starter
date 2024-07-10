import { singleton } from 'tsyringe'

import { db } from '@/util/db'

@singleton()
export class UserService {
  async findOrCreateWithEmail(email: string) {
    const existingUser = await db.user.findFirst({
      where: {
        email,
      },
    })
    if (existingUser) return existingUser

    return db.user.create({
      data: {
        email,
      },
    })
  }
}
