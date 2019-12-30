const express = require('express')
const apiRouter =  require('./services/api')
const config = require('config')
const bodyParser = require('body-parser')

const server = express()
server.use(bodyParser.json());
server.use(apiRouter);


server.listen(config.get('port'), () => {
    console.log(`Server started at port ${config.get('port')}`);
    
  });
  