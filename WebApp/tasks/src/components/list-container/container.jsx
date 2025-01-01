import React, { useEffect, useState } from "react";
import List from "../list/list";
import { fetchTasks } from "../../services/api";
import styles from "./container.module.css";

function Container() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    };

    loadTasks();
  }, []);

  return (
    <div id={styles["container"]}>
      <div id={styles["list-container-header"]}>
        <div>
          <h1>Task List</h1>
        </div>
        <div id={styles["header-controls"]}>
          <button>Icon here</button>
        </div>
      </div>
      <div id={styles["list-wrapper"]}>
        <List list={tasks.map((task) => task.text)} />
      </div>
      <div id={styles["bottom-controls"]}>
        <div>
          <button>Add task</button>
        </div>
      </div>
    </div>
  );
}

export default Container;
