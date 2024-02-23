import { useContext } from "react";
import EditableList from "./EditableFields/EditableList";
import Context from "../../Context/Context";
import "./SWOTComponent.css";

const SWOTComponent = () => {
  const { swot } = useContext(Context);
  return (
    <div className="SwotComponent">
      <EditableList items={swot.strength} name={"strength"} />
      <EditableList items={swot.weakness} />
      <EditableList items={swot.opportunity} />
      <EditableList items={swot.threat} />
    </div>
  );
};
export default SWOTComponent;
