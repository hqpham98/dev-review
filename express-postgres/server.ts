import express from "express";
import pg from "pg";
import { ClientError, errorMiddleware } from "./lib/index.js";
import "dotenv/config";

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false,
});
const app = express();

app.get("/api/films", async (req, res, next) => {
  try {
    const sql = `
    SELECT "title", "replacementCost"
      FROM "films"
      ORDER BY "replacementCost" DESC;
  `;
    const result = await db.query(sql);
    const films = result.rows;
    res.send(films);
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
    const resultId = result.rows[0];
    res.send(resultId);
  } catch (err) {
    next(err);
  }
});

app.put("/api/films/:filmId", async (req, res, next) => {
  try {
    const { filmId } = req.params;
    const { title } = req.query;
    const sql = `
      SELECT *
        FROM "films"
        WHERE "filmId" = $1;
    `;
    const params = [filmId];
    const result = await db.query(sql, params);
    const filmList = result.rows;
    if (filmList.length) {
      const sql = `
        UPDATE "films"
        SET "title" = $1
        WHERE "filmId" = $2
        RETURNING *;
      `;
      const params = [title, filmId];
      const result = await db.query(sql, params);
      const updatedFilm = result.rows[0];
      res.send(updatedFilm);
    } else {
      res.status(404).send();
    }
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log("listening on port 8080");
});
