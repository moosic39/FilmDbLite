import "./moviesList.json";

function letUserChoose() {
  console.log("What do you want to do?");
}

//---------------------------------------

const fs = require("fs");
const arg = process.argv[2];

function addToDo(todo) {
  fs.writeFileSync("./todos.txt", todo + "\n", { flag: "a+" });
}

module.exports = {
  addToDo: addToDo,
};
if (arg) addToDo(arg);

const fs = require("fs");

function printListTodos() {
  let todos = fs.readFileSync("./todos.txt", "utf8");
  todos = todos.split("\n").filter(Boolean);
  let list = [];
  for (const todo of todos) {
    list.push(`[ ] ${todo}`);
  }
  let print =
    `Vous avez ${todos.length} todo${todos.length === 1 ? "" : "s"} \n` + list;
  return print;
}

console.log(printListTodos());

module.exports = { printListTodos };

//---------------------------------------
