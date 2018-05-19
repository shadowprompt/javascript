import { Hero } from './hero';

export class HeroesService {
  heroes: Array<Hero> = [
    { name: 'RubberMan', power: 'flexibility'},
    { name: 'Tornado', power: 'Weather changer'}
  ];

  getHeroes () {
    return this.heroes;
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/