/**
 * Created by muhammed on 25/12/16.
 */
var express = require('express');
var routes = require('./routes/route');
var app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', routes.home);
app.get('/:city', routes.city);

var port = process.env.PORT || 8080;
app.listen(port, function (req, res) {
    console.log('Server started at ', port);
});
