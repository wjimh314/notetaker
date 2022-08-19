const fs = require("fs");
const path = require("path");
const router = require("express").Router();

let data = require("../db/db.json");
router.get("/notes", function (req, res) {
	res.json(data);
});

router.post("/notes", function (req, res) {
	let newNote = req.body;
	notes.push(newNote);
	updateDb();
});

router.get("/api/notes", (req, res) => {
	res.sendFile(path.join(__dirname, "/db/db.json"));
});

function updateDb() {
	fs.writeFile(db.json, JSON.stringify(data), (err) =>
		err ? console.error(err) : console.info(`\nData written to ${db.json}`)
	);
	router.post("data"), (req, res)
	.then(res)) => res.json());
	.then(data)) +> {'successful post request:,' data)};
})
}
module.exports = router;
