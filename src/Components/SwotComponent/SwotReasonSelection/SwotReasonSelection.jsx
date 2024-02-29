import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./SwotReasonSelection.css";
const SwotReasonSelection = () => {
  const [selectionReason, setSelectionReason] = useState([
    false,
    false,
    false,
    false,
  ]);

  const changeReason = (index) => {
    const newSelectionReason = [...selectionReason];
    newSelectionReason[index] = !newSelectionReason[index];
    setSelectionReason(newSelectionReason);
  };
  return (
    <div className="SwotReason">
      <FormGroup className="SwotReason">
        <div className="selection">
          <FormControlLabel
            control={
              <Checkbox
                checked={selectionReason[0]}
                onChange={() => changeReason(0)}
              />
            }
            label="Availability"
          />
        </div>
        <div className="selection">
          <FormControlLabel
            control={
              <Checkbox
                checked={selectionReason[1]}
                onChange={() => changeReason(1)}
              />
            }
            label="Interest"
          />
        </div>
        <div className="selection">
          <FormControlLabel
            control={
              <Checkbox
                checked={selectionReason[2]}
                onChange={() => changeReason(2)}
              />
            }
            label="Demand"
          />
        </div>
        <div className="selection">
          <FormControlLabel
            control={
              <Checkbox
                checked={selectionReason[3]}
                onChange={() => changeReason(3)}
              />
            }
            label="Knowledge"
          />
        </div>
      </FormGroup>
    </div>
  );
};

export default SwotReasonSelection;
