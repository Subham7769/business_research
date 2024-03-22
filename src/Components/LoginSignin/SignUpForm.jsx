import { useState } from "react";
import MovingRoundedIcon from '@mui/icons-material/MovingRounded';
import WorkspacesRoundedIcon from '@mui/icons-material/WorkspacesRounded';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { toast } from "react-toastify";
function SignUpForm() {
  // const [state, setState] = React.useState({
  //   name: "",
  //   email: "",
  //   password: ""
  // });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tnc, setTnc] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleOnSubmit = () => {
    
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

    // Check if password is empty
    if (!password.trim()) {
      setPasswordError(true);
      return;
    }

    // Check if terms and conditions are not agreed
    if (!tnc) {
      return;
    }


    // Reset form
    setName("");
    setEmail("");
    setPassword("");
    setNameError(false);
    setEmailError(false);
    setPasswordError(false);
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
    // toast(
    //   `You are sign up with name: ${name} email: ${email} and password: ${password}`
    // );

  //   for (const key in state) {
  //     setState({
  //       ...state,
  //       [key]: ""
  //     });
  //   }
  // };

  return (
    <div className="form-container sign-up-container">
      <form className="form" onSubmit={handleOnSubmit}>
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
          style={{ width: "100%", marginBottom: "1.5rem" }}
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
          style={{ width: "100%", marginBottom: "1.5rem" }}
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
          style={{ width: "100%", marginBottom: "1.5rem" }}
        />

        <FormControlLabel required control={<Checkbox />} label="Agree terms & conditions" checked={tnc} onClick={() => setTnc(!tnc)} />

        <button className="button" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
