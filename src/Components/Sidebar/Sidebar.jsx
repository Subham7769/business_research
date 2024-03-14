import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import SelectDropDown from "../SelectDropDown/SelectDropDown"
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import PriceCheckRoundedIcon from '@mui/icons-material/PriceCheckRounded';
import { Divider } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SelectDropDown/>
      <Divider />
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
      </nav>
    </div>
  );
};

export default Sidebar;
