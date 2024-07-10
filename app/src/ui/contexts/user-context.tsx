'use client'

import { createContext, ReactNode, useContext } from 'react'

interface UserContextValue {
  user: {
    username: string | null
    email: string
  }
}

const UserContext = createContext<UserContextValue>({} as UserContextValue)

interface UserContextProviderProps {
  children: ReactNode
  user: UserContextValue['user']
}

export const UserContextProvider = (props: UserContextProviderProps) => {
  const { children, user } = props

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}
