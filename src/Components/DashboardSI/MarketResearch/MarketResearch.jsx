import Accordian from "../../Common/Accordian/Accordian";
import InputArray from "../../Common/InputArray/InputArray";
import "./MarketResearch.css";
import { useState } from "react";
import InputValue from '../../Common/InputValue/InputValue';

const MarketResearch = () => {
 
  const [Markets, setMarkets] = useState({
    "PotentialMarkets": ["india", "china", "US"],
    "TargetMarkets": ["US"],
  });
 
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
export default MarketResearch;
