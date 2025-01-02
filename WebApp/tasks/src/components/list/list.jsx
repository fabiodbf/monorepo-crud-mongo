import React from "react";
import styles from "./list.module.css";

function List({ list }) {
  return (
    <div>
      {Array.isArray(list) && list.length > 0 ? (
        <ul className={styles["list"]}>
          {list.map((item, key) => {
            return (
              <li key={key} id={`list-item-${key}`}>
                <input
                  type="checkbox"
                  id={`ckbox-${key}`}
                  name={`ckbox-${key}`}
                  value={`ckbox-${item.id}`}
                />
                <label for="vehicle1" className={styles["finished"]}>
                  {item}
                </label>
                <br />
              </li>
            );
          })}
        </ul>
      ) : (
        <div>No tasks found.</div>
      )}
    </div>
  );
}

export default List;
