import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from "react-redux";
import { setCurrentProduct } from "../../Redux/Slices/ProductSlice"
import { useEffect, useState } from 'react';

export default function BasicSelect() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductSlice.products);
  const currentProductId = useSelector(state => state.ProductSlice.currentProductId);
  const [currentProductName, setCurrentProductName] = useState("");

  useEffect(() => {
    if (currentProductId) {
      const product = products.find(product => product.productId === currentProductId);
      if (product) {
        setCurrentProductName(product.productName);
      }
    } else {
      setCurrentProductName("");
    }
  }, [currentProductId, products]);

  function handleChange(event){
    const selectedProduct = products.find(product => product.productName === event.target.value);
    if (selectedProduct) {
      setCurrentProductName(selectedProduct.productName);
      dispatch(setCurrentProduct(selectedProduct.productId));
    }
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Product
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentProductName}
          label="Product"
          onChange={(event) => handleChange(event)}
          disabled={products.length < 1}
        >
          {
            products.map((item) => <MenuItem value={item.productName} key={item.productId}>{item.productName}</MenuItem>)
          }

        </Select>
      </FormControl>
    </Box>
  );
}
