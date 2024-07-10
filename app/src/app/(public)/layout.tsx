import { redirect } from 'next/navigation'
import { PropsWithChildren } from 'react'

import { routes } from '@/routes'
import { getUser } from '@/util/auth'

export default async function PublicLayout(props: PropsWithChildren) {
  const user = await getUser()
  if (user) return redirect(routes.dashboard())

  return <>{props.children}</>
}
