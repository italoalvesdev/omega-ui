import type { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Heading = styled('h2', {
  lineHeight: '$shorter',
  margin: 0,

  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$3xl' },
      '2xl': { fontSize: '$4xl' },
      '3xl': { fontSize: '$5xl' },
      '4xl': { fontSize: '$6xl' },
      '5xl': { fontSize: '$7xl' },
      '6xl': { fontSize: '$8xl' },
      '7xl': { fontSize: '$9xl' },
    },

    family: {
      regular: {
        fontFamily: '$default',
      },
      secondary: {
        fontFamily: '$title',
      },
    },

    color: {
      black: { color: '$black' },
      white: { color: '$white' },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'black',
    family: 'regular',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}
