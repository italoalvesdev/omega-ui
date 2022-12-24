import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@omega-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    family: 'regular',
    color: 'black',
    weight: 'regular',
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
      options: ['white', 'black'],
      control: {
        type: 'select',
        labels: {
          white: '$white',
          black: '$black',
        },
      },
    },
    weight: {
      options: ['regular', 'medium', 'bold'],
      control: {
        type: 'select',
        labels: {
          regular: '$regular',
          medium: '$medium',
          bold: '$bold',
        },
      },
    },
    family: {
      options: ['regular', 'title'],
      control: {
        type: 'select',
        labels: {
          regular: '$regular',
          title: '$secondary',
        },
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
