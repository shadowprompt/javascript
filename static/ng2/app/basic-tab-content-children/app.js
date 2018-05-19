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
var TabTitle = (function () {
    function TabTitle() {
        this.tabSelected = new core_1.EventEmitter();
    }
    TabTitle.prototype.handleClick = function () {
        this.tabSelected.emit(this);
    };
    return TabTitle;
}());
__decorate([
    core_1.Output('selected'),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], TabTitle.prototype, "tabSelected", void 0);
TabTitle = __decorate([
    core_1.Component({
        selector: 'tab-title',
        styles: ["\n    .tab-title {\n      display: inline-block;\n      cursor: pointer;\n      padding: 5px;\n      border: 1px solid #ccc;\n    }\n  "],
        template: "\n    <div class=\"tab-title\" (click)=\"handleClick()\">\n      <ng-content></ng-content>\n    </div>\n  "
    })
], TabTitle);
exports.TabTitle = TabTitle;
var TabContent = (function () {
    function TabContent() {
        this.isActive = false;
    }
    return TabContent;
}());
TabContent = __decorate([
    core_1.Component({
        selector: 'tab-content',
        styles: ["\n    .tab-content {\n      border: 1px solid #ccc;\n      border-top: none;\n      padding: 5px;\n    }\n  "],
        template: "\n    <div class=\"tab-content\" [hidden]=\"!isActive\">\n      <ng-content></ng-content>\n    </div>\n  "
    })
], TabContent);
exports.TabContent = TabContent;
var Tabs = (function () {
    function Tabs() {
        this.tabChanged = new core_1.EventEmitter();
    }
    Tabs.prototype.select = function (index) {
        var contents = this.tabContents.toArray();
        // console.log(contents);
        contents[this.active].isActive = false;
        this.active = index;
        contents[this.active].isActive = true;
        this.tabChanged.emit(index);
    };
    Tabs.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.tabTitles
            .map(function (t) { return t.tabSelected; })
            .forEach(function (t, i) {
            t.subscribe(function (_) {
                _this.select(i);
            });
        });
        this.active = 0;
        this.select(0);
    };
    return Tabs;
}());
__decorate([
    core_1.Output('changed'),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], Tabs.prototype, "tabChanged", void 0);
__decorate([
    core_1.ContentChildren(TabTitle),
    __metadata("design:type", typeof (_c = typeof core_1.QueryList !== "undefined" && core_1.QueryList) === "function" && _c || Object)
], Tabs.prototype, "tabTitles", void 0);
__decorate([
    core_1.ContentChildren(TabContent),
    __metadata("design:type", typeof (_d = typeof core_1.QueryList !== "undefined" && core_1.QueryList) === "function" && _d || Object)
], Tabs.prototype, "tabContents", void 0);
Tabs = __decorate([
    core_1.Component({
        selector: 'tabs',
        styles: [
            "\n      .tab {\n        display: inline-block;\n      }\n      .tab-nav {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n      }\n    "
        ],
        template: "\n    <div class=\"tab\">\n      <div class=\"tab-nav\">\n        <ng-content select=\"tab-title\"></ng-content>\n      </div>\n      <ng-content select=\"tab-content\"></ng-content>\n    </div>\n  "
    })
], Tabs);
exports.Tabs = Tabs;
var App = (function () {
    function App() {
    }
    App.prototype.tabChanged = function (tab) {
        console.log(tab);
    };
    return App;
}());
App = __decorate([
    core_1.Component({
        selector: 'app',
        template: "\n    <tabs (changed)=\"tabChanged($event)\">\n      <tab-title>Tab 1</tab-title>\n      <tab-content>Content 1</tab-content>\n      <tab-title>Tab 2</tab-title>\n      <tab-content>Content 2</tab-content>\n    </tabs>\n  ",
        directives: [Tabs, TabContent, TabTitle]
    })
], App);
exports.App = App;
var _a, _b, _c, _d;
// bootstrap(App);
//# sourceMappingURL=app.js.map