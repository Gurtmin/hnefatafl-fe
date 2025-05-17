import { TextField } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextField> = {
  title: 'Components/Input',
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Jméno',
    placeholder: 'Zadej jméno',
    variant: 'outlined',
  },
};