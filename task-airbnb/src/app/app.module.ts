import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SignComponent } from './sign-up-or-sign-in/sign/sign.component';
import { ExploreComponent } from './explore/explore.component';
import { AppRoutingModule } from './app-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SavedComponent } from './saved/saved.component';
import { TripsComponent } from './trips/trips.component';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './explore/explore-main/news/news.component';
import { TravelComponent } from './explore/explore-main/travel/travel.component';
import { CitiesComponent } from './explore/explore-main/cities/cities.component';
import { ItemCityComponent } from './explore/explore-main/cities/item-city/item-city.component';
import { SuggestionsComponent } from './explore/explore-main/suggestions/suggestions.component';
import { ItemSuggestionComponent } from './explore/explore-main/suggestions/item-suggestion/item-suggestion.component';
import { ExpiriencesComponent } from './explore/explore-main/expiriences/expiriences.component';
import { ItemExpirienceComponent } from './explore/explore-main/expiriences/item-expirience/item-expirience.component';
import { ActionsComponent } from './explore/explore-main/actions/actions.component';
import { ItemActionComponent } from './explore/explore-main/actions/item-action/item-action.component';
import { INFOComponent } from './explore/explore-main/info/info.component';
import { ExploreSearchComponent } from './explore/explore-search/explore-search.component';
import { ExploreItemComponent } from './explore/explore-search/explore-item/explore-item.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTabsModule} from '@angular/material/tabs';
import { ItemInfoComponent } from './explore/explore-main/info/item-info/item-info.component';
import { ExploreMainComponent } from './explore/explore-main/explore-main.component';
import { SignUpOrSignInComponent } from './sign-up-or-sign-in/sign-up-or-sign-in.component';
import { SignInComponent } from './sign-up-or-sign-in/sign-in/sign-in.component';
import { SignUpComponent } from './sign-up-or-sign-in/sign-up/sign-up.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { OptionItemComponent } from './user/profile/option-item/option-item.component';
import { ExploreCityComponent } from './explore/explore-city/explore-city.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExploreCityPersonsItemComponent } from './explore/explore-city/explore-city-persons-item/explore-city-persons-item.component';
import { ExploreCityActionItemComponent } from './explore/explore-city/explore-city-action-item/explore-city-action-item.component';
import { ExploreResultComponent } from './explore/explore-result/explore-result.component';
import { AccommodationSmallItemComponent } from './explore/explore-result/accommodation-small-item/accommodation-small-item.component';
import { AccommodationBigItemComponent } from './explore/explore-result/accommodation-big-item/accommodation-big-item.component';


@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    ExploreComponent,
    NavBarComponent,
    SavedComponent,
    TripsComponent,
    MessagesComponent,
    LoginComponent,
    NewsComponent,
    TravelComponent,
    CitiesComponent,
    ItemCityComponent,
    SuggestionsComponent,
    ItemSuggestionComponent,
    ExpiriencesComponent,
    ItemExpirienceComponent,
    ActionsComponent,
    ItemActionComponent,
    INFOComponent,
    ExploreSearchComponent,
    ExploreItemComponent,
    ItemInfoComponent,
    ExploreMainComponent,
    SignUpOrSignInComponent,
    SignInComponent,
    SignUpComponent,
    UserComponent,
    ProfileComponent,
    OptionItemComponent,
    ExploreCityComponent,
    ExploreCityPersonsItemComponent,
    ExploreCityActionItemComponent,
    ExploreResultComponent,
    AccommodationSmallItemComponent,
    AccommodationBigItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatExpansionModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
