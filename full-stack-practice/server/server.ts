import "dotenv/config";
import pg from "pg";
import express from "express";

type Product = {
  productId: number;
  name: string;
  price: number;
  imageUrl: string;
  shortDescription: string;
  longDescription: string;
};

type CartEntry = {
  userId: number;
  productId: number;
  quantity: number;
};
const connectionString = process.env.DATABASE_URL;
const db = new pg.Pool({
  connectionString,
});

const app = express();
app.use(express.json());

// To-Do: Add Error Middleware and use next
/**
 * Get product catalog
 */
app.get("/api/products", async (req, res) => {
  try {
    const sql = `
    SELECT * FROM "products"
  `;
    const result = await db.query(sql);
    const productsList = result.rows as Product[];
    res.json(productsList);
  } catch (e) {
    console.error(e);
  }
});

// To-Do: Add Error Middleware and use next
/**
 * Get single product info
 */
app.get("/api/products/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const sql = `
    SELECT * FROM "products"
    WHERE "productId" = $1`;
    const params = [productId];
    const result = await db.query(sql, params);
    const productInfo = result.rows[0] as Product;
    res.json(productInfo);
  } catch (e) {
    console.error(e);
  }
});

// To-Do: Add Error Middleware and use next
// To-Do: Implement users
/**
 * Add to cart
 */
app.post("/api/cart/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const { userId, quantity } = req.body;
    const sql = `
      INSERT INTO "cart"
      VALUES ($1, $2, $3)
      RETURNING *
    `;
    const params = [userId, productId, quantity];
    const result = await db.query(sql, params);
    const addedItem = result.rows[0] as CartEntry;
    res.json(addedItem);
  } catch (e) {
    console.error(e);
  }
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
