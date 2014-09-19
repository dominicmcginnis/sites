
/**
 * Module dependencies.
 */

var domain = 'localhost';

var express = require('express'),
    http = require('http');

var app = express();

app.configure(function() {
  app.set('domain', domain);
  app.set('port', process.env.PORT || 8080);
  app.set('views', __dirname + '/templates');
  app.engine('html', require('ejs').renderFile);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.all('/index', function(req, res) {
	res.render("index.html");
});
app.all('/home', function(req, res) {
	res.render("index.html");
});
app.all('/blog', function(req, res) {
	res.render("blog.html");
});
app.all('/page', function(req, res) {
	res.render("page.html");
});
app.all('/page-elements', function(req, res) {
	res.render("page-elements.html");
});
app.all('/page-icons', function(req, res) {
	res.render("page-icons.html");
});
app.all('/page-typography', function(req, res) {
	res.render("page-typography.html");
});
app.all('/portfolio', function(req, res) {
	res.render("portfolio.html");
});
app.all('/contact', function(req, res) {
	res.render("contact.html");
});

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
