const express = require('express')
const apiRouter =  require('./services/api')

const server = express()

server.use(apiRouter);

server.listen('3000')