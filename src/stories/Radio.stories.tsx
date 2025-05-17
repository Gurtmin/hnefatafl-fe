import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';

export default {
  title: 'Components/RadioButton',
};

export const Default = () => {
  const [value, setValue] = useState('a');

  return (
    <FormControl>
      <RadioGroup
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <FormControlLabel value="a" control={<Radio />} label="Možnost A" />
        <FormControlLabel value="b" control={<Radio />} label="Možnost B" />
      </RadioGroup>
    </FormControl>
  );
};