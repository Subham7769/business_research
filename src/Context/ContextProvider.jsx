import { useState } from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const [swot, setSwot] = useState({
    strength: ["shubham jain"],
    weakness: ["shubham jain", "hjhjdjdhj"],
    opportunity: ["shubham jain", "hjhjdjdhj"],
    threat: ["shubham jain", "hjhjdjdhj"],
  });

  return (
    <Context.Provider value={{ swot, setSwot }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
