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
var HeroListMultistepComponent = (function () {
    function HeroListMultistepComponent() {
    }
    HeroListMultistepComponent.prototype.animationStarted = function (event) {
        console.warn('Animation started: ', event);
    };
    HeroListMultistepComponent.prototype.animationDone = function (event) {
        console.warn('Animation done: ', event);
    };
    return HeroListMultistepComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_service_1.Heroes)
], HeroListMultistepComponent.prototype, "heroes", void 0);
HeroListMultistepComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'hero-list-multistep',
        template: "\n    <ul>\n      <li *ngFor=\"let hero of heroes\"\n          (@flyInOut.start)=\"animationStarted($event)\"\n          (@flyInOut.done)=\"animationDone($event)\"\n          [@flyInOut]=\"'in'\">\n        {{hero.name}}\n      </li>\n    </ul>\n  ",
        styleUrls: ['hero-list.component.css'],
        /* The element here always has the state "in" when it
         * is present. We animate two transitions: From void
         * to in and from in to void, to achieve an animated
         * enter and leave transition. Each transition is
         * defined in terms of multiple keyframes, to give it
         * a bounce effect.
         */
        animations: [
            core_1.trigger('flyInOut', [
                core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
                core_1.transition('void => *', [
                    core_1.animate(300, core_1.keyframes([
                        core_1.style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                        core_1.style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
                        core_1.style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                    ]))
                ]),
                core_1.transition('* => void', [
                    core_1.animate(300, core_1.keyframes([
                        core_1.style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                        core_1.style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                        core_1.style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                    ]))
                ])
            ])
        ]
    })
], HeroListMultistepComponent);
exports.HeroListMultistepComponent = HeroListMultistepComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=hero-list-multistep.component.js.map