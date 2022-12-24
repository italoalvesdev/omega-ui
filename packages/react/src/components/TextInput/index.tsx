import {
  ComponentProps,
  ElementRef,
  forwardRef,
  ForwardRefRenderFunction,
  MouseEventHandler,
  ReactElement,
} from 'react'
import { Text, TextProps } from '../Text'

import {
  StyledTextInputWrapper,
  StyledTextInputLabel,
  StyledTextInput,
  StyledTextInputWithLabelWrapper,
  IconWrapper,
} from './styles'

export type TextInputProps = ComponentProps<typeof StyledTextInput> & {
  leftIcon?: ReactElement
  rightIcon?: ReactElement
  label?: string
  labelSize?: Pick<TextProps, 'size'>['size']
  labelWeight?: Pick<TextProps, 'weight'>['weight']
  labelFamily?: Pick<TextProps, 'family'>['family']
  onRightIconClick?: MouseEventHandler<HTMLAnchorElement>
  onLeftIconClick?: MouseEventHandler<HTMLAnchorElement>
}

const TextInputBase: ForwardRefRenderFunction<
  ElementRef<typeof StyledTextInput>,
  TextInputProps
> = (
  {
    leftIcon,
    rightIcon,
    label,
    labelFamily = 'regular',
    labelSize = 'sm',
    labelWeight = 'regular',
    onRightIconClick,
    onLeftIconClick,
    ...props
  },
  forwardedRef,
) => {
  return (
    <StyledTextInputWrapper disabled={props.disabled} required={props.required}>
      {label ? (
        <StyledTextInputLabel>
          <Text family={labelFamily} weight={labelWeight} size={labelSize}>
            {label}
          </Text>
          <StyledTextInputWithLabelWrapper>
            {!!leftIcon && (
              <IconWrapper
                as={onLeftIconClick ? 'a' : 'div'}
                position={'left'}
                variant={props.variant}
                onClick={onLeftIconClick}
                clickable={!!onLeftIconClick}
              >
                {leftIcon}
              </IconWrapper>
            )}
            <StyledTextInput
              ref={forwardedRef}
              hasLeftIcon={!!leftIcon}
              hasRightIcon={!!rightIcon}
              {...props}
            />
            {!!rightIcon && (
              <IconWrapper
                as={onRightIconClick ? 'a' : 'div'}
                position={'right'}
                variant={props.variant}
                onClick={onRightIconClick}
                clickable={!!onRightIconClick}
              >
                {rightIcon}
              </IconWrapper>
            )}
          </StyledTextInputWithLabelWrapper>
        </StyledTextInputLabel>
      ) : (
        <>
          {!!leftIcon && (
            <IconWrapper position={'left'} variant={props.variant}>
              {leftIcon}
            </IconWrapper>
          )}
          <StyledTextInput
            ref={forwardedRef}
            hasLeftIcon={!!leftIcon}
            hasRightIcon={!!rightIcon}
            {...props}
          />
          {!!rightIcon && (
            <IconWrapper position={'right'} variant={props.variant}>
              {rightIcon}
            </IconWrapper>
          )}
        </>
      )}
    </StyledTextInputWrapper>
  )
}

export const TextInput = forwardRef(TextInputBase)
