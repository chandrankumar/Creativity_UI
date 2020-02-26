import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Model } from './model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};
@Injectable({
  providedIn: 'root'
})
export class ModelService {
   
  constructor(private http: HttpClient) { }

  addProduct(model: Model) {
    console.log('Service Model ' ,model);
   return this.http.post<Model>('shop/addProduct', model ,httpOptions);
  }

   getProducts() {
    return this.http.get<Model[]>('shop/products', httpOptions);
  }

}
