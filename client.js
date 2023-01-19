const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    IP: "localhost",
    PORT: 50541,
  });

  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Connection Successful!");
    conn.write("Name: ENW");
  });

  conn.on("data", (data) => {
    console.log("server said", data);
  });
  return conn;
};

module.exports = { connect };
