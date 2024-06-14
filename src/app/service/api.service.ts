import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProduct} from "../models/product.models";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _http=inject(HttpClient);
  private urlBase: string = 'https://fakestoreapi.com/products';

  // Obtiene la lista de productos de la API fakestoreapi y devuelve un Observable de tipo IProduct[]
  getProducts():Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.urlBase);
  }

  // Obtiene un producto por su id de la API fakestoreapi y devuelve un Observable de tipo IProduct
  getProduct(id: number):Observable<IProduct> {
    return this._http.get<IProduct>(`${this.urlBase}/${id}`);
  }

  // Obtiene la lista de productos de la API fakestoreapi por categoria y devuelve un Observable de tipo IProduct[]
  getProductsByCategory(category: string):Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`${this.urlBase}/category/${category}`);
  }

  // Obtiene la lista de categorias de la API fakestoreapi y devuelve un Observable de tipo string[]
  getCategories():Observable<string[]> {
    return this._http.get<string[]>(`${this.urlBase}/categories`);
  }

  //elimina un producto por su id de la API fakestoreapi y devuelve un Observable de tipo IProduct
  deleteProduct(id: number):Observable<IProduct> {
    return this._http.delete<IProduct>(`${this.urlBase}/${id}`);
  }

  //update un producto por su id de la API fakestoreapi y devuelve un Observable de tipo IProduct
  updateProduct(id: number, product: IProduct):Observable<IProduct> {
    return this._http.put<IProduct>(`${this.urlBase}/${id}`, product);
  }


}
