import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//MATERIALS
import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { LabComponent } from './lab/lab.component';
import { StartComponent } from './start/start.component';
@NgModule({
  declarations: [AppComponent, AboutComponent, LabComponent, StartComponent],
  imports: [BrowserModule, AppRoutingModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
