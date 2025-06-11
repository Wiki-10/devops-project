require("dotenv").config();
const app = require("./app");

const mongoose = require("mongoose");

const port = process.env.PORT || 8000;

async function connect() {
  await mongoose.connect(process.env.DB_CONNECTION);
  console.log("connected to MongoDB");
}
connect().catch(console.error);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
