import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsData:any;

  constructor(public apiService: ApiService, public activatedRoute: ActivatedRoute) { this.productsData = this.getAllProducts(); }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    //Get saved list of students
    this.apiService.getProductList().subscribe(response => {
      console.log(response);
      this.productsData = response;
    })
  }

}
