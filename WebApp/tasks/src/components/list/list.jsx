import React from "react";
import styles from "./list.module.css";
import Checkbox from "../checkbox/checkbox";
import Textbox from "../textbox/textbox";

function List({ list, handleCompleteToggle, handleTextChange }) {
  return (
    <div>
      {Array.isArray(list) && list.length > 0 ? (
        <div>
          <ul className={styles.list}>
            {list.map((item, key) => {
              return (
                <li key={key} id={`list-item-${key}`}>
                  <div className={styles.input_div_ckbox}>
                    <Checkbox
                      item={item}
                      handleCompleteToggle={handleCompleteToggle}
                    />
                  </div>
                  <div className={styles.input_div_txt}>
                    <Textbox item={item} handleTextChange={handleTextChange} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>No tasks found.</div>
      )}
    </div>
  );
}

export default List;
