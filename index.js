var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});
app.get('/listUsers', function(req, res) {
    var user = { name: 'Andrew', likes: ['Biking', 'Skiing'] };
    res.send(user);
});