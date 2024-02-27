import "./RightSidebar.css";
import BasicButtons from "../Common/Button/BasicButtons";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EntityListing from "../SwotComponent/EntityListing/EntityListing";

const RightSidebar = () => {
  return (
    <div className="sidebar">
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 0.5, width: '98%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Product Name" variant="outlined" />
      <TextField id="outlined-basic" label="Product HS Code" variant="outlined" />
      <BasicButtons name={"Add Product"} variant={"contained"}/>
    </Box>
      <EntityListing name={"Products"}/>
      <EntityListing name={"Variety"}/>
    </div>
  );
};

export default RightSidebar;
