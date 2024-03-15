import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector,useDispatch } from "react-redux";
import {setCurrentProduct} from "../../Redux/Slices/ProductSlice"

export default function BasicSelect() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductSlice.products);
  const selectedProductId = useSelector(state => state.ProductSlice.selectedProductId);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Product</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedProductId}
          label="Product"
          onChange={(event)=> dispatch(setCurrentProduct(event.target.value))}
        >
          {
            products.map((item)=><MenuItem value={item.productId} key={item.productId}>{item.productName}</MenuItem>)
          }

        </Select>
      </FormControl>
    </Box>
  );
}
