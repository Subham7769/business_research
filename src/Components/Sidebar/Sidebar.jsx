import { NavLink,useNavigate } from "react-router-dom";
import "./Sidebar.css";
import SelectDropDown from "../SelectDropDown/SelectDropDown"
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import PriceCheckRoundedIcon from '@mui/icons-material/PriceCheckRounded';
import { Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect } from "react";



const Sidebar = () => {
  const navigate = useNavigate();
  const products = useSelector(state=>state.ProductSlice.products)

  //   useEffect(() => {
  //   if (!products.length) {
  //     navigate('/NewProduct');
  //   }
  // }, [products, navigate]);

  return (
    <div className="sidebar">
      {/* {
        !products.length<1 ? ( <><SelectDropDown/> <Divider /></>): null
      } */}
      
      
      <nav className="navSidebar">
        <NavLink to="/NewProduct" className="NavLink">
          
          <AddRoundedIcon />
          New Product
        </NavLink>
        <NavLink to="/swot" className="NavLink">
          <QueryStatsRoundedIcon />
          Swot Analysis
        </NavLink>
        <NavLink to="/knowledgeBase" className="NavLink">
          <AcUnitRoundedIcon />
          Knowledge Base
        </NavLink>
        <NavLink to="/TestComponent" className="NavLink">
          <ScienceRoundedIcon />
          Test Component
        </NavLink>
        <NavLink to="/abc" className="NavLink">
          <TravelExploreRoundedIcon />
          Market Research
        </NavLink>
        <NavLink to="/def" className="NavLink">
          <PriceCheckRoundedIcon />
          Price Calculation
        </NavLink>
        {/* <NavLink to="/Login" className="NavLink">
          <PriceCheckRoundedIcon />
          Login
        </NavLink>
        <NavLink to="/Signup" className="NavLink">
          <PriceCheckRoundedIcon />
          Signup
        </NavLink> */}
        <NavLink to="/LoginSignupContainer" className="NavLink">
          <PriceCheckRoundedIcon />
          Signup
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
