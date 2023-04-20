const connection = require("./dbconnection");
const express = require("express");
const app = express();
const port = 3000;

app.get("/api/test", (req, res) => {
	res.send("Hello World!");
});

app.get("/api/ingredients", (req, res) => {
	connection.query("SELECT * FROM ingredients", function (err, result, fields) {
		if (err) throw err;
		res.send(result);
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
