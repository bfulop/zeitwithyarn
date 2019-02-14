const handler = require('./bundle/date')
var http = require('http')
var server = http.createServer(handler)
server.listen(5000)
