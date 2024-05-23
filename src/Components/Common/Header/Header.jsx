import { Avatar, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import Logo from './Logo.gif'
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  }

  return (
    <>
      <ToastContainer />
      <div className="header">

        <div className="logoContainer" onClick={handleNavigate}>
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
      <div className="LowerHeader">
        {/* <Link to="/DashboardKG" style={{ backgroundColor: "lightgreen" }}>Learning & Understanding</Link> */}
        <Link to="/DashboardKG" style={{ backgroundColor: "Orange" }}>Knowledge Gathering</Link>
        <Link to="/DashboardSI" style={{ backgroundColor: "dodgerblue" }}>Setup & Implementation</Link>
        {/* <Link to="/DashboardSI" style={{ backgroundColor: "gold" }}>Business & Promotion</Link> */}
        {/* <Link to="/DashboardSI" style={{ backgroundColor: "lightgrey" }}>Trade & Deals</Link> */}
        {/* <Link to="/DashboardSI" style={{ backgroundColor: "crimson" }}>Feedback & Followup</Link> */}
      </div>
    </>
  );
};

export default Header;
