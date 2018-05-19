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
var edit_item_1 = require("./edit-item");
var heroes_service_1 = require("./heroes.service");
var HeroesListComponent = (function () {
    function HeroesListComponent(heroesService) {
        this.heroes = heroesService.getHeroes()
            .map(function (item) {
            console.log(heroesService.getHeroes());
            console.log(item);
            return new edit_item_1.EditItem(item);
        });
        console.log(this.heroes);
    }
    HeroesListComponent.prototype.onSaved = function (editItem, updatedHero) {
        editItem.item = updatedHero;
        editItem.editing = false;
    };
    HeroesListComponent.prototype.onCanceled = function (editItem) {
        editItem.editing = false;
    };
    return HeroesListComponent;
}());
HeroesListComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: "\n    <div>\n      <ul>\n        <li *ngFor=\"let editItem of heroes\">\n          <hero-card\n            [hidden]=\"editItem.editing\"\n            [hero]=\"editItem.item\">\n          </hero-card>\n          <button\n            [hidden]=\"editItem.editing\"\n            (click)=\"editItem.editing = true\">\n              edit\n          </button>\n          <hero-editor\n            (saved)=\"onSaved(editItem, $event)\"\n            (canceled)=\"onCanceled(editItem)\"\n            [hidden]=\"!editItem.editing\"\n            [hero]=\"editItem.item\">\n          </hero-editor>\n        </li>\n      </ul>\n    </div>",
        styleUrls: ['styles.css']
    }),
    __metadata("design:paramtypes", [heroes_service_1.HeroesService])
], HeroesListComponent);
exports.HeroesListComponent = HeroesListComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=heroes-list.component.js.map