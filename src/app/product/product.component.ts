import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  products = [
    {"desc":"Essentials Men's Short-Sleeve Crewneck T-Shirt","image":"assets/img/shirt_image.png","price":12.00,"rating":4.9, 'reviews':2356},
    {"desc":"Essentials Men's Short-Sleeve Crewneck T-Shirt","image":"assets/img/black_brown_shirt.png","price":18.00,"rating":4.9, 'reviews':2356},
    {"desc":"Essentials Men's Short-Sleeve Crewneck T-Shirt","image":"assets/img/material_shirt.jpg","price":32.00,"rating":4.9, 'reviews':2356},
    {"desc":"Essentials Men's Short-Sleeve Crewneck T-Shirt","image":"assets/img/jungle_green_stripes_shirt.jpg","price":22.00,"rating":4.9, 'reviews':2356},
    {"desc":"Essentials Men's Short-Sleeve Crewneck T-Shirt","image":"assets/img/black_brown_shirt.png","price":18.00,"rating":4.9, 'reviews':2356},
    {"desc":"Essentials Men's Short-Sleeve Crewneck T-Shirt","image":"assets/img/shirt_image.png","price":12.00,"rating":4.9, 'reviews':2356},
  ]

  view_product_details(product:any){
    console.log(product)
  }
}
