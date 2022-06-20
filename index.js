const express = require('express');
const app = express()
const db = require("./database/index.js")
const port = 3000;
const add_client_controller = require("./controllers/add_client_controller");
const add_address_controller = require('./controllers/add_address_controller.js');
const get_client_controller = require("./controllers/get_client_controller");
const get_client_by_id_controller = require("./controllers/get_client_by_id_controller")
app.use(express.json())

db.init();

// app.get("/", (req,res)=>{
//     res.send("hello");
// })


app.post("/add_client", add_client_controller)
app.post("/add_address", add_address_controller)
app.post("/add_credit_card", add_address_controller)

app.get("/get_client", get_client_controller)
app.post("/get_client_by_id", get_client_by_id_controller)



app.listen(port, console.log("server started"))