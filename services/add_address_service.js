const address_model = require("../database/modules/address");

const add_address_service = function (client_id, apartment, address, zip_code){
    
    return new Promise(async (resolve, reject) => {
     
      const address_info = await address_model.create({
          client_id,
          apartment,
          address,
          zip_code
      })

   
      if(address_info){
          return resolve("address created successfully")
        }
        
        else
            return reject("error occured");
    })
}

module.exports = add_address_service;