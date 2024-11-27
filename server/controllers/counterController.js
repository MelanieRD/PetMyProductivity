const { mongoDBConection } = require("../mongoDBConection");

const getCounter = async (req, res) => {
  const db = await mongoDBConection();
  const collection = db.collection("Counters");
  const result = await collection.find({ _id: "counter" }).toArray();
  console.log(result);
  res.status(200).send(result);
};

const postCounter = async (req, res) => {
  const db = await mongoDBConection();
  const collection = db.collection("Counters");
  const result = await collection.insertOne({ _id: "counter", counter: 1 });
  console.log(result);
  res.status(200).send(result.toArray());
};

const putCounter = async (req, res) => {
  const db = await mongoDBConection();
  const collection = db.collection("Counters");
  const updateCounter = await collection.findOneAndUpdate({ _id: "counter" }, { $inc: { counter: 1 } }, { new: true, upsert: true });
  res.status(200).send(updateCounter);
};

module.exports = { getCounter, postCounter, putCounter };
