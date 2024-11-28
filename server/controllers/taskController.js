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
    const task = await db.collection("tasks").findOne({ _id: req.params.id });
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
  try {
    const db = await mongoDBConection();
    const task = await db.collection("tasks").updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(200).send(task);
  } catch (error) {
    console.error("Error al actualizar la tarea" + error);
  } finally {
    closeMongoDBconection();
  }
};

const deleteTask = async (req, res) => {
  try {
    const db = await mongoDBConection();
    const task = await db.collection("tasks").deleteOne({ _id: req.params.id });
    res.status(200).send(task);
  } catch (error) {
    console.error("Error al eliminar la tarea" + error);
  } finally {
    closeMongoDBconection();
  }
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };
