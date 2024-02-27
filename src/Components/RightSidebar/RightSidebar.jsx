import "./RightSidebar.css";
import BasicButtons from "../Common/Button/BasicButtons";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EntityListing from "../SwotComponent/EntityListing/EntityListing";
import { useState } from "react";

const RightSidebar = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
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
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Product HS Code"
          variant="outlined"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
        <BasicButtons
          name={"Add Product"}
          variant={"contained"}
          onClick={() => {
            console.log("clicked");
          }}
        />
      </Box>
      <EntityListing name={"Products"} />
      <EntityListing name={"Variety"} />
    </div>
  );
};

export default RightSidebar;
