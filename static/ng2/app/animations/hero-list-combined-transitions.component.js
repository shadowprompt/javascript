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
var hero_service_1 = require("./hero.service");
var HeroListCombinedTransitionsComponent = (function () {
    function HeroListCombinedTransitionsComponent() {
    }
    return HeroListCombinedTransitionsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_service_1.Heroes)
], HeroListCombinedTransitionsComponent.prototype, "heroes", void 0);
HeroListCombinedTransitionsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'hero-list-combined-transitions',
        template: "\n   <ul>\n     <li *ngFor=\"let hero of heroes\"\n         [@heroState]=\"hero.state\"\n         (click)=\"hero.toggleState()\">\n       {{hero.name}}\n     </li>\n   </ul>\n ",
        styleUrls: ['hero-list.component.css'],
        /*
         * Define two states, "inactive" and "active", and the end
         * styles that apply whenever the element is in those states.
         * Then define an animated transition between these two
         * states, in *both* directions.
         */
        animations: [
            core_1.trigger('heroState', [
                core_1.state('inactive', core_1.style({
                    backgroundColor: '#eee',
                    transform: 'scale(1)'
                })),
                core_1.state('active', core_1.style({
                    backgroundColor: '#cfd8dc',
                    transform: 'scale(1.1)'
                })),
                core_1.transition('inactive => active, active => inactive', core_1.animate('100ms ease-out'))
            ])
        ]
    })
], HeroListCombinedTransitionsComponent);
exports.HeroListCombinedTransitionsComponent = HeroListCombinedTransitionsComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=hero-list-combined-transitions.component.js.map