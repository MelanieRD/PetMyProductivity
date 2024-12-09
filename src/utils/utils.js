//Buttons;

export const handleCreateNewPet = async (newUser) => {
  try {
    const response = await fetch("http://localhost:3000/app/users/0", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", //Indicando que es un JSON
      },
      body: JSON.stringify(newUser), //pasandolo a mi req.body como JSON
    });

    if (!response.ok) {
      throw new Error("Error al crear");
    }

    const data = await response.json();
    console.log("Mascota creada:", data);

    return true;
  } catch (error) {
    console.error("error  al crear mascota" + error);
  }
};

export const taskCreate = async (newTask) => {
  try {
    const response = await fetch("http://localhost:3000/app/tasks/0", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    if (!response.ok) {
      throw new Error("Error al crear");
    }

    const data = await response.json();
    console.log("Tarea creada:", data);
    return true;
  } catch (error) {
    console.error("error  al crear Tarea" + error);
  }
};

export const taskAdd = async (userID, updateAddTask) => {
  try {
    const response = await fetch(`http://localhost:3000/app/tasks/${userID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateAddTask),
    });

    if (!response.ok) {
      throw new Error("Error al add new task");
    }

    const data = await response.json();
    console.log("Tarea added:", data);
    return true;
  } catch (error) {
    console.error("error  al add Tarea" + error);
  }
};

export const taskDelete = async (userID, taskID) => {
  console.log("userID: ", userID);
  console.log("taskID: ", taskID);
  try {
    const response = await fetch(`http://localhost:3000/app/tasks/${userID}/${taskID}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Error al delete task");
    }

    const data = await response.json();
    console.log("Tarea deleted:", data);
    return true;
  } catch (error) {
    console.error("error  al delete Tarea " + error);
  }
};

export const getTaskList = async (token) => {
  try {
    const response = await fetch(`http://localhost:3000/app/tasks/${token}`);
    if (!response.ok) {
      throw new Error("Error al obtener las tareas");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener las tareas", error);
  }
};

export const handlePetLogIng = () => {
  console.log("Pet Finded");
};
