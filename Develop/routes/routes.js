const fs = require("fs");
const path = require("path");

module.exports = (app) => {
	fs.readFile("db/db.json", "utf8", (err, data) => {
		if (err) throw err;
		var notes = JSON.parse(data);

		app.get("/api/notes", function (req, res) {
			res.json(notes);
		});

		app.post("/api/notes", function (req, res) {
			let newNote = req.body;
			notes.push(newNote);
			updateDb();
		});

		app.get("/api/notes/:id", function (req, res) {
			res.json(notes[req.params.id]);
		});
	});
};

app.get("/notes", (req, res) => {
	res.sendfile(path.join(__dirname, "/public/notes.html"));
});

app.get("/api/notes", (req, res) => {
	res.sendFile(path.join(__dirname, "/db/db.json"));
});
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/public/index.html"));
});

function updateDb() {
	fs.writeFile("db/db.json", JSON.stringify(notes, "\t"), (err) => {
		if (err) throw err;
		return true;
	});
}
