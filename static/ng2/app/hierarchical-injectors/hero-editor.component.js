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
var restore_service_1 = require("./restore.service");
var hero_1 = require("./hero");
var HeroEditorComponent = (function () {
    function HeroEditorComponent(restoreService) {
        this.restoreService = restoreService;
        this.canceled = new core_1.EventEmitter();
        this.saved = new core_1.EventEmitter();
    }
    Object.defineProperty(HeroEditorComponent.prototype, "hero", {
        get: function () {
            return this.restoreService.getItem();
        },
        set: function (hero) {
            this.restoreService.setItem(hero);
        },
        enumerable: true,
        configurable: true
    });
    HeroEditorComponent.prototype.onSaved = function () {
        this.saved.emit(this.restoreService.getItem());
    };
    HeroEditorComponent.prototype.onCanceled = function () {
        this.hero = this.restoreService.restoreItem();
        this.canceled.emit(this.hero);
    };
    return HeroEditorComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], HeroEditorComponent.prototype, "canceled", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], HeroEditorComponent.prototype, "saved", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_1.Hero),
    __metadata("design:paramtypes", [hero_1.Hero])
], HeroEditorComponent.prototype, "hero", null);
HeroEditorComponent = __decorate([
    core_1.Component({
        selector: 'hero-editor',
        providers: [restore_service_1.RestoreService],
        template: "\n    <div>\n      <span>Name:</span>\n      <input [(ngModel)]=\"hero.name\"/>\n      <div>\n        <button (click)=\"onSaved()\">save</button>\n        <button (click)=\"onCanceled()\">cancel</button>\n      </div>\n    </div>"
    }),
    __metadata("design:paramtypes", [restore_service_1.RestoreService])
], HeroEditorComponent);
exports.HeroEditorComponent = HeroEditorComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=hero-editor.component.js.map