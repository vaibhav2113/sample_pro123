<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

=======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
>>>>>>> f0da8e48be82e0888a992503201ff19fb2c6bd9f
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule
=======
    BrowserModule,
    AppRoutingModule
>>>>>>> f0da8e48be82e0888a992503201ff19fb2c6bd9f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
