import { useContext, useState } from "react";
import EditableList from "../EditableFields/EditableList";
import Context from "../../../Context/Context";
import "./SWOTComponent.css";
import { Button } from "@mui/material";
import { useSelector,useDispatch } from "react-redux";

//we need full product state to update 
//we need updateProduct function to update full product state in save function
//we need swot of selected product based on selectedProductId
//
const SWOTComponent = () => {
  const selectedProductId = useSelector(state=>state.ProductSlice.selectedProductId)
  const product = useSelector(state=>state.ProductSlice.products.filter((item)=>item.id === selectedProductId)[0])
  const [swot , setSwot] = useState(product.swot)
  console.log(selectedProductId);
  console.log(swot);
  // const { swot,setSwot } = useContext(Context); 
  return (
    <div className="Swot">
      <h3>Swot Analysis</h3>
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
          mainData ={swot}
          setMainData = {setSwot}
        />
        <EditableList
          items={swot.weakness}
          name={"weakness"}
          color={"var(--yellow)"}
          mainData ={swot}
          setMainData = {setSwot}
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
          mainData ={swot}
          setMainData = {setSwot}
        />
        <EditableList
          items={swot.threat}
          name={"threat"}
          color={"var(--red)"}
          mainData ={swot}
          setMainData = {setSwot}
        />
      </div>
      <div className="SaveButton">
      <Button 
      variant="contained"
    onClick={()=>{alert("Swot saved");}}
      >Save</Button>
      </div>
    </div>
  );
};
export default SWOTComponent;
