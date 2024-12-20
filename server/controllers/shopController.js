const { mongoDBConection, closeMongoDBconection } = require("../mongoDBConection");
const { get } = require("../routes");

const getShopItems = async (req, res) => {
  try {
    const db = await mongoDBConection();
    const col = db.collection("Shop_Items");
    console.log("GetShopITEMS request");
    const data = await col.find().toArray();
    res.status(200).send(data);
  } catch (error) {
    console.log("error: " + error);
  } finally {
    closeMongoDBconection();
  }
};

const getShopItemsByType = async (req, res) => {
  try {
    const db = await mongoDBConection();
    const col = db.collection("Shop_Items");
    console.log("GET SHOP ITEMS BY TYPE request");
    const data = await col.find({ type: req.params.type }).toArray();
    res.status(200).send(data);
  } catch (error) {
    console.log("error: " + error);
  } finally {
    closeMongoDBconection();
  }
};

const postShopItems = async (req, res) => {
  try {
    const db = await mongoDBConection();
    const col = db.collection("Shop_Items");
    console.log("Connected to the database");
    const data = await col.insertOne(req.body);
    res.status(200).send(data);
  } catch (error) {
    console.log("error: " + error);
  } finally {
    closeMongoDBconection();
  }
};

const putShopItems = async (req, res) => {
  try {
    res.status(200).send("Put request");
  } catch (error) {
    console.log("error: " + error);
  }
};

module.exports = { getShopItems, postShopItems, putShopItems, getShopItemsByType };
