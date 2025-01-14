import React, { useState, useMemo } from "react";
import debounce from "lodash/debounce";
import styles from "./textbox.module.css";

function Textbox({ item, handleTextChange }) {
  const [value, setValue] = useState(item.text);

  const debouncedChangeHandler = useMemo(
    () =>
      debounce((id, inputValue) => {
        handleTextChange(id, inputValue);
      }, 300),
    [handleTextChange]
  );

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    debouncedChangeHandler(item.id, inputValue);
  };

  return (
    <div contentEditable="true">{value}</div>
    // <input
    //   type="text"
    //   id={`txt-${item.id}`}
    //   value={value}
    //   onChange={handleChange}
    //   readOnly={item.completed}
    //   className={`${styles.textbox} ${item.completed ? styles.completed : ""}`}
    // />
  );
}

export default Textbox;
