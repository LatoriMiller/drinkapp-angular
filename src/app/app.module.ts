import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DrinkService } from './services/drink.services'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AboutComponent } from './about/about.component';
import { FavComponent } from './fav/fav.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FavComponent,
    GalleryComponent,
    NavComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    DrinkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
