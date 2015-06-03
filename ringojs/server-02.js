//-------------
// server-02.js
//-------------
// rp install stick
// ringo server-02.js

var response = require("ringo/jsgi/response");
var {Application} = require("stick");

var app = exports.app = new Application();

// Configure stick middlewares
app.configure("notfound", "route");

var html_text = "<!DOCTYPE html>\n" +
  	"<html>\n" +
    "<head>\n" +
    "<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\" />\n"  +
    "<title>ringo-stick-test</title>\n" +
    "</head>\n" +
    "<body>\n" +
    "<h1>Servus šmíráku!</h1>\n" +
    "</body>\n" +
    "</html>";

app.get("/", function(request) {
  return response.html(html_text);
});

if (require.main == module) {
  require("ringo/httpserver").main(module.id);
}
