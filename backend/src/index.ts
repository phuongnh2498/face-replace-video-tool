// src/index.ts
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { dog } from "./ultils.js";
dotenv.config();
const app = express();

app.use(bodyParser.json());

// Sample data for testing
let data = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

// GET endpoint to retrieve all items
app.get("/", (req: Request, res: Response) => {
  res.json("hello3" + dog);
});

// GET endpoint to retrieve all items
app.get("/items", (req: Request, res: Response) => {
  res.json(data);
});

// GET endpoint to retrieve a specific item by ID
app.get("/items/:id", (req: Request, res: Response) => {
  const itemId = parseInt(req.params.id, 10);
  const item = data.find((item) => item.id === itemId);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: "Item not found" });
  }
});

// POST endpoint to add a new item
app.post("/items", (req: Request, res: Response) => {
  const newItem = req.body;
  data.push(newItem);
  res.status(201).json(newItem);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
