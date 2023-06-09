import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faMagnifyingGlass, faBucket, faStar, faGrip,faHeart, faPlaneUp, faClipboardList, faGlobe, faCircleDollarToSlot, faStore, faHouse, faTicket, faWallet, faGear, faAngleLeft, faShareNodes} from '@fortawesome/free-solid-svg-icons';
import { faMessage} from '@fortawesome/free-regular-svg-icons';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { NgbdCarouselConfig } from './carousel/carousel-config';
import { ProductComponent } from './product/product.component';
import { AddonservicesComponent } from './addonservices/addonservices.component';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';

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
    AppRoutingModule,
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
          faMagnifyingGlass,faBucket,
          faMessage,faStar, faHeart,faHeart,
          faPlaneUp,faGrip,faClipboardList,
          faGlobe,faCircleDollarToSlot,
          faStore,faHouse,faAngleLeft,
          faTicket,faWallet,faGear,
          faShareNodes,


    );
  }
 }
