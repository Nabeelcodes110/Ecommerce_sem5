const express = require('express');
const { json } = require('react-router-dom');
const router = express.Router()
const fetchuser = require('../middlewares/fetchuser');
const Order  = require('../models/Order')
// const { body, validationResult } = require("express-validator")

router.post('/updateOrders' ,fetchuser, async (req,res)=>{
    try{
        const orderDetail = await Order.create({
            user : req.user.id,
            totalPrice : req.body.totalPrice,
            quantity : req.body.quantity,
            product : req.body.product,
            image : req.body.image,
            price : req.body.price,
            color : req.body.color,
            size : req.body.size

        })
        console.log(typeof(orderDetail))
        console.log(orderDetail)
        res.json(orderDetail)
        return

    }
    catch(e){
        console.log(e)
        res.status(500).send("Internal server error")
        return

    }
})


router.get('/ordered' , fetchuser , async(req,res)=>{
    const orders = await Order.find({user : req.user.id});
    // if(orders===null){
    //     res.json({"Nothing ordered yet" : 0})
    // }
    // console.log(orders[0].timeStamp)
    // console.log(typeof(orders))
    res.json(orders)

})


module.exports = router