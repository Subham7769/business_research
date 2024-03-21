import { useState } from "react";
import "./Login.css";
import { Box, Button, TextField } from "@mui/material";


const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = () => {
    // Check if product name is empty
    if (!userName.trim()) {
      setUserNameError(true);
      return;
    }

    // Check if HS code is empty
    if (!password.trim()) {
      setPasswordError(true);
      return;
    }


    // Reset form
    setUserName("");
    setPassword("");
    setUserNameError(false);
    setPasswordError(false);
  };


  return (
    <div className="AddNewProduct">
      
      <h3>Login</h3>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 3, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-basic"
          label="Username"
          variant="outlined"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
            setUserNameError(false); // Reset error when user types
          }}
          error={userNameError}
          helperText={userNameError ? "Username is required" : ""}
          style={{ width: '95%' }}
        />
        <TextField
          required
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError(false); // Reset error when user types
          }}
          error={passwordError}
          helperText={passwordError ? "Password is required" : ""}
          style={{ width: '95%' }}
        />

        <Button
          variant="contained"
          onClick={handleSubmit}
          style={{ padding: "1.5rem 0",width: '95%',fontSize: '1rem'}}
        >
          Login
        </Button>
      </Box>
    </div>
  );
};

export default Login;
