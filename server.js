var express = require("express");
var app=express();
var path = require('path');
var PORT=8080;


app.use(express.static(__dirname + '/public'));


app.get('*',function(req,res) {
    res.sendFile(path.join(__dirname+'/public/index.html'));
})


app.listen(PORT, function () {
    console.log('Server is working on port: '+PORT)
})