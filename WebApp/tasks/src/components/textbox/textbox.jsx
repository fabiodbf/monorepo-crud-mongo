import React from "react";
import styles from "./textbox.module.css";

function Textbox({ item, handleTextChange }) {
  return (
    <input
      type="text"
      id={`txt-${item.id}`}
      value={item.text}
      onChange={handleTextChange}
      className={`${styles.textbox}`}
    />
  );
}

export default Textbox;
