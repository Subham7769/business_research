import AccordianTable from "../AccordianTables/Accordian";
import AccordianTextbox from "../AccordianTextboxes/Accordian";
import TabComponent from "../TabComponent/TabComponent";
import "./KnowledgeGathering.css";

const KnowledgeGathering = () => {
  return (
    <div className="KnowledgeGathering">
      <h3>Knowledge Gathering</h3>
      <AccordianTextbox />
      <AccordianTable />
      <TabComponent />
    </div>
  );
};
export default KnowledgeGathering;
