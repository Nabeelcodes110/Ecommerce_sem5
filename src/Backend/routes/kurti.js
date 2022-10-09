const express = require('express');
const router = express.Router();
const Kurti = require("../models/Kurti")


router.post('/addKurti',async (req, res) => {
    try {
        const kurti = Kurti.create({
            name : req.body.name,
            description: req.body.description,
            color : req.body.color,
            image_url : req.body.image_url,
            price: req.body.price,
            fabric: req.body.fabric
        }).then(kurti => res.json(kurti))
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal server error")
    }
})

module.exports = router