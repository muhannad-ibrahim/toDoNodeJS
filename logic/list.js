const requireJson = require('./readFile')
exports.list = function (arg) {
    let tempTask = [];
    let flag = 0;
    try {
        if (arg.length === 2) {
            const todos = requireJson();
            todos.forEach((doc) => {
                if(arg[0] === '-s'){
                    if (doc["status"] === arg[1].toLowerCase()) {
                        tempTask.push(doc);
                        flag = 1;
                    }
                }
            });
            if (flag) { 
                console.log(tempTask);
            }
        }
        else {
            const todos = requireJson();
            console.log(todos)
        }
    } catch (error) {
      console.error(error);
    }
  }