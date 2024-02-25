import { useState } from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const [swot, setSwot] = useState({
    strength: ["strength"],
    weakness: ["weakness"],
    opportunity: ["opportunity"],
    threat: ["threat"],
  });

  return (
    <Context.Provider value={{ swot, setSwot }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
