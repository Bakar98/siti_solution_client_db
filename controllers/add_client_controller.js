const add_client_service = require("../services/add_client_service");

module.exports = async (req, res)=>
{
    const client_id = req.body.client_id
    const name = req.body.name
    const email = req.body.email
    const mobile_number = req.body.mobile_number
    const notes = req.body.notes

    const message = await add_client_service(client_id, name, email, mobile_number, notes)
    
    res.send(message);
    
}