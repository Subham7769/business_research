import { useState } from 'react';
import MovingRoundedIcon from '@mui/icons-material/MovingRounded';
import WorkspacesRoundedIcon from '@mui/icons-material/WorkspacesRounded';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import { TextField } from "@mui/material";
import { toast } from 'react-toastify';
function SignInForm() {
  // const [state, setState] = useState({
  //   email: "",
  //   password: ""
  // });

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleOnSubmit = (e) => {
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

  // const handleOnSubmit = evt => {
  //   evt.preventDefault();

  //   const { email, password } = state;
    // toast(`You are login with email: ${email} and password: ${password}`);

  //   for (const key in state) {
  //     setState({
  //       ...state,
  //       [key]: ""
  //     });
  //   }
  // };

  return (
    <div className="form-container sign-in-container">
      <form className='form' onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <div className="icon-cont">
          <div className="social-container">
              <MovingRoundedIcon/>          
          </div>
          <div className="social-container">
              <WorkspacesRoundedIcon/>          
          </div>
          <div className="social-container">
              <VpnKeyRoundedIcon/>          
          </div>
        </div>
        <TextField
            id="username"
            label="Username"
            variant="filled"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              setUserNameError(false); // Reset error when user types
            }}
            error={userNameError}
            helperText={userNameError ? "Username is required" : ""}
            style={{ width: "100%",marginBottom: "1.5rem"}}
          />
          <TextField
            id="filled-password-input"
            type="password"
            label="Password"
            variant="filled"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(false); // Reset error when user types
            }}
            error={passwordError}
            helperText={passwordError ? "Password is required" : ""}
            style={{ width: "100%",marginBottom: "1.5rem"}}
          />
        <a className='forgetPasswordlink' href="#">Forgot your password?</a>
        <button className='button' type='submit'>Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
