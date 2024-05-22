import "./TestComponent.css";
// import TestAccordian from "./TestAccordian.jsx";
// import TestTable from "./TestVarietyData.jsx";
// import TestDocumentTesting from "../TestComponent/TestDocumentsTestings.jsx";
// import TestProductList from "./TestProductList.jsx";
// import ProductResearchView from "../../ProductResearchView/ProductResearchView";
import InputValue from "../../Common/InputValue/InputValue";
import Accordian from "../../Common/Accordian/Accordian";

const TestComponent = () => {
  return (
    <div className="TestComponent">
      {/* <TestAccordian/> */}
      {/* <TestTable/> */}
      {/* <TestDocumentTesting/> */}
      {/* <TestProductList/> */}
      {/* <ProductResearchView /> */}
      <Accordian
      nested={true}
      label="Market Details"
      component={InputValue}
      productionHub={""}
      setProductionHub={() => console.log("Market Research")}
      >
      </Accordian>
    </div>
  );
};

export default TestComponent;
