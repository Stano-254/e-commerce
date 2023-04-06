import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare, faMagnifyingGlass, faBucket } from '@fortawesome/free-solid-svg-icons';
import {
  faSquare as farSquare,
  faCheckSquare as farCheckSquare,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';
import {
  faStackOverflow,
  faGithub,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { NgbdCarouselConfig } from './carousel/carousel-config';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    ProductComponent,
   
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    NgbdCarouselConfig,
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
          faMagnifyingGlass,
          faBucket,
          faMessage


    );
  }
 }
