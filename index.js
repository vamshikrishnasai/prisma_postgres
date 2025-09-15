const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient();
const app = express();
const router = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/prisma", router);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
