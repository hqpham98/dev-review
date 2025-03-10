import "dotenv/config";
import pg from "pg";
import express from "express";

const connectionString = process.env.DATABASE_URL;
const pool = new pg.Pool({
  connectionString,
});

const app = express();
app.use(express.json());

app.get("/api/products", (req, res, next) => {});

app.post("/api/cart/:productId", (req, res, next) => {});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
