import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import BasicButtons from "../Common/Button/BasicButtons";
import DeleteIcon from "@mui/icons-material/Delete";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="navSidebar">
        <NavLink to="/swot">
          <BasicButtons name={"Swot"} />
        </NavLink>
        <NavLink to="/knowledgeBase">
          <BasicButtons name={"Knowledge Base"} />
        </NavLink>
        <NavLink to="/TestComponent">
          <BasicButtons name={"Test Component"} />
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
