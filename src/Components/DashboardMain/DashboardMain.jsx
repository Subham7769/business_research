import { Route, Routes } from 'react-router-dom';
import './DashboardMain.css';
import SWOTComponent from '../SwotComponent/SWOTComponent/SWOTComponent';
import KnowledgeGathering from '../KnowledgeGathering/KnowledgeGathering';
import TestComponent from '../TestComponent/TestComponent';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import MarketResearch from '../MarketResearch/MarketResearch'
import PriceCalculation from '../PriceCalculation/PriceCalculation'
import LoginSignupContainer from '../LoginSignup/LoginSignupContainer';

const DashboardMain = () => {
  return (
    <div className="DashboardMain">
      <Routes>
        <Route path="/" element={<AddNewProduct />} />
        <Route path="swot" element={<SWOTComponent />} />
        <Route path="knowledgeBase" element={<KnowledgeGathering />} />
        <Route path="TestComponent" element={<TestComponent />} />
        <Route path="MarketResearch" element={<MarketResearch />} />
        <Route path="PriceCalculation" element={<PriceCalculation />} />
        <Route path="LoginSignupContainer" element={<LoginSignupContainer />} />
      </Routes>
    </div>
  );
};

export default DashboardMain;
