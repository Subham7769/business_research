import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Radio from '@mui/material/Radio';
import "./TestProductList.css";

const ProductList = ({ name }) => {
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className="ProductList">
         <h5 className="ProductListingHeader">{name}</h5>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `radio-list-label-${value}`;

        return (
          <ListItem
            key={value}
            disablePadding
            onClick={() => handleChange(value)}
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon sx={{ minWidth: 'unset', marginRight: '4px' }}>
                <Radio
                  edge="start"
                  checked={selectedValue === value}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    </div>
  );
}

export default ProductList;