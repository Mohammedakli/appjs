const express = require('express')
const apiRouter =  require('./services/api')
const config = require('config')
const bodyParser = require('body-parser')
const cors = require('cors')

const server = express()
server.use(cors())
server.use(bodyParser.json());
server.use(apiRouter);



server.listen(config.get('port'), () => {
    console.log(`Server started at port ${config.get('port')}`);
    
  });
  