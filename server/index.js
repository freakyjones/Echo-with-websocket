const { WebSocketServer } = require("ws");

const wss = new WebSocketServer(
  {
    port: 8080,
  },
  () => {
    console.log("connection ready");
  }
);

wss.on("connection", function connection(ws) {
  ws.send("hi i am from server");
  ws.on("message", function message(data) {
    ws.send(data.toString());
  });
});
