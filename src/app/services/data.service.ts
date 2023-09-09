import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Users } from '../interface/users';
import { product } from '../paginas/shop/productmodal';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  API_URL = 'https://swapi.dev/api/people/1';
  constructor(private http: HttpClient) { }

  listUsers(){
    return this.http.get<Users>(this.API_URL);
  }

  getproduct(){
    return this.http.get<product[]>("https://dummyjson.com/products")
  } 
}
   