const os = require("os");

console.log(os.arch());
console.log(os.freemem());
console.log(os.hostname());

module.exports = os;