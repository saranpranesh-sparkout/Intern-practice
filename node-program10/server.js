const http = require("http");

http.createServer((req, res) => {
  if (req.url === "/") res.end("Home Page");
  else if (req.url === "/about") res.end("About Page");
  else res.end("404 Not Found");
}).listen(3000, () => console.log("Server running on port 3000"));
