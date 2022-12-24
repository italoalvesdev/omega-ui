import type { Meta, Story, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps } from '@omega-ui/react'
import { Eye, EyeSlash } from 'phosphor-react'

const iconArgTypes = {
  options: ['noIcon', 'Eye', 'EyeSlash'],
  mapping: {
    noIcon: null,
    Eye: <Eye size={16} />,
    EyeSlash: <EyeSlash size={16} />,
  },
  control: {
    type: 'select',
    labels: {
      noIcon: 'No icon',
    },
  },
}

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {
    variant: 'light',
    placeholder: 'Type your name',
    label: '',
    labelFamily: 'regular',
    labelSize: 'sm',
    labelWeight: 'regular',
    required: false,
    disabled: false,
    error: false,
    textCenter: false,
    onRightIconClick: () => {},
    onLeftIconClick: () => {},
  },
  argTypes: {
    variant: {
      options: ['light', 'dark'],
      control: {
        type: 'inline-radio',
      },
    },
    leftIcon: iconArgTypes,
    rightIcon: iconArgTypes,
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
    labelFamily: {
      options: ['regular', 'secondary'],
      control: {
        type: 'inline-radio',
      },
    },
    labelSize: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    labelWeight: {
      options: ['regular', 'medium', 'bold'],
      control: {
        type: 'inline-radio',
      },
    },
    error: {
      control: {
        type: 'boolean',
      },
    },
    onRightIconClick: { action: 'clicked' },
    onLeftIconClick: { action: 'clicked' },
  },
} as Meta<TextInputProps>

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />

export const Base = Template.bind({})

export const WithLabel: StoryObj<TextInputProps> = {
  args: {
    label: 'Email',
  },
}

export const WithIcon: StoryObj<TextInputProps> = {
  args: {
    leftIcon: undefined,
    rightIcon: <Eye />,
  },
}

export const WithError: StoryObj<TextInputProps> = {
  args: {
    error: true,
  },
}

export const WithTextCenter: StoryObj<TextInputProps> = {
  args: {
    textCenter: true,
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const Required: StoryObj<TextInputProps> = {
  args: {
    label: 'Email',
    required: true,
  },
}
