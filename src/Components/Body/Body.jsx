import "./Body.css";
import Sidebar from "../Sidebar/Sidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import Main from "../Main/Main";

const Body = () => {
  return (
    <div className="Body">
      <Sidebar />
      <Main />
      <RightSidebar />
    </div>
  );
};

export default Body;
