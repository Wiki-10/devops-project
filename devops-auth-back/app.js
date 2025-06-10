const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/login", require("./routes/login"));
app.use("/api/_health", require("./routes/health"));
app.use("/api/cidr-to-mask", require("./routes/cidr-to-mask"));
app.use("/api/mask-to-cidr", require("./routes/mask-to-cidr"));

app.get("/", (req, res) => res.status(200).send("OK"));

module.exports = app;
