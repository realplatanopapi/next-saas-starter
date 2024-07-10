import { PrismaClient } from '@prisma/client'

import { serverConfig } from '@/config/server-config'

const createClient = () => {
  return new PrismaClient()
}

declare const globalThis: {
  dbGlobal: ReturnType<typeof createClient>
} & typeof global

export const db = globalThis.dbGlobal ?? createClient()

if (serverConfig.NODE_ENV !== 'production') globalThis.dbGlobal = db
