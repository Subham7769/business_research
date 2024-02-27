import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import BasicButtons from "../Common/Button/BasicButtons";
import DeleteIcon from '@mui/icons-material/Delete';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="navSidebar">
        <NavLink to="/swot">
          <BasicButtons name={"Swot"} startIcon={<DeleteIcon />}/>
        </NavLink>
        <NavLink to="/view2">
          <BasicButtons name={"View 2"} />
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
