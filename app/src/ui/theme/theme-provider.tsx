'use client'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

import { theme } from '@/ui/theme/theme'

export const ThemeProvider = (props: PropsWithChildren) => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>{props.children}</ChakraProvider>
    </>
  )
}
