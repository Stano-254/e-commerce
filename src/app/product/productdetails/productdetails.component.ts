import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent {
   view = "show"
   no_view = ""
   product :any

constructor(
  private route: ActivatedRoute,
){

}

ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.product = params['product'];
  });
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
