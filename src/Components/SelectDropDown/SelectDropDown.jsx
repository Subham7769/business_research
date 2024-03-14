import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [products, setProducts] = React.useState(['Turmeric', 'Red Chilli', 'Ginger Powder']);
  const [selectProduct, setSelectProduct] = React.useState('');

  const handleChange = (event) => {
    setSelectProduct(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Product</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectProduct}
          label="Product"
          onChange={handleChange}
        >
          {
            products.map((item,index)=><MenuItem value={10} key={item+index}>{item}</MenuItem>)
          }

        </Select>
      </FormControl>
    </Box>
  );
}
