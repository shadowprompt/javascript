import { Component, EventEmitter, Input, Output } from '@angular/core';

import { RestoreService } from './restore.service';
import { Hero } from './hero';

@Component({
  selector: 'hero-editor',
  providers: [RestoreService],
  template: `
    <div>
      <span>Name:</span>
      <input [(ngModel)]="hero.name"/>
      <div>
        <button (click)="onSaved()">save</button>
        <button (click)="onCanceled()">cancel</button>
      </div>
    </div>`
})

export class HeroEditorComponent {
  @Output() canceled = new EventEmitter<Hero>();
  @Output() saved = new EventEmitter<Hero>();

  constructor(private restoreService: RestoreService<Hero>) {}

  @Input()
  set hero (hero: Hero) {
    this.restoreService.setItem(hero);
  }

  get hero () {
    return this.restoreService.getItem();
  }

  onSaved () {
    this.saved.emit(this.restoreService.getItem());
  }

  onCanceled () {
    this.hero = this.restoreService.restoreItem();
    this.canceled.emit(this.hero);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/