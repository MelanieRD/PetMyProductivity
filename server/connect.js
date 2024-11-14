import { MongoClient } from "mongodb";

const url = "mongodb+srv://MelanieRD:coco1234@melycoconut.akc53.mongodb.net/?retryWrites=true&w=majority&appName=MelyCoconut";

const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Conexión exitosa yayay Melanie coool dupdup duu");

    const db = client.db("PetMyProductivity");
    const col = db.collection("users");
  } catch (e) {
    1;
    console.log(e.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
