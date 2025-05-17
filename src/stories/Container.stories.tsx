import { Container, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: () => (
    <Container>
      <Typography>Obsah uvnitř Container komponenty</Typography>
    </Container>
  ),
};