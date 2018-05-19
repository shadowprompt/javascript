"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var InputBox = (function () {
    function InputBox() {
        this.inputText = new core_1.EventEmitter();
    }
    InputBox.prototype.emitText = function (text) {
        this.inputText.emit(text);
    };
    return InputBox;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InputBox.prototype, "inputPlaceholder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InputBox.prototype, "buttonLabel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], InputBox.prototype, "inputText", void 0);
InputBox = __decorate([
    core_1.Component({
        selector: 'input-box',
        template: "\n    <input #todoInput [placeholder]=\"inputPlaceholder\">\n    <button (click)=\"emitText(todoInput.value); todoInput.value = '';\">\n      {{buttonLabel}}\n    </button>\n  "
    })
], InputBox);
exports.InputBox = InputBox;
var TodoList = (function () {
    function TodoList() {
        this.toggled = new core_1.EventEmitter();
    }
    TodoList.prototype.toggleCompletion = function (index) {
        var todo = this.todoss[index];
        this.toggled.emit(todo);
    };
    ;
    return TodoList;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TodoList.prototype, "todoss", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TodoList.prototype, "toggled", void 0);
TodoList = __decorate([
    core_1.Component({
        selector: 'todo-list',
        template: "\n    <ul>\n      <li *ngFor=\"let todo of todoss; let index = index\" [class.completed]=\"todo.completed\">\n        <input type=\"checkbox\" [checked]=\"todo.completed\"\n          (change)=\"toggleCompletion(index)\">\n        {{todo.label}}\n      </li>\n    </ul>\n  ",
        styles: [
            "ul li {\n      list-style: none;\n    }\n    .completed {\n      text-decoration: line-through;\n    }"
        ]
    })
], TodoList);
exports.TodoList = TodoList;
var App = (function () {
    function App() {
        this.todos = [{
                label: 'Buy milk',
                completed: false
            }, {
                label: "Save the world",
                completed: false
            }];
        this.name = 'Key';
    }
    App.prototype.addTodo = function (label) {
        this.todos.push({
            label: label,
            completed: false
        });
    };
    App.prototype.toggleCompletion = function (todo) {
        todo.completed = !todo.completed;
    };
    return App;
}());
App = __decorate([
    core_1.Component({
        selector: 'todo-app',
        // directives: [InputBox, TodoList], //directives已经没有用了
        template: "\n    <h1>Hello {{name}}!</h1>\n\n    <p>\n      Add a new todo:\n      <input-box inputPlaceholder=\"New todo...\"\n        buttonLabel=\"Add\"\n        (click)=\"handleClick($event)\"\n        (inputText)=\"addTodo($event)\">\n      </input-box>\n    </p>\n\n    <p>Here's the list of pending todo items:</p>\n    <todo-list [todoss]=\"todos\"\n      (toggled)=\"toggleCompletion($event)\">\n    </todo-list>\n  "
    })
], App);
exports.App = App;
// bootstrap(TodoApp); 
//# sourceMappingURL=app.js.map