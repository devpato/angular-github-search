import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgrxModule } from './shared/modules/ngrx.module';

/* Shared Components */
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AppComponent } from './app.component';

/*PrimeNG */
// import { DataViewModule } from 'primeng/dataview';
// import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgrxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
