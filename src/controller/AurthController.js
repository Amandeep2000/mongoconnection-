const { Sequlize, op } = require("sequelize");
const db = require("../db/models");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");
class AuthController {
  static async signup(req, res) {
    const { name, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await db.user.create({ name, password: hashedPassword });
      return res.json(user);
    } catch (error) {
      // console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = AuthController;
