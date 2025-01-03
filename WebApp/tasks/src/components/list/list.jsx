import React from "react";
import styles from "./list.module.css";

function List(list) {
  return (
    <div>
      {Array.isArray(list.list) && list.list.length > 0 ? (
        <div>
          <ul className={styles["list"]}>
            {list.list.map((item, key) => {
              return (
                <li key={key} id={`list-item-${key}`}>
                  <input
                    type="checkbox"
                    id={`ckbox-${key}`}
                    name={`ckbox-${key}`}
                    value={`ckbox-${item.id}`}
                    checked={item.completed}
                  />
                  <label
                    for="vehicle1"
                    className={item.completed ? styles["finished"] : ""}
                  >
                    {item.text}
                  </label>
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
