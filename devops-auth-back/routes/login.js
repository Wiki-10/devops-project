const router = require("express").Router();
const { jsonResponse } = require("../util/jsonResponse");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const JWT_SECRET = process.env.JWT_SECRET || "secret";

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  // Check if fields are filled
  if (!username || !password) {
    return res
      .status(400)
      .json(jsonResponse(401, { error: "All fields need to be filled" }));
  }
  // assign user to the user in the database
  const user = await User.findOne({ username });

  if (!user)
    return res.status(401).json(
      jsonResponse(401, {
        error: "Invalid credentials",
      })
    );

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(401).json(
      jsonResponse(401, {
        error: "Invalid credentials",
      })
    );

  const token = jwt.sign(
    {
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.status(200).json(
    jsonResponse(200, {
      data: token,
    })
  );
});

module.exports = router;
