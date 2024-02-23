import { useState } from "react";
import "./Edit.css";

const EditableItem = ({ item, onItemChange }) => {
  const [isEditing, setEditing] = useState(false);
  const [text, setText] = useState(item);

  const handleBlur = () => {
    setEditing(false);
    onItemChange(text);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return isEditing ? (
    <input
      type="text"
      value={text}
      onBlur={handleBlur}
      onChange={handleChange}
      autoFocus
    />
  ) : (
    <li onDoubleClick={() => setEditing(true)}>{text}</li>
  );
};

export default EditableItem;
