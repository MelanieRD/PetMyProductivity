import { useState } from "react";
import "./Task.css";
import { TaskDetail } from "./TaskDetail/TaskDetail";
import { Link, useNavigate } from "react-router-dom";
import { TextInput } from "../TextInput/TextInput";

export const Task = () => {
  const [isVisible, setisVisible] = useState(false);
  const [addVisible, setAddVisible] = useState(true);

  const togglePanel = () => {
    console.log(isVisible + "    cambio");
    setisVisible(!isVisible);
  };

  const handleAdd = () => {
    setAddVisible(!addVisible);
    console.log("Adding uwuwuwu");
  };

  const handleModify = () => {
    console.log("Editing uwuwuwu");
  };

  const handleDelete = () => {
    console.log("Deleting uwuwuwu");
  };

  const handleCancel = () => {
    setAddVisible(!addVisible);
  };

  return (
    <>
      <div className={`taskContainer ${isVisible ? "visible" : "hidden"}`} id="taskContainer">
        <div className="taskHeader">
          <div className="toggle-button" onClick={togglePanel}>
            {" "}
            {isVisible ? ">" : "<"}
          </div>
        </div>

        {addVisible ? <h2>Today Tasks</h2> : <h2>New Task</h2>}
        {addVisible ? (
          <>
            <div className="taskList">
              <TaskDetail />
            </div>
            <hr />
            <div className="taskBotons">
              <div className="Add taskB" onClick={handleAdd}>
                Add
              </div>

              <div className="Modify taskB" onClick={handleModify}>
                Modify
              </div>

              <div className="Delete taskB" onClick={handleDelete}>
                Delete
              </div>
            </div>{" "}
          </>
        ) : (
          <>
            <div className="taskList">
              <TextInput _width={250} _padding={4} _fontsize={20} pHolderTxt={"Titulo"} />
              <TextInput _width={250} _padding={4} _fontsize={20} pHolderTxt={"Descripcion"} />
              <TextInput _width={250} _padding={4} _fontsize={20} pHolderTxt={"Prioridad"} />

              <TextInput _width={250} _padding={4} _fontsize={20} pHolderTxt={"Steps Generados"} />
            </div>
            <div className="taskBotons">
              <div className="Add taskB" onClick={handleAdd}>
                Add
              </div>
              <div className="Add taskB" onClick={handleCancel}>
                Cancel
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
