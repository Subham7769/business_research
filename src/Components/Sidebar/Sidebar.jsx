import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import BasicButtons from "../Common/Button/Button";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <NavLink to="/swot">
          <BasicButtons name={"View 1"} id={1} />
        </NavLink>
        <NavLink to="/view2">
          <BasicButtons name={"View 2"} id={2} />
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
