import { ChakraTheme, extendTheme } from '@chakra-ui/react'

import { buttonTheme } from '@/ui/theme/components/button-theme'
import { headingTheme } from '@/ui/theme/components/heading-theme'
import { font } from '@/ui/theme/font'

const themeOverrides = {
  /**
   * Colors generated from: https://palette.saas-ui.dev/
   */
  colors: {
    black: '#1c191a',
    gray: {
      '50': '#faf9fa',
      '100': '#f1f1f1',
      '200': '#e8e7e7',
      '300': '#d4d4d4',
      '400': '#aeacad',
      '500': '#807e7f',
      '600': '#565455',
      '700': '#393637',
      '800': '#221f21',
      '900': '#1c191a',
    },
    purple: {
      '50': '#f8f6fb',
      '100': '#e4dbef',
      '200': '#cfc1e4',
      '300': '#b29bd3',
      '400': '#9e81c7',
      '500': '#8460b8',
      '600': '#7348ae',
      '700': '#6132a4',
      '800': '#511d9b',
      '900': '#3d117a',
    },
    pink: {
      '50': '#fbf6f8',
      '100': '#efdce4',
      '200': '#e3c0ce',
      '300': '#d29ab2',
      '400': '#c6809d',
      '500': '#b75d83',
      '600': '#ac446f',
      '700': '#9d2356',
      '800': '#811240',
      '900': '#5f0d2f',
    },
    red: {
      '50': '#fbf6f6',
      '100': '#efdcda',
      '200': '#e0beba',
      '300': '#cf9893',
      '400': '#c5837d',
      '500': '#b8665e',
      '600': '#ab4c43',
      '700': '#9c2b21',
      '800': '#8a1d13',
      '900': '#65150e',
    },
    orange: {
      '50': '#fcfaf8',
      '100': '#f3ece3',
      '200': '#e5d7c3',
      '300': '#d1b896',
      '400': '#be9d6e',
      '500': '#ae8449',
      '600': '#9e6b24',
      '700': '#825412',
      '800': '#66420e',
      '900': '#54360c',
    },
    yellow: {
      '50': '#fefefd',
      '100': '#faf9f3',
      '200': '#efeedc',
      '300': '#e3e0c1',
      '400': '#d2ce9b',
      '500': '#b2aa52',
      '600': '#938814',
      '700': '#726a10',
      '800': '#564f0c',
      '900': '#47420a',
    },
    green: {
      '50': '#f8fcfa',
      '100': '#dbefe7',
      '200': '#b6decd',
      '300': '#8bcbb1',
      '400': '#5db792',
      '500': '#2ca171',
      '600': '#138757',
      '700': '#0f6943',
      '800': '#0c5637',
      '900': '#0a472d',
    },
    teal: {
      '50': '#f6fbfb',
      '100': '#d8ecee',
      '200': '#b7dbdf',
      '300': '#8ec8cd',
      '400': '#5aaeb5',
      '500': '#2a96a0',
      '600': '#127b84',
      '700': '#0e5f67',
      '800': '#0c5056',
      '900': '#0a4147',
    },
    cyan: {
      '50': '#f7fafb',
      '100': '#deecf0',
      '200': '#cfe3ea',
      '300': '#bed9e2',
      '400': '#8cbccc',
      '500': '#74aec1',
      '600': '#599fb5',
      '700': '#2d85a2',
      '800': '#136e8b',
      '900': '#0f556c',
    },
    blue: {
      '50': '#f3f6fa',
      '100': '#d5deec',
      '200': '#b6c7df',
      '300': '#95add0',
      '400': '#7695c2',
      '500': '#5a80b6',
      '600': '#3e6ba9',
      '700': '#1b4f99',
      '800': '#124082',
      '900': '#0f356a',
    },
    primary: {
      '50': '#f7f7fb',
      '100': '#dedff0',
      '200': '#c1c3e3',
      '300': '#9ea2d4',
      '400': '#8b90cb',
      '500': '#7177c0',
      '600': '#5a61b6',
      '700': '#424aab',
      '800': '#313aa4',
      '900': '#151f96',
    },
  },
  components: {
    Button: buttonTheme,
    Heading: headingTheme,
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    body: font.style.fontFamily,
    heading: font.style.fontFamily,
  },
  fontWeights: {
    medium: 500,
    bold: 600,
  },
  styles: {
    global: {
      html: {
        fontSize: '15px',
      },
    },
  },
  textStyles: {
    subtle: {
      color: 'gray.500',
    },
  },
} satisfies Partial<ChakraTheme>

export const theme = extendTheme(themeOverrides) as ChakraTheme &
  typeof themeOverrides
