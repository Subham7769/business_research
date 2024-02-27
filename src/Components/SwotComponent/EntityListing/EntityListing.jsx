import React from "react";
import "./EntityListing.css";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const EntityListing = ({ name }) => {
  return (
    <div className="entityListing">
      <h5 className="entityListingHeader">{name}</h5>
      <FormGroup>
        <ul>
          <li>
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Interest"
            />
          </li>
          <li>
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Interest"
            />
          </li>
        </ul>
      </FormGroup>
    </div>
  );
};

export default EntityListing;
