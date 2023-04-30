const express = require("express");
const router = express.Router();
const db = require("./dbconnection");

// GET - Récupérer tous les utilisateurs
router.get("/", (req, res) => {
	db.query("SELECT * FROM Logs_frigo;", (err, result) => {
		if (err) throw err;
		console.log("Logs_frigo ---->", result);
		res.json(result);
	});
});

module.exports = router;
