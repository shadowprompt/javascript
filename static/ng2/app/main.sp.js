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
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
// import { App, FancyButton, Panel }  from './ng-content/app';  //需要修改
// import { App, Panel }  from './di/app';  //需要修改
// import { App }  from './multi-page-template-driven/app';  //需要修改
// import { App }  from './simple-two-way-data-binding/app';  //需要修改
// import { App, LoginPanel, NicknameBox, MobileBox }  from './test/register';  //需要修改
// import { userService } from './test/user.service';
var heroes_list_component_1 = require("./hierarchical-injectors/heroes-list.component");
var hero_editor_component_1 = require("./hierarchical-injectors/hero-editor.component");
var hero_card_component_1 = require("./hierarchical-injectors/hero-card.component");
var heroes_service_1 = require("./hierarchical-injectors/heroes.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
        ],
        providers: [heroes_service_1.HeroesService],
        declarations: [
            //App, HighlightDirective
            heroes_list_component_1.HeroesListComponent,
            hero_card_component_1.HeroCardComponent,
            hero_editor_component_1.HeroEditorComponent
        ],
        bootstrap: [heroes_list_component_1.HeroesListComponent],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AppModule);
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
// bootstrap(App, [
//   ROUTER_PROVIDERS,
//   { provide: LocationStrategy, useClass: HashLocationStrategy }
// ]);
//# sourceMappingURL=main.sp.js.map