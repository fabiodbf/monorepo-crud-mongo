import React, { useEffect, useState } from "react";
import List from "./list";
import { fetchTasks } from "../services/api";

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
    <div>
      <h1>Task List</h1>
      <List list={tasks.map((task) => task.text)} />
      <button>Some future button component here</button>
    </div>
  );
}

export default Container;
