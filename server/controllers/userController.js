// La pondre aqui de prueba, noc enojen alv

const { mongoDBConection, closeMongoDBconection } = require("../mongoDBConection");
const jwt = require("jsonwebtoken");
// const collection = database.collection("<UserTry>");

//Authentication--------------------------------------------------------------------

const loginPetUser = async (req, res) => {
  try {
    const db = await mongoDBConection();
    const collection = db.collection("<UserTry>");
    const token = req.params.token;

    const pet = await collection.findOne({ _id: token });

    if (!pet) {
      return res.status(404).json({ error: "Pet not found" });
    }

    //Token jwt
    const petFindedToken = pet._id;
    const tokenJWT = jwt.sign({ petFindedToken }, process.env.SECRET_KEY, { expiresIn: "1h" });
    res.cookie("access_token", tokenJWT, { httpOnly: true, sameSite: "strict" }).send({ pet, tokenJWT });
  } catch (error) {
    console.log("error: " + error);
  } finally {
    closeMongoDBconection();
  }
};

const authenticateToken = (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return res.status(401).json({ error: "Token not provided" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded; // Guarda los datos decodificados en la solicitud
    next(); // Pasa al siguiente middleware/controlador
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

const logoutUser = async (req, res) => {
  res.clearCookie("access_token").send("logout");
};

const accessGranted = (req, res) => {
  res.status(200).json({ message: "Access granted", user: req.user });
};
//----------------------------------------------------------------------------------
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
  res.send(" dd Hellooooow by ID: " + id);
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

module.exports = { getUsers, getUsersById, postUser, putUser, deleteUser, loginPetUser, logoutUser, authenticateToken, accessGranted, logoutUser };
