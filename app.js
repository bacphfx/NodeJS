const http = require("http");

const routes = require("./routes");
console.log(routes.someText);
const sever = http.createServer(routes.handler);

sever.listen(3000);
