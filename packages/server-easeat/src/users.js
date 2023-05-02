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
// router.post("/add", (req, res) => {
// 	const nom = req.body.nom;
// 	const

module.exports = router;
