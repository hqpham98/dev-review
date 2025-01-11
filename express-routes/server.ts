import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log(`Method: ${req.method}, Path: ${req.path}, Date: ${new Date()}`);
  next();
});

app.get("/", function (req, res) {
  res.send("<p>hello</p>");
});

app.get("/notes", function (req, res) {
  res.send("<p>notes</p>");
});

app.post("/notes/:noteId", function (req, res) {
  const noteId = req.params.noteId;
  res.send(`<p>I got your note #${noteId}</p>`);
});

app.listen(8080, () => {
  console.log("Express server listening on port 8080");
});
