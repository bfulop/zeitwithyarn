const addtwo = require('./src/addtwo')

module.exports = (req, res) => {
  res.end(`The date is ${Date.now()}`)
}
