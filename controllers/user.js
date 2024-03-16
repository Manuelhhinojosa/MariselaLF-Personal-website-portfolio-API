const User = require("../models/user");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await new User({ username: username, password: hashedPassword });
  await user
    .save()
    .then((response) => {
      console.log(response);
      const newUser = response;
      res.status(200).json(newUser);
    })
    .catch((error) => {
      console.log("Something went wrong. This is the error:");
      console.log(error);
      console.log("Something went wrong. This is the end of the error:");
    });
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    res.status(500).json("username || password incorrect");
  } else {
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(500).json("username || password incorrect");
    } else {
      res.status(200).json(user);
    }
  }
};

module.exports = {
  createUser,
  loginUser,
};
