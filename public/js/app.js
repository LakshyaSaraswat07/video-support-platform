const socket = io();

const startBtn = document.getElementById("startBtn");
const localVideo = document.getElementById("localVideo");

startBtn.addEventListener("click", async () => {

  const stream =
  await navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
  });

  localVideo.srcObject = stream;
});

const sendBtn =
document.getElementById("sendBtn");

const messageInput =
document.getElementById("messageInput");

const messages =
document.getElementById("messages");

sendBtn.addEventListener("click", () => {

  const msg = messageInput.value;

  socket.emit("chat-message", msg);

  messageInput.value = "";
});

socket.on("chat-message", (msg) => {

  const div =
  document.createElement("div");

  div.innerText = msg;

  messages.appendChild(div);
});