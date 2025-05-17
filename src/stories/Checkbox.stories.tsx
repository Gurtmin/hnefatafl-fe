import { Checkbox, FormControlLabel } from '@mui/material';
import { useState } from 'react';

export default {
  title: 'Components/Checkbox',
};

export const Default = () => {
  const [checked, setChecked] = useState(false);

  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />}
      label="Souhlasím"
    />
  );
};