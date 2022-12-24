import { styled } from '../../styles'

export const IconWrapper = styled('div', {
  position: 'absolute',
  top: '0',

  width: '$12',
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  transition: 'color 0.2s ease 0s',

  variants: {
    variant: {
      light: {
        color: '$placeholder',
      },
      dark: {
        color: '$color-background-light',
      },
    },
    position: {
      left: {
        left: '2px',
      },
      right: {
        right: '2px',
      },
    },
    clickable: {
      true: {
        width: 'auto',
        height: 'auto',

        top: '50%',

        transform: 'translateY(-50%)',
      },
    },
  },

  compoundVariants: [
    {
      position: 'left',
      clickable: true,
      css: {
        left: '16px',
      },
    },
    {
      position: 'right',
      clickable: true,
      css: {
        right: '16px',
      },
    },
  ],
})

export const StyledTextInputWrapper = styled('div', {
  width: '100%',
  maxWidth: '300px',

  position: 'relative',
  display: 'flex',

  '&:focus-within input': {
    borderColor: '$primary-mid',
  },

  [`&:focus-within ${IconWrapper}`]: {
    color: '$primary-mid',
  },

  svg: {
    cursor: 'pointer',
  },

  variants: {
    disabled: {
      true: {
        opacity: 0.5,

        input: {
          cursor: 'default',
        },
      },
    },

    required: {
      true: {
        'p::after': {
          content: '*',
          color: '$danger-mid',
        },
      },
    },
  },

  defaultVariants: {
    required: false,
  },
})

export const StyledTextInputWithLabelWrapper = styled(
  'div',
  StyledTextInputWrapper,
)

export const StyledTextInputLabel = styled('label', {
  width: '100%',

  fontFamily: '$default',
  fontSize: '$md',

  display: 'flex',
  flexDirection: 'column',
})

export const StyledTextInput = styled('input', {
  all: 'unset',
  boxSizing: 'border-box',
  outline: '0px',

  width: '100%',
  height: '$12',

  padding: '0 $4',
  border: '2px solid transparent',
  borderRadius: '$sm',

  fontFamily: '$default',
  fontSize: '$md',

  transition: 'border-color 0.2s ease 0s',

  cursor: 'text',

  variants: {
    variant: {
      light: {
        backgroundColor: '$color-background-light',
        color: '$dark-text',

        '&::placeholder': {
          color: '$placeholder',
        },
      },
      dark: {
        backgroundColor: '$color-background-dark',
        color: '$text-title',

        '&::placeholder': {
          color: '$color-background-light',
        },
      },
    },
    hasLeftIcon: {
      true: {
        paddingLeft: '$12',
      },
    },
    hasRightIcon: {
      true: {
        paddingRight: '$12',
      },
    },
    textCenter: {
      true: {
        textAlign: 'center',
      },
    },
    error: {
      true: {
        borderColor: '$danger-dark',
      },
    },
  },

  defaultVariants: {
    variant: 'light',
    textCenter: false,
  },
})
