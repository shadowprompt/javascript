"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var can_deactivate_guard_service_1 = require("./can-deactivate-guard.service");
var auth_guard_service_1 = require("./auth-guard.service");
var selective_preload_strategy_1 = require("./selective-preload-strategy");
var appRoutes = [
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canLoad: [auth_guard_service_1.AuthGuard]
    },
    {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
    },
    {
        path: 'crisis-center',
        loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
        data: {
            preload: true
        }
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(appRoutes, { preloadingStrategy: selective_preload_strategy_1.PreloadSelectedModules })
        ],
        exports: [
            router_1.RouterModule
        ],
        providers: [
            can_deactivate_guard_service_1.CanDeactivateGuard,
            selective_preload_strategy_1.PreloadSelectedModules
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app-routing.module.js.map