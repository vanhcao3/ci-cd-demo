var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello VDT2024, my name is Viet Anh" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
//Modify abc xyz
app.listen(process.env.PORT || 3000);
module.exports = app;
