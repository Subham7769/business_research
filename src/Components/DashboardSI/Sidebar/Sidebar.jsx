import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import InventoryIcon from '@mui/icons-material/Inventory';
import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import LanguageIcon from '@mui/icons-material/Language';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = () => {


  return (
    <div className="sidebar">
      <nav className="navSidebar">
        <NavLink to="/DashboardSI/" className="NavLink">
          <BusinessIcon />
          Business Setup & Legal
        </NavLink>
        <NavLink to="/DashboardSI/BankingSetup" className="NavLink">
          <AccountBalanceIcon />
          Banking Setup
        </NavLink>
        <NavLink to="/DashboardSI/EPCSetup" className="NavLink">
          <ImportExportIcon />
          EPC Setup
        </NavLink>
        <NavLink to="/DashboardSI/PackingSetup" className="NavLink">
          <InventoryIcon />
          Packing Setup
        </NavLink>
        <NavLink to="/DashboardSI/DigitalContentSetup" className="NavLink">
          <PlayLessonIcon />
          Digital Content Setup
        </NavLink>
        <NavLink to="/DashboardSI/DigitalWebsiteSetup" className="NavLink">
          <LanguageIcon />
          Digital & Website Setup
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
