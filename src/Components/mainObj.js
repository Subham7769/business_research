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
        { status: false, name: "Availability", color:"var(--green)" },
        { status: false, name: "Interest", color:"var(--red)" },
        { status: false, name: "Demand", color:"var(--blue)" },
        { status: false, name: "Knowledge", color:"var(--yellow)" },
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