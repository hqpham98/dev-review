import "dotenv/config";
import pg from "pg";
import express from "express";

const connectionString = process.env.DATABASE_URL;
const pool = new pg.Pool({
  connectionString,
});

const app = express();
app.use(express.json());

app.get("/api/catalog", (req, res, next) => {
  res.send("hello");
});

app.post("", (req, res, next) => {});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
