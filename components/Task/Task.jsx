import { useState } from "react";
import "./Task.css";
import { TaskDetail } from "./TaskDetail/TaskDetail";
import { Link } from "react-router-dom";

export const Task = () => {
  const [isVisible, setisVisible] = useState(false);

  const togglePanel = () => {
    console.log(isVisible + "    cambio");
    setisVisible(!isVisible);
  };

  const handleAdd = () => {
    console.log("Adding uwuwuwu");
  };

  const handleModify = () => {
    console.log("Editing uwuwuwu");
  };

  const handleDelete = () => {
    console.log("Deleting uwuwuwu");
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
        </div>

        <hr />
        <div className="taskBotons">
          <Link to="TaskAdd">
            <div className="Add taskB" onClick={handleAdd}>
              Add
            </div>
          </Link>
          <div className="Modify taskB" onClick={handleModify}>
            Modify
          </div>

          <div className="Delete taskB" onClick={handleDelete}>
            Delete
          </div>
        </div>
      </div>
    </>
  );
};
