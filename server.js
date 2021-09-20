const express = require("express");
//Dependencies
const bodyParser = require("body-parser");
// Cors for cross origin allowance 
/* Middleware*/
const cors = require('cors');
//Now let's Go and setup our App
const app = express();
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
//
const port = 8000;
const server =app.listen(port,()=>{

    console.log(`Server is running on localhost://${port}`);
});
app.get('/home',function(req,res){
    res.send(`<h1>Home Page</h1>
    <p>Welcome to Home Page My friend Doly</p>`);
});
