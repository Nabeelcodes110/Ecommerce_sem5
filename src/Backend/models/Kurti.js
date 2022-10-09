const mongoose = require("mongoose");

const kurtiSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required : true,
    },
    color: {
        type: String,
        required : true,
    },
    image_url: {
        type : String,
        required : true,
        unique : true,
        path : String
    },
    
    price: {
        type: Number,
        required : true,
    },
    
    fabric: {
        type: String,
        required : true,
    }
    
});

const Kurti =  mongoose.model('kurti' , kurtiSchema)
module.exports = Kurti