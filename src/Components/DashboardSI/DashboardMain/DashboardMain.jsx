import { Route, Routes } from 'react-router-dom';
import './DashboardMain.css';
import BusinessSetupLegal from '../../BusinessSetupLegal/BusinessSetupLegal';
import BankingSetup from '../../BankingSetup/BankingSetup';
import EPCSetup from '../../EPCSetup/EPCSetup';
import PackingSetup from '../../PackingSetup/PackingSetup';
import DigitalContentSetup from '../../DigitalContentSetup/DigitalContentSetup';
import WebsiteSetup from '../../WebsiteSetup/WebsiteSetup';


const DashboardMain = () => {

  return (
    <div className="DashboardMain">
      <Routes>
        <Route path="/" element={<BusinessSetupLegal />} />
        <Route path="BankingSetup" element={<BankingSetup />} />
        <Route path="EPCSetup" element={<EPCSetup />} />
        <Route path="PackingSetup" element={<PackingSetup />} />
        <Route path="DigitalContentSetup" element={<DigitalContentSetup />} />
        <Route path="DigitalWebsiteSetup" element={<WebsiteSetup />} />
      </Routes>
    </div>
  );
};

export default DashboardMain;
