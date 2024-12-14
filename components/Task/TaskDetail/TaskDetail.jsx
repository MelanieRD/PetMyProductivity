import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./TaskDetail.css";
import { taskDelete } from "../../../src/utils/utils";

// https://docs.fontawesome.com/web/use-with/react Iconos REACT
export const TaskDetail = ({ task, TokenUser, handleTaskList }) => {
  const idTask = useRef("null");
  const [isButtonDisabled, setIsButtonDisabled] = useState("false");
  const [detail, setDetail] = useState("false");

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
          Details
        </div>
      </div>
    </>
  );
};
