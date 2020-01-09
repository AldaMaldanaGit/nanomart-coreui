import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[DatePipe]
})
export class ProductsComponent implements OnInit {

  productsData:any;
  public searchText:any = '';
  p: number = 1;
  count: number = 5;

  constructor(public apiService: ApiService, private datePipe: DatePipe, public activatedRoute: ActivatedRoute) 
  { 
    this.productsData = this.getAllProducts(); 
  }

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
