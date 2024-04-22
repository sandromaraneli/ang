import { Component } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productList: any[] = [];
  filteredList: any[] = [];
  public category!:any;

  constructor(private httpService: HttpService, public router:ActivatedRoute) {
    this.httpService.getAllProducts().subscribe(data => {
      this.productList = data;
      this.filteredList = this.productList.filter(product => product.category == this.category);
      console.log(this.productList);

     
      
      
      this.router.queryParams.subscribe(data => this.category = data)
      console.log(this.category);
      this.filteredList = this.productList.filter(product => product.category == this.category.category);
      console.log(this.filteredList);

      if (this.filteredList.length == 0) {
        this.filteredList = this.productList
      }

    });
  }
}
