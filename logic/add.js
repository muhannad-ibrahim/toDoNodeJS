const requireJson = require("./readFile");
const fs = require("fs");

exports.add = function (arg) {
  const todos = requireJson();
  if (!todos) {
    console.log("cannot read from file");
  } else {
    // push task
    let id = todos.length > 0 ? todos[todos.length - 1].id : 0;
    if (arg.length >= 1) {
      for (let index = 0; index < arg.length; index++) {
        const obj = {
          id: ++id,
          task: arg[index],
          status: "to-do",
        };
        todos.push(obj);
      }
      console.log("Inserted successfully!");
    } else {
      console.error("There's no arguments");
    }
    fs.writeFileSync("./todos.json", JSON.stringify(todos));
  }
};
