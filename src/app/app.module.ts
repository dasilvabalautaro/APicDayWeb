import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AstroDetailComponent } from './astro-detail/astro-detail.component';
import { AstroPictureComponent } from './astro-picture/astro-picture.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchPictureComponent } from './search-picture/search-picture.component';
import { GooglePlayComponent } from './google-play/google-play.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  declarations: [
    AppComponent,
    AstroDetailComponent,
    AstroPictureComponent,
    NavigationComponent,
    SearchPictureComponent,
    GooglePlayComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
