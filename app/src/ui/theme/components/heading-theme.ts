import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = defineStyle({
  fontFamily: 'heading',
  fontWeight: 'bold',
})

const sizes = {
  '4xl': defineStyle({
    fontSize: '6xl',
    lineHeight: 1,
  }),
  '3xl': defineStyle({
    fontSize: '5xl',
    lineHeight: 1,
  }),
  '2xl': defineStyle({
    fontSize: '4xl',
    lineHeight: [1.2, null, 1],
  }),
  xl: defineStyle({
    fontSize: '3xl',
    lineHeight: [1.33, null, 1.2],
  }),
  lg: defineStyle({
    fontSize: '2xl',
    lineHeight: [1.33, null, 1.2],
  }),
  md: defineStyle({
    fontSize: 'xl',
    lineHeight: 1.2,
  }),
  sm: defineStyle({
    fontSize: 'md',
    lineHeight: 1.2,
  }),
  xs: defineStyle({
    fontSize: 'sm',
    lineHeight: 1.2,
  }),
}

export const headingTheme = defineStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'lg',
  },
})
