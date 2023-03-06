const argv = process.argv;
const [, , cmd, ...arg] = argv;
const addRef = require('./logic/add')
const editRef = require('./logic/edit')
const listRef = require('./logic/list')
const deleteRef = require('./logic/delete')

if (cmd === "add") {
  addRef.add(arg);
} else if (cmd === "list") {
  listRef.list(arg);
} else if (cmd === "edit") {
  editRef.edit(arg);
} else if (cmd === "delete") {
  deleteRef.deleteTask(arg);
}
