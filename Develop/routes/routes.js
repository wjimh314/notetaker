const fs= require('fs');
const path = require('path');

module.exports = app => {
    fs.readFile("db/db.json","utf8", (err, data) => {
        if (err) throw err;
        var notes = JSON.parse(data);
        
        app.get("/api/notes", function(req, res){
            res.json(notes);
        });

        app.post("/api/notes",function(req, res) {
            let newNote = req.body;
            notes.push(newNote);
            updateDb();
        });
        }

        })
    })
}




app.get("/notes", (req, res) => {
	res.sendfile(path.join(__dirname, "/public/notes.html"));
});

app.get("/api/notes", (req, res) => {
	res.sendFile(path.join(__dirname, "/db/db.json"));
});
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/public/index.html"));
});