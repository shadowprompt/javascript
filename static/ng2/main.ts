import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgModule ,CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppMain { }

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppMain);