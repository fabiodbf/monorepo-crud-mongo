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

  const handleTaskToggle = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div id={styles["container"]}>
      <div id={styles["top"]}>
        <div id="container-heading">
          <h1>Task List</h1>
        </div>
        <div id="top-controls">
          <button className={styles["new-button"]}>
            <i class="fa fa-trash" aria-hidden="true"></i>
            &nbsp;
            <span>delete all finished</span>
          </button>
        </div>
      </div>
      <div id={styles["list-wrapper"]}>
        <List list={tasks} onTaskToggle={handleTaskToggle} />
      </div>
      <div id={styles["bottom-controls"]}>
        <div>
          <button className={styles["new-button"]}>
            <i className="fa fa-plus-square"></i>
            &nbsp; add task
          </button>
        </div>
      </div>
    </div>
  );
}

export default Container;
