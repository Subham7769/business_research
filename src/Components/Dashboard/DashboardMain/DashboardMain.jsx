import { Route, Routes } from 'react-router-dom';
import './DashboardMain.css';
import SWOTComponent from '../SWOTComponent/SWOTComponent.jsx'
import KnowledgeGathering from '../KnowledgeGathering/KnowledgeGathering.jsx';
import TestComponent from '../../TestComponent/TestComponent';
import AddNewProduct from '../AddNewProduct/AddNewProduct.jsx';
import MarketResearch from '../MarketResearch/MarketResearch.jsx'
import PriceCalculation from '../PriceCalculation/PriceCalculation.jsx'

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
      </Routes>
    </div>
  );
};

export default DashboardMain;
