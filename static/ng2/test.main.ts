import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, Panel }  from './test.app';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, Panel],
  bootstrap:    [ AppComponent ]
})
export class AppMain { }

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppMain);