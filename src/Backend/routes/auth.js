const express = require('express');
const router = express.Router();
const User = require("../models/User")
const { body, validationResult } = require("express-validator")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middlewares/fetchuser');
const JWT_SIGN = "thisIsMySignature";




router.post('/createUser', [body('name').isString().isLength({ min: 2 }),
body('email').isEmail(),
body('password').isLength({ min: 3 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    hashedPassword = await bcrypt.hash(req.body.password, salt)
    try {
      const user = User.create({
        name: req.body.name,
        password: hashedPassword,
        email: req.body.email
      }).then(user => res.json(user));

      const token = jwt.sign({ user: user.id }, JWT_SIGN)
      console.log(token)
    }

    catch (err) {
      console.log(err);
      res.status(500).send("Internel server error");
    }


  })

router.post('/login' , [body('email').isEmail(),
body('password', "Enter Valid password").exists()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        res.status(400).json({ error: "Wrong Credentials" })
      }
      let comparePassword = await bcrypt.compare(password, user.password);
      if (!comparePassword) {
        res.status(400).json({ error: "Wrong credentials" })
      }

      const token = jwt.sign({ user: user.id }, JWT_SIGN)
      res.json(token)

    } catch (err) {
      console.log(err);
      res.status(500).send("Internel server error");

    }


  })


router.post('/getuser', fetchuser , async (req, res) => {
    try {
      userId = req.user;
      const user = await User.findById(userId).select("-password")
      console.log(user)
      res.send(user)

    } catch (err) {
      console.log(err);
      res.status(500).send("Internel server error");

    }
  })

module.exports = router