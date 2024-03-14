import { useEffect, useState } from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const [mainObj, setMainObj] = useState({
    products: [],
  });

  function CreateNewProduct(productName, hsCode) {
    var id =
      Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000;
    var obj = {
      productId: id,
      productName: productName,
      hsCode: hsCode,
      selectionReason: "",
      swot: {
        strength: ["strength"],
        weakness: ["weakness"],
        opportunity: ["opportunity"],
        threat: ["threat"],
      },
      knowledgeBase: {
        description: "",
        varieties: [
          {
            name: "",
            code: "",
            priceRange: "",
            testing: "",
            specification: {
              Physical_Properties: [
                {
                  name: "value",
                },
              ],
              Chemical_Properties: [
                {
                  name: "value",
                },
              ],
              Technical_Properties: [
                {
                  name: "value",
                },
              ],
              Other_Properties: [
                {
                  name: "value",
                },
              ],
            },
            productionHub: {
              state: "",
              city: "",
              town: "",
              season: "",
            },
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
    strength: ["strength","dsdfhsdf","djhdckdsjkcds"],
    weakness: ["weakness"],
    opportunity: ["opportunity"],
    threat: ["threat"],
  });
  useEffect(() => {
    // console.log(swot);
  }, [swot]);

  return (
    <Context.Provider
      value={{ swot, setSwot, CreateNewProduct, mainObj, setMainObj }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
