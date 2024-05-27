import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { productCreate } from "../../models/productCreate.Interface"
import { ApiService } from '../../services/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {

  constructor(private activeRouter:ActivatedRoute, private router:Router, private api:ApiService ) {
    
  }

  createForm = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    images: new FormControl('')
  });

  postForm(form:any){
    var newProduct: productCreate = {
      title: form.title,
      categoryId: 1,
      description: form.description,
      images: form.images.split(',').map((image: string) => image.trim()).filter((image: string) => image !== ''),
      price: Number(form.price)
    };

    this.api.createProduct(newProduct).subscribe(x=>{
      console.log(x);
      this.router.navigate([""]);
    })

  }

}
