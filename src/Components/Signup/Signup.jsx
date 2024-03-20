
import './Signup.css'

const Signup = () => {
  return (
    <div className='body'>
      <div className="center">
        <h1>Registration</h1>
        <form action='/register' method="POST">
            <div className="txt_field">
                <input type="text" name="name" required />
                <span></span>
                <label>Name</label>
            </div>
            <div className="txt_field">
                <input type="text" name="username" required />
                <span></span>
                <label>Username</label>
            </div>
            <div className="txt_field">
                <input type="email" name="email" required />
                <span></span>
                <label>Email</label>
            </div>
            <div className="txt_field">
                <input type="password" name="password" required />
                <span></span>
                <label>Password</label>
            </div>
            <div className="policy">
                <input type="checkbox"/>
                <div className="tnc">

                    <a href="#">I accept all terms & condition</a>
                </div>
            </div>
            <input type="submit" value="Login" />
            <div className="signup_link">Already have an account? <a href="/login">Login now</a></div>
        </form>
    </div>
    </div>
  );
};

export default Signup;