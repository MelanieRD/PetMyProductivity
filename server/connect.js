const express = require("express");
const app = express();
const PORT = 3000;
const cookieParser = require("cookie-parser");

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5173", // URL del frontend
    credentials: true, // Permite enviar cookies y headers como Authorization
  })
);
app.use(express.json());
app.use(cookieParser());
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
 * 3. Hacer uso de dotnev para ocultar la cadena de conexion  <--------------------/// Ready
 * 4. Hacer el modelo de User  <--------------------/// Ready
 * 5. Hacer el Controllador de User  <--------------------/// Ready
 * 6. Hacer el Routing de User  <--------------------/// Ready
 * 7. Generar Token se user  <--------------------/// Ready
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
