import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ProductsEdit } from '../../model/nanomart';
import { numberValidator } from '../../validator/custom_validator';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id:number;
  public data:ProductsEdit;
  productForm = new FormGroup({});
  private base64textString:string="";

  constructor(public router: Router, public http: HttpClientModule, public ApiServeice: ApiService, public activatedRoute: ActivatedRoute) 
  {
    this.data = new ProductsEdit();
    this.productForm = this.editProductFormGroup();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.ApiServeice.getListProductById(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
      this.productForm = this.editProductFormGroup(this.data);
    })
  }

  editProductFormGroup(data?:any){
    return new FormGroup({
      barcode: new FormControl(this.data.barcode, [Validators.required]),
      name: new FormControl(this.data.name, [Validators.required]),
      price: new FormControl(this.data.price, [Validators.required, numberValidator]),
      description: new FormControl(this.data.description),
      status: new FormControl(this.data.status, [Validators.required])
    });
    this.showSuccess();
  }

  showSuccess() {
    Swal.fire({
      //position: 'top-end',
      icon: 'success',
      title: 'Data has been Updated',
      showConfirmButton: false,
      timer: 1500
    })
  }

  get barcode() {
    return this.productForm.get('barcode');
  }

  get name() {
    return this.productForm.get('name');
  }

  get price() {
    return this.productForm.get('price');
  }

}
