// Variables generales
const connection = require("./dbconnection");
const express = require("express");
const app = express();
const port = 3000;

// Import cors pour autoriser les requêtes cross-origin
const cors = require("cors");
app.use(cors());

// Import routes
const usersRoutes = require("./users");
const logsRoutes = require("./logs");

// Route pour récupérer tous les utilisateurs
app.use(express.json());
app.use("/api/users", usersRoutes);
app.use("/api/logs", logsRoutes);

app.listen(port, () => {
	console.log(`Backend en écoute sur le port : ${port}`);
});

// app.get("/api/test", (req, res) => {
// 	res.send("Hello World!");
// });
