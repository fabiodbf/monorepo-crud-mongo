import React from "react";
import styles from "./checkbox.module.css";

function Checkbox({ item, onTaskToggle }) {
  return (
    <input
      type="checkbox"
      id={`ckbox-${item.id}`}
      name={`ckbox-${item.id}`}
      value={`ckbox-${item.id}`}
      checked={item.completed}
      className={styles.checkbox}
      onChange={() => onTaskToggle(item.id)}
    />
  );
}

export default Checkbox;
