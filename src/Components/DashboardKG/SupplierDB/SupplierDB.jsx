import MultilineTextFields from "../../Common/MultilineTextFields/MultilineTextFields";
import DropDown from "../../Common/DropDown/DropDown";
import './SupplierDB.css'
import { useState } from "react";
import { Button } from "@mui/material";

const SupplierDB = () => {
  const [supplierData, setSupplierData] = useState({
    companyName: '',
    address: '',
    city: 'New York',
    state: 'NY',
    country: 'USA',
    businessType: 'Manufacturer',
    product: 'Widgets',
    shape: 'Round',
    variety: 'Standard',
    Standard: '',
    form: 'Solid',
    keyProperty: 'High Quality',
    contactPersonName: '',
    mobileNumber: '',
    creditPeriod: '',
    priceRange: '',
    lotHolding: '',
    certificates: 'ISO 9001',
    perOrderQualityVariation: '',
    reserve: '',
    licenses: 'Business License',
    timeToFullFillOrder: '',
    otherInfo: '',
  });

  const handleInputChange = (event) => {
    setSupplierData({
      ...supplierData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="KnowledgeGathering">
      <h3>Supplier Database</h3>
      <form className="SupplierContainer">
        <div className="fieldContainer">
          <MultilineTextFields
            value={supplierData.companyName}
            placeholder="Company Name"
            valueUpdater={handleInputChange}
            name="companyName"
          />
          <MultilineTextFields
            value={supplierData.contactPersonName}
            placeholder="Contact Person Name"
            valueUpdater={handleInputChange}
            name="contactPersonName"
          />
        </div>
        <div className="fieldContainer">
          <MultilineTextFields
            value={supplierData.address}
            placeholder="Address"
            valueUpdater={handleInputChange}
            name="address"
          />
          <MultilineTextFields
            value={supplierData.mobileNumber}
            placeholder="Mobile Number"
            valueUpdater={handleInputChange}
            name="mobileNumber"
          />
        </div>
        <div className="fieldContainer">
          <DropDown
            supplierData={supplierData}
            setSupplierData={setSupplierData}
            fieldName="country"
          />
          <DropDown
            supplierData={supplierData}
            setSupplierData={setSupplierData}
            fieldName="state"
          />
          <DropDown
            supplierData={supplierData}
            setSupplierData={setSupplierData}
            fieldName="city"
          />
        </div>
        <div className="fieldContainer">
          <DropDown
            supplierData={supplierData}
            setSupplierData={setSupplierData}
            fieldName="businessType"
          />
          <DropDown
            supplierData={supplierData}
            setSupplierData={setSupplierData}
            fieldName="product"
          />
          <DropDown
            supplierData={supplierData}
            setSupplierData={setSupplierData}
            fieldName="variety"
          />
        </div>
        <div className="fieldContainer">
          <DropDown
            supplierData={supplierData}
            setSupplierData={setSupplierData}
            fieldName="shape"
          />
          <DropDown
            supplierData={supplierData}
            setSupplierData={setSupplierData}
            fieldName="form"
          />
          <DropDown
            supplierData={supplierData}
            setSupplierData={setSupplierData}
            fieldName="keyProperty"
          />
        </div>

        <div className="fieldContainer">
          <DropDown
            supplierData={supplierData}
            setSupplierData={setSupplierData}
            fieldName="certificates"
          />
          <DropDown
            supplierData={supplierData}
            setSupplierData={setSupplierData}
            fieldName="licenses"
          />
          <DropDown
            supplierData={supplierData}
            setSupplierData={setSupplierData}
            fieldName="Standard"
          />
        </div>
        <div className="fieldContainer">
          <MultilineTextFields
            value={supplierData.creditPeriod}
            placeholder="Credit Period"
            valueUpdater={handleInputChange}
            name="creditPeriod"
          />
          <MultilineTextFields
            value={supplierData.priceRange}
            placeholder="Price Range"
            valueUpdater={handleInputChange}
            name="priceRange"
          />

          <MultilineTextFields
            value={supplierData.lotHolding}
            placeholder="Lot Holding"
            valueUpdater={handleInputChange}
            name="lotHolding"
          />
        </div>
        <div className="fieldContainer">
          <MultilineTextFields
            value={supplierData.perOrderQualityVariation}
            placeholder="Per Order Quality Variation"
            valueUpdater={handleInputChange}
            name="perOrderQualityVariation"
          />
          <MultilineTextFields
            value={supplierData.reserve}
            placeholder="Reserve"
            valueUpdater={handleInputChange}
            name="reserve"
          />
        </div>
        <div className="fieldContainer">
          <MultilineTextFields
            value={supplierData.otherInfo}
            placeholder="Other Info"
            valueUpdater={handleInputChange}
            name="otherInfo"
          />
          <MultilineTextFields
            value={supplierData.otherInfo}
            placeholder="Time To Full Fill Order"
            valueUpdater={handleInputChange}
            name="timeToFullFillOrder"
          />
        </div>
        <div className="fieldContainer">
        <Button
          variant="contained"
          onClick={""}
          style={{ padding: "1rem 0" }}
        >
          Add Supplier
        </Button>
        </div>
      </form>
    </div>
  );
};

export default SupplierDB;
