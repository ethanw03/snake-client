const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

 
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Connection Successful!")
    conn.write("name: ENW");
    // conn.write('Move: up')
  });

  conn.on("data", (data) => {
    console.log("server said", data);
  });
  return conn;
};

module.exports = connect;
