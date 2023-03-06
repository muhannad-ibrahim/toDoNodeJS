const fs = require('fs')
module.exports = function () {
    return JSON.parse(fs.readFileSync("./todos.json", { encoding: "utf-8" }) || []);
  }