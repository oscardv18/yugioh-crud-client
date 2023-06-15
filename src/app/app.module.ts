import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { DeckPromComponent } from './deck-prom/deck-prom.component';
import { CardsDetailsComponent } from './cards-details/cards-details.component';
import { CardsAllComponent } from './cards-all/cards-all.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeSectionComponent,
    DeckPromComponent,
    CardsDetailsComponent,
    CardsAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
