import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicationModule } from './UI/pages/publication/publication.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SimpleNotificationsModule .forRoot(),
    PublicationModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
