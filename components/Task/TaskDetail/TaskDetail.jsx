import { use, useEffect, useRef } from "react";
import "./TaskDetail.css";
import { taskDelete } from "../../../src/utils/utils";

// https://docs.fontawesome.com/web/use-with/react Iconos REACT
export const TaskDetail = ({ task, TokenUser, handleTaskList }) => {
  const idTask = useRef("null");

  const handleTaskDetail = () => {
    console.log("Abrir detalle");
    console.log(TokenUser);
  };
  useEffect(() => {}, []);

  const handleEliminar = async () => {
    const idTaskC = idTask.current.innerText;
    if (idTaskC.length >= 1) {
      await taskDelete(TokenUser, idTaskC);
      handleTaskList();
    }
  };

  const handleModificar = () => {
    console.log("Modificar tarea");
  };
  return (
    <>
      <hr />

      <div className="Task">
        <div className="headTask">
          <p ref={idTask} className="idTask">
            {task._id}
          </p>
          <label>
            <input type="checkbox" name="CheckBox" /> <a className="titleTask">{task.title}</a>
          </label>

          <div className="iconsDiv">
            <i onClick={handleEliminar} className="fa-solid fa-trash-can buttonIcon"></i>
            <i onClick={handleModificar} className="fa-solid fa-pen-to-square buttonIcon"></i>
          </div>
        </div>

        <div className="infoTask">
          <div className="descTask">{task.description}</div>
          <div className="timeTask">{task.timeDue}</div>
        </div>

        <div className="infoCoin">
          <img src="" alt="" />
          <p> Coins: 100</p>
        </div>

        <div className="detailsbtn" onClick={handleTaskDetail}>
          {" "}
          Details
        </div>
      </div>
    </>
  );
};
