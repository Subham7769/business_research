import Accordian from "../../Common/Accordian/Accordian";

import InputArray from "../../Common/InputArray/InputArray";
import "./MarketResearch.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import InputValue from '../../Common/InputValue/InputValue';
import { updateDescription, updateVariety, updateEPC_RCMC, updateEvaluationCriteria, updateCredentialCollection, updateApplicationUseCase } from "../../../Redux/Slices/ProductSlice"
const KnowledgeGathering = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductSlice.products);
  const currentProductId = useSelector(state => state.ProductSlice.currentProductId);
  const product = products.find(product => product.productId === currentProductId);
  const [varieties, setVarieties] = useState(product.knowledgeBase.varieties);
  const [EPC, setEPC] = useState(product.knowledgeBase.EPC);
  const [RCMC, setRCMC] = useState(product.knowledgeBase.RCMC);
  const [evaluationCriteria, setEvaluationCriteria] = useState(product.knowledgeBase.evaluationCriteria);
  const [credentialCollection, setCredentialCollection] = useState(product.knowledgeBase.credentialCollection);



  const [Markets, setMarkets] = useState({
    "PotentialMarkets": ["india", "china", "US"],
    "TargetMarkets": ["US"],
  });


  // useEffect hook to update state when currentProductId changes
  useEffect(() => {
    setVarieties(product.knowledgeBase.varieties);
    setEPC(product.knowledgeBase.EPC);
    setRCMC(product.knowledgeBase.RCMC);
    setEvaluationCriteria(product.knowledgeBase.evaluationCriteria);
    setCredentialCollection(product.knowledgeBase.credentialCollection);
  }, [currentProductId]);

  // create a new variety 
  function createVariety() {
    const vId = Math.floor(Math.random() * 10000000000);
    let newVariety = {
      varietyId: vId,
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
    };
    setVarieties((prevVarieties) => [...prevVarieties, newVariety])
  }

  return (
    <div className="KnowledgeGathering">
      <h3>Market Research</h3>
      <Accordian
        label="Potential Markets"
        component={InputArray}
        saveFunction={() => console.log("Potential markets")}
        items={Markets.PotentialMarkets}//Array of state object
        name={"PotentialMarkets"}
        color={"lightgrey"}
        mainData={Markets}
        setMainData={setMarkets}
      />
      <Accordian
        label="Target Markets"
        component={InputArray}
        saveFunction={() => console.log("Target markets")}
        items={Markets.TargetMarkets}//Array of state object
        name={"TargetMarkets"}
        color={"lightgrey"}
        mainData={Markets}
        setMainData={setMarkets}
      />
      <Accordian
        label="Target Markets Details"
        component={InputValue}
        saveFunction={() => console.log("Target markets")}
        items={Markets.TargetMarkets}//Array of state object
        name={"TargetMarkets"}
        color={"lightgrey"}
        mainData={Markets}
        setMainData={setMarkets}
      >
      </Accordian>


    </div>
  );
};
export default KnowledgeGathering;
