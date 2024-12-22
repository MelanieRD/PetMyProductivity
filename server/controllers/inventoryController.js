const { mongoDBConection } = require("../mongoDBConection");

const getInventoryByToken = async (req, res) => {
  try {
    const db = await mongoDBConection();
    const collection = db.collection("Inventory");
    console.log(req.params.token);
    const result = await collection.find({ token: req.params.token }).toArray();
    res.status(200).send(result);
  } catch (error) {
    console.error("Error al obtener el inventario", error);
  } finally {
    closeMongoDBconection();
  }
};

const addItemToInventory = async (req, res) => {
  try {
    const db = await mongoDBConection();
    const collection = db.collection("Inventory");
    const result = await collection.insertOne(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.error("Error al añadir item al inventario", error);
  } finally {
    closeMongoDBconection();
  }
};

module.exports = { getInventoryByToken, addItemToInventory };
