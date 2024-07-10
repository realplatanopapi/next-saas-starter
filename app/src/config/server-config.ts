import { cleanEnv, str } from 'envalid'

import { clientConfig } from '@/config/client-config'

export const serverConfig = {
  ...clientConfig,
  ...cleanEnv(process.env, {
    DATABASE_URL: str(),
    MAILGUN_API_KEY: str(),
    MAILGUN_DOMAIN: str(),
  }),
}
