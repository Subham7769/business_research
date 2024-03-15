import { useState } from "react";

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
    selectionReason: [
      { status: false, name: "Availability", color: "var(--green)" },
      { status: false, name: "Interest", color: "var(--red)" },
      { status: false, name: "Demand", color: "var(--blue)" },
      { status: false, name: "Knowledge", color: "var(--yellow)" },
    ],
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
                name: "Physical_Properties",
                data: "data"
              },
            ],
            Chemical_Properties: [
              {
                name: "Chemical_Properties",
                data: "data"
              },
            ],
            Technical_Properties: [
              {
                name: "Technical_Properties",
                data: "data"
              },
            ],
            Other_Properties: [
              {
                name: "Other_Properties",
                data: "data"
              },
            ],
          },
          productionHub: [{
            state: "Enter State",
            city: "Enter City",
            townVillage: "Enter Town/Village",
            season: "Enter Season",
          },],
        },
      ],
      evaluationCriteria: {
        Testing: [],
        Standards: [],
        Quality: [],
        Packing: [],
      },
      CredentialCollection: {
        Certificates: [],
        Licenses: [],
        Documents: [],
      },
      EPC: "",
      RCMC: "",
      ApplicationUsecase: {
        Applications:[],
      },
    },
  };

  setMainObj((prevMainObj) => ({
    ...prevMainObj,
    products: [...prevMainObj.products, obj],
  }));
}