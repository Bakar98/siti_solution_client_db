const add_client_service = require("../services/add_client_service");

module.exports = async (req, res)=>
{
    const client_id = req.body.client_id
    const card_id = req.body.card_id
    const token_id = req.body.token_id
    const last_four_digit = req.body.last_four_digit

    const result = await add_client_service(client_id, card_id, token_id, last_four_digit)
    
    res.send(result);
    
}