import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private productsUrl = 'https://fakestoreapi.com/products'; // Adjust URL to your actual API endpoint

  constructor(private http: HttpClient) {}

  getAllProducts(){
    return this.http.get<any[]>(this.productsUrl);
  }
}



