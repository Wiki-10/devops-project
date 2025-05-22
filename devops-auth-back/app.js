const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

async function connect() {
  await mongoose.connect(process.env.DB_CONNECTION);
  console.log("connected to MongoDB");
}

connect().catch(console.error);

app.use("/api/login", require("./routes/login"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
