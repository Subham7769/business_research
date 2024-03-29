import React from "react";
import "./TestComponent.css";
import TestAccordian from "./TestAccordian.jsx";
import TestTable from "./TestVarietyData.jsx";
import TestDocumentTesting from "../TestComponent/TestDocumentsTestings.jsx";
import TestProductList from "./TestProductList.jsx";
import ProductResearchView from "../Dashboard/ProductResearchView/ProductResearchView";

const TestComponent = () => {
  return (
    <div className="TestComponent">
      {/* <TestAccordian/> */}
      {/* <TestTable/> */}
      {/* <TestDocumentTesting/> */}
      {/* <TestProductList/> */}
      <ProductResearchView />
    </div>
  );
};

export default TestComponent;
