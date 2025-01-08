import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
const ItemType = "TASK";

const DndemoTask = ({
  task,
  index,
  moveTask,
  onIconClick,
  iconState,
  toggleComplete,
}) => {
  const [, drag] = useDrag({
    type: ItemType,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (item) => {
      if (item.index !== index) {
        moveTask(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "8px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <div
        onClick={() => onIconClick(task.id)}
        style={{
          cursor: "pointer",
          marginRight: "8px",
          color: iconState === task.id ? "red" : "gray",
        }}
      >
        <i
          class={`fa ${iconState === task.id ? "fa-trash" : "fa-ellipsis-v"}`}
          aria-hidden="true"
        ></i>
      </div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
        style={{ marginRight: "8px" }}
      />
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
    </div>
  );
};

const Dndemo = () => {
  const [tasks, setTasks] = useState([
    { id: "1", text: "Task 1", completed: false },
    { id: "2", text: "Task 2", completed: false },
    { id: "3", text: "Task 3", completed: false },
  ]);

  const [iconState, setIconState] = useState(null);

  const moveTask = (fromIndex, toIndex) => {
    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(fromIndex, 1);
    updatedTasks.splice(toIndex, 0, movedTask);
    setTasks(updatedTasks);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleIconClick = (id) => {
    if (iconState === id) {
      setTasks(tasks.filter((task) => task.id !== id));
      setIconState(null);
    } else {
      setIconState(id);
    }
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <DndemoTask
          key={task.id}
          index={index}
          task={task}
          moveTask={moveTask}
          onIconClick={handleIconClick}
          iconState={iconState}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default Dndemo;
