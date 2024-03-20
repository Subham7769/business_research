import { Route, Routes } from "react-router-dom";
import "./Main.css";
import SWOTComponent from "../SwotComponent/SWOTComponent/SWOTComponent";
import KnowledgeGathering from "../KnowledgeGathering/KnowledgeGathering";
import TestComponent from '../TestComponent/TestComponent';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import Login from '../Login/Login'

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/NewProduct" element={<AddNewProduct />} />
        <Route path="/swot" element={<SWOTComponent />} />
        <Route path="/knowledgeBase" element={<KnowledgeGathering />} />
        <Route path="/TestComponent" element={<TestComponent />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Main;
