const http = require("http");

const sever = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  const users = [];
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Send A Message</title></head>");
    res.write(
      '<body><form action ="/create-user" method="POST"><input type="text" name="user"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Users List</title></head>");
    res.write("<body><ul><li>User 1</li><li>User 2</li></ul></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const data = [];

    req.on("data", (user) => {
      data.push(user);
    });
    req.on("end", () => {
      const parsedData = Buffer.concat(data).toString();
      const user = parsedData.split("=")[1];
      users.push(user);
      console.log(users);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
});

sever.listen(3000);
