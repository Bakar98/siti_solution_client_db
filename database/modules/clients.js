const mongoose = require("mongoose");

const client_schema = new mongoose.Schema({
    client_id:{
        type: Number,
        required: true
    },
    name :{
        type:String,
        required: true
    },
    email :{
        type:String,
        required: true
    },
    mobile_number :{
        type: Number,
        required: true
    },
    notes :{
        type:String,
        required: false
    }
})

const client_model = mongoose.model("client", client_schema);
module.exports = client_model;