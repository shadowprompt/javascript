"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var heroes_list_component_1 = require("./heroes-list.component");
var hero_editor_component_1 = require("./hero-editor.component");
var hero_card_component_1 = require("./hero-card.component");
var heroes_service_1 = require("./heroes.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        providers: [heroes_service_1.HeroesService],
        declarations: [
            heroes_list_component_1.HeroesListComponent,
            hero_card_component_1.HeroCardComponent,
            hero_editor_component_1.HeroEditorComponent
        ],
        bootstrap: [heroes_list_component_1.HeroesListComponent]
    })
], AppModule);
exports.AppModule = AppModule;
/* Documentation artifact below
// Don't do this!
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ HeroesService, RestoreService ],
  declarations: [ HeroesListComponent ],
  bootstrap: [
    HeroesListComponent,
    HeroCardComponent,
    HeroEditorComponent
  ]
})
*/
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.module.js.map