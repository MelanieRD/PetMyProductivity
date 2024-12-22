import { useEffect, useRef, useState } from "react";
import "./Task.css";
import { TaskDetail } from "./TaskDetail/TaskDetail";
import { Link, useNavigate } from "react-router-dom";
import { TextInput } from "../TextInput/TextInput";
import { TaskC } from "../../server/classes/TaskClass";
import { getTaskList, taskAdd } from "../../src/utils/utils";
import { use } from "react";
import { useUser } from "../../src/pages/CreateContext";

export const Task = () => {
  const contextData = useUser();
  const token = contextData?.tokenUser;
  const [isVisible, setisVisible] = useState(false);
  const [addVisible, setAddVisible] = useState(true);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    if (!token) {
      console.error("El token no está definido. Asegúrate de iniciar sesión.");
      return;
    }
    //  console.log("Token definido en Task.jsx: " + token);

    handleTaskList();
  }, [token]);

  const handleTaskList = async () => {
    try {
      const data = await getTaskList(token);
      setTaskList(data.tasks);
    } catch (error) {
      console.error("Error al obtener la lista de tareas", error);
    }
  };

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
        handleTaskList();
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

  const handleDoneTask = (task) => {
    if (task.status === "To Do") {
      console.log("Tarea no completada" + task._id);
    } else if (task.status === "Done") {
      console.log("Tarea completada" + task._id);
    }
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
              {taskList.map((task, index) => (
                <TaskDetail key={index} task={task} TokenUser={token} handleTaskList={handleTaskList} />
              ))}
            </div>
            <hr />
            <div className="taskBotons">
              <div className="Add taskB" onClick={handleAdd}>
                Add
              </div>

              {/* <div className="Modify taskB" onClick={handleModify}>
                Modify
              </div>

              <div className="Delete taskB" onClick={handleDelete}>
                Delete
              </div> */}
            </div>{" "}
          </>
        ) : (
          <>
            <div className="taskList">
              <TextInput _width={250} _padding={4} _fontsize={20} pHolderTxt={"Titulo"} refe={titleI} maxLenght={20} />
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
