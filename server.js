console.log('Starting server');
var express = require('express');
var app = express();
var server = app.listen(3000, listening);
function listening() {
    console.log("server is listenting...")
}
app.use(express.static('website'));

