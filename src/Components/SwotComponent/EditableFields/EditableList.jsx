import { useContext, useEffect, useState } from "react";
import EditableItem from "./EditableItem";
import Context from "../../../Context/Context";
import "./Edit.css";
import IconButton from "../../Common/Button/IconButton";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const EditableList = ({ items, name }) => {
  const { swot, setSwot } = useContext(Context);
  const [listItems, setListItems] = useState(items);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("swot has been updated", swot);
    switch (name) {
      case "strength":
        setListItems(swot.strength);
        break;
      case "weakness":
        setListItems(swot.weakness);
        break;
      case "opportunity":
        setListItems(swot.opportunity);
        break;
      case "threat":
        setListItems(swot.threat);
        break;
      default:
        console.log("updated List Items ", listItems);
        break;
    }
  }, [swot]);

  const handleItemChange = (index, updateText) => {
    let newSwot = { ...swot };

    //check if user make field/updateText "empty" then update "swot" object & listItems
    if (updateText === "") {
      switch (name) {
        case "strength":
          newSwot.strength = newSwot.strength.filter((_, i) => i !== index);
          break;
        case "weakness":
          newSwot.weakness = newSwot.weakness.filter((_, i) => i !== index);
          break;
        case "opportunity":
          newSwot.opportunity = newSwot.opportunity.filter(
            (_, i) => i !== index,
          );
          break;
        case "threat":
          newSwot.threat = newSwot.threat.filter((_, i) => i !== index);
          break;

        default:
          console.log("Not updated");
          break;
      }
    } else {
      // updateItems[index] = updateText;
      switch (name) {
        case "strength":
          newSwot.strength[index] = updateText;
          break;
        case "weakness":
          newSwot.weakness[index] = updateText;
          break;
        case "opportunity":
          newSwot.opportunity[index] = updateText;
          break;
        case "threat":
          newSwot.threat[index] = updateText;
          break;

        default:
          console.log("Not updated");
          break;
      }
    }
    setSwot(newSwot);
    // setListItems(updateItems);
  };

  const addNewItem = (e) => {
    if (e.key === "Enter" || e === "onClick") {
      console.log("addNewItem function called");
      let newSwot = { ...swot };
      switch (name) {
        case "strength":
          newSwot.strength = [...newSwot.strength, inputValue];
          setSwot(newSwot);
          setInputValue("");
          break;
        case "weakness":
          newSwot.weakness = [...newSwot.weakness, inputValue];
          setSwot(newSwot);
          setInputValue("");
          break;
        case "opportunity":
          newSwot.opportunity = [...newSwot.opportunity, inputValue];
          setSwot(newSwot);
          setInputValue("");
          break;
        case "threat":
          newSwot.threat = [...newSwot.threat, inputValue];
          setSwot(newSwot);
          setInputValue("");
          break;

        default:
          console.log("error");
          break;
      }
    }
  };

  return (
    <div className="editable_list_container">
      <div className="editable_list">
        <ol>
          {listItems.map((item, index) => (
            <EditableItem
              key={index}
              item={item}
              onItemChange={(updateText) => handleItemChange(index, updateText)}
            />
          ))}
        </ol>
      </div>
      <div className="addNew">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={addNewItem}
        />
        <IconButton>
          <ArrowForwardOutlinedIcon
            onClick={() => {
              addNewItem("onClick");
            }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default EditableList;
