import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import express from "express";
import { createBlogPost } from "./blog.controllers";

const PORT = process.env.PORT;
const app = express();

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

app.use((req, res, next) => {
  console.log("this always runs");
  next();
});

app.get("/", (req, res) => {
  console.log("hallo!!");
  res.json({ message: "it's me. the get method" });
});

app.post("/blogposts", createBlogPost);
