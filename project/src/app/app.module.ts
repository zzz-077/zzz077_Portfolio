import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//MATERIALS
import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
