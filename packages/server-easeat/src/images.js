const express = require("express");
const router = express.Router();
const db = require("./dbconnection");

// GET - Récupérer tous les logs
router.get("/", (req, res) => {
	db.query("SELECT * FROM Images_Frigo;", (err, result) => {
		if (err) throw err;
		console.log("Images_frigo ---->", result);
		res.json(result);
	});
});

router.post("/add", (req, res) => {
	const lien = req.body.lien;
	const date_prise = req.body.date_prise;
	const heure_prise = req.body.heure_prise;
	const proprietaire_id = req.body.proprietaire_id;
	db.query(
		`INSERT INTO Images_Frigo (lien, date_prise, heure_prise, proprietaire_id) VALUES ('${lien}', '${date_prise}', '${heure_prise}', '${proprietaire_id}')`,
		(err, result) => {
			if (err) throw err;
			res.json({ message: `Images_Frigo ${lien} ajouté` });
			console.log(`Images_Frigo ${lien} ajouté`);
		}
	);
});

module.exports = router;
