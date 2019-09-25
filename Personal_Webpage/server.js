//server.js
var express = require("express"); 
var path = require("path");
var app = express();
var HTTP_PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.static('views'));

app.use(express.static(__dirname + "public/javascript"));

app.get('/',function(req, res){
    res.sendFile(path.join(__dirname,"./views/home.html"));
})

app.get('/about',function(req, res){
    res.sendFile(path.join(__dirname, "./views/about.html"))
})

app.get('/saki',function(req, res){
    res.sendFile(path.join(__dirname, "./views/saki.html"))
})

app.listen(HTTP_PORT);