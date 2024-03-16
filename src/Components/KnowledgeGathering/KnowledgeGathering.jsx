import Accordian from "../Accordian/Accordian";
import Textbox from "../TextBox/TextBoxLarge/Textbox";
import VarietyData from "../VarietyData/VarietyData";
import DocumentTesting from "../DocumentTesting/DocumentTesting";
import CertificatesLicense from "../CertificatesLicense/CertificatesLicense";
import EpcRcmc from "../EpcRcmc/EpcRcmc";
import ApplicationUsage from "../ApplicationUsage/ApplicationUsage";
import "./KnowledgeGathering.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {updateDescription,updateVariety} from "../../Redux/Slices/ProductSlice"

const KnowledgeGathering = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductSlice.products);
  const currentProductId = useSelector(state => state.ProductSlice.currentProductId);
  const product = products.find(product => product.productId === currentProductId);
  const [Description, setDescription] = useState(product.knowledgeBase.description)

  return (
    <div className="KnowledgeGathering">
      <h3>Knowledge Gathering</h3>
      <Accordian
        label="Product Description"
        component={Textbox}
        saveFunction={() => {
          dispatch(updateDescription({Description}))
        }}
        DescriptionUpdater={(updatedDescription)=>{ setDescription(updatedDescription)}}
        Description={Description}
      />
      <Accordian
        label="Product Variety"
        component={VarietyData}
        saveFunction={() => {
          dispatch(updateVariety({Description}))
        }}
        
      />
      <Accordian
        label="Product Testing, Standard, Quality, Packing Standard Required"
        component={DocumentTesting}
        saveFunction={() => {
          alert("Product Testing, Standard, Quality, Packing Standard Required");
        }}
      />
      <Accordian
        label="Certificates, Licenses, Documents Required"
        component={CertificatesLicense}
        saveFunction={() => {
          alert("Certificates, Licenses, Documents Required");
        }}
      />
      <Accordian
        label="EPC & RCMC Required"
        component={EpcRcmc}
        saveFunction={() => {
          alert("EPC & RCMC Required");
        }}
      />
      <Accordian
        label="Application of Product Use (End Consumer of Goods/Services)"
        component={ApplicationUsage}
        saveFunction={() => {
          alert("Application of Product Use (End Consumer of Goods/Services)");
        }}
      />
    </div>
  );
};
export default KnowledgeGathering;
