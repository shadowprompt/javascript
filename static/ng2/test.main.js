"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var test_app_1 = require("./test.app");
var AppMain = (function () {
    function AppMain() {
    }
    return AppMain;
}());
AppMain = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [test_app_1.AppComponent, test_app_1.Panel],
        bootstrap: [test_app_1.AppComponent]
    })
], AppMain);
exports.AppMain = AppMain;
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(AppMain);
//# sourceMappingURL=test.main.js.map