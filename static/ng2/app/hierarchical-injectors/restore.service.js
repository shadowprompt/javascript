"use strict";
var RestoreService = (function () {
    function RestoreService() {
    }
    RestoreService.prototype.setItem = function (item) {
        this.originalItem = item;
        this.currentItem = this.clone(item);
    };
    RestoreService.prototype.getItem = function () {
        return this.currentItem;
    };
    RestoreService.prototype.restoreItem = function () {
        this.currentItem = this.originalItem;
        return this.getItem();
    };
    RestoreService.prototype.clone = function (item) {
        // super poor clone implementation
        return JSON.parse(JSON.stringify(item));
    };
    return RestoreService;
}());
exports.RestoreService = RestoreService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=restore.service.js.map