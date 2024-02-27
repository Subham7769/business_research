import { useState } from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const mainObj = {
    products: [
      {
        productName: "string",
        hscode: "12345",
        selectionReason: [],
        swot: {
          strength: ["strength"],
          weakness: ["weakness"],
          opportunity: ["opportunity"],
          threat: ["threat"],
        },
        knowledgeBase: {
          description: "",
          variety: [
            {
              varietyName: "",
              specification: {
                Physical_Properties: [
                  {
                    key: "value",
                  },
                ],
                Chemical_Properties: [
                  {
                    key: "value",
                  },
                ],
                Technical_Properties: [
                  {
                    key: "value",
                  },
                ],
                Other_Properties: [
                  {
                    key: "value",
                  },
                ],
              },
              productionHub: {
                state: "value",
                city: "value",
                town: "value",
                season: "",
              },
              priceRange: "",
              testingMechanism: "",
            },
          ],
          Testing: [],
          Standards: [],
          Quality: [],
          Packing: [],
          Certificates: [],
          Licenses: [],
          Documents: [],
          EPC: "",
          RCMC: "",
          ApplicationUsecase: [],
        },
      },
    ],
  };

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
