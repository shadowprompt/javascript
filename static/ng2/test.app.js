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
var AppComponent = (function () {
    function AppComponent(_compiler) {
        this._compiler = _compiler;
        this.todos = [{
                label: 'Buy milk',
                completed: false
            }, {
                label: "Save the world",
                completed: false
            }];
        // @Input()
        this.name = 'D.T in the House';
        this.pTitle = "pTitle";
        this.par = "parText";
        this.divT = "divT";
        console.log(this);
        this._compiler.clearCache();
        var STATES;
        (function (STATES) {
            STATES[STATES["CONNECTING"] = 1] = "CONNECTING";
            STATES[STATES["CONNECTED"] = 2] = "CONNECTED";
            STATES[STATES["DISCONNECTED"] = 3] = "DISCONNECTED";
        })(STATES || (STATES = {}));
        ;
        this.states = STATES;
        var arr = [1, 4, 9];
        var re = arr.map(Math.sqrt);
        console.log(re);
    }
    AppComponent.prototype.addTodo = function (label) {
        this.todos.push({
            label: label,
            completed: false
        });
    };
    AppComponent.prototype.removeTodo = function (idx) {
        this.todos.splice(idx, 1);
    };
    AppComponent.prototype.toggleCompletion = function (idx) {
        var todo = this.todos[idx];
        todo.completed = !todo.completed;
    };
    AppComponent.prototype.change = function () {
        this.pTitle = new Date().getTime().toString();
        console.log(this.pTitle);
    };
    AppComponent.prototype.cc = function () {
        console.log('sucess');
    };
    AppComponent.prototype.ngOnChanges = function (changes) {
        console.log('ngOnChanges in App');
    };
    AppComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit in App');
    };
    AppComponent.prototype.ngDoCheck = function () {
        console.log('ngDoCheck in App');
    };
    AppComponent.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy in App');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        directives: [Panel],
        inputs: ['title'],
        templateUrl: 'test.template.html?' + new Date().getTime(),
        styles: [
            "ul li {\n      list-style: none;\n    }\n    .completed {\n      text-decoration: line-through;\n    }"
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Compiler !== "undefined" && core_1.Compiler) === "function" && _a || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var Panel = (function () {
    function Panel() {
        // pTitle:string= "hehe";
        this.theText = "text";
        this.ppText = "ppText";
        this.cp = new core_1.EventEmitter(); //此处的cp应与母标签里面的"(cp)"名字保持一致
        console.log(new Date());
    }
    Panel.prototype.cc = function () {
        this.cp.emit(new Date().toString());
    };
    Panel.prototype.pp = function () {
        this.ppText = new Date().getTime().toString();
    };
    Panel.prototype.ngOnChanges = function (changes) {
        console.log('ngOnChanges in Panel');
        Object.keys(changes).forEach(function (prop) {
            console.log(prop, 'changed. Before value', changes[prop].previousValue);
        });
    };
    Panel.prototype.ngOnInit = function () {
        console.log('ngOnInit in Panel');
    };
    Panel.prototype.ngDoCheck = function () {
        console.log('ngDoCheck in Panel');
    };
    Panel.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy in Panel');
    };
    return Panel;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Panel.prototype, "theTitle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Panel.prototype, "ppText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Panel.prototype, "inText", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Panel.prototype, "cp", void 0);
Panel = __decorate([
    core_1.Component({
        selector: 'panel',
        template: "\n  <input type=\"\" [value]=\"inText\">\n  <input type=\"text\" [value]=\"theTitle\" #cInput [title]=\"ppText\">{{theText}}<button (click)=\"cc()\">cc</button>ppText = {{ppText}}<button (click)=\"pp()\">cc</button>\n  "
    }),
    __metadata("design:paramtypes", [])
], Panel);
exports.Panel = Panel;
[];
var _a;
//# sourceMappingURL=test.app.js.map