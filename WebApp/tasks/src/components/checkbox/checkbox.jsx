import React from "react";
import styles from "./checkbox.module.css";

function Checkbox({ item, handleCompleteToggle }) {
  return (
    <input
      type="checkbox"
      id={`ckbox-${item.id}`}
      name={`ckbox-${item.id}`}
      value={`ckbox-${item.id}`}
      checked={item.completed}
      className={styles.checkbox}
      onChange={() => handleCompleteToggle(item.id)}
    />
  );
}

export default Checkbox;
