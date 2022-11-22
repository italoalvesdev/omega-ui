import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@omega/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quos perspiciatis minus error? Eaque, laboriosam impedit natus autem quaerat labore minus! Nisi, saepe error! Aliquid voluptatum corrupti voluptates libero sit?',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    color: {
      options: ['$white', '$black'],
      mapping: {
        $white: 'white',
        $black: 'black',
      },
      control: {
        type: 'select',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
