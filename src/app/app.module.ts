import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LloadComponent } from './lload/lload.component';
import { NavbarComponent } from './pitems/navbar/navbar.component';
import { LeftmenuComponent } from './pitems/leftmenu/leftmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    LloadComponent,
    NavbarComponent,
    LeftmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
