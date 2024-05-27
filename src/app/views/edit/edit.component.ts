import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from "../../models/productos.interface"
import { ApiService } from '../../services/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductEdit } from "../../models/productEdit.Interface"
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  productData!: Product;

  editForm = new FormGroup({
    title: new FormControl(''),
    price: new FormControl('')
  });

  productId!:string;

  constructor(private activeRouter:ActivatedRoute, private router:Router, private api:ApiService) {
    this.productId = this.activeRouter.snapshot.params['id'];
    this.api.getProduct(Number(this.productId)).subscribe(x=> {
      this.productData = x;
      this.editForm.setValue({
        'title': this.productData.title,
        'price': this.productData.price.toString()
      });
      console.log(this.editForm.value);
    });
    
  }

  postForm(form:any){
    var productUpdate: ProductEdit = {
      title: form.title,
      price: Number(form.price)
    };
    
    this.api.updateProduct(Number(this.productId),productUpdate).subscribe(x=>{
      console.log(x);
    });

    this.router.navigate(['']);

  }
  
  


}
