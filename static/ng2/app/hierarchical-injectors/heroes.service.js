"use strict";
var HeroesService = (function () {
    function HeroesService() {
        this.heroes = [
            { name: 'RubberMan', power: 'flexibility' },
            { name: 'Tornado', power: 'Weather changer' }
        ];
    }
    HeroesService.prototype.getHeroes = function () {
        return this.heroes;
    };
    return HeroesService;
}());
exports.HeroesService = HeroesService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=heroes.service.js.map