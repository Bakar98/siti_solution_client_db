const get_client_service = require("../services/get_client_service");

const get_client_controller = async (req, res)=>{
    const results = await get_client_service();

    res.send(results);
}

module.exports = get_client_controller;