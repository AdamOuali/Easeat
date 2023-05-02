const express = require("express");
const router = express.Router();
const db = require("./dbconnection");

// GET - Récupérer tous les utilisateurs
router.get("/", (req, res) => {
	db.query("SELECT * FROM Utilisateurs", (err, result) => {
		if (err) throw err;
		res.json(result);
		console.log("REQUÊTE FAITE : GET - Récupérer tous les utilisateurs");
	});
});

// POST - Supprimer un utilisateur
router.post("/delete", (req, res) => {
	const id = req.body.id;
	// console.log("ID ---->", id);
	db.query(`DELETE FROM Utilisateurs WHERE id = ${id}`, (err, result) => {
		if (err) {
			res.send(err);
		} else {
			res.json({ message: `Utilisateur (id = ${id}) supprimé ` });
			// console.log(`Utilisateur (id = ${id}) supprimé`);
		}
	});
});

// POST - Ajouter un utilisateur
// nom password type_droit timeToCook foodType
router.post("/add", (req, res) => {
	const nom = req.body.nom;
	const password = req.body.password;
	const type_droit = req.body.type_droit;
	const timeToCook = req.body.timeToCook;
	const foodType = req.body.foodType;
	db.query(
		`INSERT INTO Utilisateurs (nom, password, type_droit, timeToCook, foodType) VALUES ('${nom}', '${password}', '${type_droit}', '${timeToCook}', '${foodType}')`,
		(err, result) => {
			if (err) throw err;
			res.json({ message: `Utilisateur ${nom} ajouté` });
			console.log(`Utilisateur ${nom} ajouté`);
		}
	);
});

module.exports = router;
