
import './Login.css'

const Login = () => {
  return (
    <div className='body'>
<div className="center">
        <h1>Login</h1>
        <form action='/login' method="POST">
            <div className="txt_field">
                <input type="text" name="username" required />
                <span></span>
                <label>Username</label>
            </div>
            <div className="txt_field">
                <input type="password" name="password" required />
                <span></span>
                <label>Password</label>
            </div>
            <div className="pass">Forgot Password?</div>
            <input type="submit" value="Login" />
            <div className="signup_link">Not a member? <a href="/register">Signup</a></div>
        </form>
    </div>
    </div>
  );
};

export default Login;