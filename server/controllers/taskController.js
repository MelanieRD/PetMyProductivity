const { closeMongoDBconection, mongoDBConection } = require("../mongoDBConection");
const { get } = require("../routes");

const getAllTasks = async (req, res) => {
  try {
    const db = await mongoDBConection();
    const tasks = await db.collection("tasks").find({}).toArray();
    res.status(200).send(tasks);
  } catch (error) {
    console.error("Error al obtener las tareas" + error);
  } finally {
    closeMongoDBconection();
  }
};

const getTaskById = async (req, res) => {
  try {
    const db = await mongoDBConection();
    const task = await db.collection("tasks").findOne({ userID: req.params.id });
    res.status(200).send(task);
  } catch (error) {
    console.error("Error al obtener la tarea" + error);
  } finally {
    closeMongoDBconection();
  }
};

const createTask = async (req, res) => {
  try {
    const db = await mongoDBConection();
    const task = await db.collection("tasks").insertOne(req.body);
    res.status(201).send(task);
  } catch (error) {
    console.error("Error al crear la tarea" + error);
  } finally {
    closeMongoDBconection();
  }
};

const updateTask = async (req, res) => {
  const db = await mongoDBConection();
  const task = await db.collection("tasks").findOne({ userID: req.params.id });
  try {
    const updateAddTask = req.body;

    if (!task) {
      throw new Error("userID is required");
    }

    try {
      const counterT = await db.collection("tasks").findOneAndUpdate({ userID: req.params.id }, { $inc: { counter: 1 } }, { returnDocument: "after", upsert: true });
      const counterValue = counterT.counter;
      updateAddTask._id = counterValue;
      const updateTaskCounterField = `task_${counterValue}`;
      const taskC = await db.collection("tasks").updateOne({ userID: req.params.id }, { $push: { tasks: updateAddTask } });

      // if (result.modifiedCount === 0) {
      //   throw new Error("No se pudo encontrar Tarea del usuario" + userID);
      // }

      res.status(200).json({ message: "Tarea agregada", result: taskC });
    } catch (error) {
      console.error("Error al agregar la tarea " + error);
    }
  } catch (error) {
    console.error("Error al agregar la tareaaaaa " + error);
  } finally {
    closeMongoDBconection();
  }
};

const deleteTask = async (req, res) => {
  try {
    const db = await mongoDBConection();
    const userID = req.params.userID;
    const taskID = parseInt(req.params.taskID);
    const result = await db.collection("tasks").updateOne(
      { userID: userID },
      { $pull: { tasks: { _id: taskID } } } // Elimina la tarea con el ID especificado
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }
    res.status(200).json({ message: "Tarea eliminada" });
  } catch (error) {
    console.error("Error al eliminar la tarea " + error);
    res.status(500).json({ error: "Error al eliminar la tarea" });
  } finally {
    closeMongoDBconection();
  }
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };
