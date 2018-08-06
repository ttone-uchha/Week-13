import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NflappWeek12SearchComponent } from './nflapp-week12-search/nflapp-week12-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NflappWeek12SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
