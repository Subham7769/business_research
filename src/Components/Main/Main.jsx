import { Route, Routes } from "react-router-dom";
import "./Main.css";
import SWOTComponent from "../SwotComponent/SWOTComponent/SWOTComponent";
import KnowledgeGathering from "../KnowledgeGathering/KnowledgeGathering";
import TestComponent from '../TestComponent/TestComponent';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import LoginSignupContainer from '../LoginSignup/LoginSignupContainer';

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/NewProduct" element={<AddNewProduct />} />
        <Route path="/swot" element={<SWOTComponent />} />
        <Route path="/knowledgeBase" element={<KnowledgeGathering />} />
        <Route path="/TestComponent" element={<TestComponent />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/LoginSignupContainer" element={<LoginSignupContainer />} />
      </Routes>
    </div>
  );
};

export default Main;
