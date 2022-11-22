import { ComponentProps, ElementType, forwardRef, ReactElement } from 'react'

import { StyledButton, ButtonLabel, ButtonLoading, Spinner } from './styles'

export interface ButtonProps extends ComponentProps<typeof StyledButton> {
  as?: ElementType
  leftIcon?: ReactElement
  rightIcon?: ReactElement
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, leftIcon, rightIcon, loading, disabled, ...props },
    forwardedRef,
  ) => {
    return (
      <StyledButton
        loading={loading}
        disabled={disabled}
        ref={forwardedRef}
        {...props}
      >
        <ButtonLabel>
          {leftIcon}
          <span>{children}</span>
          {rightIcon}
        </ButtonLabel>
        {loading && (
          <ButtonLoading>
            <Spinner />
          </ButtonLoading>
        )}
      </StyledButton>
    )
  },
)

Button.displayName = 'Button'
