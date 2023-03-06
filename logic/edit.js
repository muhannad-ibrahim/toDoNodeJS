const requireJson = require("./readFile");
exports.edit = function (arg) {
    let statusArr =  ["to-do","in progress","done"];
    let flag = 0;
    const fs = require("fs");
    if (arg.length === 4) {
        try {
            const todos = requireJson();
            todos.forEach((doc) => {
                if (doc["id"] === parseInt(arg[3])) {
                switch (arg[0]) {
                    case "-s":
                        if(statusArr.includes(arg[1].toLowerCase())){
                            doc["status"] = arg[1].toLowerCase();
                            flag = 1;
                        }
                        break;
                    case "-t":
                        doc["task"] = arg[1];
                        flag = 1;
                        break;
                }
                }
            });
            if (flag) {
                fs.writeFileSync("./todos.json", JSON.stringify(todos));
                console.log("updated successfully");
            } else {
                console.log("can't update");
            }
        } catch (error) {
            console.error("Error during read or write into file");
        }
    }
    else if (arg.length === 6) {
        try {
            const todos = requireJson();
            todos.forEach((doc) => {
                if (doc["id"] === parseInt(arg[5])) {
                switch (arg[0]) {
                    case "-s":
                        if(statusArr.includes(arg[1].toLowerCase())){
                            doc["status"] = arg[1].toLowerCase();
                            doc["task"] = arg[3];
                            flag = 1;
                        }
                        break;
                    case "-t":
                        if(statusArr.includes(arg[3].toLowerCase())){
                            doc["task"] = arg[1];
                            doc["status"] = arg[3].toLowerCase();
                            flag = 1;
                        }
                        break;
                }
                }
            });
            if (flag) {
                fs.writeFileSync("./todos.json", JSON.stringify(todos));
                console.log("updated successfully");
            } else {
                console.log("can't update");
            }
        } catch (error) {
            console.error("Error during read or write into file");
        }
    }
};
