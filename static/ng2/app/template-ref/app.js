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
        this.toggle = new core_1.EventEmitter();
    }
    return TodoList;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TodoList.prototype, "todos", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof core_1.TemplateRef !== "undefined" && core_1.TemplateRef) === "function" && _a || Object)
], TodoList.prototype, "itemsTemplate2", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TodoList.prototype, "toggle", void 0);
TodoList = __decorate([
    core_1.Component({
        selector: 'todo-list',
        template: "\n    <ul>\n      <template *ngFor=\"let todo of todos; template: itemsTemplate2\">\n      </template>\n    </ul>\n  "
    })
], TodoList);
exports.TodoList = TodoList;
var TodoApp = (function () {
    function TodoApp() {
        this.todos = [{
                label: 'Buy milk',
                completed: false
            }, {
                label: "Save the world",
                completed: false
            }];
        this.name = 'John';
    }
    TodoApp.prototype.addTodo = function (label) {
        this.todos.push({
            label: label,
            completed: false
        });
    };
    return TodoApp;
}());
__decorate([
    core_1.ContentChild(core_1.TemplateRef),
    __metadata("design:type", typeof (_b = typeof core_1.TemplateRef !== "undefined" && core_1.TemplateRef) === "function" && _b || Object)
], TodoApp.prototype, "itemsTemplate", void 0);
TodoApp = __decorate([
    core_1.Component({
        selector: 'todo-app',
        directives: [TodoList, InputBox],
        template: "\n    <h1>Hello {{name}}!</h1>\n\n    <p>\n      Add a new todo:\n      <input-box inputPlaceholder=\"New todo\"\n        buttonLabel=\"Add\"\n        (inputText)=\"addTodo($event)\">\n      </input-box>\n    </p>\n\n    <p>Here's the list of pending todo items.:</p>\n\n    <todo-list [todos]=\"todos\"\n      (toggle)=\"toggleCompletion($event)\"\n      [itemsTemplate2]=\"itemsTemplate\">\n    </todo-list>\n  "
    })
], TodoApp);
exports.TodoApp = TodoApp;
var App = (function () {
    function App() {
    }
    return App;
}());
App = __decorate([
    core_1.Component({
        selector: 'app',
        directives: [TodoApp],
        styles: ["\n    .completed {\n      text-decoration: line-through;\n    }"
        ],
        template: "\n    <todo-app>\n      <template  let-todo>\n        <input type=\"checkbox\" [checked]=\"todo.completed\"\n          (change)=\"todo.completed = !todo.completed;\">\n        <span [class.completed]=\"todo.completed\">\n          {{todo.label}}\n        </span><br>\n      </template>\n    </todo-app>\n  "
    })
], App);
exports.App = App;
var _a, _b;
// bootstrap(App);
//# sourceMappingURL=app.js.map