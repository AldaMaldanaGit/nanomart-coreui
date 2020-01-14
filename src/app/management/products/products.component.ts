import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';

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

  delete(item) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted With ID ' + item.id,
          'Your file has been deleted.',
          'success'
        )
        this.apiService.deleteProductById(item.id).subscribe(Response => {
          //Update list after delete is successful
          console.log(Response);
          this.getAllProducts();
        });
      }
    })
  }

}
