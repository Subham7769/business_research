import React, { useState } from "react";
import MovingRoundedIcon from '@mui/icons-material/MovingRounded';
import WorkspacesRoundedIcon from '@mui/icons-material/WorkspacesRounded';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import { TextField } from "@mui/material";
function SignUpForm() {
  // const [state, setState] = React.useState({
  //   name: "",
  //   email: "",
  //   password: ""
  // });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tnc, setTnc] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleOnSubmit = () => {
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

    // Check if  name is empty
    if (!name.trim()) {
      setNameError(true);
      return;
    }

    // Check if email is empty
    if (!email.trim()) {
      setPasswordError(true);
      return;
    }


    // Reset form
    setName("");
    setEmail("");
    setUserName("");
    setPassword("");
    setConfirmPassword("");
    setNameError(false);
    setEmailError(false);
    setUserNameError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);
    setTnc(false);
  };

  // const handleChange = evt => {
  //   const value = evt.target.value;
  //   setState({
  //     ...state,
  //     [evt.target.name]: value
  //   });
  // };

  // const handleOnSubmit = evt => {
  //   evt.preventDefault();

  //   const { name, email, password } = state;
  //   alert(
  //     `You are sign up with name: ${name} email: ${email} and password: ${password}`
  //   );

  //   for (const key in state) {
  //     setState({
  //       ...state,
  //       [key]: ""
  //     });
  //   }
  // };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <div className="icon-cont">
          <div className="social-container">
            <MovingRoundedIcon />
          </div>
          <div className="social-container">
            <WorkspacesRoundedIcon />
          </div>
          <div className="social-container">
            <VpnKeyRoundedIcon />
          </div>
        </div>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="filled"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setNameError(false); 
          }}
          error={nameError}
          helperText={nameError ? "Name is required" : ""}
          style={{ width: "100%",marginBottom: "1.5rem"}}
        />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="filled"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
            setUserNameError(false); 
          }}
          error={userNameError}
          helperText={userNameError ? "Username is required" : ""}
          style={{ width: "100%",marginBottom: "1.5rem"}}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="filled"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(false); 
          }}
          error={emailError}
          helperText={emailError ? "Email is required" : ""}
          style={{ width: "100%",marginBottom: "1.5rem"}}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="filled"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError(false); 
          }}
          error={passwordError}
          helperText={passwordError ? "Password is required" : ""}
          style={{ width: "100%",marginBottom: "1.5rem"}}
        />
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          variant="filled"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setConfirmPasswordError(false); 
          }}
          error={confirmPasswordError}
          helperText={confirmPasswordError ? "Confirm Password is required" : ""}
          style={{ width: "100%",marginBottom: "1.5rem"}}
        />
        {/* <FormControlLabel required control={<Checkbox />} label="Required" checked={tnc}/> */}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
