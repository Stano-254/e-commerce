import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faMagnifyingGlass, faBucket, faStar, faGrip, faPlaneUp, faClipboardList, faGlobe, faCircleDollarToSlot, faStore} from '@fortawesome/free-solid-svg-icons';
import { faMessage,faHeart} from '@fortawesome/free-regular-svg-icons';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { NgbdCarouselConfig } from './carousel/carousel-config';
import { ProductComponent } from './product/product.component';
import { AddonservicesComponent } from './addonservices/addonservices.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    ProductComponent,
    AddonservicesComponent,
    ProductdetailsComponent,
   
    
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
          faMessage,
          faStar,
          faHeart,
          faPlaneUp,
          faGrip,
          faClipboardList,
          faGlobe,
          faCircleDollarToSlot,
          faStore


    );
  }
 }
