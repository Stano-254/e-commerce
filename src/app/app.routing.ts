import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
    { path: 'dashboard', component:DashboardComponent },
    {path: 'product',component: ProductComponent,},
       
    { path: 'product/product_details', component: ProductdetailsComponent },
  
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
];

export const AppRoutes = RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules});