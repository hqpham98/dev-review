import express from "express";
import pg from "pg";
import { ClientError, errorMiddleware } from "./lib/index.js";
import "dotenv/config";

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false,
});

const app = express();

// Endpoint for testing
app.get("/api/actors/:actorId", async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const sql = `
      select * from "actors"
      where "actorId" = $1;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) throw new ClientError(404, `actor ${actorId} not found`);
    res.json(actor);
  } catch (err) {
    next(err);
  }
});

app.post("/api/actors", async (req, res, next) => {
  try {
    const { firstName, lastName } = req.query;
    const sql = `
      INSERT INTO "actors" ("firstName", "lastName")
      VALUES ($1, $2)
      RETURNING *;
    `;
    const params = [firstName, lastName];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    res.status(201).json(actor);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log("listening on port 8080");
});
