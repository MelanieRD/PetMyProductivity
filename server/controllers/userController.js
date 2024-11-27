// La pondre aqui de prueba, noc enojen alv

const { mongoDBConection, closeMongoDBconection } = require("../mongoDBConection");

// const collection = database.collection("<UserTry>");

const getUsers = async (req, res) => {
  let data;
  try {
    const db = await mongoDBConection();
    const collection = db.collection("<UserTry>");
    data = await collection.find().toArray();
    res.status(200).send(data);
  } catch (error) {
    console.log("error: " + error);
  } finally {
    closeMongoDBconection();
  }
};

const getUsersById = async (req, res) => {
  const id = req.params.id;
  res.send("Hellooooow by ID: " + id);
};

const postUser = async (req, res) => {
  try {
    const db = await mongoDBConection();
    const collection = await db.collection("<UserTry>");
    const newUser = req.body;
    const result = await collection.insertOne(newUser);
    console.log(result);

    res.status(200).send(newUser);
  } catch (error) {
    res.status(500).send({ error: "error al insertar usuario, " + error });
  }
};

const putUser = async (req, res) => {
  res.send("Im a Put");
};

const deleteUser = async (req, res) => {
  res.send("Im a delete");
};

// const post = (req, res) => {
//   try {
//   } catch (error) {}
//   const result = await;
// };

module.exports = { getUsers, getUsersById, postUser, putUser, deleteUser };
