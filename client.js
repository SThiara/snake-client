const net = require('net');
const network = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: network.IP,
    port: network.PORT
  });
  // interpret incoming data as text
  conn.on('connect', () => console.log("Successfully connected to the game server"));
  conn.setEncoding('utf8'); 
  conn.on('connect', () => {
    conn.write('Name: KEK');
    // conn.write('Move: up');
    // setInterval(() => conn.write('Move: up'), 50);
    // setTimeout(() => conn.write('Move: up'), 100);
  });
  conn.on('data', () => console.log("you ded cuz you idled"));

  return conn;
}

module.exports = {
  connect
}