const http = require('http')

const start_server = function({port}) {
  if (!port || isNaN(port)) port = 1458

  const server = http.createServer()

  server.listen(port, function () {
    console.log(`HTTP server is listening on port: ${port}`)
  })

  return server
}

module.exports = start_server
