import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Common/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import ContextProvider from "./Context/ContextProvider";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import LandingPage from "./Components/LandingPage/LandingPage";
import LoginSignin from './Components/LoginSignin/LoginSignin'

const App = () => {
  return (
    <Provider store={store}>
      <ContextProvider>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/LoginSignin" element={<LoginSignin />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="/Dashboard" element={<Dashboard />} >
                {/* Nested Routes */}
                <Route path="NewProduct" element={<Dashboard.DashboardMain />} />
                <Route path="swot" element={<Dashboard.DashboardMain />} />
                <Route path="knowledgeBase" element={<Dashboard.DashboardMain />} />
                <Route path="MarketResearch" element={<Dashboard.DashboardMain />} />
                <Route path="PriceCalculation" element={<Dashboard.DashboardMain />} />
                <Route path="TestComponent" element={<Dashboard.DashboardMain />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </ContextProvider>
    </Provider>
  );
};

export default App;
