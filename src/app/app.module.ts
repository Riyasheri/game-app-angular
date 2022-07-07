import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddgamesComponent } from './addgames/addgames.component';
import { ViewgameComponent } from './viewgame/viewgame.component';

@NgModule({
  declarations: [
    AppComponent,
    AddgamesComponent,
    ViewgameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
