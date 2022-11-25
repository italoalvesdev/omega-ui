import { styled, keyframes } from '../../styles'

const spinning = keyframes({
  '0%': { transform: 'rotate(0turn)' },
  '100%': { transform: 'rotate(1turn)' },
})

export const ButtonLabel = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:has(svg)': {
    gap: '$3',
  },
})

export const StyledButton = styled('button', {
  all: 'unset',

  position: 'relative',
  borderRadius: '$xs',
  fontWeight: '$bold',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  transition: 'background 0.2s ease 0s, box-shadow 0.2s ease 0s',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: '50%',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$primary-mid',

        '&:not(:disabled):hover': {
          background: '$primary-dark',
        },
      },

      secondary: {
        color: '$white',
        background: '$secondary-dark',

        '&:not(:disabled):hover': {
          background: '$secondary-mid',
        },
      },
    },

    size: {
      sm: {
        height: 32,
        fontSize: '$sm',
      },
      md: {
        height: 40,
        fontSize: '$md',
      },
      lg: {
        height: 48,
        fontSize: '$lg',
      },
    },

    outlined: {
      true: {
        transitionProperty:
          'color, background-color, border-color, text-decoration-color, fill, stroke',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '0.2s',
      },
    },

    full: {
      true: {
        display: 'block',
        width: '100%',
      },
    },

    loading: {
      true: {
        [`& ${ButtonLabel}`]: {
          visibility: 'hidden',
        },
      },
    },
  },

  compoundVariants: [
    {
      variant: 'primary',
      outlined: true,
      css: {
        background: 'transparent',
        color: '$primary-mid',
        border: '2px solid $primary-mid',

        '&:not(:disabled):hover': {
          background: '$primary-dark',
          color: '$white',
        },
      },
    },
    {
      variant: 'secondary',
      outlined: true,
      css: {
        background: 'transparent',
        color: '$secondary-dark',
        border: '2px solid $secondary-dark',

        '&:not(:disabled):hover': {
          background: '$secondary-dark',
          color: '$white',
        },
      },
    },
  ],

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export const ButtonLoading = styled('span', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '0px',
  left: '0px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Spinner = styled('span', {
  width: '16px',
  height: '16px',

  display: 'block',
  position: 'relative',
  boxSizing: 'border-box',

  $$borderWidth: '2px',
  $$baseColor: '$colors$white',

  '&::before, &::after': {
    content: '',
    boxSizing: 'inherit',
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',

    borderWidth: '$$borderWidth',
    borderStyle: 'solid',
    borderRadius: '$full',
    borderTopColor: '$$baseColor',
    borderLeftColor: '$$baseColor',
    borderBottomColor: '$$baseColor',
    borderRightColor: 'transparent',

    animation: `0.6s linear 0s infinite normal none ${spinning}`,
  },

  '&::after': {
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: '$$baseColor',
    opacity: 0.5,
  },
})
