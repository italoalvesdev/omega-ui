import type { Meta, Story, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@omega-ui/react'
import { ArrowRight, ArrowLeft, PlusCircle } from 'phosphor-react'

const iconArgTypes = {
  options: ['noIcon', 'ArrowRight', 'ArrowLeft', 'PlusCircle'],
  mapping: {
    noIcon: null,
    ArrowRight: <ArrowRight size={16} />,
    ArrowLeft: <ArrowLeft size={16} />,
    PlusCircle: <PlusCircle size={16} />,
  },
  control: {
    type: 'select',
    labels: {
      noIcon: 'No icon',
    },
  },
}

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
    outlined: false,
    full: false,
    loading: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    outlined: {
      control: {
        type: 'boolean',
      },
    },
    full: {
      control: {
        type: 'boolean',
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
    leftIcon: iconArgTypes,
    rightIcon: iconArgTypes,
    onClick: { action: 'clicked' },
  },
} as Meta<ButtonProps>

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}

export const Outlined: StoryObj<ButtonProps> = {
  args: {
    outlined: true,
  },
}
