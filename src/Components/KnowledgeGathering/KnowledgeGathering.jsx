import Accordian from "../Accordian/Accordian";
import Textbox from "../TextBox/TextBoxLarge/Textbox";
import VarietyData from "../VarietyData/VarietyData";
import DocumentTesting from "../DocumentTesting/DocumentTesting";
import CertificatesLicense from "../CertificatesLicense/CertificatesLicense";
import EpcRcmc from "../EpcRcmc/EpcRcmc";
import ApplicationUsage from "../ApplicationUsage/ApplicationUsage";
import "./KnowledgeGathering.css";

const KnowledgeGathering = () => {
  return (
    <div className="KnowledgeGathering">
      <h3>Knowledge Gathering</h3>
      <Accordian
        label="Product Description"
        component={Textbox}
        saveFunction={() => {
          alert("Saved");
        }}
      />
      <Accordian
        label="Product Variety"
        component={VarietyData}
        saveFunction={() => {
          alert("Product Variety");
        }}
      />
      <Accordian
        label="Product Testing, Standard, Quality, Packing Standard Required"
        component={DocumentTesting}
        saveFunction={() => {
          alert("testing");
        }}
      />
      <Accordian
        label="Certificates, Licenses, Documents Required"
        component={CertificatesLicense}
        saveFunction={() => {
          alert("testing");
        }}
      />
      <Accordian
        label="EPC & RCMC Required"
        component={EpcRcmc}
        saveFunction={() => {
          alert("testing");
        }}
      />
      <Accordian
        label="Application of Product Use (End Consumer of Goods/Services)"
        component={ApplicationUsage}
        saveFunction={() => {
          alert("testing");
        }}
      />
    </div>
  );
};
export default KnowledgeGathering;
