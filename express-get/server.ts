import express from "express";
import pg from "pg";
import { errorMiddleware } from "./lib/index.js";
import "dotenv/config";

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false,
});

const app = express();

app.get("/api/films", async (req, res, next) => {
  try {
    const sql = `
      SELECT "title"
        FROM "films"
        ORDER BY "replacementCost" DESC
        LIMIT 2;
    `;
    const result = await db.query(sql);
    const films = result.rows;
    res.json(films);
  } catch (err) {
    next(err);
  }
});

app.get("/api/films/:filmId", async (req, res, next) => {
  try {
    const { filmId } = req.params;
    const sql = `
      SELECT "title"
        FROM "films"
        WHERE "filmId" = $1;
    `;
    const params = [filmId];
    const result = await db.query(sql, params);
    const film = result.rows[0];
    res.json(film);
  } catch (err) {
    next(err);
  }
});
app.use(errorMiddleware);

app.listen(8080, () => {
  console.log("listening on port 8080");
});
