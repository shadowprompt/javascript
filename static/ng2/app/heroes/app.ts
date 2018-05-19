import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  selector: 'app',
  template: `
		<h1>{{title}}</h1>
		<nav>
		 <a routerLink="/dashboard">Dashboard</a>
		 <a routerLink="/heroes">Heroes</a>
		</nav>
		<router-outlet></router-outlet>
  `,
  styleUrls: ['app.css'],
  providers: [HeroService]
})
export class App implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
