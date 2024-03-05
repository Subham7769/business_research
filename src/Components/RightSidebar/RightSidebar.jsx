import "./RightSidebar.css";
import BasicButtons from "../Common/Button/BasicButtons";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EntityListing from "../SwotComponent/EntityListing/EntityListing";
import { useContext, useState } from "react";
import Context from "../../Context/Context";

const RightSidebar = () => {
  const { mainObj, CreateNewProduct } = useContext(Context);
  const [productName, setProductName] = useState("");
  const [hsCode, setHsCode] = useState("");

  return (
    <div className="sidebar">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 0.5, width: "98%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Product Name"
          variant="outlined"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Product HS Code"
          variant="outlined"
          value={hsCode}
          onChange={(e) => {
            setHsCode(e.target.value);
          }}
        />
        <BasicButtons
          name={"Add Product"}
          variant={"contained"}
          onClick={() => {
            console.log("clicked");
            CreateNewProduct(productName,hsCode)
          }}
        />
      </Box>
      <EntityListing name={"Products"} />
      {/* <EntityListing name={"Variety"} /> */}
    </div>
  );
};

export default RightSidebar;
