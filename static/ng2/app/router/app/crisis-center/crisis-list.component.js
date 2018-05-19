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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var crisis_service_1 = require("./crisis.service");
var CrisisListComponent = (function () {
    function CrisisListComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    CrisisListComponent.prototype.isSelected = function (crisis) {
        return crisis.id === this.selectedId;
    };
    CrisisListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.crises = this.route.params
            .switchMap(function (params) {
            _this.selectedId = +params['id'];
            return _this.service.getCrises();
        });
    };
    CrisisListComponent.prototype.onSelect = function (crisis) {
        this.selectedId = crisis.id;
        // Navigate with relative link
        this.router.navigate([crisis.id], { relativeTo: this.route });
    };
    return CrisisListComponent;
}());
CrisisListComponent = __decorate([
    core_1.Component({
        template: "\n    <ul class=\"items\">\n      <li *ngFor=\"let crisis of crises | async\"\n        [class.selected]=\"isSelected(crisis)\"\n        (click)=\"onSelect(crisis)\">\n        <span class=\"badge\">{{ crisis.id }}</span> {{ crisis.name }}\n      </li>\n    </ul>\n\n    <router-outlet></router-outlet>\n  "
    }),
    __metadata("design:paramtypes", [crisis_service_1.CrisisService, typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], CrisisListComponent);
exports.CrisisListComponent = CrisisListComponent;
var _a, _b;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=crisis-list.component.js.map