import { Avatar, Chip } from "@mui/material";
import "./Header.css";
import Logo from './Logo.gif'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={Logo} alt="Your GIF" width={"50px"} height={"50px"} />Step Wise
      </div>
      <div className="profile">
        <Link to="/LoginSignin" >
          <Chip
            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
            label="Avatar"
            variant="outlined"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
