import { useState } from "react";
import "./Login.css";
import { Box, Button, TextField } from "@mui/material";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if username is empty
    if (!userName.trim()) {
      setUserNameError(true);
      return;
    }

    // Check if password is empty
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
    <div className="formContainer">
    <div className="LoginPage">
      <h3>Login</h3>
      <form onSubmit={handleSubmit} className="form">
        <Box
          component="div"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="username"
            label="Username"
            variant="outlined"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              setUserNameError(false); // Reset error when user types
            }}
            error={userNameError}
            helperText={userNameError ? "Username is required" : ""}
            style={{ width: "95%" }}
          />
          <TextField
            required
            id="password"
            type="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(false); // Reset error when user types
            }}
            error={passwordError}
            helperText={passwordError ? "Password is required" : ""}
            style={{ width: "95%" }}
          />
          <Button
            type="submit"
            variant="contained"
            style={{ padding: "1.5rem 0", width: "95%", fontSize: "1rem" }}
          >
            Login
          </Button>
        </Box>
      </form>
    </div>
    </div>
  );
};

export default Login;
