module.exports = function (){
    const program = require("commander");

    program.option("-s <string>", "used to refer to the status of task")
        .option("-t <string>","name of new task")
        .requiredOption("-id <number>","id of task");

    program.parse();
    console.log(program.opts());
}