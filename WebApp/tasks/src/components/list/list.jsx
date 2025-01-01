import React from "react";

function List({ list }) {
  return (
    <div>
      {Array.isArray(list) && list.length > 0 ? (
        <ul>
          {list.map((item, key) => {
            return (
              <li key={key} id={`list-item-${key}`}>
                {item}
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
