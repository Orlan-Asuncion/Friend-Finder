var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT||3000;



// parse application/json
 app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.use(express.static(__dirname + "/app/public"));


 
require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app); 



app.listen(PORT, function (){
    console.log("Listening on port %s",  PORT);
});
