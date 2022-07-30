const inputMessage = document.getElementById("message");
const submitButton = document.getElementById("button");
const messages = document.getElementById("messages");
const URL = "ws://127.0.0.1:8080/websocket";

const ws = new WebSocket(URL);

submitButton.disabled = true;

function sendMessage() {
  const inputVal = inputMessage.value;
  generateMessageEntry(inputVal, "client");
  ws.send(inputVal);
}

submitButton.addEventListener("click", sendMessage, false);

function generateMessageEntry(data, type) {
  const div = document.createElement("div");
  div.innerText = `${type} says ${data}`;
  messages.appendChild(div);
}

ws.onopen = function () {
  submitButton.disabled = false;
};
ws.onmessage = function (event) {
  const { data } = event;
  generateMessageEntry(data, "server");
};
