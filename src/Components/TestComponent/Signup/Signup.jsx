import { useState } from "react";
import './Signup.css'
import { Box, Button, Checkbox, FormControlLabel, TextField } from "@mui/material";


const Signup = () => {
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


    return (
        <div className="AddNewProduct">
            <h3>Signup</h3>
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
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        setNameError(false); // Reset error when user types
                    }}
                    error={nameError}
                    helperText={nameError ? "Name is required" : ""}
                    style={{ width: '95%' }}
                />

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
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError(false); // Reset error when user types
                    }}
                    error={emailError}
                    helperText={emailError ? "Email is required" : ""}
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

                <TextField
                    required
                    id="outlined-basic"
                    label="Confirm Password"
                    variant="outlined"
                    value={confirmPassword}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        setConfirmPasswordError(false); // Reset error when user types
                    }}
                    error={confirmPasswordError}
                    helperText={confirmPasswordError ? "Confirm Password is required" : ""}
                    style={{ width: '95%' }}
                />

                {/* <FormControlLabel required control={<Checkbox />} label="Required" checked={tnc}/> */}

                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    style={{ padding: "1.5rem 0",width: '95%',fontSize: '1rem'}}
                >
                    Signup
                </Button>
            </Box>
        </div>
    );
};

export default Signup;
