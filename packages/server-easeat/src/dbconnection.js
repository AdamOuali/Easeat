const mysql = require("mysql2");

// Créer une connexion à la base de données
const connection = mysql.createConnection({
	host: "db-mysql-lon1-82104-do-user-13959287-0.b.db.ondigitalocean.com",
	port: 25060,
	user: "adam",
	password: "AVNS_6q4zvEbSprS1Db9oM2j",
	database: "easeatdb",
});

// Ouvrir la connexion à la base de données
connection.connect(function (err) {
	if (err) throw err;
	connection.query("SELECT * FROM ingredients", function (err, result, fields) {
		if (err) throw err;
		// console.log(result);
	});
});

// Fermer la connexion à la base de données lorsque vous avez terminé
// connection.end((err) => {
// 	if (err) {
// 		console.error(
// 			"Erreur lors de la fermeture de la connexion à la base de données : ",
// 			err
// 		);
// 		return;
// 	}
// 	console.log("Connexion à la base de données MySQL fermée");
// });

module.exports = connection;
