var express = require('express'),
    app = express(),
    server = require('http').createServer(app);
    var path = require("path");

app.get('*', function (req, res) {

    console.log(req.url);

    res.sendFile(path.join(__dirname + '/ret.html'));
});

server.listen(3000, function () {
    console.log('Rodando na 3000');
});