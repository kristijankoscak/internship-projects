import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreCityComponent } from './explore/explore-city/explore-city.component';
import { ExploreMainComponent } from './explore/explore-main/explore-main.component';
import { ExploreSearchComponent } from './explore/explore-search/explore-search.component';
import { ExploreComponent } from './explore/explore.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { SavedComponent } from './saved/saved.component';
import { SignInComponent } from './sign-up-or-sign-in/sign-in/sign-in.component';
import { SignUpOrSignInComponent } from './sign-up-or-sign-in/sign-up-or-sign-in.component';
import { SignUpComponent } from './sign-up-or-sign-in/sign-up/sign-up.component';
import { SignComponent } from './sign-up-or-sign-in/sign/sign.component';
import { TripsComponent } from './trips/trips.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/sign', pathMatch: 'full' },
  {
    path: 'sign',
    component: SignUpOrSignInComponent,
    children: [
      { path: '', component: SignComponent},
      { path: 'up', component: SignUpComponent},
      { path: 'in', component: SignInComponent},
    ]
  },
  {
    path: 'explore',
    component: ExploreComponent,
    children: [
      { path: '', component: ExploreMainComponent},
      { path: 'search', component: ExploreSearchComponent},
      { path: ':city', component: ExploreCityComponent}
    ]
  },
  {
    path: 'saved',
    component: SavedComponent
  },
  {
    path: 'trips',
    component: TripsComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: '', component: ProfileComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
