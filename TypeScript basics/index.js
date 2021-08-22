"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (res) {
    var todo = res.data;
    console.log(todo);
    var ID = todo.id;
    var title = todo.title;
    var finished = todo.finished;
    console.log("\n  Todo with ID: " + ID + "\n  Title: " + title + ";\n  fisished? " + finished + "\n  ");
});
