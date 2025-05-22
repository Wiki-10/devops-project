const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const User = require("../models/user");

async function createUsers() {
  await mongoose.connect(process.env.DB_CONNECTION);
  console.log("connected to MongoDB");

  const usersData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data", "users.json"), "utf8")
  );

  for (const userData of usersData) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    const user = new User({
      username: userData.username,
      password: hashedPassword,
      salt,
      role: userData.role,
    });

    await user.save();
    console.log(`User ${user.username} created`);
  }

  await mongoose.disconnect();
  console.log("Completed");
}

createUsers.catch(console.error);
