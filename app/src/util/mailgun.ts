import Mailgun from 'mailgun.js'

import { serverConfig } from '@/config/server-config'

export const mailgun = new Mailgun(FormData).client({
  username: 'api',
  key: serverConfig.MAILGUN_API_KEY,
})
