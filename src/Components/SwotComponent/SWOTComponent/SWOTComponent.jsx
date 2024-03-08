import { useContext } from "react";
import EditableList from "../EditableFields/EditableList";
import Context from "../../../Context/Context";
import "./SWOTComponent.css";
import SwotReasonSelection from "../SwotReasonSelection/SwotReasonSelection";

const SWOTComponent = () => {
  const { swot } = useContext(Context); 
  console.log(swot);
  return (
    <div className="Swot">
      <SwotReasonSelection />
      <div className="SwotComponent">
        <div className="labelTiles"></div>
        <div className="labelTiles" style={{ backgroundColor: "var(--green)" }}>
          <div>
            <h4>Helpful</h4>
            <p>To achieving the objective</p>
          </div>
        </div>
        <div
          className="labelTiles"
          style={{ backgroundColor: "var(--yellow)" }}
        >
          <div>
            <h4>Harmful</h4>
            <p>To achieving the objective</p>
          </div>
        </div>
        <div className="labelTiles" style={{ backgroundColor: "var(--green)" }}>
          <div className="vertical">
            <h4>Internal origin</h4>
            <p>Attribute of the organization</p>
          </div>
        </div>
        <EditableList
          items={swot.strength}
          name={"strength"}
          color={"var(--green)"}
        />
        <EditableList
          items={swot.weakness}
          name={"weakness"}
          color={"var(--yellow)"}
        />
        <div className="labelTiles" style={{ backgroundColor: "var(--blue)" }}>
          <div className="vertical">
            <h4>External origin</h4>
            <p>Attribute of the environment</p>
          </div>
        </div>
        <EditableList
          items={swot.opportunity}
          name={"opportunity"}
          color={"var(--blue)"}
        />
        <EditableList
          items={swot.threat}
          name={"threat"}
          color={"var(--red)"}
        />
      </div>
    </div>
  );
};
export default SWOTComponent;
