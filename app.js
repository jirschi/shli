const express = require("express");
var path = require('path');
var helmet = require('helmet');


let app = new express();
app.use(helmet());
let port = 80;




//GET, POST, ...
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.get('/', function (req, res) {
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
app.all('*', function (req, res) {
    res.send("Sth went wrong")
});

app.listen(port, function () {
    console.log("Server started listening on: " + port);
});