import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const DropDown = ({ supplierData, setSupplierData, fieldName }) => {
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{fieldName}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={fieldName}
                value={supplierData[fieldName]}
                onChange={(e) => setSupplierData({
                    ...supplierData,
                    [fieldName]: e.target.value,
                })}
            >
                <MenuItem value="NY">NY</MenuItem>
                <MenuItem value="CA">CA</MenuItem>
                <MenuItem value="IL">IL</MenuItem>
            </Select>
        </FormControl>
    );
};

export default DropDown;