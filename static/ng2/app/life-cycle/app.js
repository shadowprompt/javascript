"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Panel = (function () {
    function Panel() {
    }
    Panel.prototype.ngOnChanges = function (changes) {
        console.log('On changes', changes);
    };
    Panel.prototype.ngOnInit = function () {
        console.log('Initialized');
    };
    Panel.prototype.ngDoCheck = function () {
        console.log('Do check');
    };
    Panel.prototype.ngOnDestroy = function () {
        console.log('Destroy');
    };
    Panel.prototype.ngAfterContentInit = function () {
        console.log('After content init');
    };
    Panel.prototype.ngAfterContentChecked = function () {
        console.log('After content checked');
    };
    Panel.prototype.ngAfterViewInit = function () {
        console.log('After view init');
    };
    Panel.prototype.ngAfterViewChecked = function () {
        console.log('After view checked');
    };
    return Panel;
}());
Panel = __decorate([
    core_1.Component({
        selector: 'panel',
        inputs: ['title', 'caption'],
        template: '<h2><ng-content></ng-content></h2>'
    })
], Panel);
exports.Panel = Panel;
var App = (function () {
    function App() {
        this.counter = 0;
    }
    App.prototype.toggle = function () {
        this.counter += 1;
    };
    return App;
}());
App = __decorate([
    core_1.Component({
        selector: 'app',
        template: "\n    <button (click)=\"toggle()\">Toggle</button>\n    <div *ngIf=\"counter % 2 == 0\">\n      <panel caption=\"Sample caption\" title=\"Sample\">Hello world!</panel>\n    </div>\n  ",
        directives: [Panel]
    })
], App);
exports.App = App;
// bootstrap(App);
//# sourceMappingURL=app.js.map