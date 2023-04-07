import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';


const routes: Routes = [
    { path: 'product', component:DashboardComponent },
    { path: 'product/product_details', component: ProductdetailsComponent},
    {path: '', redirectTo: 'product', pathMatch: 'full'},
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
//   exports: [RouterModule]
// })
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }