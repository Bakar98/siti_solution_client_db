const mongoose = require("mongoose");

const credit_card_schema = new mongoose.Schema({
    client_id:{
        type: Number,
        required: true
    },
    card_id :{
        type: Number,
        required: true
    },
    token_id :{
        type: Number,
        required: true
    },
    last_four_digit :{
        type: Number,
        required: true
    }
})

const credit_card_model = mongoose.model("credit_card", credit_card_schema);
module.exports = credit_card_model;