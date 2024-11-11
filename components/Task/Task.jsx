import { useState } from "react";
import "./Task.css";
import { TaskDetail } from "./TaskDetail/TaskDetail";

export const Task = () => {
  const [isVisible, setisVisible] = useState(false);

  const togglePanel = () => {
    console.log(isVisible + "    cambio");
    setisVisible(!isVisible);
  };

  return (
    <>
      <div className={`taskContainer ${isVisible ? "visible" : "hidden"}`} id="taskContainer">
        <div className="taskHeader">
          <div className="toggle-button" onClick={togglePanel}>
            {" "}
            {isVisible ? ">" : "<"}
          </div>

          <h2>Today Tasks</h2>
        </div>

        <div className="taskList">
          <TaskDetail />
          <TaskDetail />
          <TaskDetail />
        </div>

        <div className="taskBotons">
          <div className="Add taskB">Add</div>

          <div className="Modify taskB">Modify</div>

          <div className="Delete taskB">Delete</div>
        </div>
      </div>
    </>
  );
};
