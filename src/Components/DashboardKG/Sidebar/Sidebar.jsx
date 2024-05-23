import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import SelectDropDown from "../../Common/SelectDropDown/SelectDropDown";
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DangerousIcon from '@mui/icons-material/Dangerous';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import PriceCheckRoundedIcon from '@mui/icons-material/PriceCheckRounded';
import { Divider } from "@mui/material";
import { useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = () => {
  const products = useSelector(state => state.ProductSlice.products);


  return (
    <div className="sidebar">
      {!products.length < 1 ? (<><SelectDropDown /> <Divider /></>) : null}

      <nav className="navSidebar">
        <NavLink to="/DashboardKG/" className="NavLink">
          <AddRoundedIcon />
          New Product
        </NavLink>
        <NavLink to="/DashboardKG/swot" className="NavLink">
          <QueryStatsRoundedIcon />
          Swot Analysis
        </NavLink>
        <NavLink to="/DashboardKG/knowledgeBase" className="NavLink">
          <AcUnitRoundedIcon />
          Knowledge Base
        </NavLink>
        <NavLink to="/DashboardKG/MarketResearch" className="NavLink">
          <TravelExploreRoundedIcon />
          Market Research
        </NavLink>
        <NavLink to="/DashboardKG/PriceCalculation" className="NavLink">
          <PriceCheckRoundedIcon />
          Price Calculation
        </NavLink>
        <NavLink to="/DashboardKG/SupplierDB" className="NavLink">
          <GroupAddIcon />
          Supplier Database
        </NavLink>
        <NavLink to="/DashboardKG/RiskManagement" className="NavLink">
          <DangerousIcon />
          Risk Management
        </NavLink>
        {/* <NavLink to="/DashboardKG/TestComponent" className="NavLink">
          <ScienceRoundedIcon />
          Test Component
        </NavLink> */}
      </nav>
    </div>
  );
};

export default Sidebar;
