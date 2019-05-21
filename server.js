var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT|| 8080;

//  app.get('/', function(req, res){
//      res.send('Hello World');
//  })

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.use(express.static("app/public"));


 
app.use(function (req, res) {
  // res.setHeader('Content-Type', 'text/plain')
  // res.write('you posted:\n')
  // res.end(JSON.stringify(req.body, null, 2))
});

require('./app/routing/htmlRoutes.js')(app); 
require('./app/routing/apiRoutes.js')(app);


app.listen(PORT, function(){
    console.log("App listening on PORT;" + PORT);
});