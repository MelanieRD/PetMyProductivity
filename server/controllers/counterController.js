//const { mongoDBConection } = require("../mongoDBConection");
import { mongoDBConection } from "../mongoDBConection";

export const getCounter = async (req, res) => {
  const db = await mongoDBConection();
  const collection = db.collection("Counters");
  const result = await collection.findOne({ _id: "counter" });
  console.log(result.counter);
  return result.counter;
};

const postCounter = async (req, res) => {
  const db = await mongoDBConection();
  const collection = db.collection("Counters");
  const result = await collection.insertOne({ _id: "counter", counter: 1 });
  console.log(result);
  res.status(200).send(result.toArray());
};

export const putCounter = async (req, res) => {
  const db = await mongoDBConection();
  const collection = db.collection("Counters");
  const updateCounter = await collection.findOneAndUpdate({ _id: "counter" }, { $inc: { counter: 1 } }, { new: true, upsert: true });
  console.log(updateCounter);
  return updateCounter.counter;
};

module.exports = { getCounter, postCounter, putCounter };
