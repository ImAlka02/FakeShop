import { Injectable } from '@angular/core';
import { Product, Category } from "../../models/productos.interface"
import { ProductEdit } from "../../models/productEdit.Interface"
import {responseProduct} from "../../models/response.interface"
import { productCreate } from "../../models/productCreate.Interface"

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  url:string = "https://api.escuelajs.co/api/v1/";

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    let datos = this.url + "products";
    return this.http.get<Product[]>(datos);
  }

  getProduct(id:number):Observable<Product>{
    let prod = this.url + "products/" + id;
    return this.http.get<Product>(prod);
  }

  createProduct(product:productCreate):Observable<responseProduct>{
    let ruta = this.url + "products/";
    return this.http.post<responseProduct>(ruta,product);
  }

  updateProduct(id:number,productEdit:ProductEdit):Observable<responseProduct>{
    let ruta = this.url + "products/" + id;
    return  this.http.put<responseProduct>(ruta, productEdit);
  }

  deleteProduct(id:number):Observable<boolean>{
    let ruta = this.url + "products/" + id;
    return this.http.delete<boolean>(ruta);
  }

  // editProduct(id:number):Observable<Product>{
  //   let direccion = this.url + "products/";
  //   return direccion.http.post<>
  // }
}
