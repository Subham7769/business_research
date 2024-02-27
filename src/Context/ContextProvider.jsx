import { useState } from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const [mainObj, setMainObj] = useState({
    products: [],
  });

  function CreateNewProduct(productName, hsCode, selectionReason) {
    var id =
      Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000;
    var obj = {
      productId: id,
      productName: productName,
      hsCode: hsCode,
      selectionReason: selectionReason,
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
              state: "",
              city: "",
              town: "",
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
    };

    setMainObj((prevMainObj) => ({
      ...prevMainObj,
      products: [...prevMainObj.products, obj],
    }));
  }

  const [swot, setSwot] = useState({
    strength: ["strength"],
    weakness: ["weakness"],
    opportunity: ["opportunity"],
    threat: ["threat"],
  });

  return (
    <Context.Provider
      value={{ swot, setSwot, CreateNewProduct, mainObj, setMainObj }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
