import { Avatar, Chip } from "@mui/material";
import "./Header.css";
import Logo from './Logo.gif'

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={Logo} alt="Your GIF" width={"50px"} height={"50px"} />Step Wise
      </div>
      <div className="profile">
      <Chip
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label="Avatar"
        variant="outlined"
      />

      </div>
    </div>
  );
};

export default Header;
