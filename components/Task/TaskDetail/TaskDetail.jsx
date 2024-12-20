import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./TaskDetail.css";
import { taskAdd, taskDelete, taskModifyStatus } from "../../../src/utils/utils";

// https://docs.fontawesome.com/web/use-with/react Iconos REACT
export const TaskDetail = ({ task, TokenUser, handleTaskList, done }) => {
  const idTask = useRef("null");
  const [isButtonDisabled, setIsButtonDisabled] = useState("false");
  const [detail, setDetail] = useState("false");
  const [Checked, setChecked] = useState(false);

  const handleCheckboxChange = async (event) => {
    if (task.status !== "Done") {
      try {
        await taskModifyStatus(TokenUser, task._id, "Done");
        handleTaskList();
      } catch (error) {
        console.error("Error al actualizar la tarea", error);
      }
    } else {
      try {
        await taskModifyStatus(TokenUser, task._id, "To Do");
        handleTaskList();
      } catch (error) {
        console.error("Error al actualizar la tarea", error);
      }
    }

    setIsButtonDisabled(false);

    console.log("Tarea: task.status= " + task.status);
    console.log("Tarea: " + task);
  };

  const navigate = useNavigate();

  const handleTaskDetail = () => {
    console.log("Abrir detalle= " + detail);
    setDetail(!detail);

    setTimeout(() => {
      setDetail(!detail);
    }, 2000);
    console.log(TokenUser);
  };
  useEffect(() => {}, []);

  const handleRoute = () => {
    const route = "Details/" + task._id;
  };

  const handleEliminar = async () => {
    setIsButtonDisabled(true);
    const idTaskC = idTask.current.innerText;
    if (idTaskC.length >= 1) {
      await taskDelete(TokenUser, idTaskC);
      handleTaskList();
    }
    setIsButtonDisabled(false);
  };

  const handleModificar = () => {
    const data = { id: task._id, token: TokenUser };
    navigate(`Details/${task._id}/`, { state: data }); // lo hice asi para practicar pero se puede hacer con un solo parametro
  };

  return (
    <>
      <hr />

      <div className={`Task ${task.status === "Done" ? "disabled" : ""}`}>
        <div className="headTask">
          <p ref={idTask} className="idTask">
            {task._id}
          </p>
          <label>
            <input type="checkbox" name="CheckBox" checked={task.status === "Done" ? true : false} onChange={handleCheckboxChange} /> <a className="titleTask">{task.title}</a>
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
          <p> Coins: {task.taskRewards.find((reward) => reward.type === "Gold").amount}</p>
          <p> Xp: {task.taskRewards.find((reward) => reward.type === "XP").amount}</p>
          <p>{task.status}</p>
        </div>

        <div className="detailsbtn" onClick={handleTaskDetail}>
          Details
        </div>
      </div>
    </>
  );
};
