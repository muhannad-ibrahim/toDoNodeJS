const requireJson = require('./readFile')

exports.deleteTask = function (arg){
    let flag = 0;
    let countTasks = 0;
  if (arg.length === 1) {
    try {
      const fs = require("fs");
      const todos = requireJson();
      todos.forEach((doc) => {
        if (doc["id"] === parseInt(arg[0])) {
           todos.splice(countTasks,1);
          flag = 1;
        }
        countTasks++;
      });
      if (flag) {
        fs.writeFileSync("./todos.json", JSON.stringify(todos));
        console.log("deleted successfully");
      } else {
        console.log("can't delete");
      }
    } catch (error) {
      console.error("Error during read or write into file");
    }
  }
}