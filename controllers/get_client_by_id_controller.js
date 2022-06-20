const get_client_by_id_service = require("../services/get_client_by_id_service");

const get_client_by_id_controller = async (req, res)=>{
    const results = await get_client_by_id_service(req.body.client_id);

    res.send(results);
}

module.exports = get_client_by_id_controller;