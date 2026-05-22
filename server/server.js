const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

app.post("/api/login", async (req, res) => {

  try {

    const { username, password } = req.body;

    console.log(username, password);

    const user = await User.findOne({ username });

    console.log(user);

    if (!user) {

      return res.status(401).json({
        success: false,
        message: "User Not Found",
      });

    }

   const isMatch = password === user.password;
    );

    console.log(isMatch);

    if (!isMatch) {

      return res.status(401).json({
        success: false,
        message: "Wrong Password",
      });

    }

    return res.json({
      success: true,
      message: "Login Successful ❤️",
    });

  } catch (err) {

    console.log(err);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});
