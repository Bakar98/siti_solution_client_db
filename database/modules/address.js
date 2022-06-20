const mongoose = require("mongoose");

const address_schema = new mongoose.Schema({
    client_id:{
        type: Number,
        required: true
    },
    apartment :{
        type:String,
        required: true
    },
    address :{
        type:String,
        required: true
    },
    zip_code :{
        type: Number,
        required: true
    }
})

const address_model = mongoose.model("address", address_schema);
module.exports = address_model;