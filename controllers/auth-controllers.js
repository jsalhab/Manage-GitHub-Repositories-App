const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const uuidv1 = require("uuidv1");

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    let users;
    let data = await fs.readFileSync("./users.json");
    users = JSON.parse(data);
    existingUser = await users.find((user) => user.email === email);
    if (!existingUser) {
      return res.status(401).send("Invalid credentials, could not log you in.");
    }
  } catch (err) {
    return res.status(500).send("Loggin in failed, please try again later.");
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    res.send(
      "Could not log you in, please check your credentials and try again."
    );
    return;
  }

  if (!isValidPassword) {
    res.send("Invalid credentials, could not log you in.");
    return;
  }

  let token;
  try {
    token = await jwt.sign(
      { userId: existingUser.userId, email: existingUser.email },
      "supersecretkeyforjumana",
      { expiresIn: "1h" }
    );
  } catch (error) {
    res.send("Loggin in failed, please try again later.");
    return;
  }

  res.json({
    userId: existingUser.userId,
    email: existingUser.email,
    token: token,
  });
};

const signup = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    let users;
    let data = await fs.readFileSync("./users.json");
    users = JSON.parse(data);
    existingUser = await users.find((user) => user.email === email);

    if (existingUser) {
      return res.status(422).send("User exists already, please login instead.");
    }
  } catch (err) {
    return res.status(500).send("Signing up failed, please try again later.");
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    return res.json("Could not create user, please try again.");
  }

  const createdUser = {
    userId: uuidv1(),
    email,
    password: hashedPassword,
  };

  try {
    let users;
    let data = await fs.readFileSync("./users.json");
    users = JSON.parse(data);
    users.push(createdUser);
    await fs.writeFileSync("./users.json", JSON.stringify(users, null, 2));
  } catch (err) {
    return res.json("Signing up failed, please try again later.");
  }
  let token;
  try {
    token = await jwt.sign(
      { userId: createdUser.userId, email: createdUser.email },
      "supersecretkeyforjumana",
      { expiresIn: "1h" }
    );
  } catch (error) {
    return res.json("Signing up failed, please try again later.");
  }
  res.json({
    userId: createdUser.userId,
    email: createdUser.email,
    token: token,
  });
};

exports.login = login;
exports.signup = signup;
