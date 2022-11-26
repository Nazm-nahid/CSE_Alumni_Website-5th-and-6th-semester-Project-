import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['14 Series', '13 Series','12 Series', '11 Series','10 Series', '09 Series','08 Series', '07 Series'];

export default function SelectSeries() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div>
      
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300, marginLeft:-2,marginBottom:-0.5 }}
        renderInput={(params) => <TextField {...params} label="Select Series" />}
      />
    </div>
  );
}