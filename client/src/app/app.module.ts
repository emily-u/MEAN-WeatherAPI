import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { ChicagoComponent } from './chicago/chicago.component';


@NgModule({
  declarations: [
    AppComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
