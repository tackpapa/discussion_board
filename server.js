var express = require('express');
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.use(session({
    secret: "slkdjflkasjf;klajdf;lka",
    resave: true,
    saveUninitialized: true
}));
// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, './client/static')));
app.listen(8000, function() {
  console.log('listening to port 8000');
})
