import type {
  ComponentProps,
  ElementRef,
  ElementType,
  ForwardRefRenderFunction,
  ReactElement,
} from 'react'
import { forwardRef } from 'react'

import { StyledButton, ButtonLabel, ButtonLoading, Spinner } from './styles'

export type ButtonProps = ComponentProps<typeof StyledButton> & {
  as?: ElementType
  leftIcon?: ReactElement
  rightIcon?: ReactElement
  loading?: boolean
  spinnerColor?: 'black' | 'white'
}

const ButtonBase: ForwardRefRenderFunction<
  ElementRef<typeof StyledButton>,
  ButtonProps
> = (
  {
    children,
    leftIcon,
    rightIcon,
    spinnerColor = 'white',
    loading,
    disabled,
    ...props
  },
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
          <Spinner css={{ '---baseColor': spinnerColor }} />
        </ButtonLoading>
      )}
    </StyledButton>
  )
}

export const Button = forwardRef(ButtonBase)
