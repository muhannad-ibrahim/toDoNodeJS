const requireJson = require("./readFile");
const fs = require("fs");

exports.deleteTask = function (arg) {
  if (arg.length === 1) {
    const todos = requireJson();
    if (!todos) {
      console.log("cannot read from file");
    } else {
      let newTodos = [];
      todos.filter((doc) => {
        if (doc["id"] != parseInt(arg[0])) {
          newTodos.push(doc);
        }
      });

      if (newTodos.length > 0 && newTodos.length !== todos.length) {
        fs.writeFileSync("./todos.json", JSON.stringify(newTodos));
        console.log("deleted successfully");
      } else {
        console.log("can't delete");
      }
    }
  }
};
