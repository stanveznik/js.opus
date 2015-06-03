//-------------
// server-01.js
//-------------
// ringo server-01.js
exports.app = function(req) {
  return {
    status: 200,
    headers: {"Content-Type": "text/plain"},
    body: ["Hello World!"]
  };
};

if (require.main == module)
  require("ringo/httpserver").main(module.id);
 