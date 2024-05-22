import Accordian from "../../Common/Accordian/Accordian";
import "./PriceCalculation.css";
import { useState } from "react";
import InputPriceValue from '../../Common/InputPriceValue/InputPriceValue';
import PriceTable from '../../PriceTable/PriceTable';
const PriceCalculation = () => {
 
  const [Markets, setMarkets] = useState({
    "PotentialMarkets": ["india", "china", "US"],
    "TargetMarkets": ["US"],
  });
 
  return (
    <div className="KnowledgeGathering">
      <h3>Price Calculation</h3>
      <Accordian
        label="Product Costing Factors"
        component={InputPriceValue}
        saveFunction={() => console.log("Product Costing Factors")}
        items={""}//Array of state object
        name={"Product Costing Factors"}
        color={"lightgrey"}
        mainData={Markets}
        setMainData={setMarkets}
      />
      <Accordian
        label="International Selling Price"
        component={PriceTable}
        items={""}//Array of state object
        name={"All Prices"}
        color={"lightgrey"}
        mainData={Markets}
        setMainData={setMarkets}
      >
      </Accordian>


    </div>
  );
};
export default PriceCalculation;
