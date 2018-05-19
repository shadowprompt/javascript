import { Component } from '@angular/core';

import { EditItem } from './edit-item';
import { HeroesService } from './heroes.service';
import { Hero } from './hero';

@Component({
  selector: 'app',
  template: `
    <div>
      <ul>
        <li *ngFor="let editItem of heroes">
          <hero-card
            [hidden]="editItem.editing"
            [hero]="editItem.item">
          </hero-card>
          <button
            [hidden]="editItem.editing"
            (click)="editItem.editing = true">
              edit
          </button>
          <hero-editor
            (saved)="onSaved(editItem, $event)"
            (canceled)="onCanceled(editItem)"
            [hidden]="!editItem.editing"
            [hero]="editItem.item">
          </hero-editor>
        </li>
      </ul>
    </div>`,
    styleUrls: ['styles.css']
})
export class HeroesListComponent {
  heroes: Array<EditItem<Hero>>;
  constructor(heroesService: HeroesService) {
    this.heroes = heroesService.getHeroes()
                               // .map(item => new EditItem(item));
                               .map( function(item){
                                 console.log(heroesService.getHeroes());
                                 console.log(item);
                                 return new EditItem(item);
                               })
                               console.log(this.heroes);
  }

  onSaved (editItem: EditItem<Hero>, updatedHero: Hero) {
    editItem.item = updatedHero;
    editItem.editing = false;
  }

  onCanceled (editItem: EditItem<Hero>) {
    editItem.editing = false;
  }
}




/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/