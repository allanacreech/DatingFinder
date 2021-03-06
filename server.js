
//Dependencies
//++++++++++++++++++++++++++++++++++++++++++++++++++++
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Sets up the Express App
//++++++++++++++++++++++++++++++++++++++++++++++++++++
var app = express();
var PORT = 3000;

//Sets up the Express app to handle data parsing
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.text());
app.use(bodyParse.json({type: "application/vnd.api+json"}));

//Router
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

//Listener
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});

