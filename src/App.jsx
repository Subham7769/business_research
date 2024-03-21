import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import ContextProvider from "./Context/ContextProvider";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import LandingPage from "./Components/LandingPage/LandingPage";
import Login from "./Components/Login/Login";

const App = () => {
  return (
    <Provider store={store}>
      <ContextProvider>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/Login" element={<Login />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="/Dashboard" element={<Dashboard />} >
                {/* Nested Routes */}
                <Route path="NewProduct" element={<Dashboard.Main />} />
                <Route path="swot" element={<Dashboard.Main />} />
                <Route path="knowledgeBase" element={<Dashboard.Main />} />
                <Route path="TestComponent" element={<Dashboard.Main />} />
                <Route path="Login" element={<Dashboard.Main />} />
                <Route path="Signup" element={<Dashboard.Main />} />
                <Route path="LoginSignupContainer" element={<Dashboard.Main />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </ContextProvider>
    </Provider>
  );
};

export default App;
