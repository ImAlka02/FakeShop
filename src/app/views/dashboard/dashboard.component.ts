import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api/api.service"
import { Router } from '@angular/router';
import { Product, Category } from '../../models/productos.interface';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  {

  faEdit = faEdit;
  faAdd = faAdd;
  faTrash = faTrash;
  faEye = faEye;

  constructor(private api:ApiService, private router:Router) {

    this.api.getAllProducts().subscribe(data =>{
      this.products= data;
    })

  }

   products:Product[] = [];

 

  seeProduct(id:number){
    this.router.navigate(['producto/', id]);
  }

  editProduct(id:number){
    this.router.navigate(['edit/', id]);
  }

  newProduct(){
    this.router.navigate(['new']);
  }

  deleteProduct(id:number){
    this.api.deleteProduct(id).subscribe(x=> {
      console.log(x);
      if(x == true){
        window.location.reload();
      }
    });
    
    
  }

  refresh():void{
    
  }
}
