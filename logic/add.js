const requireJson = require('./readFile')

exports.add = function (arg){
    try {
      const fs = require("fs");
      const todos = requireJson();
      // push task
      let i = 0;
      let id = 0;
      if (arg.length >= 1) {
        id = todos.length > 0 ? todos[todos.length-1].id : 0;
        while (i < arg.length) {
          const obj = {
            id: ++id,
            task: arg[i],
            status: 'to-do'
          };
          todos.push(obj);
          i++;
        }
        console.log("Inserted successfully!");
      } else {
        console.error("There's no arguments");
      }
      fs.writeFileSync("./todos.json", JSON.stringify(todos));
    } catch (error) {
      console.error("Error during read or write into file");
    }
  }