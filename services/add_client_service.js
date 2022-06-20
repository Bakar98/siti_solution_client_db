const client_model = require("../database/modules/clients");

const add_client_service = function (client_id, name, email, mobile_number, notes){
    
    return new Promise(async (resolve, reject) => {
      const client_info = await client_model.create({
          client_id,
          name,
          email,
          mobile_number,
          notes
      })  

     
      
      if(client_info){
          return resolve("client created successfully")
        }
        
        else
        return reject("error occured");
    })
}

module.exports = add_client_service;