# siti_solution_client_db

# create client- 
method (post) 
end_point("/add_client")
body- {
        "client_id": Number,
        "name": String
        "email": String
        "mobile_number": Number,
        "notes": String
}

          
# add address- 
method (post) 
end_point("/add_address")
body- {
        "client_id": Number,
        "apartment": String,
        "address": String,
        "zip_code": Number
}

# add credit_info - 
method (post) 
end_point("/add_credit_card")
body- {
        "client_id": Number,
        "card_id": Number,
        "token_id": Number,
        "last_four_digit": Number
}

# get all client      

method (get) 
end_point("/get_client")

# get client by id      

method (post) 
end_point("/get_client_by_id")
body-{
      "client_id": Number
}

