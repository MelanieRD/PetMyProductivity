import { useRef, useState } from "react";
import "./Task.css";
import { TaskDetail } from "./TaskDetail/TaskDetail";
import { Link, useNavigate } from "react-router-dom";
import { TextInput } from "../TextInput/TextInput";
import { TaskC } from "../../server/classes/TaskClass";
import { taskAdd } from "../../src/utils/utils";

export const Task = ({ token }) => {
  const [isVisible, setisVisible] = useState(false);
  const [addVisible, setAddVisible] = useState(true);

  const titleI = useRef("none");
  const descI = useRef("none");
  const priorityI = useRef("normal");

  const togglePanel = () => {
    console.log(isVisible + "    cambio");
    setisVisible(!isVisible);
  };

  const handleAdd = async () => {
    console.log("Token en Task.jsx: " + token);
    if (!addVisible) {
      try {
        let newTask = new TaskC(0, titleI.current.value, descI.current.value, new Date(), new Date(), priorityI.current.value, "To Do");
        const taskAdded = await taskAdd(token, newTask);
        if (taskAdded) {
          console.log("Tarea creada console del front");
        }
        console.log(newTask);
      } catch (error) {
        console.error("Error al crear la tarea", error);
      }
    }

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
              <TextInput _width={250} _padding={4} _fontsize={20} pHolderTxt={"Titulo"} refe={titleI} />
              <TextInput _width={250} _padding={4} _fontsize={20} pHolderTxt={"Descripcion"} refe={descI} />
              <TextInput _width={250} _padding={4} _fontsize={20} pHolderTxt={"Prioridad"} refe={priorityI} />

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
