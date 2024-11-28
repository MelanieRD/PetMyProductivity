import { useState } from "react";
import "./Task.css";
import { TaskDetail } from "./TaskDetail/TaskDetail";

export const TaskAdd = () => {
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

          <h2>Add new Task</h2>
        </div>

        <div className="taskList">HERE GOES THE FORM</div>

        <hr />
        <div className="taskBotons">
          <div className="Add taskB" onClick={handleAdd}>
            Add
          </div>

          <div className="Modify taskB" onClick={handleModify}>
            Add another
          </div>

          <div className="Delete taskB" onClick={handleDelete}>
            Cancel
          </div>
        </div>
      </div>
    </>
  );
};
