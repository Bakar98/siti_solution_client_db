const credit_card_model = require("../database/modules/credit")

const add_credit_card_service = function (client_id, card_id, token_id, last_four_digit){
    
    return new Promise(async (resolve, reject) => {
      
      const credit_info = await credit_card_model.create({
          client_id,
          card_id,
          token_id,
          last_four_digit
      })
      
      if(credit_info){
          return resolve("credit_info created successfully")
        }
        
        else
        return reject("error occured");
    })
}

module.exports = add_credit_card_service;