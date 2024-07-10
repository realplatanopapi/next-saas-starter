import { cleanEnv, str } from 'envalid'

export const clientConfig = cleanEnv(
  {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NODE_ENV: process.env.NODE_ENV,
  },
  {
    NEXT_PUBLIC_APP_URL: str(),
    NODE_ENV: str({
      choices: ['development', 'production', 'test'],
    }),
  },
)
