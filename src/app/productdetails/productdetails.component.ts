import { Component } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent {
   view = "show"
   no_view = ""

  constructor(){

  }
  toggle_view(){
    if(this.view==''){
      this.view="show"
      this.no_view=""
    }
    else{
      this.view = ''
      this.no_view="show"
    }

  }

}
