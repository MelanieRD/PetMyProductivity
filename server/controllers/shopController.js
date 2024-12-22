const { mongoDBConection, closeMongoDBconection } = require("../mongoDBConection");
const { get, post } = require("../routes");

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

const getShopUserToken = async (req, res) => {
  try {
    console.log("loq ue recibo desde mi url:" + req.params.token);
    const db = await mongoDBConection();
    const col = db.collection("Shops_Users");
    console.log("Get Shop user token request");
    const data = await col.find({ _id: req.params.token }).toArray();
    res.status(200).send(data);
  } catch (error) {
    console.log("error: " + error);
  } finally {
    closeMongoDBconection();
  }
};

const postShopUserToken = async (req, res) => {
  try {
    const db = await mongoDBConection();
    const col = db.collection("Shops_Users");
    console.log("Connected to the database");
    const data = await col.insertOne(req.body);
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

const putEatFoodItem = async (req, res) => {
  try {
    const db = await mongoDBConection();
    const col = db.collection("Shops_Users");
    console.log("body: " + JSON.stringify(req.body));

    const resultShopUser = await col.findOneAndUpdate({ _id: req.params.token, "items._id": req.body._id }, { $inc: { "items.$.quantity": -1 } }, { returnDocument: "after", upsert: true });

    if (resultShopUser) {
      res.status(200).send(resultShopUser);
    } else {
      res.status(404).send({ msg: "No se pudo comer el item" });
    }
  } catch (error) {
    console.log("error: " + error);
  } finally {
    closeMongoDBconection();
  }
};

const putBuyFoodItem = async (req, res) => {
  try {
    let resultShopUser;
    const db = await mongoDBConection();
    const col = db.collection("Shops_Users");

    if (req.body.typeItem === "Food") {
      //ShopUser
      resultShopUser = await col.findOneAndUpdate({ _id: req.params.token, "items._id": req.params.itemId }, { $inc: { "items.$.quantity": 1 } }, { returnDocument: "after", upsert: true });
      console.log("precio:" + req.body.price);
    } else {
      console.log("No es un item de tipo comida");
      resultShopUser = await col.findOneAndUpdate({ _id: req.params.token, "items._id": req.params.itemId }, { $set: { "items.$.state": "inactive" } }, { returnDocument: "after", upsert: true });
    }

    if (resultShopUser) {
      //User coins
      const collectionUser = await db.collection("<UserTry>");
      const resultUserCoin = await collectionUser.findOneAndUpdate(
        { _id: req.params.token },
        { $inc: { coins: -req.body.price } }, // Resta el precio de las monedas del usuario
        { returnDocument: "after" }
      );
      res.status(200).send(resultShopUser);
    } else {
      res.status(404).send({ msg: "No se pudo comprar el item" });
    }
  } catch (error) {
    console.log("error: " + error);
  } finally {
    closeMongoDBconection();
  }
};

module.exports = { getShopItems, postShopItems, putShopItems, getShopItemsByType, getShopUserToken, postShopUserToken, putBuyFoodItem, putEatFoodItem };
