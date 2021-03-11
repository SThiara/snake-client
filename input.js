let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  connection = conn;

  const handleUserInput = stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === "w") {
      connection.write("Move: up");
    }
    if (key === "s") {
      connection.write("Move: down");
    }
    if (key === "a") {
      connection.write("Move: left");
    }
    if (key === "d") {
      connection.write("Move: right");
    }
    if (key === "u") {
      connection.write("Say: Nice shot!");
    }
    if (key === "i") {
      connection.write("Say: Too slow!");
    }
  });

  return stdin;
};

module.exports = { setupInput };