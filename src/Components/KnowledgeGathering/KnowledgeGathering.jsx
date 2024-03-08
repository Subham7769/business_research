import AccordianTable from "../AccordianTables/Accordian";
import TabComponent from "../TabComponent/TabComponent";
import Accordian from "../Accordian/Accordian";
import Textbox from "../TextBox/Textbox";

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
      <AccordianTable />
      <TabComponent />
    </div>
  );
};
export default KnowledgeGathering;
