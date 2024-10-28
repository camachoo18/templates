const express = require("express");
const app = express();
const port = 3000;

// Endpoint principal
app.get("/", (req, res) => {
  res.send("¡Tamo aqui de nuevo en express!");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

