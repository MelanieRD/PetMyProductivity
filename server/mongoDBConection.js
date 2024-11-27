//try
const { MongoClient } = require("mongodb");

function tryConsole() {
  console.log("It works, so idk");
}
//MongoDB Conexion
const URL = "mongodb+srv://MelanieRD:coco1234@melycoconut.akc53.mongodb.net/?retryWrites=true&w=majority&appName=MelyCoconut";
const client = new MongoClient(URL);

async function mongoDBConection() {
  let database;
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    database = client.db("<MelyCoconut>");
    return database;
  } catch (error) {
    console.error("Error al conectar con MongoDB" + error);
  }
}

async function closeMongoDBconection() {
  try {
    await client.close();
    console.log("Mongo Disconected");
  } catch (error) {
    console.error("Error al desconectar MongoDB" + error);
  }
}

// mongoDBConection().then((db) => {
//   console.log(db);
// });

mongoDBConection().catch(console.error);

module.exports = { mongoDBConection, closeMongoDBconection };
