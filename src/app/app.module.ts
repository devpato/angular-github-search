import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

/* Shared Components */
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SearchComponent } from './shared/components/search/search.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AppComponent } from './app.component';

/*Home Page components */
import { HomePageComponent } from './components/home-page/home-page.component';

/*Search Page components */
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SerachResultsComponent } from './components/search-page/serach-results/serach-results.component';
import { SearchHeaderComponent } from './components/search-page/search-header/search-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    FooterComponent,
    SearchPageComponent,
    SerachResultsComponent,
    SearchHeaderComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
