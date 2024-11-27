const express = require("express");
const app = express();
const PORT = 3000;

const cors = require("cors");
app.use(cors());

app.use(express.json());

//Haciendo uso de mis rutas UwU
const router = require("./routes");
app.use("/app", router);

app.listen(PORT, () => {
  console.log("Listening server");
});

/** Tareas
 *
 * 1. Hacer el Api             <--------------------/// Ready
 * 2. Conectar a MongoDB               <--------------------/// Ready
 * 3. Hacer uso de dotnev para ocultar la cadena de conexion
 * 4. Hacer el modelo de User
 * 5. Hacer el Controllador de User
 * 6. Hacer el Routing de User
 * 7. Generar Token se user
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
