const net = require("net");
const connect = require('./client')
// establishes a connection with the game server

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function() {
  stdin.on('data', (key) => {
    if (key === '\u0003'){
      process.exit();
    }
  }) 
};

stdin.on("data", handleUserInput);
console.log("Connecting ...");
connect();
