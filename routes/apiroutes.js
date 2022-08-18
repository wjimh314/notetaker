const fs = require("fs");
const path = require("path");
const router = require("express").Router();

//fs.readFile("db/db.json", "utf8", (err, data) => {
//if (err) throw err;
//var notes = JSON.parse(data);

router.get("/notes", function (req, res) {
	readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

router.post("/notes", function (req, res) {
	let newNote = req.body;
	notes.push(newNote);
	updateDb();
});

router.get("/notes/:id", function (req, res) {
	res.json(notes[req.params.id]);
});

//router.get("/api/notes", (req, res) => {
//	res.sendFile(path.join(__dirname, "/db/db.json"));
//});

//function updateDb() {
//	fs.writeFile("db/db.json", JSON.stringify(notes, "\t"), (err) => {
//		if (err) throw err;
//		return true;
//	});
//}
module.exports = router;
