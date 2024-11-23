const express = require("express");
const app = express();
const PORT = 3000;

const router = require("./routes");
app.use("/app", router);

app.listen(PORT, () => {
  console.log("Listening server");
});
