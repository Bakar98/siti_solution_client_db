const address_model = require("../database/modules/address");
const client_model = require("../database/modules/clients");
const credit_card_model = require("../database/modules/credit")


const get_client_by_id_service = function(client_id){
    return new Promise (async (resolve, reject)=>{
      const client = await client_model.findOne({client_id:client_id})
      console.log(client)
      
      const client_address = await address_model.find({client_id: client_id})
      const client_credit_info = await credit_card_model.find({client_id: client_id})
      const client_info = []

      client_info.push({"Client ":client})
      client_info.push({"Address ":client_address})
      client_info.push({"Credit Card ":client_credit_info})
      
      if(client_info){
          return resolve(client_info)
      }
      else{
          return reject("no_client")
      }
    })
}

module.exports = get_client_by_id_service;