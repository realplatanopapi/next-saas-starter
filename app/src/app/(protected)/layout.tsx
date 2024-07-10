import { PropsWithChildren } from 'react'

import { UserContextProvider } from '@/ui/contexts/user-context'
import { getUserOrRedirect } from '@/util/auth'

export default async function ProtectedLayout(props: PropsWithChildren) {
  const user = await getUserOrRedirect()

  return <UserContextProvider user={user}>{props.children}</UserContextProvider>
}
