import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function MultilineTextFields({Description,DescriptionUpdater}) {
 const [updatedDescription, setUpdatedDescription] = useState(Description);

 function handleChange(e){
  setUpdatedDescription(e.target.value);
  DescriptionUpdater(updatedDescription);
 }
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-textarea"
          placeholder="Enter text here..."
          value={updatedDescription}
          onChange={(e)=>{handleChange(e)}}
          multiline
          fullWidth
        />
      </div>
    </Box>
  );
}
