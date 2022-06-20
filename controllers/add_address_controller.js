const add_address_service = require("../services/add_address_service");

module.exports = async (req, res)=>
{
    const client_id = req.body.client_id
    const apartment = req.body.apartment
    const address = req.body.address
    const zip_code = req.body.zip_code

    const message = await add_address_service(client_id, apartment, address, zip_code)
    
    res.send(message);
    
}