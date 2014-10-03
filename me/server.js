
/**
 * Module dependencies.
 */

var domain = 'localhost';

var express = require('express'),
    http = require('http');

var app = express();

app.set('domain', domain);
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/templates');

// Set our default template engine to "jade"
app.set('view engine', 'jade');
app.use("/", express.static(__dirname + "/public"));

app.get('/', function(req, res){
  res.render('home');
});

app.all('/index', function(req, res) {
	res.render("index");
});
app.all('/blog', function(req, res) {
	res.render("blog");
});
app.all('/page', function(req, res) {
	res.render("page");
});
app.all('/page-elements', function(req, res) {
	res.render("page-elements");
});
app.all('/page-icons', function(req, res) {
	res.render("page-icons");
});
app.all('/page-typography', function(req, res) {
	res.render("page-typography");
});
app.all('/portfolio', function(req, res) {
	res.render("portfolio");
});
app.all('/contact', function(req, res) {
	res.render("contact");
});

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
