"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.todos = [{
                label: 'Buy milk',
                completed: false
            }, {
                label: "Save the world",
                completed: false
            }];
        this.name = 'John';
    }
    AppComponent.prototype.addTodo = function (label) {
        console.log(label);
        this.todos.push({
            label: label,
            completed: false
        });
    };
    AppComponent.prototype.removeTodo = function (idx) {
        this.todos.splice(idx, 1);
    };
    AppComponent.prototype.toggleCompletion = function (idx) {
        console.log(this.todos);
        var todo = this.todos[idx];
        todo.completed = !todo.completed;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: 'index.html',
        styles: [
            "ul li {\n      list-style: none;\n    }\n    .completed {\n      text-decoration: line-through;\n    }"
        ]
    })
], AppComponent);
exports.AppComponent = AppComponent;
// bootstrap(TodoCtrl);
//# sourceMappingURL=app.js.map