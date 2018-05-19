import { platformBrowserDynamic, bootstrap } from '@angular/platform-browser-dynamic';

import { NgModule ,CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from '@angular/common';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
// import { App, FancyButton, Panel }  from './ng-content/app';  //需要修改
// import { App, Panel }  from './di/app';  //需要修改
// import { App }  from './multi-page-template-driven/app';  //需要修改
// import { App }  from './simple-two-way-data-binding/app';  //需要修改


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './heroes/in-memory-data.service';

import './heroes/rxjs-extensions';

import { App }  from './heroes/app';  //需要修改
import { AppRoutingModule } from './heroes/app-routing.module';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HeroesComponent }     from './heroes/heroes.component';
import { DashboardComponent }     from './heroes/dashboard.component';
import { HeroService }         from './heroes/hero.service';
import { HeroSearchComponent }         from './heroes/hero-search.component';

@NgModule({
  imports: [ 
	  BrowserModule, 
	  FormsModule,
	  HttpModule,
	  AppRoutingModule,
	  InMemoryWebApiModule.forRoot(InMemoryDataService)
	],  //input的双向绑定需要FormsModule
  declarations: [ 
	  App, 
	  HeroDetailComponent, 
	  HeroesComponent,
	  DashboardComponent,
	  HeroSearchComponent
  ], //需要修改
  providers: [
    HeroService
  ],
  bootstrap: [ App ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppMain { }

platformBrowserDynamic().bootstrapModule(AppMain);


// bootstrap(App, [
//   ROUTER_PROVIDERS,
//   { provide: LocationStrategy, useClass: HashLocationStrategy }
// ]);
