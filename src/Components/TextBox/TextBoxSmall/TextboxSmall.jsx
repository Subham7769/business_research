import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {useState} from "react";

export default function MultilineTextFields({ value,placeholder }) {
  const [text, setText] = useState(value);
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
          value={text}
          multiline
          fullWidth
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </Box>
  );
}
