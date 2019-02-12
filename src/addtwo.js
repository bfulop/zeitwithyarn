// const addnumbers = require('../lib/addnumbers')
require.resolve('../lib/addnumbers')
var FILES = [
    "../lib/addnumbers.js",
].map(function(file){
    return require.resolve(file);
});
module.exports = (x) => addnumbers(2,x)
