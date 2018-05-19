import { platformBrowserDynamic, bootstrap } from '@angular/platform-browser-dynamic';

import { NgModule ,CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
// import { App, FancyButton, Panel }  from './ng-content/app';  //需要修改
// import { App, Panel }  from './di/app';  //需要修改
// import { App }  from './multi-page-template-driven/app';  //需要修改
// import { App }  from './simple-two-way-data-binding/app';  //需要修改
// import { App, LoginPanel, NicknameBox, MobileBox }  from './test/register';  //需要修改
// import { userService } from './test/user.service';

// import { HeroesListComponent } from './hierarchical-injectors/heroes-list.component';
// import { HeroEditorComponent } from './hierarchical-injectors/hero-editor.component';
// import { HeroCardComponent } from './hierarchical-injectors/hero-card.component';
// import { HeroesService } from './hierarchical-injectors/heroes.service';
import { AppComponent }    from './todoapp/app.component';



@NgModule({
  imports: [ 
	  BrowserModule, 
	  FormsModule,
	  HttpModule,
	],  //input的双向绑定需要FormsModule
	// providers: [ HeroesService ],
  declarations: [ 
	  //App, HighlightDirective
	  AppComponent
  ], //需要修改
  bootstrap: [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);


// bootstrap(App, [
//   ROUTER_PROVIDERS,
//   { provide: LocationStrategy, useClass: HashLocationStrategy }
// ]);
