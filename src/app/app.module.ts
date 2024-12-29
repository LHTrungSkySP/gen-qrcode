import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/layout-components/header/header.module';
import { SpeedDialModule } from 'primeng/speeddial';
import { GenCodeModule } from './components/layout-components/gen-code/gen-code.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SpeedDialModule,
    GenCodeModule,
    HeaderModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
