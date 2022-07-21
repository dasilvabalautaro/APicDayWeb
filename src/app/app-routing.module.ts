import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstroPictureComponent } from '../app/astro-picture/astro-picture.component';
import { AstroDetailComponent } from '../app/astro-detail/astro-detail.component';
import { SearchPictureComponent } from '../app/search-picture/search-picture.component';
import { GooglePlayComponent } from '../app/google-play/google-play.component';
import { PrivacyComponent } from '../app/privacy/privacy.component';

const routes: Routes = [
  {
    path: 'picofday',
    component: AstroPictureComponent
  },
  {
    path: 'detail',
    component: AstroDetailComponent
  },
  {
    path: '',
    redirectTo: '/picofday',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: SearchPictureComponent
  },
  {
    path: 'mobile',
    component: GooglePlayComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
