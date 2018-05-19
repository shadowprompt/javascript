import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'hero-card',
  template: `
    <div>
      <span>Name:</span>
      <span>{{hero.name}}</span>
    </div>`
})
export class HeroCardComponent {
  @Input() hero: Hero;
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/