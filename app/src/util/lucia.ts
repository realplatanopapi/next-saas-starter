import { PrismaAdapter } from '@lucia-auth/adapter-prisma'
import { User } from '@prisma/client'
import { Lucia } from 'lucia'

import { serverConfig } from '@/config/server-config'
import { db } from '@/util/db'

const adapter = new PrismaAdapter(db.session, db.user)

export const lucia = new Lucia(adapter, {
  getUserAttributes: (user) => ({
    ...user,
  }),
  sessionCookie: {
    attributes: {
      secure: serverConfig.NODE_ENV === 'production',
    },
  },
})

declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia
    DatabaseUserAttributes: User
  }
}
