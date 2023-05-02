const express = require("express");
const router = express.Router();
const db = require("./dbconnection");

// GET - Récupérer tous les logs
router.get("/", (req, res) => {
	db.query("SELECT * FROM Logs_frigo;", (err, result) => {
		if (err) throw err;
		console.log("Logs_frigo ---->", result);
		res.json(result);
	});
});

// // POST - Ajouter des logs
// "id": 34,
// "date": "2023-04-28T22:00:00.000Z",
// "heure": "08:15:00",
// "type_information": "Alerte",
// "message": "Le taux d'humidité est de 55%",
// "proprietaire_id": 13
router.post("/add", (req, res) => {
	const date = req.body.date;
	const heure = req.body.heure;
	const type_information = req.body.type_information;
	const message = req.body.message;
	const proprietaire_id = req.body.proprietaire_id;
	db.query(
		`INSERT INTO Logs_frigo (date, heure, type_information, message, proprietaire_id) VALUES ('${date}', '${heure}', '${type_information}', '${message}', '${proprietaire_id}')`,
		(err, result) => {
			if (err) throw err;
			res.json({ message: `Logs_frigo ${date} ajouté` });
			console.log(`Logs_frigo ${date} ajouté`);
		}
	);
});

module.exports = router;
