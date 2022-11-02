const express = require('express')
const router = express.Router()
const fetchuser = require('../middlewares/fetchuser');
const Order  = require('../models/Order')
// const { body, validationResult } = require("express-validator")

router.post('/updateOrders' ,fetchuser, async (req,res)=>{
    try{
        console.log("working 1")
        const orderDetail = await Order.create({
            user : req.user.id,
            totalPrice : req.body.totalPrice,
            quantity : req.body.quantity,
            product : req.body.product

        }).then(res => res)
        console.log("working 2")
        res.json(orderDetail)
        console.log("working 3")

    }
    catch(e){
        console.log(e)
        res.status(500).send("Internal server error")

    }
})


router.get('/ordered' , fetchuser , async(req,res)=>{
    const orders = await Order.find({user : req.user.id});
    res.json(orders)

})


module.exports = router