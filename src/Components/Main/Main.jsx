import { Route, Routes } from "react-router-dom";
import "./Main.css";
// import EditableList from "../SwotComponent/EditableFields/EditableList";
import SWOTComponent from "../SwotComponent/SWOTComponent";

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/swot" element={<SWOTComponent />} />
        <Route path="/view2" element={<h1>View 2</h1>} />
      </Routes>
    </div>
  );
};

export default Main;
