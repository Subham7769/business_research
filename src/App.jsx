import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Common/Header/Header";
import DashboardKG from "./Components/DashboardKG/Dashboard";
import DashboardSI from "./Components/DashboardSI/Dashboard";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import LandingPage from "./Components/LandingPage/LandingPage";
import LoginSignin from './Components/LoginSignin/LoginSignin'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/LoginSignin" element={<LoginSignin />} />
            
            <Route path="/DashboardKG" element={<DashboardKG />} >
              {/* Nested Routes */}
              <Route path="NewProduct" element={<DashboardKG.DashboardMain />} />
              <Route path="swot" element={<DashboardKG.DashboardMain />} />
              <Route path="knowledgeBase" element={<DashboardKG.DashboardMain />} />
              <Route path="MarketResearch" element={<DashboardKG.DashboardMain />} />
              <Route path="PriceCalculation" element={<DashboardKG.DashboardMain />} />
              <Route path="TestComponent" element={<DashboardKG.DashboardMain />} />
            </Route>
            <Route path="/DashboardSI" element={<DashboardSI />} >
              {/* Nested Routes */}
              <Route path="BankingSetup" element={<DashboardSI.DashboardMain />} />
              <Route path="EPCSetup" element={<DashboardSI.DashboardMain />} />
              <Route path="PackingSetup" element={<DashboardSI.DashboardMain />} />
              <Route path="DigitalContentSetup" element={<DashboardSI.DashboardMain />} />
              <Route path="DigitalWebsiteSetup" element={<DashboardSI.DashboardMain />} />
            </Route>

          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
