const express = require('express');
const router = express.Router();
const User = require("../models/User")
const { body, validationResult } = require("express-validator")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middlewares/fetchuser');
const JWT_SIGN = "thisIsMySignature";



router.post('/createUser', [body('name').isString().isLength({ min: 2 }), 
body('email').isEmail()],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    hashedPassword = await bcrypt.hash(req.body.password, salt)
    try {
      const user =await User.create({
        name: req.body.name,
        email: req.body.email,
        address : req.body.address,
        town : req.body.town,
        pin : req.body.pin,
        phone : req.body.phone,
        password: hashedPassword
        
      })


      const data = {
        user :{
            id: user.id
        }
      }

      const token = jwt.sign(data, JWT_SIGN)
      success = true
      res.json({success , token})
      console.log(token)
    }

    catch (err) {
      console.log(err);
      res.status(500).send("Internel server error");
    }


  })

router.post('/login' , [body('email').isEmail(),
body('password', "Enter Valid password").exists() ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        res.status(400).json({ error: "Wrong Credentials" })
        return;
      }
      const comparePassword = await bcrypt.compare(password, user.password);
      if (!comparePassword) {
        success = false
        res.status(400).json({success , error: "Wrong credentials" })
        return;
      }

      const data = {
        user :{
            id: user.id
        }
      }

      const token = jwt.sign(data, JWT_SIGN)
      success = true;
      res.json({success , token})

    } catch (err) {
      console.log(err);
      res.status(500).send('Internal server error');
      return;

    }


  })


router.post('/getuser', fetchuser , async (req, res) => {
    try {
      userId = req.user;
      console.log(userId.id)
      const user = await User.findById(userId.id).select("-password")
      console.log(user)
      res.send(user)

    } catch (err) {
      // console.log(err);
      res.status(400).send("Internel server error");

    }
  })

module.exports = router