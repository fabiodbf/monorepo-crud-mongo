import React, { useEffect, useState } from "react";
import styles from "./container.module.css";
import { fetchTasks } from "../../services/api";
import List from "../list/list";
import Parenthesisbutton from "../parenthesisbutton/parenthesisbutton";

function Container() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    };

    loadTasks();
  }, []);

  const handleCompleteToggle = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleTextChange = (taskId, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id == taskId ? { ...task, text: newText } : task
      )
    );
  };

  const handleTaskDeleteAllFinished = () => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.completed !== true)
    );
  };

  return (
    <div id="container" className={styles.container}>
      <div id="top" className={styles.top}>
        <div id="containerheader" className={styles.containerheader}>
          <h1>Task List</h1>
        </div>
        <div id="topcontrols" className={styles.topcontrols}>
          <Parenthesisbutton
            text="delete all finished"
            action={handleTaskDeleteAllFinished}
            icon="fa-trash"
          />
        </div>
      </div>
      <div className={styles.listwrapper}>
        <List
          list={tasks}
          handleCompleteToggle={handleCompleteToggle}
          handleTextChange={handleTextChange}
        />
      </div>
      <div id="bottomcontrols" className={styles.bottomcontrols}>
        <div>
          <Parenthesisbutton text="add task" icon={"fa-plus-square"} />
        </div>
      </div>
    </div>
  );
}

export default Container;
