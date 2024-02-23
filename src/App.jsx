import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import ContextProvider from "./Context/ContextProvider";

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Body />
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
