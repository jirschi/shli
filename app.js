var express = require("express");
var app = express();
var port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;
var http = require('http').Server(app);


var path = require('path');
//var helmet = require('helmet');
//app.use(helmet());





//GET, POST, ...
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("public"));


app.set('view engine', 'pug');
app.enable('trust proxy');

app.get('/', function (req, res) {
    res.render('index');
});
app.get('/index', function (req, res) {
    res.render('index');
});
app.get('/praxis', function (req, res) {
    res.render('praxis')
});


app.get('/hoefer', function (req, res) {
    res.render('hoefer')
});
app.get('/lipp', function (req, res) {
    res.render('lipp')
});
app.get('/cornelsen', function (req, res) {
    res.render('cornelsen')
});
app.get('/haigis', function (req, res) {
    res.render('haigis')
});
app.get('/contact', function (req, res) {
    res.render('contact')
});
app.get('/anfahrt', function (req, res) {
    res.render('anfahrt')
});
app.get('/sprechstunde', function (req, res) {
    res.render('sprechstunde')
});
app.get('/kostenuebernahme', function (req, res) {
    res.render('kosten')
});
app.get('/kinder', function (req, res) {
    res.render('kinder')
});
app.get('/jugendliche', function (req, res) {
    res.render('jugend')
});
app.get('/impressum', function (req, res) {
    res.render('impressum')
});
app.get('/datenschutz', function (req, res) {
    res.render('datenschutz')
});

app.get('/robots.txt', function (req, res) {
    res.type('text/plain');
    res.send("User-agent: *\nDisallow: ");
});

app.all('*', function (req, res) {
    res.send("Sth went wrong")
});

//app.listen(port, function () {
//    console.log("Server started listening on: " + port);
//});

http.listen(port, function () {
    console.log('listening on *:' + port);
});