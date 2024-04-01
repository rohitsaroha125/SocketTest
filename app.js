const express = require("express");
const messageRoutes = require("./routes/messages");
const sockets = require("./socket");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // to allow cross-origin access
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  ); // to allow different methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // to allow different headers
  next();
});

app.use(messageRoutes);

const server = app.listen(5000, () => {
  console.log("Server Running");
});
const io = sockets.init(server);

io.on("connection", (socket) => {
  console.log("Client Connected");
});
