import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Products } from '../../model/nanomart';
import { numberValidator } from '../../validator/custom_validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm = new FormGroup({});
  data:Products;
  img:any;
  private base64textString:string="";

  constructor(public router: Router, public http: HttpClientModule, public ApiServeice: ApiService, public activatedRoute: ActivatedRoute) 
  {
    this.data = new Products();
    this.productForm = this.createProductFormGroup();
  }

  ngOnInit() {
    
  }

  createProductFormGroup(){
    return new FormGroup({
      barcode: new FormControl('', [Validators.required, numberValidator]),
      name: new FormControl('', [Validators.required]),
      //nanomart: new FormControl(''),
      price: new FormControl('', [Validators.required, numberValidator]),
      description: new FormControl(''),
      image_base64: new FormControl('')
    });
  }

  handleFileSelect(evt){
      var files = evt.target.files;
      var file = files[0];
    
    if (files && file) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString= btoa(binaryString);
    this.productForm.value.image_base64 = this.base64textString
    //console.log(btoa(binaryString));
  }

  onSubmit() {
    this.ApiServeice.createProduct([this.productForm.value]).subscribe((response) => {
      this.router.navigate(['management/products']);
    });
    this.showSuccess();
  }

  showSuccess() {
    Swal.fire({
      //position: 'top-end',
      icon: 'success',
      title: 'Data has been saved',
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
