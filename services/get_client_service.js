const address_model = require("../database/modules/address");
const client_model = require("../database/modules/clients");
const credit_card_model = require("../database/modules/credit")


const get_client_service = function(){
    return new Promise (async (resolve, reject)=>{
      const client = await client_model.find()
      console.log(client)
      
      const client_address = await address_model.find({client_id: client[0].client_id})
      const client_credit_info = await credit_card_model.find({client_id: client[0].client_id})
      const client_info = []

      client.forEach((ele)=>{
          
          let address = client_address.filter((add)=>{
              return add.client_id == ele.client_id
          })
          let credit = client_credit_info.filter((c)=>{
            return c.client_id == ele.client_id
          })

          client_info.push({"Client ":ele})
          client_info.push({"Address ":address})
          client_info.push({"Credit Card ":credit})


      })
      
      
      if(client_info){
          return resolve(client_info)
      }
      else{
          return reject("no_client")
      }
    })
}

module.exports = get_client_service;