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
var FancyButton = (function () {
    function FancyButton() {
    }
    return FancyButton;
}());
FancyButton = __decorate([
    core_1.Component({
        selector: 'fancy-button',
        template: '<button><ng-content></ng-content></button>'
    })
], FancyButton);
exports.FancyButton = FancyButton;
var Panel = (function () {
    function Panel() {
    }
    return Panel;
}());
Panel = __decorate([
    core_1.Component({
        selector: 'panel',
        styles: [
            ".panel {\n      width: auto;\n      display: inline-block;\n      border: 1px solid black;\n    }\n    .panel-title {\n      border-bottom: 1px solid black;\n      background-color: #eee;\n    }\n    .panel-content,\n    .panel-title {\n      padding: 5px;\n    }"
        ],
        template: "\n    <div class=\"panel\">\n      <div class=\"panel-title\">\n        <ng-content select=\"panel-title\"></ng-content>\n      </div>\n      <div class=\"panel-content\">\n        <ng-content select=\"panel-content\"></ng-content>\n      </div>\n    </div>"
    })
], Panel);
exports.Panel = Panel;
var App = (function () {
    function App() {
    }
    return App;
}());
App = __decorate([
    core_1.Component({
        selector: 'app',
        template: "\n    <fancy-button>\n      <span>I will <i>be</i> projected</span>\n    </fancy-button>\n    <br>\n    <panel>\n      <panel-title>Sample title + </panel-title>\n      <panel-title>Sample title2</panel-title>\n      <panel-content>Content</panel-content>\n    </panel>\n  ",
        directives: [FancyButton, Panel]
    }),
    __metadata("design:paramtypes", [])
], App);
exports.App = App;
// bootstrap(App);
//# sourceMappingURL=app.js.map