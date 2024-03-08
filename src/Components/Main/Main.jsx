import { Route, Routes } from "react-router-dom";
import "./Main.css";
import SWOTComponent from "../SwotComponent/SWOTComponent/SWOTComponent";
import KnowledgeGathering from "../KnowledgeGathering/KnowledgeGathering";

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/swot" element={<SWOTComponent />} />
        <Route path="/knowledgeBase" element={<KnowledgeGathering />} />
      </Routes>
    </div>
  );
};

export default Main;
