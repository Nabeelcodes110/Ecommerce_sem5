const mongoose = require('mongoose')


const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    totalPrice: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    image : {
        type : String,
        required: true
    },
    price : {
        type : Number,
        required: true
    },
    size : {
        type : Number,
        required: true
    },
    color  :{
        type : String,
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now
    }

})

const Order = mongoose.model('order', orderSchema)
module.exports = Order