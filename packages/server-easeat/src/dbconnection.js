const mysql = require("mysql2");

// Créer une connexion à la base de données
const connection = mysql.createConnection({
	host: "db-mysql-lon1-82104-do-user-13959287-0.b.db.ondigitalocean.com",
	port: 25060,
	user: "adam",
	password: "AVNS_6q4zvEbSprS1Db9oM2j",
	database: "easeatdb",
});

console.log("Connexion à la base de données réussie !");

module.exports = connection;
