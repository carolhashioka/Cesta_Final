const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const server = express();
//Conectar mongoose
server.use(express.json());
mongoose.connect("mongodb://localhost:27017/Cesta_Basica", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set("useCreateIndex", true);
//Usar cors
server.use(cors());
//Usar routes
server.use(routes);
//Usar express
server.use(express.json());
//Definir porta do servidor
server.listen(3333);
