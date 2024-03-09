import Accordian from "../Accordian/Accordian";
import Textbox from "../TextBox/TextBoxLarge/Textbox";
import VarietyData from "../VarietyData/VarietyData";
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
      />

    </div>
  );
};
export default KnowledgeGathering;
