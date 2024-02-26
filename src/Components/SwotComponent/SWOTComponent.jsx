import { useContext } from "react";
import EditableList from "./EditableFields/EditableList";
import Context from "../../Context/Context";
import "./SWOTComponent.css";

const SWOTComponent = () => {
  const { swot } = useContext(Context);
  return (
    <div className="SwotComponent">
      <EditableList items={swot.strength} name={"strength"} color={"red"} />
      <EditableList items={swot.weakness} name={"weakness"} />
      <EditableList items={swot.opportunity} name={"opportunity"} />
      <EditableList items={swot.threat} name={"threat"} />
    </div>
  );
};
export default SWOTComponent;
