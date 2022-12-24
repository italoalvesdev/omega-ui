import type { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Text = styled('p', {
  lineHeight: '$base',
  margin: 0,

  maxWidth: '300px',

  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '7xl': { fontSize: '$7xl' },
      '8xl': { fontSize: '$8xl' },
      '9xl': { fontSize: '$9xl' },
    },

    family: {
      regular: {
        fontFamily: '$default',
      },
      secondary: {
        fontFamily: '$title',
      },
    },

    weight: {
      regular: {
        fontWeight: '$regular',
      },
      medium: {
        fontWeight: '$medium',
      },
      bold: {
        fontWeight: '$bold',
      },
    },

    color: {
      white: {
        color: '$white',
      },
      black: {
        color: '$black',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    family: 'regular',
    weight: 'regular',
    color: 'white',
  },
})

export type TextProps = ComponentProps<typeof Text> & {
  as?: ElementType
}
