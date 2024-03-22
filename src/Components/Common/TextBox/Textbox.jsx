import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {useEffect, useState} from "react";
import {  useSelector } from "react-redux";

export default function MultilineTextFields({ value,placeholder,valueUpdater }) {
  const currentProductId = useSelector(state=>state.currentProductId)
  const [updatedValue, setUpdatedValue] = useState(value);

  useEffect(()=>{
    setUpdatedValue(value)
  },[currentProductId])

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: "3px 0", width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="textarea"
          placeholder={placeholder}
          value={updatedValue}
          onChange={(e)=>{setUpdatedValue(e.target.value)}}
          onBlur={()=>{valueUpdater(updatedValue)}}
          multiline
          fullWidth
        />
      </div>
    </Box>
  );
}
