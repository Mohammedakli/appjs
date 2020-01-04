const express = require('express')
const apiRouter =  require('./services/api')
const config = require('config')
const bodyParser = require('body-parser')
const axios = require('axios');
const cors = require('cors')
const socketIo = require("socket.io");
const server = express()
const app = server.listen(config.get('port'), () => {
  console.log(`Server started at port ${config.get('port')}`);
  
});
const io = socketIo(app);

server.use(cors())
server.use(bodyParser.json());
server.use(apiRouter);


  let interval;
  io.on("connection", socket => {
    console.log("New client connected");
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(() => getApiAndEmit(socket), 100);
    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
  

  


  const getApiAndEmit = async socket => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/list"
      ); 
      socket.emit("FromAPI", res.data); 
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };  

 